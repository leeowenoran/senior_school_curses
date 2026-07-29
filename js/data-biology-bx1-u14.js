/* 生物学 · 必修1 分子与细胞 · 第5章 · 课时：第1节 降低化学反应活化能的酶 */
(function () {
  var v = gzGetVolume('biology', 'bx1');
  if (!v) return;
  v.points.push({
    id: 'bx1-u14',
    name: '第1节 降低化学反应活化能的酶',
    chapter: '必修1 分子与细胞 · 第5章 细胞的能量供应和利用',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、酶的发现史：从胃消化到结晶脲酶' },
      { type: 'paragraph', text: '人们对酶的认识，是科学家一步步探究出来的。最早是意大利科学家斯帕兰扎尼用鹰做的实验：他把肉块装在金属小笼里让鹰吞下，一段时间后取出，发现肉块消失了。' },
      { type: 'list', items: ['斯帕兰扎尼：鹰胃有化学性消化作用（肉块不接触机械研磨仍被消化）', '巴斯德认为发酵是活细胞引起的；李比希认为是细胞死亡释放的化学物质', '毕希纳：酵母提取液也能催化发酵，说明起作用的物质来自细胞且能离开细胞', '萨姆纳：从刀豆中分离出脲酶结晶，证明酶是蛋白质', '切赫：发现少数 RNA 也具有催化功能'] },
      { type: 'paragraph', text: '巴斯德（微生物学家）与李比希（化学家）曾激烈争论：发酵到底需要完整的活细胞，还是细胞里的化学物质。毕希纳用不含活细胞的酵母提取液完成发酵，证明起催化作用的是细胞产生的化学物质，动摇了巴斯德的观点。' },
      { type: 'keypoint', label: '重点·酶的本质', text: '<strong>酶是活细胞产生的具有催化作用的有机物，其中绝大多数酶是蛋白质，少数酶是 RNA。</strong>酶在反应前后自身的性质和数量不变，只起加快反应速率的作用。这一结论凝聚了多位科学家上百年的探索。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图1 酶本质的探索历程</text><rect x="40" y="100" width="130" height="80" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="105" y="130" font-size="13" fill="#2e3a22" text-anchor="middle">斯帕兰扎尼</text><text x="105" y="152" font-size="12" fill="#2e3a22" text-anchor="middle">鹰胃消化肉</text><rect x="195" y="100" width="130" height="80" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="260" y="130" font-size="13" fill="#2e3a22" text-anchor="middle">巴斯德/李比希</text><text x="260" y="152" font-size="12" fill="#2e3a22" text-anchor="middle">活细胞/化学物质</text><rect x="350" y="100" width="120" height="80" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="410" y="130" font-size="13" fill="#2e3a22" text-anchor="middle">毕希纳</text><text x="410" y="152" font-size="12" fill="#2e3a22" text-anchor="middle">酿酶提取液</text><rect x="495" y="100" width="140" height="80" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="565" y="130" font-size="13" fill="#2e3a22" text-anchor="middle">萨姆纳/切赫</text><text x="565" y="152" font-size="12" fill="#5aa832" text-anchor="middle" font-weight="bold">蛋白质/RNA酶</text><polygon points="170,140 192,132 192,148" fill="#3f7d1e"/><polygon points="325,140 347,132 347,148" fill="#3f7d1e"/><polygon points="470,140 492,132 492,148" fill="#3f7d1e"/><text x="340" y="245" font-size="13" fill="#2e3a22" text-anchor="middle">结论：酶是活细胞产生的具有催化作用的有机物，多数酶是蛋白质，少数酶是 RNA。</text><text x="340" y="300" font-size="13" fill="#2e3a22" text-anchor="middle">萨姆纳从刀豆中分离出脲酶结晶证明其为蛋白质；切赫发现少数 RNA 也具有催化功能。</text></svg>', caption: '图1　从斯帕兰扎尼到切赫，科学家逐步揭示酶的本质是蛋白质或 RNA。' },
      { type: 'heading', text: '二、酶的作用：降低化学反应的活化能' },
      { type: 'paragraph', text: '分子从常态转变为容易发生化学反应的活跃状态所需要的能量，称为<strong>活化能</strong>。加热、加催化剂都能加快反应，本质都是让更多分子更容易达到活跃状态。' },
      { type: 'example', label: '例题·为什么加酶反应更快', text: '同样滴加过氧化氢，一份加二氧化锰、一份加新鲜肝脏研磨液（含过氧化氢酶）、一份不加，哪份气泡最多？<br>答：加肝脏研磨液的一份气泡最多，因为酶降低活化能的效果比无机催化剂更显著，过氧化氢分解最快；不加任何催化剂的一份分解最慢。说明酶具有高效性。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图2 酶降低化学反应的活化能</text><line x1="120" y1="60" x2="120" y2="250" stroke="#3f7d1e" stroke-width="2"/><line x1="120" y1="250" x2="600" y2="250" stroke="#3f7d1e" stroke-width="2"/><text x="80" y="150" font-size="12" fill="#2e3a22" text-anchor="middle" transform="rotate(-90 80 150)">能量</text><path d="M140,240 Q320,80 580,230" fill="none" stroke="#2e3a22" stroke-width="2"/><path d="M140,240 Q320,150 580,230" fill="none" stroke="#5aa832" stroke-width="3"/><text x="320" y="100" font-size="12" fill="#2e3a22" text-anchor="middle">无酶时活化能高</text><text x="320" y="172" font-size="12" fill="#5aa832" text-anchor="middle" font-weight="bold">加酶后活化能降低</text><text x="350" y="285" font-size="13" fill="#2e3a22" text-anchor="middle">酶通过降低活化能，使反应在温和条件下更快进行。</text></svg>', caption: '图2　酶降低反应所需活化能，使反应更易在温和条件下进行。' },
      { type: 'heading', text: '三、酶的特性：高效性、专一性、作用条件温和' },
      { type: 'paragraph', text: '<strong>高效性</strong>：酶的催化效率大约是无机催化剂的 10⁷—10¹³ 倍。极少量的酶就能催化大量底物，所以细胞内酶含量虽少却作用巨大。' },
      { type: 'paragraph', text: '<strong>专一性</strong>：每一种酶只能催化一种或一类化学反应。就像一把钥匙开一把锁，酶与底物在结构上精准匹配，这保证了细胞代谢有条不紊。' },
      { type: 'list', items: ['淀粉酶只能催化淀粉水解，不能催化蛋白质', '过氧化氢酶只催化过氧化氢分解', '蛋白酶催化蛋白质水解，对不同蛋白质也体现一定选择性'] },
      { type: 'warn', label: '易错·酶不等于激素，且大多为蛋白质', text: '酶是<strong>催化剂</strong>，本身不参与组成产物，反应前后不变；激素是<strong>信号分子</strong>，调节生命活动。另外酶多数是蛋白质，少数是 RNA，不能说酶都是蛋白质。解题时若见酶都是蛋白质、酶都是有机物等绝对说法，要格外警惕。' },
      { type: 'table', headers: ['特性', '含义', '实例'], rows: [['高效性', '催化效率远高于无机催化剂', '过氧化氢酶效率极高'], ['专一性', '一种酶催化一种或一类反应', '淀粉酶只催化淀粉'], ['作用条件温和', '需适宜温度、pH', '高温、强酸强碱失活']] },
      { type: 'example', label: '例题·专一性验证', text: '在 A、B 两支试管中分别加入淀粉溶液和蔗糖溶液，再各加等量淀粉酶，保温后加斐林试剂检测，结果只有 A 管出现砖红色沉淀。这说明了什么？<br>答：淀粉酶只能催化淀粉水解生成还原糖，不能催化蔗糖水解，证明酶具有专一性，即一种酶只能催化一种或一类化学反应。' },
      { type: 'tip', label: '提示·温度与 pH 的影响', text: '酶作用条件温和：每种酶都有<strong>最适温度</strong>和<strong>最适 pH</strong>。偏离最适值活性下降；高温、过酸、过碱会破坏酶的空间结构使其永久失活；低温只是抑制活性，温度恢复后活性可恢复。保存酶制剂通常低温冷藏。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图3 温度、pH 对酶活性的影响</text><line x1="120" y1="60" x2="120" y2="250" stroke="#3f7d1e" stroke-width="2"/><line x1="120" y1="250" x2="600" y2="250" stroke="#3f7d1e" stroke-width="2"/><text x="360" y="285" font-size="12" fill="#2e3a22" text-anchor="middle">温度（或 pH）</text><path d="M150,250 Q330,90 560,250" fill="none" stroke="#5aa832" stroke-width="3"/><line x1="330" y1="90" x2="330" y2="250" stroke="#3f7d1e" stroke-width="1" stroke-dasharray="4"/><text x="330" y="80" font-size="12" fill="#3f7d1e" text-anchor="middle">最适温度/最适 pH</text><text x="350" y="180" font-size="13" fill="#2e3a22" text-anchor="middle">偏高或偏低都使活性下降，高温使酶空间结构破坏而失活。</text></svg>', caption: '图3　酶活性随温度或 pH 呈钟形变化，最适处最高，极端条件失活。' },
      { type: 'heading', text: '四、酶的作用条件温和' },
      { type: 'paragraph', text: '酶促反应需要适宜的外界条件。在最适温度和最适 pH 下活性最高；温度过高会破坏蛋白质空间结构导致酶不可逆失活，而低温仅抑制活性。过酸、过碱同样会使酶变性。因此生物体的酶大多在接近常温常压、接近中性的环境中工作。' }
    ],
    exercises: [
      { type: 'choice', question: '斯帕兰扎尼用金属小笼装肉块让鹰吞下的实验，说明？', options: ['胃只有物理研磨', '胃具有化学性消化作用', '酶是蛋白质', '酶需要高温'], answer: '胃具有化学性消化作用', explanation: '斯帕兰扎尼把肉块放入金属小笼让鹰吞下，一段时间后取出，发现肉块消失。由于肉块不能接触胃的机械研磨，却仍被消化，说明胃液中含能消化肉的化学物质，即存在化学性消化作用。该实验尚未证明酶的化学本质，仅说明胃有化学性消化。因此选胃具有化学性消化作用。' },
      { type: 'choice', question: '关于酶的本质，正确的说法是？', options: ['都是蛋白质', '都是 RNA', '是活细胞产生的具有催化作用的有机物，多数为蛋白质，少数为 RNA', '是分泌到体外的无机物'], answer: '是活细胞产生的具有催化作用的有机物，多数为蛋白质，少数为 RNA', explanation: '酶是活细胞产生的具有催化作用的有机物。萨姆纳证明多数酶是蛋白质（如脲酶结晶），切赫发现少数 RNA 也具有催化功能（核酶）。因此酶并非都是蛋白质，也并非都是 RNA，而是多数为蛋白质、少数为 RNA 的有机物。选该完整描述。' },
      { type: 'choice', question: '下列关于酶特性的说法，错误的是？', options: ['酶具有高效性', '酶具有专一性', '酶在低温下失活', '酶作用条件较温和'], answer: '酶在低温下失活', explanation: '酶具有高效性、专一性，且作用条件较温和。高温、过酸、过碱会破坏酶的空间结构使其永久失活；而低温只是抑制酶的活性，酶的空间结构未被破坏，温度恢复后活性可恢复，并不失活。因此低温下失活这一说法是错误的，选该项。' },
      { type: 'fill', question: '酶催化作用的原理是降低化学反应所需要的___。', answer: '活化能', explanation: '分子从常态转变为容易发生化学反应的活跃状态所需要的能量称为活化能。酶作为催化剂，其作用机制就是显著降低化学反应的活化能，使反应物在温和条件下更易达到活跃状态，从而加快反应速率，但酶本身在反应前后性质和数量不变。所以填活化能。' },
      { type: 'fill', question: '过酸、过碱或高温都会破坏酶的___结构，使酶永久失去活性；而低温只是抑制活性。', answer: '空间', explanation: '酶大多是蛋白质，其催化功能依赖于特定的空间结构。高温、过酸、过碱会破坏蛋白质的空间结构，导致酶不可逆地变性失活；低温仅降低分子运动速率、抑制酶活性，并不破坏空间结构，升温后活性可恢复。因此填空间。' }
    ]
  });
})();
