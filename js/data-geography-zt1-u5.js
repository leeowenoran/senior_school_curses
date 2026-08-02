/* 地理 · 高三总复习 · 专题一 自然地理 · 第2章 宇宙中的地球 · 第3节 地方时与区时 */
(function () {
  var v = gzGetVolume('geography', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u5',
    name: '第3节 地方时与区时',
    chapter: '高三地理复习 · 专题一 自然地理 · 第2章 宇宙中的地球',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、地方时与经度关系' },
      { type: 'paragraph', text: '由于地球自西向东自转，东边的地点比西边先看到日出，时间更早。经度每隔 15°，地方时相差 1 小时；每隔 1°，相差 4 分钟。东边时刻数值大（更早），西边数值小。地方时是因经度不同而不同的时刻，同一经线上地方时相同。' },
      { type: 'list', items: ['东早西晚：东边地点时刻更早、数值更大', '经度差 15° = 时间差 1 小时', '经度差 1° = 时间差 4 分钟', '东加西减：求东边时间用加法，西边用减法'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">经度差与地方时差</text><circle cx="340" cy="185" r="120" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><line x1="340" y1="65" x2="340" y2="305" stroke="#1f3a4d" stroke-width="1.5"/><line x1="220" y1="185" x2="460" y2="185" stroke="#1f3a4d" stroke-width="1.5"/><circle cx="340" cy="65" r="6" fill="#c1583b"/><text x="350" y="60" font-size="13" fill="#c1583b" font-weight="bold">12时（直射经线）</text><circle cx="460" cy="185" r="6" fill="#2a6fa8"/><text x="470" y="180" font-size="13" fill="#2a6fa8" font-weight="bold">东边 +1h/15°</text><circle cx="220" cy="185" r="6" fill="#2a6fa8"/><text x="120" y="180" font-size="13" fill="#2a6fa8" font-weight="bold">西边 −1h/15°</text><text x="340" y="325" font-size="12" fill="#1f3a4d" text-anchor="middle">每向东 15° 地方时加 1 小时，向西则减 1 小时。</text></svg>', caption: '图1　地球自西向东转，东边先见日出，经度每差 15° 地方时差 1 小时。' },
      { type: 'keypoint', label: '重点·地方时计算步骤', text: '<strong>「求经度差 → 换算时间差 → 东加西减」三步走。</strong>先算两点经度差（同东/同西相减，一东一西相加）；再按 15°=1h、1°=4min 折算时间差；最后所求地点在已知东侧则加、在西侧则减。牢牢记住「东加西减」，计算就不会乱。' },
      { type: 'heading', text: '二、时区与区时' },
      { type: 'paragraph', text: '为统一时间，全球按经度每 15° 划分一个时区，共 24 个时区。每个时区中央经线的地方时即该区区时。零时区以 0° 经线为中央经线，向东向西各 7.5°。相邻时区相差 1 小时。我国统一使用东八区的区时，即北京时间（120°E 地方时）。' },
      { type: 'list', items: ['全球 24 个时区，每区跨经度 15°', '中央经线 = 时区数 × 15°（东时区为正）', '某经度所在时区 = 经度 ÷ 15°，四舍五入取整', '区时 = 该时区中央经线的地方时'] },
      { type: 'table', headers: ['时区', '中央经线', '经度范围', '区时示例'], rows: [['零时区', '0°', '7.5°W–7.5°E', '与世界时相同'], ['东八区', '120°E', '112.5°E–127.5°E', '北京时间'], ['西五区', '75°W', '67.5°W–82.5°W', '美国东部标准时'], ['东九区', '135°E', '127.5°E–142.5°E', '东京时间']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">时区划分（简化俯视）</text><circle cx="340" cy="175" r="120" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><line x1="220" y1="175" x2="460" y2="175" stroke="#c1583b" stroke-width="2"/><text x="340" y="168" font-size="12" fill="#c1583b" font-weight="bold">0°（零时区中经）</text><line x1="400" y1="175" x2="400" y2="95" stroke="#2a6fa8" stroke-width="1.5"/><line x1="400" y1="175" x2="400" y2="255" stroke="#2a6fa8" stroke-width="1.5"/><text x="408" y="120" font-size="12" fill="#1f3a4d">东1区</text><text x="408" y="240" font-size="12" fill="#1f3a4d">东2区</text><line x1="280" y1="175" x2="280" y2="95" stroke="#2a6fa8" stroke-width="1.5"/><line x1="280" y1="175" x2="280" y2="255" stroke="#2a6fa8" stroke-width="1.5"/><text x="200" y="120" font-size="12" fill="#1f3a4d">西1区</text><text x="200" y="240" font-size="12" fill="#1f3a4d">西2区</text><text x="340" y="305" font-size="12" fill="#1f3a4d" text-anchor="middle">每 15° 一个时区，相邻时区区时相差 1 小时。</text></svg>', caption: '图2　全球划分为 24 个时区，每个时区跨 15° 经度，中央经线地方时为区时。' },
      { type: 'example', label: '例题·区时换算', text: '题目：当北京（东八区）为 8 月 1 日 12 时时，伦敦（零时区）是何时？<br>解析：北京在东八区、伦敦在零时区，北京在伦敦东侧，区时早 8 个小时。所求伦敦时间 = 12 时 − 8 小时 = 4 时，日期不变，即 8 月 1 日 4 时。区时换算同样遵循「东加西减」，先算时区差再加减即可。' },
      { type: 'heading', text: '三、日界线与日期变更' },
      { type: 'paragraph', text: '地球上有一条人为规定的国际日界线，大致沿 180° 经线，向东跨过它日期减一天，向西跨过加一天。此外还有一条自然日界线（0 时或 24 时经线），向东跨过它日期加一天。两条日界线把全球分为「新的一天」和「旧的一天」，其范围大小随地球自转而变化。' },
      { type: 'warn', label: '易错·两条日界线', text: '① 国际日界线（约 180°）是固定的人为线，向东过线日期减 1 天；② 自然日界线是地方时 0 时的经线，位置每天都在变，向东过线日期加 1 天；③ 做题时先找 0 时经线，再结合 180° 线确定新一天范围。把「人为线减、自然线加」记反是最常见错误。' },
      { type: 'tip', label: '提示·新一天范围估算', text: '新的一天（今天）的范围是从 0 时经线向东到 180° 经线。若 0 时经线在 90°E，则今天占 90°E→180°，跨 90 个经度，约占全球的 1/4；若 0 时经线在 0°，今天占一半。掌握「今天 = 0 时经线向东至 180°」可快速求比例。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">两条日界线与日期范围</text><circle cx="340" cy="175" r="120" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><line x1="460" y1="55" x2="460" y2="295" stroke="#c1583b" stroke-width="2.5"/><text x="465" y="70" font-size="12" fill="#c1583b" font-weight="bold">180°（人为日界线）</text><line x1="280" y1="55" x2="280" y2="295" stroke="#2a6fa8" stroke-width="2.5"/><text x="150" y="70" font-size="12" fill="#2a6fa8" font-weight="bold">0时经线（自然日界线）</text><path d="M280 175 A120 120 0 0 1 460 175" fill="#cfe4f5" opacity="0.7"/><text x="370" y="120" font-size="12" fill="#1f3a4d" font-weight="bold">新的一天（今天）</text><text x="340" y="305" font-size="12" fill="#1f3a4d" text-anchor="middle">今天范围 = 0 时经线向东到 180°；向东过 180° 减一天。</text></svg>', caption: '图3　自然日界线（0时经线）与人为日界线（180°）之间为「今天」，其余为「昨天」。' },
      { type: 'heading', text: '四、北京时间与实际应用' },
      { type: 'paragraph', text: '我国东西跨五个时区，但全国统一采用东八区区时（120°E 地方时）作为标准时间，称为北京时间。需要注意的是，北京时间并非北京（116°E）的地方时，而是 120°E 的地方时。在民航、铁路、广播中统一用北京时间，便于全国协调；而在计算某地地方时时，仍需用当地经度推算。' },
      { type: 'list', items: ['北京时间 = 东八区区时 = 120°E 地方时', '北京所在地（116°E）地方时比北京时间晚约 16 分钟', '全国统一使用北京时间，便于社会协调', '地方时计算仍须依当地经度，不能一概用 120°E'] },
      { type: 'example', label: '例题·北京时间含义', text: '题目：下列说法正确的是？<br>解析：北京时间是东八区的区时，即 120°E 的地方时，不是北京（约 116°E）的地方时，北京地方时比北京时间晚约 16 分钟。我国虽跨多个时区，但统一采用东八区时间。因此正确说法是「北京时间就是 120°E 的地方时」。审题要分清「北京时间」与「北京地方时」两个概念。' }
    ],
    exercises: [
      { type: 'choice', question: '经度每相差 15°，地方时相差？', options: ['4 分钟', '1 小时', '2 小时', '15 分钟'], answer: '1 小时', explanation: '地球自转角速度约 15°/小时，因此经度每相差 15°，地方时相差 1 小时；每相差 1° 相差 4 分钟。东边地点时刻更早，计算时「东加西减」。这是地方时换算的核心比例。' },
      { type: 'choice', question: '北京时间是指？', options: ['北京（116°E）的地方时', '东八区的区时即 120°E 地方时', '零时区的地方时', '180° 经线的地方时'], answer: '东八区的区时即 120°E 地方时', explanation: '北京时间是我国统一使用的标准时间，采用东八区区时，即中央经线 120°E 的地方时，并非北京所在地 116°E 的地方时（后者约晚 16 分钟）。全国虽跨多个时区，但统一用东八区时间以便协调。' },
      { type: 'choice', question: '向东跨越国际日界线（约 180°），日期应？', options: ['加一天', '减一天', '不变', '加两小时'], answer: '减一天', explanation: '国际日界线大致沿 180° 经线，为人为规定的日期变更线。自东向西跨越（从西半球进入东半球）日期加一天；自西向东跨越（从东半球进入西半球）日期减一天。记忆为「向东过线减一天、向西过线加一天」。' },
      { type: 'fill', question: '某经度所在时区的求法是：时区数 = 经度 ÷ 15° 后___（运算），中央经线度数 = 时区数 ×___°。', answer: '四舍五入取整；15', explanation: '求某经度所在时区，先用经度除以 15°，结果四舍五入取整数得到时区数（东经属东时区、西经属西时区）；该时区的中央经线度数等于时区数乘以 15°。例如 116°E ÷ 15 ≈ 7.7，四舍五入为东八区，中央经线 120°E。' },
      { type: 'fill', question: '新的一天（今天）的范围是从___经线向东到___经线。', answer: '0时；180°', explanation: '全球有两条日界线：自然日界线是地方时 0 时（或 24 时）的经线，位置每天变化；人为日界线是约 180° 经线。今天的范围即从 0 时经线向东一直到 180° 经线之间的区域，其余为昨天。向东跨过 0 时线日期加一天，向东跨过 180° 线日期减一天。' }
    ]
  });
})();
