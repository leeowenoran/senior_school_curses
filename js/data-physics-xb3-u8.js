/* ============================================================
 * 高二物理 · 选择性必修 第三册 · 第二章 气体、固体和液体
 * 课时8：液体
 * 数据注入：physics.xb3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb3');
  if (!v) return;

  v.points.push({
    id: 'xb3-u8',
    name: '液体',
    chapter: '选择性必修 第三册 · 第二章 气体、固体和液体',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、液体的表面张力现象' },
      { type: 'paragraph', text: '你一定见过清晨草叶上的露珠是圆滚滚的小球，也见过小虫子能稳稳地站在水面上。这些奇怪的现象，都和液体表面一种特殊的"拉力"有关。液体内部的分子被周围同伴包围，各方向拉力差不多抵消；可液体最表面那薄薄一层分子，下面有同伴拉它，上面是空气几乎没有分子拉它，于是表面分子被"往里"拽。结果整张液面像绷紧的橡皮膜一样，总想把自己缩到最小。' },
      { type: 'keypoint', label: '重点·什么是表面张力', text: '<strong>液体表面层由于分子间的相互吸引，使液面具有收缩到最小面积的趋势，这种作用在液体表面的拉力就叫表面张力。</strong>它让自由下落的水珠、荷叶上的水都尽量变成球形，因为同样体积下球面的表面积最小。' },
      { type: 'list', items: ['表面分子被下方液体分子向内拉，使液面像绷紧的薄膜', '表面张力总使液面收缩到面积最小，所以小水珠呈球形', '表面张力能托住轻小物体，比如小心平放的硬币可以浮在水面', '温度越高，分子运动越剧烈，表面张力通常会变小'] },
      { type: 'example', label: '例题·硬币为什么能浮在水面', text: '把一枚干净的一元硬币轻轻平放在水面上，它会浮着而不下沉，这是怎么回事？<br><br><strong>解析</strong>：<br>硬币本身比同体积的水重，按说会沉。但水面有一层由表面张力绷紧的"膜"，只要硬币放得够平、不戳破这层膜，表面张力就能向上托住它，使它短暂浮在水面。这也说明液体表面确实存在一种向内收缩的拉力。' },
      { type: 'paragraph', text: '表面张力无处不在：洗手液、肥皂水能吹出泡泡，正是因为表面张力把液膜拉成球状薄壳；刚倒满的啤酒杯口会微微鼓起一小包也不溢出，也是表面张力在"撑着"。但表面张力很弱，轻轻一戳或硬币放歪了就会破，可别误以为液体表面是硬壳。' },
      { type: 'heading', text: '二、浸润与不浸润' },
      { type: 'paragraph', text: '把水滴在玻璃板上，水会摊开成薄薄一层；把水滴在蜡纸上，水却缩成一颗小水珠滚来滚去。同样都是水，在不同固体表面表现完全不同，这就是"浸润"与"不浸润"的区别。它取决于液体分子和固体分子之间"吸引"与液体内部"吸引"谁更强。' },
      { type: 'keypoint', label: '重点·浸润与不浸润', text: '<strong>如果液体分子与固体分子间的吸引比液体内部分子间的吸引更强，液体就会贴着固体铺开，这叫浸润（如水和玻璃）。</strong>反之，若液体内部吸引更强，液体就会缩成球状、不贴固体，这叫不浸润（如水和蜡纸、水银和玻璃）。' },
      { type: 'list', items: ['浸润：液体能沿固体表面铺开，附着层有"扩展"趋势，如水滴在干净玻璃上', '不浸润：液体在固体表面缩成球状，附着层有"收缩"趋势，如水银在玻璃上', '同一种液体对不同固体，可能浸润也可能不浸润', '同一种固体对不同液体，浸润情况也不同，关键看两种分子谁吸引更强'] },
      { type: 'table', headers: ['液体与固体', '是否浸润', '接触角特点', '生活例子'], rows: [['水与干净玻璃', '浸润', '接触角小于90°，水贴着玻璃摊开', '玻璃窗上的水痕会铺开'], ['水与蜡纸', '不浸润', '接触角大于90°，水缩成水珠', '雨衣、荷叶上的水珠滚动'], ['水银与玻璃', '不浸润', '水银缩成亮球，不沾玻璃', '温度计里的水银柱'], ['水银与铜', '浸润', '水银能在铜表面铺展', '某些金属焊接前的处理']] },
      { type: 'heading', text: '三、毛细现象' },
      { type: 'paragraph', text: '把细玻璃管插进装水的杯子，你会看到管子里的水面比杯子里的液面高出一截；换成细玻璃管插进水银，管子里的水银面反而比外面低下去一截。这种细管里液面自动上升或下降的现象，叫做毛细现象。"毛细"就是"很细的管子"的意思。' },
      { type: 'keypoint', label: '重点·毛细现象的规律', text: '<strong>浸润液体在细管中液面上升，不浸润液体在细管中液面下降，这种现象叫毛细现象。</strong>管子越细，上升或下降得越明显。毛巾吸水、砖块返潮、植物根须把水送到高处，都是水在细小缝隙里被"吸"上去的毛细现象。' },
      { type: 'warn', label: '易错', text: '很多同学以为"毛细管里液面一定上升"。<strong>其实只有浸润液体（如水）才会上升；不浸润液体（如水银）在细管里液面反而下降。</strong>升还是降，取决于液体对该固体是浸润还是不浸润，不能一概说"往上吸"。' },
      { type: 'paragraph', text: '毛细现象在生活中帮了大忙：用吸墨纸吸干墨水、用粉笔吸干洒出的水，都是靠纸张和粉笔内部无数的细孔把液体"吸"进来。土壤里的水也是沿着泥沙间的细缝往上爬，才让深层的根也能喝到水。反过来，不浸润原理用来做防水：荷叶、雨衣表面让水不铺开、成珠滚走，就起到了防水的效果。' },
      { type: 'heading', text: '四、液晶' },
      { type: 'paragraph', text: '有一种物质很特别：它像液体一样能流动，却又像晶体一样，在不同方向上性质不一样（比如对光的折射随方向变化）。这种介于液体和晶体之间的状态，叫做液晶。它不是"晶体的液体"，而是物质的一种特殊存在形态，必须在特定温度范围内才出现。' },
      { type: 'keypoint', label: '重点·液晶的特点', text: '<strong>液晶既具有液体的流动性，又具有晶体的各向异性（在不同方向上有不同的光学或电学性质）。</strong>而且它的排列很容易被外加电场、温度改变，从而改变透光情况——这正是液晶显示屏能显示图像的物理基础。' },
      { type: 'example', label: '例题·液晶用在哪里', text: '我们天天看的手机屏、电脑屏大多写着"LCD液晶显示屏"，它利用了液晶的什么性质？<br><br><strong>解析</strong>：<br>液晶在电场作用下，分子排列会改变，从而使它透光或不透光。屏幕背后有光源，控制电路给不同位置的液晶加上不同电压，该亮的地方透光、该暗的地方不透光，拼起来就显示出文字和图像。这靠的正是液晶"流动但各向异性、且排列可被电场调控"的特点。' },
      { type: 'tip', label: '提示', text: '<strong>液晶不是液体和晶体的混合物，而是物质的一种独立状态。</strong>常见的物质三态是固、液、气，液晶可以看作某些物质在固态和液态之间的"中间态"，温度太高会变成普通液体，温度太低会变回普通晶体。' },
      { type: 'tip', label: '提示', text: '<strong>本章三类物质可以这样记：气体分子自由乱飞、最散漫；固体分子排得整齐、最规矩；液体介于中间，而液晶是液体里"排得有点整齐"的特殊成员。</strong>表面张力、毛细现象都来自液体分子间的吸引，液晶则来自它有序又流动的双重性格。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">表面张力让液面收缩，水珠变球形</text><rect x="40" y="60" width="290" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="185" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">露珠呈球形</text><circle cx="185" cy="165" r="52" fill="#4fb3a5"/><text x="185" y="245" font-size="12" fill="#234b45" text-anchor="middle">表面积最小，表面张力使然</text><rect x="350" y="60" width="290" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="495" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">硬币浮在水面</text><rect x="400" y="150" width="190" height="60" fill="#4fb3a5"/><ellipse cx="495" cy="148" rx="110" ry="12" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="495" y="240" font-size="12" fill="#234b45" text-anchor="middle">表面张力像薄膜托住硬币</text></svg>', caption: '图1　表面张力使自由液面收缩到最小面积：露珠成球形，平放的硬币被"薄膜"托住。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">浸润与不浸润：液体在不同固体上表现不同</text><rect x="40" y="60" width="290" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="185" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">水浸润玻璃</text><rect x="90" y="140" width="190" height="20" fill="#4fb3a5"/><path d="M 90 140 Q 70 130 80 110" fill="none" stroke="#234b45" stroke-width="3"/><path d="M 280 140 Q 300 130 290 110" fill="none" stroke="#234b45" stroke-width="3"/><text x="185" y="245" font-size="12" fill="#234b45" text-anchor="middle">水面贴着玻璃铺开</text><rect x="350" y="60" width="290" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="495" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">水不浸润蜡纸</text><ellipse cx="495" cy="160" rx="60" ry="34" fill="#4fb3a5"/><text x="495" y="245" font-size="12" fill="#234b45" text-anchor="middle">水缩成水珠滚走</text></svg>', caption: '图2　左侧水能浸润玻璃、铺展开；右侧水不浸润蜡纸、缩成水珠。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">毛细现象：浸润液体上升，不浸润液体下降</text><rect x="40" y="60" width="290" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="185" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">水在细管中上升</text><rect x="170" y="100" width="16" height="140" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><rect x="170" y="120" width="16" height="120" fill="#4fb3a5"/><path d="M 170 120 Q 162 112 178 112" fill="none" stroke="#234b45" stroke-width="3"/><path d="M 186 120 Q 194 112 178 112" fill="none" stroke="#234b45" stroke-width="3"/><text x="260" y="160" font-size="12" fill="#234b45">液面上升</text><rect x="350" y="60" width="290" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="495" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">水银在细管中下降</text><rect x="480" y="100" width="16" height="140" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><rect x="480" y="100" width="16" height="100" fill="#4fb3a5"/><path d="M 480 200 Q 472 208 488 208" fill="none" stroke="#234b45" stroke-width="3"/><path d="M 496 200 Q 504 208 488 208" fill="none" stroke="#234b45" stroke-width="3"/><text x="560" y="160" font-size="12" fill="#234b45">液面下降</text></svg>', caption: '图3　浸润的水在细管里液面上升，不浸润的水银在细管里液面下降，都是毛细现象。' }
    ],
    exercises: [
      { type: 'choice', question: '关于液体的表面张力，下列说法正确的是？', options: ['表面张力使液体表面积有收缩到最小的趋势', '表面张力使液体表面积有扩张到最大的趋势', '只有水银才有表面张力', '表面张力只在液体内部存在，表面没有'], answer: '表面张力使液体表面积有收缩到最小的趋势', explanation: '液体表面层的分子受到内部分子的向内吸引，使液面像绷紧的薄膜，总趋势是收缩到最小面积，所以小水珠、露珠都尽量呈球形。一切液体的表面都存在表面张力，并非只有水银才有；它正是作用在表面、而非只在内部。' },
      { type: 'choice', question: '把一滴水分别滴在干净玻璃板和涂蜡的玻璃板上，下列说法正确的是？', options: ['水都能铺开成薄层', '水都缩成水珠滚走', '水在干净玻璃上铺开（浸润），在蜡面上缩成水珠（不浸润）', '水在两种板上表现完全相同'], answer: '水在干净玻璃上铺开（浸润），在蜡面上缩成水珠（不浸润）', explanation: '水对干净玻璃是浸润的，水分子与玻璃分子吸引较强，水会贴着玻璃铺开；水对蜡面是不浸润的，水内部吸引更强，水会缩成水珠。同一种液体对不同固体，浸润或不浸润完全可能不同，所以两种板上的表现不一样。' },
      { type: 'choice', question: '关于毛细现象，下列说法正确的是？', options: ['细管中的液面总是上升的', '只有浸润液体在细管中才会上升，不浸润液体会下降', '毛细现象与浸润与否无关', '管越粗，液面上升或下降越明显'], answer: '只有浸润液体在细管中才会上升，不浸润液体会下降', explanation: '毛细现象中，浸润液体（如水）在细管里液面上升，不浸润液体（如水银）在细管里液面反而下降，升还是降取决于是否浸润，不能说"总是上升"。而且管子越细现象越明显，管越粗越不明显。' },
      { type: 'fill', question: '液晶既具有液体的___性，又具有晶体的各向异性，因而被广泛用于液晶显示屏。', answer: '流动', explanation: '液晶是介于液体和晶体之间的特殊物质状态：它像液体一样能够流动，又像晶体一样在不同方向上性质不同（各向异性），并且其分子排列容易被电场调控从而改变透光情况。正是这种"流动又各向异性"的双重特点，使它成为液晶显示屏的核心材料。' },
      { type: 'fill', question: '把细玻璃管插入水中，管内的水面比管外的水面___（填"高"或"低"），这属于毛细现象。', answer: '高', explanation: '水对玻璃是浸润液体，在细管中液面会沿管壁上升，所以管内水面比管外杯中的水面高出一截，这就是毛细现象。毛巾吸水、植物把水送到高处、土壤水分沿缝隙上爬，都是类似的浸润液体在细小缝隙中上升的例子。' }
    ]
  });
})();
