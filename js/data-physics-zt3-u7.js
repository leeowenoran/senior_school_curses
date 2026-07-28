/* ============================================================
 * 高三复习 · 热学与近代物理 · 专题二 气体、固体和液体
 * 课时7：固体、液体与表面张力、饱和汽与湿度
 * 数据注入：physics.zt3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt3');
  if (!v) return;

  v.points.push({
    id: 'zt3-u7',
    name: '固体、液体与表面张力、饱和汽与湿度',
    chapter: '热学与近代物理 · 专题二 气体、固体和液体',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、固体：晶体与非晶体' },
      { type: 'paragraph', text: '固体分为晶体和非晶体。晶体（如食盐、冰、金属、石英）有规则的几何外形、固定的熔点，而且在不同方向性质可能不同（各向异性）；非晶体（如玻璃、橡胶、石蜡、塑料）没有规则外形，也没有固定熔点，各个方向性质相同（各向同性）。' },
      { type: 'list', items: ['晶体：有固定熔点、规则外形、各向异性', '非晶体：无固定熔点、各向同性', '单晶体各向异性明显；多晶体各向同性但仍固定熔点'] },
      { type: 'keypoint', label: '重点·晶体与非晶体', text: '<strong>区分晶体与非晶体的关键看"有无固定熔点"；单晶体各向异性，多晶体各向同性但仍有固定熔点。</strong>熔化时温度持续上升的，是非晶体。' },
      { type: 'heading', text: '二、液体与表面张力' },
      { type: 'paragraph', text: '液体表面像一张绷紧的弹性薄膜，有收缩到最小面积的趋势，这种使表面积缩小的力叫表面张力。成因是：液体表面层的分子比内部分子稀疏，分子间表现为引力，于是表面被"拉紧"，倾向于缩成最小面积（同体积下球形面积最小）。' },
      { type: 'keypoint', label: '重点·表面张力', text: '<strong>表面张力使液体表面积趋于最小；成因是表面层分子间引力。</strong>常见现象：荷叶上的水珠呈球形、小水银珠成球、硬币能浮在水面、湿润的毛笔尖自动收拢。' },
      { type: 'example', label: '例题·表面张力现象', text: '例：为什么荷叶上的水珠、玻璃板上的小水银珠都近似呈球形？<br><strong>解析</strong>：表面张力总是使液体表面积最小。在体积一定时，球形的表面积最小，所以自由状态下的小液滴在表面张力作用下收缩成球形。' },
      { type: 'warn', label: '易错', text: '<strong>表面张力不是外加的"膜"或外力，而是表面层分子之间的引力；它只存在于液体与气体（或另一种互不相溶液体）的交界面，方向沿表面切向，效果是使表面积缩小。</strong>它不会把液体"拉离"容器。' },
      { type: 'heading', text: '三、浸润与不浸润、毛细现象' },
      { type: 'paragraph', text: '液体能否"爬"上固体壁，取决于浸润还是不浸润。水能润湿玻璃（浸润），液面边缘向上弯；水银不润湿玻璃（不浸润），液面边缘向下弯。在很细的管子里，液体因表面张力而上升或下降，叫做毛细现象。' },
      { type: 'list', items: ['浸润：液体沿固体壁上升，液面凹', '不浸润：液体沿壁下降，液面凸', '毛细管越细，液面上升（或下降）越明显'] },
      { type: 'tip', label: '提示', text: '<strong>农田锄松土壤可破坏土壤中的毛细管，减少水分蒸发；毛巾、吸墨纸、灯芯都利用了毛细现象。</strong>浸润与不浸润，本质还是表面张力与附着力的较量。' },
      { type: 'heading', text: '四、饱和汽与湿度' },
      { type: 'paragraph', text: '在密闭容器里，液体不断蒸发变成蒸气，蒸气分子也不断落回液体。当"跑出去"和"落回来"的速率相等时，蒸气密度不再变化，这时容器里的蒸气叫做饱和汽。饱和汽压只与温度有关，温度越高，饱和汽压越大。' },
      { type: 'keypoint', label: '重点·饱和汽', text: '<strong>饱和汽是蒸发与液化达到动态平衡时的蒸气；饱和汽压只由温度决定，与体积无关。</strong>体积变化时，会有蒸气液化或液体蒸发，自动维持饱和状态。' },
      { type: 'table', headers: ['比较项', '饱和汽', '未饱和汽'], rows: [['是否平衡', '达到动态平衡', '尚未平衡'], ['增大体积', '部分汽液化，仍保持饱和', '仍是不饱和汽'], ['饱和汽压', '只由温度决定', '—']] },
      { type: 'example', label: '例题·饱和汽', text: '例：同样温度下，密闭容器中水蒸气已达饱和，若再把容器体积扩大一倍，压强会减半吗？<br><strong>解析</strong>：不会。扩大体积后部分水蒸气液化，直到重新达到饱和，饱和汽压只由温度决定，所以压强不变（仍为该温度下的饱和汽压）。' },
      { type: 'warn', label: '易错', text: '<strong>饱和汽压与体积无关，只由温度决定。</strong>很多人误以为"体积变大压强变小"，但饱和汽会通过液化或蒸发来维持压强不变；只有未饱和汽才近似服从 pV/T = 常量。' },
      { type: 'heading', text: '五、绝对湿度与相对湿度' },
      { type: 'paragraph', text: '空气干不干，要看水汽含量。绝对湿度是空气中水蒸气实际产生的压强；相对湿度是实际水汽压与同温度下饱和水汽压的百分比。相对湿度越小，人感觉越干、水分蒸发越快；相对湿度达到 100% 就结露。' },
      { type: 'keypoint', label: '重点·相对湿度', text: '<strong>相对湿度 = (实际水汽压 / 同温度饱和水汽压) × 100%。</strong>相对湿度 100% 表示空气达到饱和，容易结露（如清晨草叶上的露珠）。' },
      { type: 'list', items: ['绝对湿度 = 空气中水蒸气实际压强', '相对湿度 = 实际水汽压 / 同温度饱和水汽压', '温度降低时饱和汽压减小，相对湿度升高，易结露', '人体舒适感主要取决于相对湿度'] },
      { type: 'tip', label: '提示', text: '<strong>冬天开暖气后相对湿度会下降（暖空气饱和汽压大，同水汽压下相对湿度变低），所以暖气房干燥；梅雨天温度高、水汽多，相对湿度大，感觉闷湿。</strong>' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">晶体与非晶体的外形对比</text><rect x="40" y="60" width="280" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">晶体（如食盐）</text><polygon points="180,110 220,135 220,180 180,205 140,180 140,135" fill="#4fb3a5" stroke="#234b45" stroke-width="2"/><rect x="360" y="60" width="280" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">非晶体（如玻璃）</text><path d="M420,170 q10,-60 60,-40 q50,-10 50,30 q10,50 -40,45 q-60,10 -70,-35 z" fill="#4fb3a5" stroke="#234b45" stroke-width="2"/><text x="340" y="288" font-size="13" fill="#234b45" text-anchor="middle">晶体有规则外形与固定熔点，非晶体没有</text></svg>', caption: '图1　晶体有规则几何外形，非晶体外形不规则。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">表面张力使液滴收缩成球形</text><circle cx="340" cy="160" r="55" fill="#4fb3a5" stroke="#234b45" stroke-width="2"/><line x1="340" y1="105" x2="340" y2="85" stroke="#234b45" stroke-width="2"/><polygon points="335,92 345,92 340,80" fill="#234b45"/><line x1="395" y1="160" x2="415" y2="160" stroke="#234b45" stroke-width="2"/><polygon points="408,155 408,165 420,160" fill="#234b45"/><line x1="340" y1="215" x2="340" y2="235" stroke="#234b45" stroke-width="2"/><polygon points="335,228 345,228 340,240" fill="#234b45"/><text x="340" y="270" font-size="13" fill="#234b45" text-anchor="middle">表面张力沿表面切向拉，使表面积最小 → 球形</text></svg>', caption: '图2　表面张力使液体表面积趋于最小，自由液滴呈球形。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">饱和汽：蒸发与液化达到动态平衡</text><rect x="200" y="200" width="280" height="40" rx="6" fill="#4fb3a5" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="225" font-size="13" fill="#234b45" text-anchor="middle">液体</text><line x1="300" y1="200" x2="300" y2="150" stroke="#234b45" stroke-width="2"/><polygon points="295,158 305,158 300,145" fill="#234b45"/><line x1="400" y1="150" x2="400" y2="200" stroke="#234b45" stroke-width="2"/><polygon points="395,192 405,192 400,205" fill="#234b45"/><text x="300" y="140" font-size="13" fill="#234b45" text-anchor="middle">蒸发 ↑</text><text x="400" y="140" font-size="13" fill="#234b45" text-anchor="middle">↓ 液化</text><text x="340" y="288" font-size="13" fill="#234b45" text-anchor="middle">蒸发速率 = 液化速率 → 动态平衡（饱和汽）</text></svg>', caption: '图3　密闭容器中蒸气达到饱和：蒸发与液化速率相等，形成动态平衡。' }
    ],
    exercises: [
      { type: 'choice', question: '关于晶体与非晶体，下列说法正确的是？', options: ['非晶体也有固定熔点', '晶体有固定熔点', '单晶体各向同性', '玻璃是晶体'], answer: '晶体有固定熔点', explanation: '晶体（单晶体和多晶体）有固定的熔点，熔化时温度保持在熔点不变；非晶体没有固定熔点，熔化时温度持续上升。单晶体各向异性，多晶体各向同性。玻璃属于典型的非晶体，不是晶体。' },
      { type: 'choice', question: '液体表面张力产生的原因是？', options: ['液体受到重力', '液体内部压强', '表面层分子间引力使表面积趋于最小', '大气压力'], answer: '表面层分子间引力使表面积趋于最小', explanation: '液体表面层的分子比内部分子稀疏，分子间表现为引力，使表面像被拉紧的膜，有收缩到最小面积的趋势，这就是表面张力。它使自由液滴呈球形、能让小虫在水面行走。表面张力与重力、大气压无直接关系。' },
      { type: 'choice', question: '对于密闭容器中的饱和汽，其饱和汽压取决于？', options: ['体积', '温度', '液体质量', '容器形状'], answer: '温度', explanation: '饱和汽压是液体与其饱和蒸气达到动态平衡时的压强，它只由温度决定，与体积、液体质量、容器形状都无关。温度越高，分子越容易逃逸，饱和汽压越大。改变体积时会有蒸气液化或液体蒸发来维持饱和，压强不变。' },
      { type: 'fill', question: '相对湿度 = 实际水汽压 / ______ × 100%（填分母含义）。', answer: '同温度饱和水汽压', explanation: '相对湿度定义为空气中实际水汽压与同温度下的饱和水汽压之比，再乘以 100%。它表示空气潮湿的程度：相对湿度 100% 表示达到饱和，容易结露；温度下降时饱和汽压减小，相对湿度升高。' },
      { type: 'fill', question: '表面张力使液体的表面积趋于______（填"最大"或"最小"）。', answer: '最小', explanation: '表面张力是表面层分子间的引力，它使液体表面有收缩的趋势，从而让表面积趋于最小。在体积一定时，球形的表面积最小，所以自由小液滴（水珠、水银珠）在表面张力作用下呈球形。' }
    ]
  });
})();
