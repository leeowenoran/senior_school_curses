/* ============================================================
 * 高三复习 · 热学与近代物理 · 专题五 原子核
 * 课时1：原子核的组成与天然放射现象（α、β、γ 射线）
 * 数据注入：physics.zt3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt3');
  if (!v) return;

  v.points.push({
    id: 'zt3-u15-l1',
    name: '原子核的组成与天然放射现象（α、β、γ 射线）',
    chapter: '热学与近代物理 · 专题五 原子核',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、原子和原子核是由什么组成的' },
      { type: 'paragraph', text: '我们平常说的"原子"很小很小，但它的内部还有结构。原子中心是一个带正电的原子核，原子核外面有带负电的电子在绕核运动。原子核虽然只占原子体积的极小一部分，却集中了原子几乎全部的质量。' },
      { type: 'keypoint', label: '重点·原子的组成', text: '原子由<strong>原子核</strong>和核外<strong>电子</strong>组成；原子核又由<strong>质子</strong>（带正电）和<strong>中子</strong>（不带电）组成。质子和中子统称<strong>核子</strong>。' },
      { type: 'paragraph', text: '原子核里质子的数目叫"质子数"，它决定了这是哪一种元素（比如质子数为92就是铀）。中子数可以不同，质子数相同、中子数不同的原子互称同位素，例如铀-235 和铀-238 都是铀，只是中子数不同。' },
      { type: 'list', items: [
        '质子数 = 原子序数，决定元素种类',
        '质量数 = 质子数 + 中子数，写在元素符号前面，如铀-238 表示质量数238',
        '中子数 = 质量数 − 质子数',
        '核外电子数在中性原子中等于质子数，所以原子整体不带电'
      ] },
      { type: 'heading', text: '二、什么是天然放射现象' },
      { type: 'paragraph', text: '1896年，法国物理学家贝克勒尔发现铀能自发地放出一种看不见的射线，这种射线能穿透黑纸使照相底片感光。后来居里夫妇又发现了钋和镭也有类似本领。这种某些元素自发地放出射线的现象，就叫天然放射现象。' },
      { type: 'keypoint', label: '重点·天然放射现象', text: '某些元素<strong>自发地</strong>放出射线的现象，叫做天然放射现象。物质放出射线后就变成了别的元素，这个过程叫<strong>衰变</strong>。' },
      { type: 'paragraph', text: '这些射线看不见也摸不着，但可以用仪器探测。科学家把含铀、镭的矿石靠近验电器，发现验电器会放电；让射线穿过磁场，又发现它们分成三束，偏转方向各不相同。于是人们把这三种射线分别命名为 α、β、γ 射线。' },
      { type: 'heading', text: '三、α 射线（阿尔法射线）' },
      { type: 'paragraph', text: 'α 射线实际上是高速飞行的氦原子核，也就是由2个质子和2个中子捆在一起组成的粒子，记做 He-4。它带2个单位正电荷，质量比较大（约是电子质量的7300倍），所以跑得不快，穿透能力最弱，一张纸就能挡住，但电离能力最强——也就是最容易把别的原子"撞"出电荷来。' },
      { type: 'heading', text: '四、β 射线（贝塔射线）' },
      { type: 'paragraph', text: 'β 射线是高速运动的电子流，带1个单位负电荷，质量很小。它的速度接近光速，穿透能力比 α 射线强，能穿透几毫米厚的铝板，但电离能力比 α 射线弱。β 射线中的电子来自原子核内部（中子变成质子时放出的）。' },
      { type: 'heading', text: '五、γ 射线（伽马射线）' },
      { type: 'paragraph', text: 'γ 射线是一种频率很高的电磁波，也就是光子流，不带电，质量为零。它速度就是光速，穿透能力最强，能穿透几厘米厚的铅板，但电离能力最弱。γ 射线常常伴随着 α 或 β 衰变产生，是原子核从高能状态回到低能状态时放出的"多余能量"。' },
      { type: 'example', label: '例题·判断三种射线', text: '把三束射线（α、β、γ）垂直进入匀强磁场，其中一束向左偏、一束向右偏、一束不偏转。问不偏转的是哪种射线？<br><strong>解析</strong>：<br>α 粒子带正电、β 粒子带负电，在磁场中受力方向相反，分别向两侧偏转；γ 射线是光子流、<strong>不带电</strong>，在磁场中不受力，所以不偏转。因此不偏转的是 γ 射线。' },
      { type: 'warn', label: '易错', text: '<strong>三种射线的本质完全不同，不要混为一谈。</strong>α 射线是氦核（He-4），β 射线是电子流，γ 射线是电磁波（光子）。另外，<strong>穿透能力和电离能力正好相反</strong>：α 穿透最弱但电离最强，γ 穿透最强但电离最弱。' },
      { type: 'table', headers: ['种类', '本质', '电荷', '质量（约）', '穿透能力', '电离能力'], rows: [
        ['α 射线', '氦核 He-4', '+2', '4 u', '最弱（纸可挡）', '最强'],
        ['β 射线', '高速电子流', '−1', '约 1/1823 u', '较强（几毫米铝）', '较弱'],
        ['γ 射线', '高频电磁波（光子）', '0', '0', '最强（需厚铅）', '最弱']
      ] },
      { type: 'tip', label: '提示', text: '<strong>记忆口诀：</strong>"α 重 β 轻 γ 无影"——α 质量最大、β 质量很小、γ 没有静止质量；"电离 α 最强、穿透 γ 最强"，做题时用这两句快速判断。' },
      { type: 'list', items: [
        'α 射线贯穿本领弱、电离本领强，对人体内照射危害大（一旦进入体内很难挡）',
        'γ 射线贯穿本领强，常用于工业探伤和医疗杀菌',
        '三种射线都来自原子核，是原子核内部状态变化的表现'
      ] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">原子与原子核的组成</text><rect x="40" y="60" width="280" height="220" rx="14" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="88" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">原子（整体不带电）</text><circle cx="180" cy="180" r="20" fill="#4fb3a5"/><text x="180" y="185" font-size="12" fill="#234b45" text-anchor="middle">核</text><circle cx="252" cy="140" r="5" fill="#234b45"/><circle cx="110" cy="220" r="5" fill="#234b45"/><circle cx="225" cy="232" r="5" fill="#234b45"/><text x="180" y="262" font-size="12" fill="#234b45" text-anchor="middle">核外电子（−）</text><rect x="360" y="60" width="280" height="220" rx="14" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="88" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">原子核</text><circle cx="460" cy="160" r="14" fill="#4fb3a5"/><text x="460" y="164" font-size="11" fill="#234b45" text-anchor="middle">p+</text><circle cx="510" cy="160" r="14" fill="#234b45"/><text x="510" y="164" font-size="11" fill="#e6f4f1" text-anchor="middle">n</text><circle cx="485" cy="210" r="14" fill="#4fb3a5"/><text x="485" y="214" font-size="11" fill="#234b45" text-anchor="middle">p+</text><circle cx="540" cy="210" r="14" fill="#234b45"/><text x="540" y="214" font-size="11" fill="#e6f4f1" text-anchor="middle">n</text><text x="500" y="262" font-size="12" fill="#234b45" text-anchor="middle">质子(+)与中子(n)统称核子</text></svg>', caption: '图1　原子由原子核和核外电子组成；原子核由质子和中子（统称核子）组成。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">三种射线在磁场中的偏转</text><line x1="60" y1="160" x2="620" y2="160" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><text x="60" y="150" font-size="12" fill="#234b45">磁场垂直纸面向里</text><polygon points="220,160 240,152 240,168" fill="#4fb3a5"/><line x1="300" y1="160" x2="230" y2="160" stroke="#4fb3a5" stroke-width="3"/><text x="250" y="180" font-size="13" fill="#234b45" text-anchor="middle">β(−) 左偏</text><polygon points="420,160 440,152 440,168" fill="#234b45"/><line x1="400" y1="160" x2="430" y2="160" stroke="#234b45" stroke-width="3"/><text x="430" y="180" font-size="13" fill="#234b45" text-anchor="middle">α(+) 右偏</text><circle cx="540" cy="160" r="8" fill="#234b45"/><line x1="520" y1="160" x2="600" y2="160" stroke="#234b45" stroke-width="3"/><text x="560" y="180" font-size="13" fill="#234b45" text-anchor="middle">γ(0) 不偏</text></svg>', caption: '图2　α 带正电向右偏、β 带负电向左偏、γ 不带电不偏转，由此区分三种射线。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">三种射线的穿透能力对比</text><rect x="60" y="70" width="40" height="200" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="80" y="290" font-size="12" fill="#234b45" text-anchor="middle">纸</text><rect x="180" y="70" width="40" height="200" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="200" y="290" font-size="12" fill="#234b45" text-anchor="middle">铝板</text><rect x="300" y="70" width="40" height="200" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="320" y="290" font-size="12" fill="#234b45" text-anchor="middle">薄铅</text><rect x="420" y="70" width="40" height="200" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="440" y="290" font-size="12" fill="#234b45" text-anchor="middle">厚铅</text><circle cx="140" cy="120" r="9" fill="#4fb3a5"/><text x="140" y="145" font-size="12" fill="#234b45" text-anchor="middle">α 止步</text><circle cx="260" cy="120" r="9" fill="#234b45"/><text x="260" y="145" font-size="12" fill="#234b45" text-anchor="middle">β 止步</text><circle cx="500" cy="120" r="9" fill="#234b45"/><text x="500" y="145" font-size="12" fill="#234b45" text-anchor="middle">γ 需厚铅</text><text x="340" y="250" font-size="13" fill="#234b45" text-anchor="middle">穿透能力：γ 最强 &gt; β &gt; α 最弱</text></svg>', caption: '图3　穿透能力 α 最弱（一张纸可挡）、β 较强、γ 最强（需厚铅板阻挡）。' }
    ],
    exercises: [
      { type: 'choice', question: '关于原子核的组成，下列说法正确的是？', options: ['原子核由质子和电子组成', '原子核由质子和中子组成', '中子带正电', '质子不带电'], answer: '原子核由质子和中子组成', explanation: '原子核由质子和中子组成，二者统称核子。质子带正电，中子不带电，电子在原子核外运动而不在核内。因此只有"原子核由质子和中子组成"这一说法正确。' },
      { type: 'choice', question: '关于天然放射现象中的三种射线，下列说法正确的是？', options: ['α 射线是高速电子流', 'γ 射线是氦核流', 'β 射线带负电', '三种射线都不带电'], answer: 'β 射线带负电', explanation: 'α 射线是氦核（He-4）流，带正电；β 射线是高速电子流，带负电；γ 射线是电磁波（光子），不带电。所以只有"β 射线带负电"正确。' },
      { type: 'choice', question: '下列射线中穿透能力最强、电离能力最弱的是？', options: ['α 射线', 'β 射线', 'γ 射线', '三种一样'], answer: 'γ 射线', explanation: '三种射线的穿透能力与电离能力大致相反：α 射线质量大、速度慢，穿透最弱但电离最强；γ 射线是光子流，速度光速、不带电，穿透最强但电离最弱。故穿透最强、电离最弱的是 γ 射线。' },
      { type: 'fill', question: '质量数等于质子数与___数之和；若某铀核有92个质子、146个中子，则它的质量数是___。', answer: '中子 | 238', explanation: '质量数 = 质子数 + 中子数。铀核质子数为92、中子数为146，质量数为 92 + 146 = 238，所以记做铀-238。质子数决定元素种类，中子数不同则互为同位素。' },
      { type: 'fill', question: 'α 射线本质是氦核（He-4），带___个单位正电荷；γ 射线本质是___（填"电磁波"或"电子流"），不带电。', answer: '2 | 电磁波', explanation: 'α 粒子由2个质子和2个中子组成，带2个单位正电荷；γ 射线是频率很高的电磁波（光子流），不带电、无静止质量。牢记三种射线的本质区别是解题关键。' }
    ]
  });
})();
