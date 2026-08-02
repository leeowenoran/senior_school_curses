/* 地理 · 必修 第二册 · 第1章 · 课时：第3节 人口容量 */
(function () {
  var v = gzGetVolume('geography', 'bx2');
  if (!v) return;
  v.points.push({
    id: 'bx2-u3',
    name: '第3节 人口容量',
    chapter: '必修 第二册 · 第1章 人口',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、世界人口是怎样增长的' },
      { type: 'paragraph', text: '人类出现以来的漫长岁月里，人口增长一直很慢，因为那时生产力低、死亡率高。到了农业社会稍快一点，但真正起飞是在工业革命以后：医学进步、粮食增产使死亡率大幅下降，人口开始迅速膨胀。进入 20 世纪，世界人口更是加速增长，直到近几十年增速才慢慢放缓。' },
      { type: 'list', items: ['农业革命前：增长极慢，长期在低水平徘徊', '农业革命后：有所加快，但仍受灾害和疾病限制', '工业革命后：死亡率下降，人口快速增长', '现代：增速开始放缓，部分国家甚至负增长'] },
      { type: 'keypoint', label: '重点·人口增长的总趋势', text: '<strong>世界人口总趋势是不断增长，但增长速度随时间变化。</strong>工业革命前慢、工业革命后快、现代增速放缓。判断一段时期人口增减，看「出生率减死亡率」得到的自然增长率：自然增长率大于零则人口增加，小于零则人口减少。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">世界人口增长曲线（呈「J」形）</text><polyline points="60,300 160,295 260,280 360,240 460,170 560,95 620,60" fill="none" stroke="#2a6fa8" stroke-width="3"/><line x1="60" y1="300" x2="60" y2="50" stroke="#1f3a4d" stroke-width="1.5"/><line x1="60" y1="300" x2="630" y2="300" stroke="#1f3a4d" stroke-width="1.5"/><text x="40" y="60" font-size="12" fill="#1f3a4d" text-anchor="middle">人口</text><text x="630" y="320" font-size="12" fill="#1f3a4d" text-anchor="end">时间</text><text x="160" y="290" font-size="11" fill="#1f3a4d" text-anchor="middle">农业前很慢</text><text x="360" y="225" font-size="11" fill="#1f3a4d" text-anchor="middle">工业后变快</text><text x="560" y="80" font-size="11" fill="#1f3a4d" text-anchor="middle">现代陡升</text><text x="340" y="325" font-size="12" fill="#1f3a4d" text-anchor="middle">曲线先平后陡，说明人口增长越来越快，呈「J」形。</text></svg>', caption: '图1　世界人口长期缓慢增长，工业革命后急剧加速，呈「J」形曲线。' },
      { type: 'heading', text: '二、人口增长模式（人口转变）' },
      { type: 'paragraph', text: '人口学界把人口增长过程分成几种模式，也叫人口转变类型。核心看三个指标：出生率、死亡率、自然增长率（自然增长率等于出生率减死亡率）。随着社会发展，人口会从「高出生、高死亡、低增长」逐步走向「低出生、低死亡、低增长」。' },
      { type: 'list', items: ['原始型：高出生、高死亡、低增长（生产力极低时）', '传统型：高出生、低死亡、高增长（死亡率下降后）', '现代型：低出生、低死亡、低增长（发达国常见）'] },
      { type: 'table', headers: ['模式类型', '出生率', '死亡率', '自然增长率'], rows: [['原始型', '高', '高', '低'], ['传统型', '高', '低', '高'], ['现代型', '低', '低', '低']] },
      { type: 'keypoint', label: '重点·三率关系', text: '<strong>自然增长率 = 出生率 − 死亡率。</strong>只要出生率高于死亡率，人口就在增加；二者越接近，增长越慢。发达国家多已进入现代型（低低低），自然增长率很低甚至为负；发展中国家多在传统型向现代型过渡阶段。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">三种人口增长模式对比</text><rect x="50" y="70" width="180" height="230" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="140" y="100" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">原始型</text><text x="140" y="140" font-size="12" fill="#1f3a4d" text-anchor="middle">高出生</text><text x="140" y="168" font-size="12" fill="#1f3a4d" text-anchor="middle">高死亡</text><text x="140" y="196" font-size="12" fill="#1f3a4d" text-anchor="middle">低增长</text><rect x="250" y="70" width="180" height="230" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="100" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">传统型</text><text x="340" y="140" font-size="12" fill="#1f3a4d" text-anchor="middle">高出生</text><text x="340" y="168" font-size="12" fill="#1f3a4d" text-anchor="middle">低死亡</text><text x="340" y="196" font-size="12" fill="#1f3a4d" text-anchor="middle">高增长</text><rect x="450" y="70" width="180" height="230" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="540" y="100" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">现代型</text><text x="540" y="140" font-size="12" fill="#1f3a4d" text-anchor="middle">低出生</text><text x="540" y="168" font-size="12" fill="#1f3a4d" text-anchor="middle">低死亡</text><text x="540" y="196" font-size="12" fill="#1f3a4d" text-anchor="middle">低增长</text><text x="340" y="325" font-size="12" fill="#1f3a4d" text-anchor="middle">发展顺序是原始型 → 传统型 → 现代型，死亡率先降、出生率后降。</text></svg>', caption: '图2　三种人口增长模式在出生率、死亡率和自然增长率上各不相同。' },
      { type: 'heading', text: '三、资源环境承载力' },
      { type: 'paragraph', text: '地球的资源和环境不是无限的。资源环境承载力，指的是在维持相对稳定的前提下，一个地区的环境和自然资源能够持续供养的最大人口数量。它像一口锅能煮多少饭，超过了就会「烧糊」——资源枯竭、污染加重、生态失衡。所以它强调「最大、极限」的含义。' },
      { type: 'keypoint', label: '重点·资源环境承载力', text: '<strong>资源环境承载力是「能供养的最大人口数」，强调的是上限和极限。</strong>它取决于当地可获得的资源总量、环境自净能力。一旦人口超过这个上限，生态系统就会被破坏。注意它讨论的是「最多能养活多少人」，而不是「最舒服地养活多少人」。' },
      { type: 'heading', text: '四、人口合理容量与环境人口容量' },
      { type: 'paragraph', text: '在承载力概念上，还常提到两个相近但不同的词。环境人口容量，指一个国家或地区所能容纳的最大人口数，偏向极限；人口合理容量，指按照健康文明的生活水平，最适宜抚养的人口数量，偏向理想。合理容量通常小于环境人口容量，是更值得追求的目标。' },
      { type: 'warn', label: '易错·两个容量的区别', text: '① 环境人口容量是「最多能容纳多少」，偏极限；人口合理容量是「最适宜多少」，偏理想，二者不是一回事；② 合理容量一般小于环境人口容量，不要把二者画等号；③ 资源环境承载力强调自然基础，会随资源、科技变化而变动，不是固定不变的数字。' },
      { type: 'tip', label: '提示·一句话区分', text: '记成「环境人口容量看上限、人口合理容量看舒服」。考试若问「最适宜的人口规模」，答人口合理容量；若问「最多能养活多少人」，答环境人口容量或资源环境承载力。抓住「最大」和「最适宜」两个关键词就不会混淆。' },
      { type: 'heading', text: '五、影响人口容量的因素' },
      { type: 'paragraph', text: '人口容量不是凭空定的，主要受几个因素制约。资源是首要因素，资源越丰富容量越大；科技水平提高能开发更多资源、提高效率，也会扩大容量；地区的对外开放程度高，可以调入外部资源，容量随之提高；而消费水平越高，每人消耗越多，反而会使容量变小。' },
      { type: 'list', items: ['资源：越多越丰富，人口容量越大（首要因素）', '科技：水平越高，开发利用能力越强，容量越大', '开放程度：越开放、越能调入外部资源，容量越大', '消费水平：消费越高，人均消耗越多，容量越小'] },
      { type: 'table', headers: ['影响因素', '与人口容量的关系'], rows: [['资源丰歉', '资源越多，容量越大'], ['科技水平', '科技越高，容量越大'], ['对外开放', '越开放，容量越大'], ['消费水平', '消费越高，容量越小']] },
      { type: 'example', label: '例题·消费水平的影响', text: '题目：在其他条件都相同的情况下，如果一个地区人们的生活消费水平明显提高，该地人口容量会怎样变化？<br>解析：人口容量是指在资源环境能承受范围内可供养的人口数。消费水平提高，意味着每个人消耗的资源变多，同样多的资源能养活的人就变少了，所以人口容量会减小。这正说明消费水平与人口容量呈反向关系，是常考的易错点。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">影响人口容量的四大因素</text><rect x="50" y="70" width="140" height="220" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="120" y="150" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">资源</text><text x="120" y="178" font-size="12" fill="#1f3a4d" text-anchor="middle">越多越大</text><rect x="210" y="70" width="140" height="220" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="280" y="150" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">科技</text><text x="280" y="178" font-size="12" fill="#1f3a4d" text-anchor="middle">越高越大</text><rect x="370" y="70" width="140" height="220" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="440" y="150" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">开放</text><text x="440" y="178" font-size="12" fill="#1f3a4d" text-anchor="middle">越开越大</text><rect x="530" y="70" width="140" height="220" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="600" y="150" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">消费</text><text x="600" y="178" font-size="12" fill="#1f3a4d" text-anchor="middle">越高越小</text><text x="340" y="325" font-size="12" fill="#1f3a4d" text-anchor="middle">前三者与容量正相关，消费水平与容量负相关，资源是首要因素。</text></svg>', caption: '图3　资源、科技、开放程度与人口容量正相关，消费水平与之负相关。' }
    ],
    exercises: [
      { type: 'choice', question: '自然增长率等于下列哪二者之差？', options: ['出生率减死亡率', '死亡率减出生率', '迁入率减迁出率', '出生率加死亡率'], answer: '出生率减死亡率', explanation: '人口自然增长是由出生和死亡两方面决定的，自然增长率的定义就是出生率减去死亡率。当出生率高于死亡率时，自然增长率为正，人口增加；反之则人口减少。迁入率和迁出率影响的是机械增长，不是自然增长。所以正确选项是出生率减死亡率。' },
      { type: 'choice', question: '某地区资源和自然环境能持续供养的最大人口数量，称为？', options: ['人口合理容量', '资源环境承载力', '城市人口规模', '人口密度'], answer: '资源环境承载力', explanation: '资源环境承载力指在一定时期内、维持相对稳定的前提下，一个地区的资源和环境能持续供养的最大人口数量，强调上限和极限。人口合理容量是「最适宜」的人口数，小于承载力；人口密度是单位面积人数，与概念不同。所以能供养的最大人口数叫资源环境承载力。' },
      { type: 'choice', question: '在其他条件相同时，一个地区人们的消费水平越高，其人口容量会？', options: ['越大', '越小', '不变', '先大后小'], answer: '越小', explanation: '人口容量是资源和环境下能供养的人口数。消费水平越高，每个人消耗的水、食物、能源就越多，同样多的资源能养活的人就越少，所以人口容量会减小。因此消费水平与人口容量呈反向关系，这是常考易错点。正确选项是越小。' },
      { type: 'fill', question: '按照健康文明的生活标准，一个国家或地区最适宜抚养的人口数量，称为___。', answer: '人口合理容量', explanation: '人口合理容量是指在有效和持续利用资源、保护环境的条件下，按健康文明生活水平所能供养的最适宜人口数，它强调的是「最适宜」而非「最多」。这个概念比环境人口容量更理想化，通常数值也更小，是可持续发展的追求目标。' },
      { type: 'fill', question: '影响人口容量的因素中，___是首要因素，而___与人口容量呈负相关关系。', answer: '资源；消费水平', explanation: '在影响人口容量的诸多因素里，资源丰歉是首要因素，资源越丰富能供养的人就越多；科技水平、对外开放程度与容量正相关；而消费水平越高、人均消耗越多，同样资源能养活的人越少，因此消费水平与人口容量呈负相关。答题要把首要因素和负相关因素都答准。' }
    ]
  });
})();
