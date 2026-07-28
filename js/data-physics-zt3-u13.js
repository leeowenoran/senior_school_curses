/* ============================================================
 * 高三复习 · 热学与近代物理 · 专题四 原子结构和波粒二象性
 * 课时3：原子结构：电子的发现与原子核式结构模型
 * 数据注入：physics.zt3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt3');
  if (!v) return;

  v.points.push({
    id: 'zt3-u13-l1',
    name: '原子结构：电子的发现与原子核式结构模型',
    chapter: '热学与近代物理 · 专题四 原子结构和波粒二象性',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、电子的发现' },
      { type: 'paragraph', text: '很早以前人们认为原子是"不可分割的最小微粒"。直到19世纪末，科学家在真空玻璃管里通电，发现从负极（阴极）射出一种看不见的"射线"，能在荧光屏上打出光斑，还能被电场、磁场偏转。英国物理学家汤姆孙研究后确认：这种射线是一束带负电的微小粒子流，质量比最轻的原子还小得多。这就是电子，它的发现证明原子本身也有内部结构，是可以再分的。' },
      { type: 'keypoint', label: '重点·电子的发现', text: '<strong>汤姆孙通过阴极射线实验发现了电子：一种带负电、质量远小于原子的基本粒子。</strong>电子的发现说明原子不是最小不可分的，原子内部还有结构。' },
      { type: 'list', items: ['阴极射线从真空管的负极射出，能在荧光屏上产生光斑', '射线在电场、磁场中发生偏转，说明它带负电、有质量', '汤姆孙测出其荷质比 e/m，证明这是一种比原子轻得多的粒子', '电子是原子的组成部分，原子可以再分'] },
      { type: 'heading', text: '二、汤姆孙的"枣糕模型" ' },
      { type: 'paragraph', text: '既然原子里有带负电的电子，而整个原子平时不带电（电中性），那正电荷在哪里？汤姆孙猜想：原子像一块带正电的"果冻"，电子像枣子一样镶嵌在其中，可在原地振动。这就是著名的"枣糕模型"（也叫葡萄干布丁模型），在当时看起来很合理。' },
      { type: 'keypoint', label: '重点·枣糕模型', text: '<strong>汤姆孙模型认为：正电荷均匀分布在原子体内，电子像枣子一样镶嵌其中。</strong>它能解释原子电中性，但后来被 α 粒子散射实验否定。' },
      { type: 'warn', label: '易错', text: '<strong>枣糕模型已被实验推翻，不是正确的原子结构。</strong>有些同学记混，把"电子镶嵌在正电荷球里"当成最终结论。正确的图景是卢瑟福核式模型：正电荷和几乎全部质量集中在很小的核里，电子在核外运动。考试若问"原子结构模型"，默认答核式模型。' },
      { type: 'heading', text: '三、α粒子散射实验（卢瑟福）' },
      { type: 'paragraph', text: '为了验证枣糕模型，卢瑟福让带正电、质量较大的 α 粒子束射向极薄的金箔，观察它们被弹开的角度。如果正电荷像枣糕模型那样均匀铺开，α 粒子穿过时应几乎不受影响、只会轻微偏转。但实验结果出乎意料：绝大多数 α 粒子直穿而过，少数发生大角度偏转，甚至极少数被直接弹回。' },
      { type: 'keypoint', label: '重点·实验现象', text: '<strong>α 粒子散射实验的三条现象：①绝大多数 α 粒子穿过金箔后方向几乎不变；②少数发生较大角度偏转；③极少数（约万分之一）被反弹回来。</strong>大角度偏转和反弹说明原子内有一个体积小、质量大、带正电的核心。' },
      { type: 'table', headers: ['实验现象', '说明的问题'], rows: [['绝大多数直穿', '原子内部大部分是空旷空间'], ['少数大角度偏转', '原子中心有一个带正电的核在排斥 α 粒子'], ['极少数被弹回', '原子核体积很小但质量、正电荷高度集中'], ['偏转角度与 α 粒子靠近核的程度有关', '符合库仑斥力规律']] },
      { type: 'tip', label: '提示', text: '<strong>记住两个"绝大多数"和一个"极少数"：绝大多数直穿、极少数反弹。</strong>反弹的那万分之一，恰恰是最关键的证据——只有原子中心存在一个又小又重又带正电的核，才能把高速 α 粒子像撞墙一样弹回。' },
      { type: 'heading', text: '四、卢瑟福核式结构模型' },
      { type: 'paragraph', text: '根据散射实验，卢瑟福提出原子的核式结构：原子的中心有一个很小的原子核，几乎集中了原子的全部质量和所有正电荷；带负电的电子在核外绕核运动，就像行星绕太阳。原子核的半径约 10⁻¹⁵ 米，而原子半径约 10⁻¹⁰ 米，核只有原子的十万分之一大小，所以原子内部绝大部分是空的。' },
      { type: 'keypoint', label: '重点·核式结构模型', text: '<strong>卢瑟福核式模型：原子的正电荷和几乎全部质量集中在很小的原子核内；电子在核外绕核运动。</strong>原子核半径约 10⁻¹⁵ m，原子半径约 10⁻¹⁰ m，原子内部绝大部分是空的。' },
      { type: 'list', items: ['原子核带正电，集中几乎全部质量', '电子带负电，在核外空间绕核运动', '核体积极小，原子内部绝大部分是空旷空间', '原子整体电中性：核内正电荷数 = 核外电子数', '该模型能解释 α 粒子散射的实验现象'] },
      { type: 'example', label: '例题·现象解释', text: '为什么绝大多数 α 粒子能直穿金箔，而极少数被弹回？<br><br><strong>解析</strong>：<br>金原子核体积极小（约原子的十万分之一），绝大多数 α 粒子从核外的空旷区域穿过，几乎不受到明显库仑力，所以方向不变。<br>极少数 α 粒子恰好正对原子核撞去，受到高度集中的正电荷强排斥，动能被反弹回来，于是出现大角度偏转甚至弹回。' },
      { type: 'warn', label: '易错', text: '<strong>核式模型虽然正确，但它和经典电磁理论有矛盾：绕核运动的电子会辐射能量、轨道塌缩。</strong>这个矛盾后来由玻尔模型（下一课时）用量子化假设解决。另外，别把"电子绕核像行星绕太阳"理解成经典轨道一定稳定——经典物理下它本应崩溃，需用量子观念修正。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">阴极射线管：汤姆孙发现电子</text><rect x="120" y="110" width="440" height="90" rx="12" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="160" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">阴极</text><line x1="200" y1="155" x2="430" y2="155" stroke="#4fb3a5" stroke-width="3"/><polygon points="430,155 416,149 416,161" fill="#4fb3a5"/><text x="315" y="142" font-size="12" fill="#234b45" text-anchor="middle">阴极射线(电子束)</text><text x="500" y="160" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">荧光屏</text><path d="M 200 155 Q 315 200 430 155" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4" fill="none"/><text x="315" y="235" font-size="12" fill="#234b45" text-anchor="middle">加电场/磁场后射线偏转，测出荷质比 e/m</text></svg>', caption: '图1　阴极射线在电场、磁场中偏转，汤姆孙由此测得粒子荷质比，确认这是带负电的电子。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">α粒子散射：绝大多数直穿，极少数反弹</text><rect x="300" y="120" width="40" height="40" rx="6" fill="#4fb3a5"/><text x="320" y="145" font-size="12" fill="#234b45" text-anchor="middle" font-weight="bold">金核</text><line x1="80" y1="140" x2="290" y2="140" stroke="#2e9e8f" stroke-width="3"/><polygon points="290,140 276,134 276,146" fill="#2e9e8f"/><line x1="345" y1="140" x2="600" y2="120" stroke="#234b45" stroke-width="2"/><text x="480" y="110" font-size="11" fill="#234b45" text-anchor="middle">小角偏转</text><line x1="345" y1="140" x2="560" y2="240" stroke="#234b45" stroke-width="2"/><text x="470" y="250" font-size="11" fill="#234b45" text-anchor="middle">大角偏转</text><line x1="345" y1="140" x2="120" y2="220" stroke="#234b45" stroke-width="2"/><text x="200" y="240" font-size="11" fill="#234b45" text-anchor="middle">被弹回</text></svg>', caption: '图2　α粒子射向金箔：绝大多数直穿，少数大角度偏转，极少数被弹回，说明原子中心有一个小而重的核。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">从枣糕模型到核式模型</text><rect x="40" y="70" width="270" height="180" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="175" y="96" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">枣糕模型(错)</text><circle cx="175" cy="170" r="55" fill="#4fb3a5" opacity="0.35"/><circle cx="150" cy="155" r="6" fill="#234b45"/><circle cx="200" cy="160" r="6" fill="#234b45"/><circle cx="175" cy="200" r="6" fill="#234b45"/><circle cx="200" cy="190" r="6" fill="#234b45"/><rect x="370" y="70" width="270" height="180" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="505" y="96" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">核式模型(对)</text><circle cx="505" cy="160" r="14" fill="#4fb3a5"/><ellipse cx="505" cy="160" rx="75" ry="40" fill="none" stroke="#234b45" stroke-width="2"/><ellipse cx="505" cy="160" rx="45" ry="22" fill="none" stroke="#234b45" stroke-width="2"/></svg>', caption: '图3　左为被否定的枣糕模型（电子嵌在正电荷球中），右为正确的核式模型（小核居中、电子绕核）。' }
    ],
    exercises: [
      { type: 'choice', question: '关于电子的发现，下列说法正确的是？', options: ['电子的发现证明原子不可再分', '汤姆孙通过阴极射线实验发现了电子', '电子带正电且质量比原子大', '电子是原子核的组成部分'], answer: '汤姆孙通过阴极射线实验发现了电子', explanation: '汤姆孙研究阴极射线，发现它由带负电、质量远小于原子的粒子组成，命名为电子。电子的发现说明原子不是最小不可分的，原子内部还有结构；电子带负电、质量比原子小得多，并且是核外粒子，不是原子核的组成部分。' },
      { type: 'choice', question: 'α粒子散射实验的现象中，最关键的证据是？', options: ['绝大多数α粒子直穿金箔', '少数α粒子发生小角度偏转', '极少数α粒子被大角度弹回', '所有α粒子都偏转到同一侧'], answer: '极少数α粒子被大角度弹回', explanation: '若原子像枣糕模型那样正电荷均匀分布，α粒子只会轻微偏转。实验却发现极少数α粒子被大角度弹回，这只能用"原子中心存在一个体积极小、质量大、带正电的核"来解释。这个"极少数反弹"正是建立核式模型的决定性证据。' },
      { type: 'choice', question: '关于卢瑟福核式结构模型，下列说法正确的是？', options: ['正电荷均匀分布在原子内', '电子静止在原子核内', '原子的正电荷和几乎全部质量集中在很小的原子核内', '原子核半径与原子半径差不多大'], answer: '原子的正电荷和几乎全部质量集中在很小的原子核内', explanation: '核式模型认为正电荷和几乎全部质量集中在体积极小的原子核内，电子在核外绕核运动，原子整体电中性。原子核半径约10⁻¹⁵米，远小于原子半径约10⁻¹⁰米，原子内部绝大部分是空的，所以A、B、D都不符合核式模型。' },
      { type: 'fill', question: '汤姆孙提出的早期原子模型叫"___模型"（电子像枣子镶嵌在带正电的球里），它后来被 α 粒子散射实验否定。', answer: '枣糕', explanation: '汤姆孙的"枣糕模型"（也称葡萄干布丁模型）认为正电荷均匀分布在原子体内，电子像枣子一样镶嵌其中。这一模型能解释电中性，但无法解释 α 粒子大角度散射，最终被卢瑟福核式模型取代。注意考试问"原子结构模型"应优先答核式模型。' },
      { type: 'fill', question: 'α粒子散射实验中，绝大多数 α 粒子___（填"直穿"或"被弹回"）金箔，而极少数被大角度___（填"直穿"或"弹回"），这说明原子中心有一个体积小、质量大的核。', answer: '直穿 | 弹回', explanation: '实验现象的两个极端：绝大多数α粒子从原子核外的空旷区域穿过，方向几乎不变（直穿）；极少数恰好正对原子核，受到高度集中的正电荷强烈排斥而被大角度弹回。这证明原子的质量与正电荷集中在很小的核内，原子内部绝大部分是空的。' }
    ]
  });
})();
