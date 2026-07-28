/* ============================================================
 * 高二物理 · 选择性必修 第三册 · 第四章 原子结构和波粒二象性
 * 课时15：波粒二象性
 * 数据注入：physics.xb3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb3');
  if (!v) return;

  v.points.push({
    id: 'xb3-u15',
    name: '波粒二象性',
    chapter: '选择性必修 第三册 · 第四章 原子结构和波粒二象性',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、光既有波动性，又有粒子性' },
      { type: 'paragraph', text: '光到底是什么？很长时间里科学家分成两派：一派说光是波，因为光有干涉、衍射，能在水面上"叠出"明暗条纹；另一派说光是粒子，因为光电效应里光像一颗颗"子弹"把电子打出来。后来人们才明白，这两派都对——光既不是纯粹的波，也不是纯粹的粒子，它同时具有波动和粒子的双重身份。' },
      { type: 'keypoint', label: '重点·光的波粒二象性', text: '<strong>光既具有波动性（能干涉、衍射），又具有粒子性（由一份份光子组成，能量 ε = hν）。</strong>这种"既是波又是粒子"的性质，叫光的波粒二象性。在不同实验里，光会表现出不同的一面。' },
      { type: 'paragraph', text: '需要注意的是，光不是"有时候是波、有时候是粒子"两种东西轮流上场，而是它天生就兼有两面。做干涉、衍射实验时，它的波动性更明显；研究光电效应、光子与物质的碰撞时，它的粒子性更突出。' },
      { type: 'list', items: ['波动性证据：光能产生干涉、衍射图样，能在空间叠加出明暗条纹', '粒子性证据：光电效应说明光由能量 ε = hν 的光子组成，一份一份地传递能量', '波粒二象性：光同时具备波动和粒子两种属性，由具体实验条件决定哪面更显著'] },
      { type: 'heading', text: '二、德布罗意物质波' },
      { type: 'paragraph', text: '既然"光"这种一向被当作波的东西也有粒子性，那反过来想：一向被当作粒子的电子、质子，甚至一团灰尘、一个球，会不会也有波动性？1924年，法国青年德布罗意大胆猜测：一切实物粒子都具有波动性。' },
      { type: 'keypoint', label: '重点·德布罗意物质波', text: '<strong>实物粒子也具有波动性，叫物质波（德布罗意波）。其波长 λ = h / p，其中 h 是普朗克常量，p = m v 是粒子的动量。</strong>也就是说，任何运动的粒子都对应一个波长，只是平时太小看不见。' },
      { type: 'paragraph', text: '把 p = m v 代入，物质波波长 λ = h / (m v)。质量 m 越大、速度 v 越快，动量越大，波长就越短。对一个高速电子，波长可以小到和原子尺寸相当，于是就能像光一样发生衍射；可是对一个棒球，波长比原子核还小亿万倍，根本没法观测。' },
      { type: 'warn', label: '易错', text: '<strong>别以为"只有光才有波长、电子没有"。</strong>德布罗意告诉我们，电子、质子乃至任何实物粒子都有波长 λ = h / p。只是宏观物体质量太大，波长小到永远测不出来，才显得"没有波动性"；微观粒子质量小，波长明显，波动性才看得出来。' },
      { type: 'example', label: '例题·算电子波长', text: '一个电子经加速后动量 p = 5.0×10⁻²⁴ kg·m/s，普朗克常量 h = 6.63×10⁻³⁴ J·s，求其物质波波长 λ。<br><br><strong>解析</strong>：<br>由 λ = h / p 得：<br>λ = 6.63×10⁻³⁴ / (5.0×10⁻²⁴) = 1.33×10⁻¹⁰ m，约 0.13 纳米。<br>这个波长和原子间距同数量级，所以电子打在晶体上会出现衍射图样。' },
      { type: 'table', headers: ['对象', '粒子性表现', '波动性表现（波长 λ = h/p）'], rows: [['光子', '光电效应中一份份能量 ε = hν', '干涉、衍射，λ = c / ν'], ['电子', '在电场中受力、有确定动量 p', '电子衍射，λ = h / p'], ['宏观小球', '明显的碰撞、轨迹', '波长极小，波动性测不出']] },
      { type: 'list', items: ['一切运动的实物粒子都有物质波，波长 λ = h / p', '波长由动量决定：动量越大，波长越短', '微观粒子（电子等）波长明显，能观测到衍射；宏观物体波长极小，观测不到'] },
      { type: 'heading', text: '三、电子衍射实验的验证' },
      { type: 'paragraph', text: '猜测不能只靠嘴说，得有实验。1927年，戴维孙和革末把一束电子打在镍晶体上，结果在后面的屏幕上出现了和X射线衍射一模一样的明暗同心圆环。晶体里的原子排得整整齐齐，像一道"光栅"，只有波穿过这种规则结构才会形成衍射环——电子能形成环，就铁证如山地说明电子有波动性。' },
      { type: 'keypoint', label: '重点·实验验证', text: '<strong>电子束射向晶体时产生了衍射图样（明暗相间的同心圆环），这证明电子也具有波动性，德布罗意物质波假说被实验证实。</strong>从此"波粒二象性"不再只是光的性质，而是所有物质共有的性质。' },
      { type: 'example', label: '例题·判断现象', text: '用电子束照射薄晶体后得到一圈圈明暗相间的条纹，这能说明什么？<br><br><strong>解析</strong>：<br>明暗相间的圆环是衍射图样的典型特征，只有波穿过晶体的规则原子阵列才会产生。电子能出现这种图样，说明电子除了粒子性外还具有<strong>波动性</strong>，证实了德布罗意物质波 λ = h / p 的预言。' },
      { type: 'warn', label: '易错', text: '<strong>电子衍射图样不是电子"撞"出来的几何影子。</strong>如果电子只是普通小球，穿过晶体只会留下杂乱无章的点，不会有规则的明暗圆环。出现圆环说明大量电子的落点服从波动的干涉规律——波峰相遇处亮、波峰波谷抵消处暗，这正是波动性的指纹。' },
      { type: 'tip', label: '提示', text: '<strong>记住一句话收尾：万物都有两面。</strong>光有波粒二象性，电子等实物粒子也有；区别只在于谁的波长明显。宏观世界波长太小，我们肉眼只看到"粒子"那一面；深入到原子尺度，波动那一面就藏不住了。这正是量子世界最反直觉也最美妙的地方。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">光的波粒二象性：既是波，又是粒子</text><rect x="40" y="70" width="280" height="170" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="96" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">波动性</text><path d="M 60 170 q 20 -40 40 0 q 20 40 40 0 q 20 -40 40 0 q 20 40 40 0" fill="none" stroke="#2e9e8f" stroke-width="3"/><text x="180" y="225" font-size="12" fill="#234b45" text-anchor="middle">干涉、衍射（如双缝条纹）</text><rect x="360" y="70" width="280" height="170" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="96" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">粒子性</text><circle cx="430" cy="160" r="14" fill="#4fb3a5"/><circle cx="480" cy="160" r="14" fill="#4fb3a5"/><circle cx="530" cy="160" r="14" fill="#4fb3a5"/><circle cx="580" cy="160" r="14" fill="#4fb3a5"/><text x="500" y="225" font-size="12" fill="#234b45" text-anchor="middle">一份份光子 ε = hν（光电效应）</text></svg>', caption: '图1　光同时具有波动性（左，干涉衍射）和粒子性（右，一份份光子）。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">德布罗意物质波：实物粒子也有波长</text><circle cx="180" cy="160" r="22" fill="#4fb3a5"/><text x="180" y="165" font-size="12" fill="#234b45" text-anchor="middle">电子</text><path d="M 240 160 q 30 -50 60 0 q 30 50 60 0 q 30 -50 60 0 q 30 50 60 0" fill="none" stroke="#2e9e8f" stroke-width="3"/><text x="420" y="120" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">λ = h / p</text><text x="420" y="220" font-size="12" fill="#234b45" text-anchor="middle">p = m v 越大，波长 λ 越短</text><text x="340" y="270" font-size="12" fill="#234b45" text-anchor="middle">实物粒子（电子、质子……）也对应一列物质波</text></svg>', caption: '图2　德布罗意物质波：任何实物粒子都对应波长 λ = h / p。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">电子衍射：晶体上出现明暗同心圆环</text><rect x="40" y="70" width="600" height="180" fill="#234b45"/><circle cx="340" cy="160" r="14" fill="#e6f4f1"/><circle cx="340" cy="160" r="34" fill="none" stroke="#e6f4f1" stroke-width="3"/><circle cx="340" cy="160" r="58" fill="none" stroke="#e6f4f1" stroke-width="3"/><circle cx="340" cy="160" r="82" fill="none" stroke="#e6f4f1" stroke-width="3"/><circle cx="340" cy="160" r="106" fill="none" stroke="#e6f4f1" stroke-width="3"/><text x="340" y="268" font-size="12" fill="#234b45" text-anchor="middle">衍射环证明电子具有波动性</text></svg>', caption: '图3　电子束射向晶体后形成的衍射圆环，是电子波动性的直接证据。' }
    ],
    exercises: [
      { type: 'choice', question: '关于光的本性，正确的说法是？', options: ['光只是波，不是粒子', '光只是粒子，不是波', '光同时具有波动性和粒子性，叫波粒二象性', '光既不是波也不是粒子'], answer: '光同时具有波动性和粒子性，叫波粒二象性', explanation: '大量实验表明，光既能产生干涉、衍射（波动性），又在光电效应中表现为一份份能量 ε = hν 的光子（粒子性）。这种双重身份叫光的波粒二象性。它不是有时是波、有时是粒子，而是天生兼具两面，由实验条件决定哪面更突出。' },
      { type: 'choice', question: '德布罗意提出实物粒子也具有波动性，其物质波波长 λ 的表达式是？', options: ['λ = h p', 'λ = h / p', 'λ = p / h', 'λ 与 h、p 都无关'], answer: 'λ = h / p', explanation: '德布罗意假设一切运动的实物粒子都对应一个物质波，波长 λ = h / p，其中 h 是普朗克常量，p = m v 是粒子的动量。动量越大波长越短；宏观物体动量巨大，波长极短而观测不到，微观粒子波长明显才能显现波动性。' },
      { type: 'choice', question: '电子衍射实验（电子束射向晶体出现明暗圆环）最直接证明了？', options: ['电子没有质量', '电子只具有粒子性', '电子也具有波动性', '电子的速度等于光速'], answer: '电子也具有波动性', explanation: '只有波穿过晶体规则原子阵列才会产生明暗相间的衍射圆环。电子束出现这种图样，说明电子除了粒子性外还具有波动性，直接证实了德布罗意物质波 λ = h / p 的预言，表明波粒二象性是一切物质共有的性质，不只光才有。' },
      { type: 'fill', question: '德布罗意物质波波长公式为 λ = h / p，其中 p 表示粒子的___（填"动量"或"能量"），对于质量为 m、速度为 v 的粒子有 p = m v。', answer: '动量', explanation: '公式 λ = h / p 中的 p 是粒子的动量，等于质量乘以速度，即 p = m v。波长由动量决定：动量越大，波长越短。所以宏观物体因质量大、动量大自然波长极短而显现不出波动性，电子等微观粒子波长明显才能观测到衍射。' },
      { type: 'fill', question: '波粒二象性不仅光具有，___（填"实物粒子"或"只有光子"）也具有；电子衍射实验就是它存在波动性的证据。', answer: '实物粒子', explanation: '德布罗意把波粒二象性推广到一切物质：不仅光，电子、质子等实物粒子也都有物质波 λ = h / p。1927年电子衍射实验出现明暗圆环，证实了电子具有波动性，因此波粒二象性是一切运动物质共有的属性，并非光子所独有。' }
    ]
  });
})();
