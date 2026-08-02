/* 生物学 · 高三复习 · 遗传与进化 · 第2章 · 课时：第3节 伴性遗传 */
(function () {
  var v = gzGetVolume('biology', 'zt2');
  if (!v) return;
  v.points.push({
    id: 'zt2-u7',
    name: '第3节 伴性遗传',
    chapter: '遗传与进化 · 第2章 基因和染色体的关系',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是伴性遗传' },
      { type: 'paragraph', text: '有些基因位于性染色体（X 或 Y）上，所以这些基因控制的性状在遗传上总是和性别相关联，这类遗传叫作<strong>伴性遗传</strong>。人类和许多动物是 XY 型性别决定：雌性体细胞内有两条 X 染色体（XX），雄性有一条 X 和一条 Y 染色体（XY）。由于 Y 染色体短小，很多位于 X 上的基因在 Y 上没有对应等位基因。' },
      { type: 'list', items: [
        'XY 型性别决定：雌性为 XX，雄性为 XY',
        '男性的 X 染色体一定来自母亲，Y 染色体一定来自父亲',
        '父亲的 X 染色体一定传给女儿，Y 染色体一定传给儿子',
        '女性的两条 X 一条来自父、一条来自母，可传给儿子也可传给女儿'
      ] },
      { type: 'keypoint', label: '核心概念·伴性遗传', text: '<strong>位于性染色体上的基因所控制的性状，在遗传上总是和性别相关联，叫做伴性遗传。</strong>伴性遗传的本质是这些基因随性染色体传递，因此男女（雌雄）患病概率往往不同。' },
      { type: 'heading', text: '二、伴 X 隐性遗传' },
      { type: 'paragraph', text: '人类红绿色盲和抗血友病（血友病）都是伴 X 隐性遗传病。以红绿色盲为例，正常基因 B 对色盲基因 b 为显性，基因位于 X 染色体上，Y 上没有。男性只要 X 上带 b（XᵇY）就患病；女性需两条 X 都带 b（XᵇXᵇ）才患病，若只有一条带 b（XᴮXᵇ）则为正常携带者。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图1 红绿色盲系谱（伴X隐性）</text><rect x="280" y="60" width="120" height="44" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="88" font-size="13" fill="#2e3a22" text-anchor="middle">Ⅰ 男患者 XᵇY</text><polygon points="340,104 340,124 330,124" fill="#3f7d1e"/><rect x="280" y="128" width="120" height="44" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="156" font-size="13" fill="#2e3a22" text-anchor="middle">Ⅱ 女携带者 XᴮXᵇ</text><polygon points="340,172 340,196 330,196" fill="#3f7d1e"/><rect x="200" y="210" width="120" height="44" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="260" y="238" font-size="13" fill="#2e3a22" text-anchor="middle">Ⅲ 男患者</text><rect x="360" y="210" width="120" height="44" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="420" y="238" font-size="13" fill="#2e3a22" text-anchor="middle">Ⅲ 女正常</text><text x="340" y="288" font-size="12" fill="#5aa832" text-anchor="middle">外祖父患病→女儿携带→外孙患病（隔代交叉）</text></svg>', caption: '图1　红绿色盲系谱：男性患者通过女儿把致病基因传给外孙。' },
      { type: 'list', items: [
        '男性患者多于女性患者（男性只需一个致病基因即患病）',
        '隔代交叉遗传：外公患病，女儿表现正常但为携带者，外孙可能患病',
        '女性患者的父亲和儿子一定患病（女性两条 X 上都有致病基因）',
        '正常男性的母亲和女儿一定正常（他给女儿的 X 是正常的）'
      ] },
      { type: 'paragraph', text: '为什么女性患者的父亲和儿子一定患病？因为女性有两条 X，若她患病（XᵇXᵇ），其中一条 Xᵇ 必来自父亲，所以父亲只能是 XᵇY（患者）；她传给儿子的 X 也一定是 Xᵇ，儿子得到 XᵇY 即患病。这条规律是判断伴 X 隐性的利器。' },
      { type: 'heading', text: '三、伴 X 显性遗传' },
      { type: 'paragraph', text: '抗维生素 D 佝偻病是伴 X 显性遗传病。显性致病基因 D 位于 X 上，只要有一个 D 就患病（XᴰXᴰ、XᴰXᵈ、XᴰY 均患病，只有 XᵈXᵈ、XᵈY 正常）。与隐性相反，这类病女性患者多于男性。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图2 抗维生素D佝偻病系谱（伴X显性）</text><rect x="270" y="60" width="140" height="44" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="88" font-size="13" fill="#2e3a22" text-anchor="middle">Ⅰ 男患者 XᴰY</text><polygon points="340,104 340,126 330,126" fill="#3f7d1e"/><rect x="270" y="130" width="140" height="44" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="158" font-size="13" fill="#2e3a22" text-anchor="middle">Ⅱ 女患者 XᴰXᵈ</text><polygon points="340,174 340,198 330,198" fill="#3f7d1e"/><rect x="200" y="212" width="130" height="44" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="265" y="240" font-size="13" fill="#2e3a22" text-anchor="middle">Ⅲ 女患者</text><rect x="370" y="212" width="130" height="44" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="435" y="240" font-size="13" fill="#2e3a22" text-anchor="middle">Ⅲ 男患者</text><text x="340" y="280" font-size="12" fill="#5aa832" text-anchor="middle">男患者的母亲和女儿一定患病</text></svg>', caption: '图2　抗维生素 D 佝偻病：男性患者的母亲和女儿都患病。' },
      { type: 'list', items: [
        '女性患者多于男性患者',
        '男性患者的母亲和女儿一定患病（父亲的 X 必传给女儿）',
        '具有连续遗传现象，往往代代有患者',
        '女性患者若为杂合子，子代男女各约一半患病'
      ] },
      { type: 'heading', text: '四、解题关键规律' },
      { type: 'paragraph', text: '伴性遗传题的突破口在性别与 X 染色体的传递方向：男性 X 来自母、传给女；女性 X 可来自父母、传给子女。拿到系谱图，先看「无中生有是隐性，有中生无是显性」，再结合男女患病比例判断是伴 X 还是常染色体。' },
      { type: 'table', headers: ['类型', '代表病', '主要特点'], rows: [
        ['伴 X 隐性', '红绿色盲、血友病', '男多于女；隔代交叉；女患父儿必病'],
        ['伴 X 显性', '抗维生素D佝偻病', '女多于男；连续遗传；男患母女必病'],
        ['伴 Y', '外耳道多毛症', '只传男不传女，父传子、子传孙']
      ] },
      { type: 'example', label: '例题·系谱分析', text: '某家系中，母亲色觉正常、父亲红绿色盲，生了一个色盲女儿。请判断该女儿的基因型并说明父亲的情况。<br>分析：红绿色盲为伴 X 隐性，设正常基因为 B、致病为 b。父亲为 XᵇY，母亲正常但必提供 Xᵇ，故母亲为携带者 XᴮXᵇ；女儿患病，基因型为 XᵇXᵇ，其中一条 Xᵇ 来自父亲、一条来自母亲。<br>结论：女儿基因型为 XᵇXᵇ，父亲必为红绿色盲患者（XᵇY）。' },
      { type: 'warn', label: '易错·男女患病判断', text: '① 伴 X 隐性中，女性患者少见但不代表没有，一旦出现其父亲和儿子必病；② 男性患者的致病基因只能来自母亲、传给女儿，绝不传给儿子，所以「父传子」的色盲不是伴 X 隐性；③ 不要把「男多女」直接当作伴 X 隐性，还需结合系谱的显隐性；④ 伴 Y 遗传只传男不传女。' },
      { type: 'tip', label: '高频考点·系谱图三步法', text: '高考常给系谱图判遗传方式：第一步看是否「无中生有」（隐性）或「有中生无」（显性）；第二步看男女比例是否失衡；第三步锁定伴 X 或常染色体。记住口诀：无中生有为隐性，有中生无为显性；隐性看女患（父儿必病），显性看男患（母女必病）。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图3 X染色体的传递方向</text><rect x="120" y="90" width="140" height="50" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="190" y="120" font-size="13" fill="#2e3a22" text-anchor="middle">母亲 XX</text><rect x="420" y="90" width="140" height="50" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="490" y="120" font-size="13" fill="#2e3a22" text-anchor="middle">父亲 XY</text><polygon points="260,115 300,107 300,133" fill="#3f7d1e"/><text x="340" y="150" font-size="13" fill="#2e3a22" text-anchor="middle">减数分裂</text><polygon points="380,115 420,107 420,133" fill="#3f7d1e"/><rect x="120" y="190" width="140" height="50" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="190" y="220" font-size="13" fill="#2e3a22" text-anchor="middle">女儿（得父X）</text><rect x="420" y="190" width="140" height="50" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="490" y="220" font-size="13" fill="#2e3a22" text-anchor="middle">儿子（得父Y）</text></svg>', caption: '图3　父亲的 X 只传给女儿，Y 只传给儿子，这是伴性遗传的钥匙。' },
      { type: 'paragraph', text: '小结：伴性遗传是基因在性染色体上随性别传递的结果。伴 X 隐性与显性各有清晰的系谱规律，解题时抓住 X 染色体的传递方向和「女患父儿必病、男患母女必病」等口诀，就能快速判断遗传方式并计算概率。' }
    ],
    exercises: [
      { type: 'choice', question: '下列关于红绿色盲（伴 X 隐性遗传）特点的叙述，正确的是？', options: ['女性患者多于男性患者', '男性患者多于女性患者，且隔代交叉遗传', '男患者的母亲和女儿一定正常', '女患者的父亲和儿子可能正常'], answer: '男性患者多于女性患者，且隔代交叉遗传', explanation: '红绿色盲为伴 X 隐性遗传，男性只要 X 带致病基因即患病，女性需两条 X 都带致病基因才患病，故男性患者多于女性；其遗传呈隔代交叉特点，即外公通过女儿把致病基因传给外孙。女性患者的父亲和儿子一定患病，男性患者的母亲和女儿一定携带或患病。' },
      { type: 'choice', question: '抗维生素 D 佝偻病为伴 X 显性遗传，则男性患者的亲属中一定患病的是？', options: ['父亲和儿子', '母亲和女儿', '祖父和孙子', '外祖父和外孙'], answer: '母亲和女儿', explanation: '伴 X 显性遗传病中，男性患者（XᴰY）的 Xᴰ 一定来自母亲，也一定传给女儿，因此他的母亲和女儿都至少含有一个 Xᴰ，一定患病。他的 Y 传给儿子，儿子是否患病取决于母亲，故儿子不一定患病。' },
      { type: 'choice', question: '人类性别决定为 XY 型，下列关于性染色体传递的叙述，正确的是？', options: ['男性的 X 染色体来自父亲', '男性的 Y 染色体来自母亲', '父亲的 X 染色体一定传给女儿', '父亲的 Y 染色体一定传给女儿'], answer: '父亲的 X 染色体一定传给女儿', explanation: 'XY 型性别决定中，男性（XY）的 X 来自母亲、Y 来自父亲；减数分裂产生配子时，父亲把 X 传给女儿、把 Y 传给儿子，所以父亲的 X 一定传给女儿，Y 一定传给儿子。这是分析伴性遗传系谱的关键。' },
      { type: 'fill', question: '在伴 X 隐性遗传中，女性患者的父亲和儿子一定___（填「患病」或「正常」）。', answer: '患病', explanation: '伴 X 隐性遗传中女性患者基因型为 XᵇXᵇ，其中一条 Xᵇ 必来自父亲，使其父亲为 XᵇY 即患者；她传给儿子的 X 也必为 Xᵇ，儿子为 XᵇY 即患者。因此女性患者的父亲和儿子一定患病，这是判断伴 X 隐性的重要依据。' },
      { type: 'fill', question: '分析遗传系谱图时，若双亲正常却生出患病孩子，称为「无中生有」，由此可判断该病的遗传方式为___性遗传。', answer: '隐', explanation: '系谱分析中，「无中生有」即表型正常的双亲生出患病子代，说明致病基因为隐性（双亲均为携带者）。若「有中生无」则为显性遗传。结合男女患病比例可进一步判断是常染色体遗传还是伴 X 遗传。' }
    ]
  });
})();
