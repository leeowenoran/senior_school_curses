/* 生物学 · 必修2 遗传与进化 · 第4章 · 课时：第2节 基因对性状的控制 */
(function () {
  var v = gzGetVolume('biology', 'bx2');
  if (!v) return;
  v.points.push({
    id: 'bx2-u11',
    name: '第2节 基因对性状的控制',
    chapter: '必修2 遗传与进化 · 第4章 基因的表达',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、中心法则的完整内容' },
      { type: 'paragraph', text: '上节课我们知道遗传信息流动方向是 DNA → RNA → 蛋白质。后来科学家发现，某些 RNA 病毒能进行<strong>RNA 复制</strong>（RNA → RNA），也能以 RNA 为模板反向合成 DNA，这叫<strong>逆转录</strong>（RNA → DNA）。把这些流向合在一起，中心法则才完整：DNA 与 DNA 之间可复制，DNA 流到 RNA 再流到蛋白质，此外还有 RNA 的复制和逆转录。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 330" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="330" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图1 完整的中心法则信息流</text><rect x="80" y="100" width="130" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="145" y="138" font-size="15" fill="#2e3a22" text-anchor="middle" font-weight="bold">DNA</text><rect x="300" y="100" width="130" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="365" y="138" font-size="15" fill="#2e3a22" text-anchor="middle" font-weight="bold">RNA</text><rect x="520" y="100" width="130" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="585" y="138" font-size="15" fill="#2e3a22" text-anchor="middle" font-weight="bold">蛋白质</text><polygon points="210,130 262,117 262,143" fill="#3f7d1e"/><polygon points="430,130 482,117 482,143" fill="#3f7d1e"/><polygon points="215,160 262,173 262,147" fill="#3f7d1e"/><polygon points="435,160 482,173 482,147" fill="#3f7d1e"/><text x="340" y="250" font-size="13" fill="#2e3a22" text-anchor="middle">DNA 可复制；DNA→RNA→蛋白质是主路；RNA 可复制，也可逆转录成 DNA</text><text x="340" y="290" font-size="14" fill="#5aa832" text-anchor="middle" font-weight="bold">蛋白质是信息流的终点，一般不能反向决定核酸</text></svg>', caption: '图1 完整中心法则：DNA 复制、DNA→RNA→蛋白质为主路，另含 RNA 复制与逆转录。' },
      { type: 'list', items: ['DNA → DNA：DNA 复制，遗传信息在亲子代间传递', 'DNA → RNA：转录', 'RNA → 蛋白质：翻译', 'RNA → RNA：RNA 复制，见于 RNA 病毒', 'RNA → DNA：逆转录，见于逆转录病毒'] },
      { type: 'heading', text: '二、途径一：基因直接控制结构蛋白' },
      { type: 'paragraph', text: '有些基因直接指导合成<strong>结构蛋白</strong>，蛋白质本身就是细胞或组织的组成成分，从而影响性状。比如红细胞里的血红蛋白，它的结构直接决定了红细胞运输氧气的能力。如果血红蛋白基因出问题，红细胞形态就会改变，这就是基因直接控制性状的例子。' },
      { type: 'keypoint', label: '重点·两条控制途径', text: '<strong>基因控制性状有两条主要途径：一是通过控制结构蛋白的合成直接控制性状；二是通过控制酶的合成来控制代谢过程，从而间接控制性状。</strong>前者蛋白本身就是性状的物质基础，后者蛋白作为酶影响化学反应快慢，再影响生物表现。' },
      { type: 'heading', text: '三、途径二：基因间接控制代谢（酶）' },
      { type: 'paragraph', text: '更多情况下，基因通过控制<strong>酶</strong>的合成来影响代谢。例如酪氨酸酶能把酪氨酸变成黑色素，如果控制酪氨酸酶的基因异常，酶就做不出来，黑色素无法合成，人就会患白化病。这里基因没有直接变成结构，而是通过控制酶的产量，改变了整个代谢通路，间接决定了肤色这一性状。' },
      { type: 'example', label: '例题·判断控制途径', text: '白化病患者体内缺乏酪氨酸酶，无法合成黑色素，皮肤毛发发白。<br>分析：酪氨酸酶是一种酶，参与黑色素的代谢。控制该酶的基因异常，导致代谢受阻，间接使肤色变白。这属于基因通过控制酶的合成来控制代谢，从而间接控制性状。<br>对比：镰刀型贫血症是血红蛋白结构异常直接致病，属于直接控制结构蛋白。' },
      { type: 'table', headers: ['控制途径', '基因产物', '作用方式', '例子'], rows: [['直接控制', '结构蛋白', '蛋白本身就是结构成分', '血红蛋白异常致镰刀型贫血'], ['间接控制', '酶', '影响代谢过程', '酪氨酸酶缺失去致白化病'], ['间接控制', '酶', '影响代谢过程', '淀粉分支酶缺失去致皱粒豌豆']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 330" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="330" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图2 基因控制性状的两条途径</text><rect x="50" y="90" width="250" height="80" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="175" y="125" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">途径一 直接控制</text><text x="175" y="150" font-size="13" fill="#2e3a22" text-anchor="middle">基因 → 结构蛋白 → 性状</text><rect x="400" y="90" width="250" height="80" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="525" y="125" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">途径二 间接控制</text><text x="525" y="150" font-size="13" fill="#2e3a22" text-anchor="middle">基因 → 酶 → 代谢 → 性状</text><polygon points="300,130 362,117 362,143" fill="#3f7d1e"/><polygon points="380,130 442,117 442,143" fill="#3f7d1e"/><text x="340" y="240" font-size="13" fill="#2e3a22" text-anchor="middle">结构蛋白直接构成性状；酶通过代谢过程间接影响性状</text><text x="340" y="280" font-size="14" fill="#5aa832" text-anchor="middle" font-weight="bold">两条途径最终都靠蛋白质来体现性状</text></svg>', caption: '图2 基因可直接合成结构蛋白影响性状，也可通过酶和代谢间接影响性状。' },
      { type: 'heading', text: '四、基因与性状不是简单的一对一' },
      { type: 'paragraph', text: '常被误以为一个基因管一个性状，实际情况复杂得多。有的性状由<strong>多个基因</strong>共同决定，比如人的身高、肤色是许多基因叠加的结果；有的基因也会影响多个性状。此外，环境也参与进来，同样基因型的植物在水肥不同条件下长得不一样，所以性状是基因和环境共同作用的产品。' },
      { type: 'list', items: ['多基因性状：身高、体重、肤色由多个基因共同决定', '一因多效：一个基因可影响多种性状', '环境影响：水肥、光照、温度会改变性状表现', '基因型相同，表现型不一定完全相同'] },
      { type: 'heading', text: '五、细胞质遗传：线粒体与叶绿体' },
      { type: 'paragraph', text: '除了细胞核里的染色体 DNA，<strong>线粒体</strong>和<strong>叶绿体</strong>里也有少量 DNA，它们控制的性状叫细胞质遗传。受精卵的细胞质几乎全部来自卵细胞，所以这类性状通常表现为母系遗传——母亲患病，子女都可能携带。线粒体基因突变会导致一些靠能量供应维持的器官（如肌肉、神经）出问题。' },
      { type: 'warn', label: '易错·中心法则流向', text: '① 中心法则主路是 DNA→RNA→蛋白质，蛋白质是终点，一般不能反向决定核酸；② RNA 复制和逆转录只发生在某些病毒中，不是所有生物都有；③ 逆转录是 RNA→DNA，方向别写反；④ 细胞质遗传的 DNA 在线粒体、叶绿体，不遵循孟德尔分离定律，常呈母系遗传。' },
      { type: 'tip', label: '提示·做题套路', text: '看到题干说某蛋白是<strong>结构成分</strong>（如血红蛋白、胶原蛋白），多半是直接控制；说某<strong>酶</strong>缺乏或代谢异常（如白化病、苯丙酮尿症），多半是间接控制。先判断基因产物是结构蛋白还是酶，再选途径，准确率更高。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图3 细胞质遗传（线粒体、叶绿体）</text><rect x="60" y="90" width="200" height="80" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="160" y="125" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">卵细胞（母方）</text><text x="160" y="150" font-size="13" fill="#2e3a22" text-anchor="middle">提供全部细胞质</text><rect x="420" y="90" width="200" height="80" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="520" y="125" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">线粒体 DNA</text><text x="520" y="150" font-size="13" fill="#2e3a22" text-anchor="middle">随细胞质传给子代</text><polygon points="260,130 322,117 322,143" fill="#3f7d1e"/><polygon points="400,130 462,117 462,143" fill="#3f7d1e"/><text x="340" y="240" font-size="14" fill="#5aa832" text-anchor="middle" font-weight="bold">母系遗传：母亲把细胞质 DNA 传给所有子女</text><text x="340" y="285" font-size="13" fill="#2e3a22" text-anchor="middle">叶绿体 DNA 同理，也不遵循孟德尔式分离比。</text></svg>', caption: '图3 线粒体、叶绿体 DNA 随卵细胞细胞质传递，呈母系遗传特征。' }
    ],
    exercises: [
      { type: 'choice', question: '下列关于中心法则的说法，正确的是？', options: ['遗传信息只能从 DNA 流向蛋白质', 'RNA 不能自我复制', 'RNA 病毒可存在 RNA 复制或逆转录', '蛋白质可反向决定 DNA'], answer: 'RNA 病毒可存在 RNA 复制或逆转录', explanation: '中心法则的主路是 DNA→RNA→蛋白质。某些 RNA 病毒能在宿主细胞内进行 RNA 复制（RNA→RNA），逆转录病毒能以 RNA 为模板合成 DNA（RNA→DNA）。因此 RNA 病毒可存在 RNA 复制或逆转录，正确选项是这一条。蛋白质通常是信息流终点，不能反向决定核酸。' },
      { type: 'choice', question: '白化病是因为缺乏酪氨酸酶导致黑色素无法合成，这种基因控制性状的方式属于？', options: ['直接控制结构蛋白', '通过酶控制代谢间接控制', '通过 DNA 复制控制', '细胞质遗传'], answer: '通过酶控制代谢间接控制', explanation: '白化病的根本原因是控制酪氨酸酶的基因异常，使酶无法合成，导致黑色素代谢受阻，肤色变白。这是基因通过控制酶的合成来控制代谢过程，从而间接控制性状，而不是直接合成结构蛋白。因此属于间接控制。' },
      { type: 'choice', question: '线粒体 DNA 控制的性状在遗传上通常表现为？', options: ['孟德尔式分离', '母系遗传', '只传儿子', '随机分配'], answer: '母系遗传', explanation: '受精卵的细胞质几乎全部来自卵细胞，线粒体及其 DNA 由母亲传给后代，因此线粒体 DNA 控制的性状通常表现为母系遗传，即母亲把性状传给所有子女，不遵循核基因的孟德尔分离定律。正确选项是母系遗传。' },
      { type: 'fill', question: '基因通过控制___的合成来控制代谢过程，从而间接控制生物性状，例如酪氨酸酶缺乏导致白化病。', answer: '酶', explanation: '基因控制性状的间接途径是：基因先指导合成特定的酶，酶再催化代谢反应，代谢产物的多少最终影响性状表现。白化病就是控制酪氨酸酶的基因异常，使黑色素合成受阻。因此横线处应填酶，这是间接控制途径的核心环节。' },
      { type: 'fill', question: '以 RNA 为模板合成 DNA 的过程称为___，常见于逆转录病毒。', answer: '逆转录', explanation: '逆转录是以 RNA 为模板，在逆转录酶催化下合成 DNA 的过程，是对中心法则的重要补充，常见于 HIV 等逆转录病毒。它与转录方向相反，转录是 DNA→RNA，逆转录是 RNA→DNA。因此横线处应填逆转录。' }
    ]
  });
})();
