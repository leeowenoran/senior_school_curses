/* ============================================================
 * 高二物理 · 选择性必修第一册 · 第四章 光
 * 课时18：光的折射
 * 数据注入：physics.xb1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb1');
  if (!v) return;

  v.points.push({
    id: 'xb1-u18',
    name: '光的折射',
    chapter: '选择性必修第一册 · 第四章 光',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、生活中常见的折射现象' },
      { type: 'paragraph', text: '把一根筷子斜插进装水的杯子里，从侧面看，筷子在水面处好像"折断"了，下半截和水面上的部分不在一条直线上。站在岸边看水池，池底看起来比实际的要浅。这些现象都来自同一个原因：光在穿过不同物质时，前进方向发生了弯折。' },
      { type: 'keypoint', label: '重点·什么是折射', text: '<strong>光从一种介质斜着射入另一种介质时，传播方向会发生偏折，这种现象叫作光的折射。</strong>注意必须是"斜射"；如果光垂直射向界面，方向不偏折，只会改变速度。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">筷子斜插水中，在水面处看起来折断了</text><rect x="210" y="70" width="260" height="200" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><rect x="210" y="150" width="260" height="120" fill="#4fb3a5" opacity="0.55"/><text x="340" y="218" font-size="13" fill="#234b45" text-anchor="middle">水</text><line x1="250" y1="50" x2="318" y2="150" stroke="#234b45" stroke-width="4"/><line x1="318" y1="150" x2="430" y2="262" stroke="#234b45" stroke-width="4"/><circle cx="318" cy="150" r="5" fill="#234b45"/><text x="245" y="100" font-size="13" fill="#234b45">实际筷子</text><line x1="250" y1="50" x2="360" y2="118" stroke="#1f7a6e" stroke-width="2" stroke-dasharray="5,4"/><text x="365" y="115" font-size="12" fill="#1f7a6e">眼睛看到的虚像</text><text x="340" y="290" font-size="13" fill="#234b45" text-anchor="middle">光从水进入空气方向偏折，所以筷子看起来折了</text></svg>', caption: '图1　筷子在水面处看起来折断，是因为光从水进入空气时传播方向发生了偏折。' },
      { type: 'heading', text: '二、认识入射角和折射角' },
      { type: 'paragraph', text: '研究折射时，我们先约定几个位置和角。两种介质的分界处叫"界面"。过入射点作一条垂直于界面的虚线，叫"法线"。入射光线与法线的夹角叫"入射角"，折射光线与法线的夹角叫"折射角"。所有角都从法线量起，不是从界面量起。' },
      { type: 'keypoint', label: '重点·法线是关键', text: '<strong>入射角和折射角都是相对于"法线"而言的，不是相对于界面。</strong>法线是一条垂直于界面的辅助线，是判断光线偏折方向的基准，画图时一定要先画法线。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">折射定律示意图：标出入射角 i 与折射角 r</text><line x1="40" y1="170" x2="640" y2="170" stroke="#2e9e8f" stroke-width="3"/><text x="620" y="192" font-size="13" fill="#234b45">界面</text><line x1="340" y1="40" x2="340" y2="300" stroke="#234b45" stroke-width="2" stroke-dasharray="6,4"/><text x="352" y="56" font-size="13" fill="#234b45">法线</text><line x1="170" y1="60" x2="340" y2="170" stroke="#234b45" stroke-width="4"/><text x="190" y="100" font-size="13" fill="#234b45">入射光线</text><line x1="340" y1="170" x2="520" y2="268" stroke="#4fb3a5" stroke-width="4"/><text x="470" y="250" font-size="13" fill="#234b45">折射光线</text><path d="M 340 120 A 50 50 0 0 0 297 145" fill="none" stroke="#1f7a6e" stroke-width="2"/><text x="300" y="118" font-size="14" fill="#1f7a6e">i</text><path d="M 340 212 A 50 50 0 0 0 380 195" fill="none" stroke="#1f7a6e" stroke-width="2"/><text x="350" y="232" font-size="14" fill="#1f7a6e">r</text><text x="340" y="308" font-size="13" fill="#234b45" text-anchor="middle">光从空气斜射入水中，折射角小于入射角，光线向法线偏折</text></svg>', caption: '图2　入射光线、法线、折射光线在同一平面内；入射角 i 与折射角 r 都从法线量起。' },
      { type: 'heading', text: '三、折射定律' },
      { type: 'keypoint', label: '重点·折射定律（斯涅尔定律）', text: '<strong>折射光线、入射光线和法线在同一平面内；折射光线和入射光线分居法线两侧；入射角的正弦与折射角的正弦之比，对不同介质是一个常数。</strong>数学上写成：sin i / sin r = 常数（i 为入射角，r 为折射角）。' },
      { type: 'list', items: ['共面：折射光线、入射光线、法线三条线在同一个平面内', '分居：折射光线和入射光线分别位于法线两侧', '比值恒定：sin i / sin r 的值只由两种介质决定，与入射角大小无关', '光路可逆：若光沿折射光线反向射入，必沿原入射光线射出'] },
      { type: 'example', label: '例题', text: '光从空气斜射入某玻璃，测得入射角 i = 30°，折射角 r = 19.5°。求 sin i / sin r 的值（sin30°=0.5，sin19.5°≈0.334）。<br><br><strong>解析</strong>：<br>sin i / sin r = 0.5 / 0.334 ≈ 1.50。<br>这个比值就是该玻璃相对空气的折射率，说明光进入玻璃后明显向法线偏折。' },
      { type: 'heading', text: '四、折射率 n' },
      { type: 'paragraph', text: '上面那个"常数"很有用，我们给它起个名字叫折射率，记作 n。对"光从真空射入某种介质"这种情况，定义 n = sin i / sin r。它描述了介质对光的"弯曲能力"：n 越大，同样入射角下折射角越小，光线偏折越厉害。真空的折射率规定为 1，空气的折射率非常接近 1（约 1.0003），一般计算时直接取 1。' },
      { type: 'keypoint', label: '重点·折射率公式', text: '<strong>折射率 n = sin i / sin r（光从真空射入该介质）。</strong>它只由介质本身和光的颜色决定，与入射角的大小无关。水的 n 约 1.33，普通玻璃约 1.5。' },
      { type: 'warn', label: '易错', text: '不能把公式写成"n 与 sin i 成正比、与 sin r 成反比"。<strong>n 是介质本身的属性，只要介质不变，无论入射角怎么变，sin i / sin r 这个比值始终不变。</strong>改变入射角，sin i 和 sin r 一起按比例变，比值恒定。' },
      { type: 'tip', label: '提示', text: '<strong>折射率还和光速有关：n = c / v</strong>（c 是真空中光速，v 是光在该介质中的速度）。n 越大，光在介质里跑得越慢。所以"光密介质"里光更慢，"光疏介质"里光更快。' },
      { type: 'table', headers: ['介质', '折射率 n', '光在其中的速度（约）'], rows: [['真空', '1（精确）', '3.0×10⁸ m/s'], ['空气', '约 1.0003', '≈ 3.0×10⁸ m/s'], ['水', '约 1.33', '2.25×10⁸ m/s'], ['普通玻璃', '约 1.50', '2.0×10⁸ m/s'], ['金刚石', '约 2.42', '1.24×10⁸ m/s']] },
      { type: 'heading', text: '五、光疏介质与光密介质' },
      { type: 'paragraph', text: '相对折射率大小，我们把介质分成两类：折射率小的叫光疏介质，折射率大的叫光密介质。注意"疏""密"说的是对光的折射能力，不是指密度大小。例如水的密度比酒精大，但水的折射率（1.33）却比酒精（约 1.36）小，所以水相对酒精是光疏介质。' },
      { type: 'keypoint', label: '重点·光疏与光密', text: '<strong>折射率较小的介质叫光疏介质，折射率较大的叫光密介质。</strong>这是一对相对概念：同一种介质，相对于甲可能是光密，相对于乙又可能是光疏。' },
      { type: 'list', items: ['光从光疏进入光密（n 小→n 大）：折射角小于入射角，光线向法线偏折', '光从光密进入光疏（n 大→n 小）：折射角大于入射角，光线远离法线偏折', '光疏光密看的是折射率，不是物质的密度', '水是空气的"光密"，却是酒精的"光疏"'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">光疏→光密 与 光密→光疏 偏折方向相反</text><rect x="40" y="70" width="280" height="200" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="96" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">光疏→光密（空气→水）</text><line x1="100" y1="150" x2="340" y2="150" stroke="#2e9e8f" stroke-width="3"/><line x1="180" y1="90" x2="180" y2="150" stroke="#234b45" stroke-width="2" stroke-dasharray="5,4"/><line x1="120" y1="105" x2="180" y2="150" stroke="#234b45" stroke-width="3"/><line x1="180" y1="150" x2="255" y2="205" stroke="#4fb3a5" stroke-width="3"/><text x="120" y="100" font-size="12" fill="#234b45">i</text><text x="225" y="200" font-size="12" fill="#4fb3a5">r更小</text><rect x="360" y="70" width="280" height="200" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="96" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">光密→光疏（水→空气）</text><line x1="360" y1="150" x2="600" y2="150" stroke="#2e9e8f" stroke-width="3"/><line x1="500" y1="90" x2="500" y2="150" stroke="#234b45" stroke-width="2" stroke-dasharray="5,4"/><line x1="440" y1="105" x2="500" y2="150" stroke="#234b45" stroke-width="3"/><line x1="500" y1="150" x2="580" y2="215" stroke="#4fb3a5" stroke-width="3"/><text x="455" y="100" font-size="12" fill="#234b45">i</text><text x="540" y="210" font-size="12" fill="#4fb3a5">r更大</text><text x="340" y="306" font-size="13" fill="#234b45" text-anchor="middle">进入光密向法线偏，进入光疏远离法线偏</text></svg>', caption: '图3　光从光疏进入光密向法线偏折，从光密进入光疏远离法线偏折，偏折方向相反。' },
      { type: 'example', label: '例题', text: '某同学认为"水比酒精密度小，所以水是光疏介质"。这句话对吗？<br><br><strong>解析</strong>：<br>不对。光疏、光密是相对于折射率而言的，不是相对于密度。水的折射率约 1.33，酒精约 1.36，所以水相对酒精反而是光疏介质。判断光疏光密必须比较折射率，不能看密度大小。' },
      { type: 'tip', label: '提示', text: '<strong>池水看起来变浅，正是折射的功劳。</strong>池底某点发出的光从水（光密）斜射入空气（光疏）时远离法线偏折，人眼沿反向延长线看，会觉得池底抬高了。这也是为什么看似不深的水池实际上可能更深，下水前一定要小心。' }
    ],
    exercises: [
      { type: 'choice', question: '关于光的折射，下列说法正确的是？', options: ['光从一种介质进入另一种介质，传播方向一定改变', '入射角和折射角都是相对于界面来量的', '光垂直射入界面时，传播方向不偏折', '折射光线和入射光线一定在法线同侧'], answer: '光垂直射入界面时，传播方向不偏折', explanation: '光垂直射向界面时，入射角为 0°，折射角也为 0°，光线沿原方向传播，只是速度改变，方向不偏折，所以 A 错。入射角和折射角都从法线量起，不是从界面量起，B 错。折射光线和入射光线分居法线两侧，不在同侧，D 错。只有 C 正确。' },
      { type: 'choice', question: '光从空气斜射入水中，下列说法正确的是？', options: ['折射角大于入射角', '折射角等于入射角', '折射角小于入射角，光线向法线偏折', '光线远离法线偏折'], answer: '折射角小于入射角，光线向法线偏折', explanation: '空气是光疏介质，水是光密介质。光从光疏进入光密时，折射角小于入射角，折射光线向法线方向偏折。因此 A、B、D 均错误，C 正确。记住口诀："疏到密，向法线"。' },
      { type: 'choice', question: '关于折射率 n，下列说法正确的是？', options: ['n 与入射角 i 成正比', 'n 与折射角 r 成反比', 'n 是介质本身的属性，与入射角无关', '空气的折射率明显大于 1'], answer: 'n 是介质本身的属性，与入射角无关', explanation: '折射率 n = sin i / sin r 是介质对光的折射能力的体现，只由介质种类和光的颜色决定，与入射角大小无关，改变入射角时 sin i 和 sin r 同比例变化，比值不变，故 A、B 错。空气的折射率约为 1.0003，非常接近 1，不能说过大，D 错。只有 C 正确。' },
      { type: 'fill', question: '折射率还可以用光速表示：n = ___ / v，其中 c 是真空中光速，v 是光在该介质中的速度。', answer: 'c', explanation: '折射率与光速的关系是 n = c / v，c 是真空中光速（约 3.0×10⁸ m/s），v 是光在该介质中的速度。介质折射率越大，光在其中传播越慢，例如水 n≈1.33，光在水中的速度约为 2.25×10⁸ m/s。' },
      { type: 'fill', question: '水的折射率约 1.33，酒精的折射率约 1.36，那么水相对酒精是___介质（填"光疏"或"光密"）。', answer: '光疏', explanation: '光疏介质指折射率较小的介质，光密介质指折射率较大的介质。水的折射率 1.33 小于酒精的 1.36，所以水相对酒精是光疏介质。光疏光密看的是折射率，与物质的密度大小没有必然联系。' }
    ]
  });
})();
