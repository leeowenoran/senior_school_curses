/* 生物学 · 必修1 分子与细胞 · 第5章 · 课时：第2节 细胞的能量"通货"——ATP */
(function () {
  var v = gzGetVolume('biology', 'bx1');
  if (!v) return;
  v.points.push({
    id: 'bx1-u15',
    name: '第2节 细胞的能量"通货"——ATP',
    chapter: '必修1 分子与细胞 · 第5章 细胞的能量供应和利用',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、ATP 是细胞生命活动的直接能源物质' },
      { type: 'paragraph', text: '糖类、脂肪中储存着大量能量，但这些能量不能直接被细胞利用。细胞需要一种能随时支取、即时支付的能量货币，这就是<strong>ATP</strong>。它像钱包里的零钱，随用随取，是细胞生命活动的直接能源物质。' },
      { type: 'list', items: ['主要能源物质：糖类（如葡萄糖）', '储能物质：脂肪、糖原', '直接能源物质：ATP（能量通货）'] },
      { type: 'paragraph', text: 'ATP 的中文名称是<strong>三磷酸腺苷</strong>。它的结构可以比作一段带三个磷酸的腺苷，远离腺苷的那个高能磷酸键很不稳定，容易断裂并放出能量供细胞使用。' },
      { type: 'keypoint', label: '重点·ATP 的结构', text: '<strong>ATP 的结构简式为 A—P～P～P。</strong>其中 A 代表腺苷（腺嘌呤加核糖），P 代表磷酸基团，— 代表普通磷酸键，～ 代表高能磷酸键。ATP 分子含两个高能磷酸键，远离 A 的那个最容易断裂并释放大量能量。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图1 ATP 的结构（A—P～P～P）</text><rect x="120" y="110" width="120" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="180" y="135" font-size="13" fill="#2e3a22" text-anchor="middle">腺苷 A</text><text x="180" y="160" font-size="12" fill="#2e3a22" text-anchor="middle">腺嘌呤+核糖</text><rect x="250" y="110" width="80" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="290" y="150" font-size="13" fill="#2e3a22" text-anchor="middle">磷酸 P</text><rect x="340" y="110" width="80" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="380" y="150" font-size="13" fill="#2e3a22" text-anchor="middle">磷酸 P</text><rect x="430" y="110" width="80" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="470" y="150" font-size="13" fill="#2e3a22" text-anchor="middle">磷酸 P</text><text x="295" y="100" font-size="12" fill="#5aa832" text-anchor="middle" font-weight="bold">高能磷酸键</text><text x="415" y="100" font-size="12" fill="#5aa832" text-anchor="middle" font-weight="bold">高能磷酸键</text><text x="340" y="230" font-size="13" fill="#2e3a22" text-anchor="middle">A 代表腺苷，P 代表磷酸基团，～ 代表高能磷酸键（远离 A 的易断裂）。</text><text x="340" y="270" font-size="13" fill="#2e3a22" text-anchor="middle">ATP 全称三磷酸腺苷，是细胞生命活动的直接能源物质。</text></svg>', caption: '图1　ATP 为 A—P～P～P，远离 A 的高能磷酸键易断裂放能。' },
      { type: 'heading', text: '二、ATP 的结构简式 A—P～P～P' },
      { type: 'paragraph', text: '在简式中，A 是腺苷，由腺嘌呤和核糖结合而成；P 是磷酸基团。两个高能磷酸键（～）储存着大量能量，其中<strong>远离 A 的那个高能磷酸键最易断裂</strong>，断裂时释放约 30.54 kJ/mol 的能量。' },
      { type: 'paragraph', text: 'ATP 与 ADP 可以相互转化：ATP 水解时，远离 A 的高能磷酸键断裂，生成 ADP（二磷酸腺苷）和 Pi（磷酸），并释放能量；这正是细胞各项生命活动直接利用的能量来源。' },
      { type: 'example', label: '例题·断裂放能', text: 'ATP 水解的表示是 ATP → ADP + Pi + 能量。问断裂的是哪个键、释放的能量用于什么？<br>答：断裂的是远离腺苷 A 的那个高能磷酸键，释放的能量直接用于肌肉收缩、主动运输、生物电发放、物质合成等生命活动，而不是以热能形式大量散失。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图2 ATP 与 ADP 的相互转化</text><rect x="90" y="120" width="150" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="165" y="160" font-size="15" fill="#2e3a22" text-anchor="middle" font-weight="bold">ATP</text><rect x="440" y="120" width="150" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="515" y="150" font-size="14" fill="#2e3a22" text-anchor="middle">ADP + Pi</text><text x="515" y="172" font-size="12" fill="#5aa832" text-anchor="middle" font-weight="bold">+ 能量</text><polygon points="240,150 280,138 280,162" fill="#3f7d1e"/><text x="300" y="130" font-size="12" fill="#2e3a22" text-anchor="middle">水解酶</text><polygon points="440,150 400,138 400,162" fill="#3f7d1e"/><text x="385" y="180" font-size="12" fill="#2e3a22" text-anchor="middle">合成酶</text><text x="340" y="245" font-size="13" fill="#2e3a22" text-anchor="middle">ATP 水解供能；ADP 与 Pi 吸收能量再合成 ATP，二者双向进行。</text></svg>', caption: '图2　ATP 水解为 ADP+Pi 放能，ADP+Pi 吸能再合成 ATP。' },
      { type: 'heading', text: '三、ATP 与 ADP 的相互转化' },
      { type: 'paragraph', text: '细胞内 ATP 含量很少，但转化十分迅速。反应式为：ATP ⇌ ADP + Pi + 能量。注意这个转化在化学上<strong>不是可逆反应</strong>：水解用水解酶、合成用合成酶，且能量来源和去向都不同。' },
      { type: 'paragraph', text: '合成 ATP 所需能量，对动物、真菌、多数细菌来自<strong>细胞呼吸</strong>；对绿色植物，还可来自<strong>光合作用</strong>（叶绿体捕获光能）。ADP 与 Pi 可反复利用，使能量得以持续供应。' },
      { type: 'list', items: ['水解方向：ATP → ADP + Pi + 能量，由水解酶催化，能量用于吸能反应', '合成方向：ADP + Pi + 能量 → ATP，由合成酶催化，能量来自呼吸或光合', '酶不同、能量来源去路不同，故不是化学意义上的可逆反应'] },
      { type: 'warn', label: '易错·转化不是可逆反应', text: 'ATP 与 ADP 的相互转化，<strong>物质上可逆、但反应条件和能量变化不可逆</strong>。水解与合成由不同酶催化，能量来源（呼吸、光合）和用途（供能）不同，因此不能用可逆反应的等号简单表示，教材用⇌仅为示意。' },
      { type: 'table', headers: ['对比项', 'ATP 水解', 'ATP 合成'], rows: [['酶', '水解酶', '合成酶'], ['能量', '释放，供生命活动', '来自呼吸或光合'], ['场所', '需能部位', '细胞质基质、线粒体、叶绿体']] },
      { type: 'example', label: '例题·能量来源', text: '绿色植物叶肉细胞在光照下，合成 ATP 的能量来自哪里？<br>答：来自两方面——细胞质基质和线粒体通过细胞呼吸分解有机物释放能量；叶绿体通过光合作用捕获光能将 ADP 和 Pi 合成 ATP。所以在光照下，植物合成 ATP 的能量既来自呼吸也来自光合。' },
      { type: 'tip', label: '提示·吸能反应与放能反应', text: '细胞中<strong>放能反应（如细胞呼吸）释放的能量用于合成 ATP</strong>，<strong>吸能反应（如物质合成、肌肉收缩）消耗 ATP</strong>。ATP 就像能量的中转站，把放能反应与吸能反应联系起来，使能量得到高效利用。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图3 吸能反应与放能反应和 ATP 的关系</text><rect x="80" y="110" width="180" height="80" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="170" y="140" font-size="13" fill="#2e3a22" text-anchor="middle">放能反应</text><text x="170" y="165" font-size="12" fill="#2e3a22" text-anchor="middle">如细胞呼吸</text><rect x="420" y="110" width="180" height="80" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="510" y="140" font-size="13" fill="#2e3a22" text-anchor="middle">吸能反应</text><text x="510" y="165" font-size="12" fill="#2e3a22" text-anchor="middle">如物质合成</text><rect x="290" y="250" width="100" height="50" rx="8" fill="#5aa832" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="282" font-size="15" fill="#ffffff" text-anchor="middle" font-weight="bold">ATP</text><polygon points="260,150 288,138 288,162" fill="#3f7d1e"/><polygon points="420,150 392,138 392,162" fill="#3f7d1e"/><text x="340" y="90" font-size="12" fill="#2e3a22" text-anchor="middle">放能反应推动 ATP 合成，吸能反应消耗 ATP。</text></svg>', caption: '图3　放能反应合成 ATP，吸能反应消耗 ATP，ATP 是能量中转站。' },
      { type: 'heading', text: '四、ATP 的利用' },
      { type: 'paragraph', text: 'ATP 水解释放的能量，直接用于主动运输、生物发电发光、肌肉收缩、物质合成、大脑思考等生命活动。可以说，几乎所有需要能量的生命活动，都直接由 ATP 提供能量，因此 ATP 被称为细胞的能量通货。' }
    ],
    exercises: [
      { type: 'choice', question: 'ATP 的结构简式是？', options: ['A—P—P—P', 'A—P～P～P', 'A—P—P～P', 'P～P～P～A'], answer: 'A—P～P～P', explanation: 'ATP 的中文名称是三磷酸腺苷，其结构简式为 A—P～P～P。其中 A 代表腺苷，P 代表磷酸基团，— 代表普通磷酸键，～ 代表高能磷酸键。ATP 分子中含有两个高能磷酸键，位于远离腺苷 A 的那个高能磷酸键最容易断裂并释放大量能量。因此选 A—P～P～P。' },
      { type: 'choice', question: '关于 ATP 与 ADP 的相互转化，正确的是？', options: ['是完全可逆反应', '物质可逆但酶和能量来源不同，不是化学上的可逆反应', '只在光合作用中发生', 'ADP 不能变回 ATP'], answer: '物质可逆但酶和能量来源不同，不是化学上的可逆反应', explanation: 'ATP 水解为 ADP 和 Pi 由水解酶催化并释放能量，用于吸能反应；ADP 与 Pi 合成 ATP 由合成酶催化，能量来自呼吸作用（或光合作用）。二者反应条件（酶）和能量变化不同，因此不属于化学意义上的可逆反应，但物质上腺苷和磷酸可循环使用。所以选该描述。' },
      { type: 'choice', question: '关于 ATP 的作用，正确的说法是？', options: ['ATP 是主要能源物质', 'ATP 是直接能源物质', 'ATP 是储能物质', 'ATP 就是能量本身'], answer: 'ATP 是直接能源物质', explanation: '糖类是细胞生命活动的主要能源物质，脂肪是良好的储能物质；而 ATP 是细胞生命活动的直接能源物质，各项生命活动所需能量大多由 ATP 水解直接提供。ATP 不是能量本身，而是能量的载体和通货。因此正确说法是 ATP 是直接能源物质。' },
      { type: 'fill', question: 'ATP 水解时，远离腺苷 A 的___键断裂，释放出的能量用于各项生命活动。', answer: '高能磷酸', explanation: 'ATP 分子中远离腺苷 A 的那个高能磷酸键（～）不稳定，在 ATP 水解酶作用下容易断裂，生成 ADP 和 Pi，同时释放大量能量，这些能量直接用于肌肉收缩、物质主动运输、生物电等生命活动。因此填高能磷酸键，简答可写高能磷酸。' },
      { type: 'fill', question: '动物、植物和微生物细胞内，ADP 转化为 ATP 时所需的能量主要来自___作用释放的能量（植物还可来自光合作用）。', answer: '呼吸', explanation: '在活细胞中，ADP 与 Pi 合成 ATP 所需的能量，对绝大多数生物（包括动物、植物、真菌、多数细菌）主要来自细胞呼吸分解有机物释放的能量；对绿色植物，此外还能来自叶绿体中的光合作用捕获的光能。因此填呼吸，植物另有光合作为补充来源。' }
    ]
  });
})();
