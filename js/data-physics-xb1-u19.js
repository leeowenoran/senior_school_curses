/* ============================================================
 * 高二物理 · 选择性必修第一册 · 第四章 光
 * 课时19：全反射
 * 数据注入：physics.xb1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb1');
  if (!v) return;

  v.points.push({
    id: 'xb1-u19',
    name: '全反射',
    chapter: '选择性必修第一册 · 第四章 光',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、从"折射角变大"说起' },
      { type: 'paragraph', text: '上一节我们学过：光从光密介质进入光疏介质（比如从水进入空气）时，折射角大于入射角，光线会"远离法线"偏折。现在请你想一想：如果不断增大入射角，折射角也会跟着增大。当入射角增大到某一个值时，折射角会正好达到 90°，也就是折射光线刚好贴着界面射出去。再往后呢？' },
      { type: 'keypoint', label: '重点·临界角', text: '<strong>当光从光密介质射向光疏介质时，使折射角恰好等于 90° 的那个入射角，叫作临界角，记作 C。</strong>只要入射角小于 C，就有折射光；一旦达到或超过 C，折射光就消失了。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">增大入射角，折射角增大，直到临界角时光线贴界面射出</text><line x1="40" y1="170" x2="640" y2="170" stroke="#2e9e8f" stroke-width="3"/><text x="620" y="192" font-size="13" fill="#234b45">界面</text><line x1="340" y1="40" x2="340" y2="300" stroke="#234b45" stroke-width="2" stroke-dasharray="6,4"/><text x="352" y="56" font-size="13" fill="#234b45">法线</text><line x1="250" y1="92" x2="340" y2="170" stroke="#234b45" stroke-width="3"/><line x1="340" y1="170" x2="470" y2="246" stroke="#4fb3a5" stroke-width="3"/><text x="250" y="86" font-size="12" fill="#234b45">i 小</text><line x1="210" y1="110" x2="340" y2="170" stroke="#234b45" stroke-width="3"/><line x1="340" y1="170" x2="600" y2="170" stroke="#4fb3a5" stroke-width="3"/><text x="150" y="104" font-size="12" fill="#234b45">i = C</text><text x="520" y="162" font-size="12" fill="#4fb3a5">折射角90°</text><text x="340" y="306" font-size="13" fill="#234b45" text-anchor="middle">入射角达到临界角 C 时，折射光线沿界面射出</text></svg>', caption: '图1　光从光密射向光疏，入射角增大到临界角 C 时，折射光线恰好沿界面射出。' },
      { type: 'heading', text: '二、全反射现象' },
      { type: 'paragraph', text: '当入射角超过临界角 C 之后，发生了一件奇妙的事：折射光线彻底消失，所有的光都被"弹"回光密介质内部，全部沿着界面内侧反射回去。这种"光一点都跑不出去、全部反射"的现象，就叫全反射。它和普通反射不同——普通反射总还有一部分光透过去折射，而全反射是百分之百反射，几乎没有能量损失。' },
      { type: 'keypoint', label: '重点·全反射', text: '<strong>当光从光密介质射向光疏介质，且入射角大于或等于临界角时，折射光完全消失，光全部反射回原介质，这种现象叫全反射。</strong>全反射的反射率接近 100%，比普通镜面反射更高效。' },
      { type: 'list', items: ['条件一：光必须从光密介质射向光疏介质（n 大→n 小）', '条件二：入射角必须大于或等于临界角 C', '两个条件必须同时满足，缺一不可', '光从光疏射向光密，无论入射角多大都不会发生全反射'] },
      { type: 'warn', label: '易错', text: '很多同学记成"入射角大于临界角就会全反射"，<strong>漏掉了"必须从光密射向光疏"这个前提。</strong>如果光从空气射向水（光疏→光密），即使入射角很大，也只会有折射加部分反射，永远不会有全反射。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">入射角大于临界角：折射光消失，光全部反射</text><rect x="60" y="60" width="560" height="110" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="92" font-size="13" fill="#234b45" text-anchor="middle">光密介质（如玻璃）</text><line x1="40" y1="175" x2="640" y2="175" stroke="#2e9e8f" stroke-width="3"/><text x="600" y="197" font-size="13" fill="#234b45">界面</text><line x1="340" y1="40" x2="340" y2="290" stroke="#234b45" stroke-width="2" stroke-dasharray="6,4"/><text x="352" y="56" font-size="13" fill="#234b45">法线</text><line x1="200" y1="80" x2="340" y2="175" stroke="#234b45" stroke-width="4"/><text x="205" y="74" font-size="12" fill="#234b45">入射光</text><line x1="340" y1="175" x2="480" y2="80" stroke="#4fb3a5" stroke-width="4"/><text x="455" y="74" font-size="12" fill="#4fb3a5">反射光</text><circle cx="340" cy="175" r="5" fill="#234b45"/><text x="340" y="285" font-size="13" fill="#234b45" text-anchor="middle">入射角大于临界角，折射光完全消失，光全部反射回光密介质</text></svg>', caption: '图3　当入射角大于临界角时，折射光线消失，入射光全部被反射回光密介质内部。' },
      { type: 'heading', text: '三、临界角怎么算' },
      { type: 'paragraph', text: '临界角 C 和两种介质的折射率有关。当光从折射率为 n 的介质射向真空（或空气，折射率≈1）时，由折射定律可得：sin C = 1 / n。变形就是 C = arcsin(1 / n)。介质折射率越大，临界角越小，越容易发生全反射。例如水 n≈1.33，临界角约 48.8°；普通玻璃 n≈1.5，临界角约 41.8°。' },
      { type: 'keypoint', label: '重点·临界角公式', text: '<strong>从介质射向真空（或空气）时，sin C = 1 / n。</strong>也就是说临界角 C = arcsin(1 / n)。折射率 n 越大，临界角越小，越容易全反射。' },
      { type: 'example', label: '例题', text: '水的折射率 n = 1.33，求光从水射向空气时的临界角（已知 sin48.8°≈0.752，1/1.33≈0.752）。<br><br><strong>解析</strong>：<br>由 sin C = 1 / n = 1 / 1.33 ≈ 0.752，查得 C ≈ 48.8°。<br>所以当光从水进入空气、入射角达到约 48.8° 时就会开始全反射。这也解释了：在泳池底部往上看，只有在较小范围内才能看见外面，超出这个范围全是水面反射的"镜面"。' },
      { type: 'tip', label: '提示', text: '<strong>钻石之所以"闪闪发光"，很大程度靠全反射。</strong>金刚石折射率高达约 2.42，临界角只有约 24.4°，很小。经过精心切割，进入钻石的光在内部反复全反射，几乎不从侧面漏出，最后全部从顶部集中射出，就显得格外耀眼。' },
      { type: 'table', headers: ['介质（射向空气）', '折射率 n', '临界角 C'], rows: [['水', '约 1.33', '约 48.8°'], ['普通玻璃', '约 1.50', '约 41.8°'], ['重火石玻璃', '约 1.90', '约 31.8°'], ['金刚石', '约 2.42', '约 24.4°']] },
      { type: 'heading', text: '四、全反射的应用——光导纤维（光纤）' },
      { type: 'paragraph', text: '光导纤维（简称光纤）是全反射最典型的应用。一根光纤直径比头发还细，内芯折射率较高（光密），外层包层折射率较低（光疏）。当光从一端以较大角度射入内芯后，在芯与包的界面上反复发生全反射，光就被"关"在纤芯里，沿着弯弯曲曲的光纤一路向前传播，几乎不泄漏、不衰减。' },
      { type: 'keypoint', label: '重点·光纤原理', text: '<strong>光纤利用内芯（光密）与包层（光疏）界面上的全反射，把光"困"在纤芯里向前传导。</strong>因为全反射几乎没有能量损失，所以光可以传很远而不明显变弱。' },
      { type: 'list', items: ['内芯折射率 n₁ 较大，是光密介质', '包层折射率 n₂ 较小，是光疏介质', '光在界面以大于临界角的角度入射，发生全反射', '光沿光纤"之"字形前进，可拐弯也能传很远', '光纤通信容量大、损耗小、抗干扰强'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">光在光纤内芯中靠全反射向前传导</text><rect x="120" y="90" width="440" height="100" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><rect x="120" y="90" width="440" height="100" rx="10" fill="#4fb3a5" opacity="0.25"/><text x="340" y="80" font-size="13" fill="#234b45" text-anchor="middle">内芯（光密 n₁）</text><text x="340" y="210" font-size="13" fill="#234b45" text-anchor="middle">包层（光疏 n₂）</text><line x1="150" y1="140" x2="250" y2="100" stroke="#234b45" stroke-width="3"/><line x1="250" y1="100" x2="350" y2="140" stroke="#234b45" stroke-width="3"/><line x1="350" y1="140" x2="450" y2="100" stroke="#234b45" stroke-width="3"/><line x1="450" y1="100" x2="550" y2="140" stroke="#234b45" stroke-width="3"/><text x="340" y="255" font-size="13" fill="#234b45" text-anchor="middle">光在界面反复全反射，沿光纤向前传播</text></svg>', caption: '图2　光在光纤内芯与包层的界面上反复全反射，被牢牢"关"在纤芯里向前传导。' },
      { type: 'example', label: '例题', text: '为什么光纤的内芯要用折射率较大的材料，而包层用折射率较小的材料？<br><br><strong>解析</strong>：<br>只有"光密→光疏"的界面才可能发生全反射。若内芯折射率大于包层，光从内芯射向包层时满足第一个条件；再配合合适的入射角度使入射角大于临界角，就能在界面上全反射，把光约束在纤芯内向前传。如果反过来（内芯折射率小于包层），就根本不会发生全反射，光会大量泄漏出去，光纤就无法正常工作。' },
      { type: 'tip', label: '提示', text: '<strong>全反射应用远不止光纤。</strong>潜水员在水下看天空，会看到一个明亮的"圆形窗口"，窗口之外全是水面反射的池底景象，这正是全反射造成的；医院用的内窥镜、超市扫码枪里的导光管，也都是全反射原理的功劳。' },
      { type: 'warn', label: '易错', text: '不要把"全反射"和"普通镜面反射"混为一谈。<strong>普通镜面反射总有部分光被吸收或透射，反射率不到 100%；全反射是折射光完全消失，反射率接近 100%。</strong>而且全反射只发生在光从光密到光疏且入射角够大时，镜面反射则任何入射角都有。' }
    ],
    exercises: [
      { type: 'choice', question: '发生全反射必须同时满足的条件是？', options: ['光从光疏射向光密，且入射角大于临界角', '光从光密射向光疏，且入射角大于临界角', '光从光疏射向光密，且入射角小于临界角', '光从光密射向光疏，且入射角小于临界角'], answer: '光从光密射向光疏，且入射角大于临界角', explanation: '全反射有两个缺一不可的条件：第一，光必须从光密介质射向光疏介质；第二，入射角必须大于或等于临界角。两个条件同时成立才会发生全反射。光从光疏射向光密无论入射角多大都不会全反射，所以 A、C 错；入射角小于临界角时仍有折射光，D 也错。' },
      { type: 'choice', question: '光从水中射向空气，水的临界角约为 48.8°，下列说法正确的是？', options: ['入射角 30° 时发生全反射', '入射角 50° 时发生全反射', '入射角再大也不会全反射', '只有入射角等于 90° 才全反射'], answer: '入射角 50° 时发生全反射', explanation: '全反射要求入射角大于或等于临界角 C≈48.8°。入射角 30° 小于 C，只有折射没有全反射，A 错；入射角 50° 大于 C，满足光密（水）射向光疏（空气）且入射角大于临界角，发生全反射，B 正确；C、D 明显错误。' },
      { type: 'choice', question: '光导纤维能远距离传光，主要依靠的是？', options: ['光的直线传播', '界面上的全反射', '光的干涉', '光的衍射'], answer: '界面上的全反射', explanation: '光纤的内芯折射率较大、包层折射率较小，光从内芯射向包层时在界面上发生全反射，被约束在纤芯中沿"之"字形向前传导，几乎不泄漏能量，因此可以传很远。其原理是全反射而非直线传播、干涉或衍射，故选 B。' },
      { type: 'fill', question: '光从折射率为 n 的介质射向真空时，临界角 C 满足 sin C = ___。', answer: '1 / n', explanation: '由折射定律，在临界角时折射角等于 90°、sin90°=1，故 sin C = 1 / n，即 C = arcsin(1/n)。介质折射率 n 越大，临界角越小，越容易发生全反射，例如水的临界角约 48.8°，金刚石约 24.4°。' },
      { type: 'fill', question: '要使光纤发生全反射，内芯的折射率必须___（填"大于"或"小于"）包层的折射率。', answer: '大于', explanation: '全反射要求光从光密介质射向光疏介质，因此光纤内芯必须是光密（折射率较大）、包层是光疏（折射率较小），即内芯折射率大于包层折射率。这样光在芯-包界面上以大角度入射时才能全反射，把光关在纤芯里向前传导。' }
    ]
  });
})();
