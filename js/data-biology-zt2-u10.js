/* 生物学 · 高三复习 · 遗传与进化 · 第3章 · 课时：第3节 DNA的复制 */
(function () {
  var v = gzGetVolume('biology', 'zt2');
  if (!v) return;
  v.points.push({
    id: 'zt2-u10',
    name: '第3节 DNA的复制',
    chapter: '遗传与进化 · 第3章 基因的本质',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、DNA 复制的概念与时期' },
      { type: 'paragraph', text: 'DNA 复制是以亲代 DNA 为模板合成子代 DNA 的过程。对真核生物而言，复制发生在<strong>有丝分裂的间期和减数第一次分裂前的间期</strong>。复制的意义是保证遗传信息在亲子代之间稳定传递，让每个子细胞或子代个体都得到一份与亲代相同的遗传蓝图。' },
      { type: 'list', items: [
        '时间：有丝分裂间期、减数第一次分裂前的间期',
        '场所：主要是细胞核，线粒体和叶绿体中也能进行',
        '模板：亲代 DNA 的两条链分别作为模板',
        '原料：四种游离的脱氧核苷酸（dATP、dTTP、dGTP、dCTP）',
        '酶：解旋酶、DNA 聚合酶等；能量：ATP'
      ] },
      { type: 'heading', text: '二、DNA 复制的过程' },
      { type: 'paragraph', text: '复制分三步：第一步，解旋酶把双链之间的氢键打开，DNA 双螺旋解开成两条单链；第二步，以每条母链为模板，在 DNA 聚合酶作用下，按照碱基互补配对（A—T、G—C）合成新的子链；第三步，新合成的子链与对应母链盘绕成新的双螺旋。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图1 DNA复制过程</text><rect x="40" y="80" width="260" height="50" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="170" y="110" font-size="13" fill="#2e3a22" text-anchor="middle">亲代DNA（双链）</text><polygon points="300,105 350,97 350,123" fill="#3f7d1e"/><rect x="380" y="80" width="260" height="50" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="510" y="108" font-size="13" fill="#2e3a22" text-anchor="middle">解旋酶打开氢键</text><polygon points="300,160 350,152 350,178" fill="#3f7d1e"/><rect x="200" y="180" width="280" height="56" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="208" font-size="13" fill="#2e3a22" text-anchor="middle">以母链为模板合成子链</text><rect x="200" y="250" width="280" height="50" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="280" font-size="13" fill="#5aa832" text-anchor="middle">形成两个相同DNA</text></svg>', caption: '图1　解旋酶打开双链，以母链为模板合成子链，形成两个相同 DNA。' },
      { type: 'keypoint', label: '核心概念·半保留复制', text: '<strong>DNA 复制的方式是半保留复制：每个子代 DNA 分子中，都保留了一条来自亲代的母链，另一条则是新合成的子链。</strong>这保证了复制的准确遗传。半保留复制已被 ¹⁵N 同位素标记实验证实。' },
      { type: 'heading', text: '三、半保留复制的含义与特点' },
      { type: 'paragraph', text: '半保留复制有两个鲜明特点：一是「边解旋边复制」，解旋和子链合成同步进行，不是等全部解开再合成；二是「半保留」，即新旧链各占一半。这样，复制前后 DNA 的碱基序列保持一致，遗传信息得以忠实传递。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图2 半保留复制</text><rect x="60" y="90" width="240" height="50" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="180" y="120" font-size="13" fill="#2e3a22" text-anchor="middle">亲代（母链①+②）</text><polygon points="300,115 350,107 350,133" fill="#3f7d1e"/><rect x="380" y="80" width="240" height="50" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="500" y="110" font-size="13" fill="#2e3a22" text-anchor="middle">子代1（母①+新③）</text><rect x="380" y="170" width="240" height="50" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="500" y="200" font-size="13" fill="#2e3a22" text-anchor="middle">子代2（母②+新④）</text><polygon points="340,140 340,165 330,165" fill="#3f7d1e"/><text x="340" y="250" font-size="13" fill="#5aa832" text-anchor="middle">每个子代各保留一条母链</text></svg>', caption: '图2　半保留复制：每个子代 DNA 保留一条母链、合成一条新链。' },
      { type: 'list', items: [
        '特点一：边解旋边复制，解旋与子链合成同步进行',
        '特点二：半保留复制，子代 DNA 各含一条母链和一条新链',
        '结果：一个 DNA 分子形成两个完全相同的 DNA 分子',
        '条件：需模板、原料、酶、能量，且严格碱基互补配对保证准确'
      ] },
      { type: 'heading', text: '四、DNA 复制的相关计算' },
      { type: 'paragraph', text: '设亲代有 1 个 DNA 分子，复制 n 次后，DNA 分子总数为 2ⁿ 个。由于半保留复制，无论复制多少次，含有母链（最初亲代链）的 DNA 分子始终只有 2 个（各含一条母链）。若亲代 DNA 中某碱基数为 a，则复制 n 次消耗的该种游离脱氧核苷酸数为 a ×（2ⁿ − 1）。' },
      { type: 'table', headers: ['问题', '公式', '说明'], rows: [
        ['复制 n 次后 DNA 分子数', '2ⁿ', '每复制一次数量翻倍'],
        ['含母链的 DNA 分子数', '2', '始终只有 2 个，各含 1 条母链'],
        ['含母链的单链数', '2', '最初亲代仅 2 条链'],
        ['消耗某游离脱氧核苷酸数', 'a ×（2ⁿ − 1）', 'a 为模板中该碱基数']
      ] },
      { type: 'example', label: '例题·复制计算', text: '某 DNA 分子中含胞嘧啶（C）60 个，复制 3 次，求消耗游离的鸟嘌呤（G）脱氧核苷酸数。<br>分析：双链 DNA 中 G = C = 60 个，即模板中 G 数为 60；复制 3 次后 DNA 总数为 2³ = 8 个，共需 G 数为 8 × 60 = 480 个，除去模板原有的 60 个，需从外界提供的游离 G 为 60 ×（2³ − 1）= 60 × 7 = 420 个。<br>答：消耗游离鸟嘌呤脱氧核苷酸 420 个。' },
      { type: 'warn', label: '易错·复制计算陷阱', text: '① 「复制 n 次」分子数是 2ⁿ，而「第 n 次复制（即再复制一次）」新增分子数是 2ⁿ − 2ⁿ⁻¹，二者不同，审题要看清。② 含母链的 DNA 始终只有 2 个，不是 2ⁿ 个。③ 消耗游离核苷酸数用 a ×（2ⁿ − 1），注意减去模板自带的那一份；若问「第 n 次」则用去 a × 2ⁿ⁻¹。④ 区别 DNA 分子数与 DNA 链数（链数为 2ⁿ⁺¹）。' },
      { type: 'tip', label: '高频考点·计算口诀', text: '高考常考「复制 n 次」与「第 n 次复制」的区别。记住：复制 n 次总分子数 2ⁿ、消耗游离核苷酸 a×（2ⁿ − 1）；第 n 次复制新增分子数 2ⁿ⁻¹、消耗 a×2ⁿ⁻¹。含母链的 DNA 永远是 2 个。做题先辨清是「共复制 n 次」还是「第 n 次」，再代公式。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图3 复制次数与分子数（2ⁿ）</text><rect x="60" y="100" width="90" height="50" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="105" y="130" font-size="13" fill="#2e3a22" text-anchor="middle">1（2⁰）</text><rect x="200" y="100" width="90" height="50" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="245" y="130" font-size="13" fill="#2e3a22" text-anchor="middle">2（2¹）</text><rect x="340" y="100" width="90" height="50" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="385" y="130" font-size="13" fill="#2e3a22" text-anchor="middle">4（2²）</text><rect x="480" y="100" width="130" height="50" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="545" y="130" font-size="13" fill="#2e3a22" text-anchor="middle">8（2³）</text><polygon points="150,125 200,117 200,143" fill="#3f7d1e"/><polygon points="290,125 340,117 340,143" fill="#3f7d1e"/><polygon points="430,125 480,117 480,143" fill="#3f7d1e"/><text x="340" y="210" font-size="13" fill="#5aa832" text-anchor="middle">复制 n 次，DNA 分子数 = 2ⁿ</text><text x="340" y="250" font-size="13" fill="#2e3a22" text-anchor="middle">含母链的 DNA 始终为 2 个</text></svg>', caption: '图3　复制 n 次 DNA 分子数为 2ⁿ，含母链的分子始终只有 2 个。' },
      { type: 'paragraph', text: '小结：DNA 复制是以亲代两条链为模板、在酶和能量推动下合成子代 DNA 的过程，方式为半保留复制、特点为边解旋边复制。掌握 2ⁿ、含母链 2 个、消耗 a×（2ⁿ − 1）三套计算，就能应对绝大多数复制类考题。' }
    ],
    exercises: [
      { type: 'choice', question: 'DNA 复制的主要方式是？', options: ['全保留复制', '半保留复制', '分散复制', '先全保留后分散'], answer: '半保留复制', explanation: 'DNA 复制是以亲代 DNA 的两条链分别作模板，按碱基互补配对合成新链，每个子代 DNA 都保留一条亲代母链、含一条新链，这种方式叫半保留复制。它已被 ¹⁵N 同位素标记实验证明，是遗传信息稳定传递的基础。' },
      { type: 'choice', question: '1 个 DNA 分子连续复制 3 次后，含最初亲代母链的 DNA 分子数是？', options: ['2 个', '4 个', '8 个', '16 个'], answer: '2 个', explanation: '半保留复制中，最初亲代只有 2 条链（分别进入 2 个子代 DNA）。无论复制多少次，这 2 条母链始终各在一个 DNA 分子中，因此含有母链的 DNA 分子始终只有 2 个。复制 3 次后总分子数为 2³ = 8 个，但带母链的仍是 2 个。' },
      { type: 'choice', question: '某 DNA 中含腺嘌呤（A）40 个，复制 n 次，需消耗游离的胸腺嘧啶（T）脱氧核苷酸数为？', options: ['40 × 2ⁿ', '40 ×（2ⁿ − 1）', '40 ×（2ⁿ⁺¹ − 1）', '40 ×（2ⁿ⁻¹）'], answer: '40 ×（2ⁿ − 1）', explanation: '双链 DNA 中 T = A = 40，即模板中 T 数为 40。复制 n 次后子代总 T 数为 40 × 2ⁿ，减去模板已有的 40 个，需外界提供的游离 T 为 40 ×（2ⁿ − 1）。若只算第 n 次新增，则为 40 × 2ⁿ⁻¹。' },
      { type: 'fill', question: 'DNA 复制需要模板、原料、酶和能量等条件，其中解旋过程主要依赖___酶把氢键打开。', answer: '解旋', explanation: 'DNA 复制开始时，解旋酶作用于碱基对之间的氢键，将双螺旋两条链解开形成单链，作为合成子链的模板；随后 DNA 聚合酶以母链为模板、按碱基互补配对合成新子链。解旋是复制能进行的前提。' },
      { type: 'fill', question: '1 个 DNA 分子复制 n 次后，得到的 DNA 分子总数为___（写成含 n 的式子）。', answer: '2ⁿ', explanation: 'DNA 复制为半保留复制，每复制一次分子数翻倍，即 1 → 2 → 4 → 8 …… 复制 n 次后 DNA 分子总数为 2ⁿ 个。注意区分「复制 n 次」（总数 2ⁿ）与「第 n 次复制」（新增 2ⁿ⁻¹ 个）。' }
    ]
  });
})();
