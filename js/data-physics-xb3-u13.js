/* ============================================================
 * 高二物理 · 选择性必修 第三册 · 第四章 原子结构和波粒二象性
 * 课时13：氢原子光谱与玻尔模型
 * 数据注入：physics.xb3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb3');
  if (!v) return;

  v.points.push({
    id: 'xb3-u13',
    name: '氢原子光谱与玻尔模型',
    chapter: '选择性必修 第三册 · 第四章 原子结构和波粒二象性',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、氢原子光谱：不连续的亮线' },
      { type: 'paragraph', text: '太阳光或白炽灯的光，经过三棱镜后会铺开成一条连续的彩色光带，红橙黄绿蓝靛紫一应俱全，这叫连续光谱。但如果我们把稀薄的氢气通电发光，再让它经过三棱镜，看到的却不是连续光带，而是几条彼此分开的、特定颜色的亮线。这种只有几条亮线的光谱，叫线状谱。' },
      { type: 'keypoint', label: '重点·氢原子光谱', text: '<strong>氢原子发光产生的不是连续光谱，而是分立的线状谱：只在固定位置出现几条亮线，线之间的位置是暗的。</strong>这说明氢原子只能发出某些特定频率的光，而不能发出任意频率的光。' },
      { type: 'paragraph', text: '为什么是"几条固定亮线"而不是"一片连续光"？这用卢瑟福的核式模型解释不了——按经典理论，绕核运动的电子会不断辐射能量并最终掉进原子核，而且应发出连续的光。丹麦科学家玻尔在1913年站出来，给原子世界立了三条"规矩"。' },
      { type: 'list', items: ['氢原子光谱是线状谱，只有几条特定频率的亮线，不是连续光带', '不同亮线对应不同的波长 λ，位置固定不变', '这种"分立"特征暗示原子内部的能量也是一份一份、不连续的'] },
      { type: 'heading', text: '二、玻尔的三条假设' },
      { type: 'paragraph', text: '玻尔把当时刚出现的量子思想用到原子上。他的第一条假设叫"定态假设"：电子只能在一些特定的圆形轨道上绕核运动，这些轨道上的电子不向外辐射能量，原子处于一系列稳定的能量状态，称为定态。' },
      { type: 'keypoint', label: '重点·假设一 定态', text: '<strong>定态假设：电子只能在一系列特定轨道上运动，处在这些轨道时原子能量稳定，不向外辐射电磁波。</strong>每条允许的轨道对应一个确定的能量值，原子能量只能取这些"台阶"上的值，不能取中间的任意值。' },
      { type: 'paragraph', text: '第二条叫"跃迁假设"：电子并不是在任意两个能量之间平滑变化，而是从一个定态"跳"到另一个定态。这个跳跃过程中，原子会吸收或放出一份能量，表现为一个光子。光子的能量正好等于两个能级之差。' },
      { type: 'keypoint', label: '重点·假设二 跃迁', text: '<strong>跃迁假设：当电子从能量为 Eₘ 的较高能级跃迁到能量为 Eₙ 的较低能级时，放出一个光子，光子能量 hν = Eₘ − Eₙ。</strong>反过来，原子吸收一个能量为 hν 的光子，电子就会从低能级跳到高能级。' },
      { type: 'paragraph', text: '第三条叫"轨道量子化假设"：电子的轨道半径不是连续的，只能取某些特定的数值，就像楼层只能是第1层、第2层，而不能停在1.5层。轨道的角动量（转动的"量"）必须是 h 除以 2π 的整数倍。' },
      { type: 'list', items: ['定态假设：电子在特定轨道上不辐射能量，原子处于稳定能级', '跃迁假设：电子跳层时放出或吸收光子，光子能量 hν = Eₘ − Eₙ', '轨道量子化假设：轨道半径和角动量只能取某些分立值，不能连续'] },
      { type: 'table', headers: ['玻尔假设', '核心意思', '物理结果'], rows: [['定态', '电子在特定轨道上不辐射', '原子能量只能取一系列分立值'], ['跃迁', '电子跳层时放/吸光子', '光子能量 hν = Eₘ − Eₙ，解释线状谱'], ['轨道量子化', '轨道半径不连续', '半径只能是 r₁、4r₁、9r₁……这样的分立值']] },
      { type: 'heading', text: '三、能级公式与基态、激发态' },
      { type: 'paragraph', text: '从这三条假设能推出氢原子的能级公式：第 n 条能级的能量 Eₙ = E₁ / n²，其中 n = 1、2、3……叫量子数。最低的那条能级 E₁ = −13.6 eV，是氢原子能量最小的稳定状态。' },
      { type: 'keypoint', label: '重点·能级公式', text: '<strong>氢原子能级 Eₙ = E₁ / n²，n = 1、2、3……；其中基态能量 E₁ = −13.6 eV。</strong>能级是负数，表示电子被原子核"绑"着；n 越大能级越高（负得越少），能量越接近 0，电子越自由。' },
      { type: 'example', label: '例题·算能级', text: '已知氢原子基态 E₁ = −13.6 eV，求第二能级 E₂ 和第三能级 E₃ 的能量（保留两位小数）。<br><br><strong>解析</strong>：<br>由公式 Eₙ = E₁ / n² 得：<br>E₂ = −13.6 / 2² = −13.6 / 4 = −3.40 eV；<br>E₃ = −13.6 / 3² = −13.6 / 9 ≈ −1.51 eV。<br>可见 n 越大，能级越高（负得越少）。' },
      { type: 'paragraph', text: 'n = 1 时能量最低，叫基态，这是氢原子最安稳的状态。当原子吸收能量（比如被光照、被碰撞），电子就可能跳到 n = 2、3、4……这些更高的能级，这时的状态叫激发态。激发态不稳定，电子会很快跳回低能级，同时放出光子——这就是氢原子发光。' },
      { type: 'warn', label: '易错', text: '<strong>能级是负数，而且"n 越大能级越高"容易弄反。</strong>因为 Eₙ = −13.6 / n² eV，n = 1 时是 −13.6 eV（最低），n = 2 时是 −3.4 eV（更高），n = 3 时是 −1.51 eV（更高）。负得越少其实能量越高，所以电子从 n = 3 跳回 n = 2 是"往低处跳"、放出光子，不是吸收。' },
      { type: 'tip', label: '提示', text: '<strong>区分"发射"和"吸收"看电子往哪跳。</strong>电子从高能级跳到低能级，多出能量以光子形式放出，叫发射光谱（氢原子光谱就是发射谱）；电子从低能级跳到高能级，必须"吃进"一份正好等于能级差的光子，叫吸收光谱。记住：往下跳放光，往上跳吃光。' },
      { type: 'example', label: '例题·发射还是吸收', text: '氢原子中电子从 n = 3 跃迁到 n = 1，这是发射光子还是吸收光子？光子能量是多少 eV？<br><br><strong>解析</strong>：<br>电子从较高能级（n = 3，E₃ ≈ −1.51 eV）跳到较低能级（n = 1，E₁ = −13.6 eV），是往低处跳，所以<strong>放出</strong>光子，属于发射。<br>光子能量 hν = E₃ − E₁ = (−1.51) − (−13.6) = 12.09 eV。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">氢原子光谱：连续谱 vs 线状谱</text><rect x="40" y="70" width="260" height="40" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="170" y="95" font-size="12" fill="#234b45" text-anchor="middle" font-weight="bold">白光：连续彩色光带</text><rect x="40" y="120" width="260" height="14" fill="#4fb3a5"/><rect x="40" y="134" width="260" height="14" fill="#4fb3a5"/><rect x="40" y="148" width="260" height="14" fill="#4fb3a5"/><rect x="40" y="162" width="260" height="14" fill="#4fb3a5"/><text x="170" y="200" font-size="11" fill="#234b45" text-anchor="middle">红 橙 黄 绿 蓝 靛 紫 连续</text><rect x="380" y="70" width="260" height="40" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="510" y="95" font-size="12" fill="#234b45" text-anchor="middle" font-weight="bold">氢光谱：几条亮线</text><rect x="400" y="140" width="14" height="40" fill="#4fb3a5"/><rect x="470" y="140" width="14" height="40" fill="#4fb3a5"/><rect x="550" y="140" width="14" height="40" fill="#4fb3a5"/><rect x="620" y="140" width="14" height="40" fill="#4fb3a5"/><text x="510" y="200" font-size="11" fill="#234b45" text-anchor="middle">亮线间是暗的，分立不连续</text></svg>', caption: '图1　白光是连续光谱，氢气发光却是分立的线状谱。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">玻尔轨道量子化：电子只能在特定圆轨道上</text><circle cx="340" cy="170" r="10" fill="#234b45"/><text x="340" y="200" font-size="11" fill="#234b45" text-anchor="middle" font-weight="bold">核</text><circle cx="340" cy="170" r="50" fill="none" stroke="#2e9e8f" stroke-width="2"/><circle cx="340" cy="170" r="90" fill="none" stroke="#2e9e8f" stroke-width="2"/><circle cx="340" cy="170" r="130" fill="none" stroke="#2e9e8f" stroke-width="2"/><circle cx="390" cy="170" r="9" fill="#4fb3a5"/><circle cx="430" cy="170" r="9" fill="#4fb3a5"/><circle cx="470" cy="170" r="9" fill="#4fb3a5"/><text x="200" y="120" font-size="11" fill="#234b45" text-anchor="middle">n=1</text><text x="160" y="90" font-size="11" fill="#234b45" text-anchor="middle">n=2</text><text x="120" y="70" font-size="11" fill="#234b45" text-anchor="middle">n=3</text></svg>', caption: '图2　玻尔模型中电子只能在半径分立的圆轨道上运动（n=1、2、3……）。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">能级跃迁：往下跳放光，往上跳吃光</text><line x1="120" y1="250" x2="560" y2="250" stroke="#234b45" stroke-width="2"/><line x1="120" y1="250" x2="120" y2="70" stroke="#234b45" stroke-width="2"/><line x1="200" y1="250" x2="200" y2="70" stroke="#2e9e8f" stroke-width="1" stroke-dasharray="4,4"/><line x1="300" y1="250" x2="300" y2="70" stroke="#2e9e8f" stroke-width="1" stroke-dasharray="4,4"/><line x1="400" y1="250" x2="400" y2="70" stroke="#2e9e8f" stroke-width="1" stroke-dasharray="4,4"/><line x1="500" y1="250" x2="500" y2="70" stroke="#2e9e8f" stroke-width="1" stroke-dasharray="4,4"/><circle cx="200" cy="250" r="7" fill="#4fb3a5"/><circle cx="300" cy="200" r="7" fill="#4fb3a5"/><circle cx="400" cy="150" r="7" fill="#4fb3a5"/><circle cx="500" cy="95" r="7" fill="#4fb3a5"/><text x="200" y="270" font-size="11" fill="#234b45" text-anchor="middle">n=1</text><text x="300" y="270" font-size="11" fill="#234b45" text-anchor="middle">n=2</text><text x="400" y="270" font-size="11" fill="#234b45" text-anchor="middle">n=3</text><text x="500" y="270" font-size="11" fill="#234b45" text-anchor="middle">n=4</text><line x1="400" y1="150" x2="200" y2="250" stroke="#234b45" stroke-width="2"/><polygon points="200,250 214,244 210,230" fill="#234b45"/><text x="300" y="190" font-size="11" fill="#234b45" text-anchor="middle">发射 hν=E₃−E₁</text><line x1="300" y1="200" x2="400" y2="150" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><polygon points="400,150 392,162 406,160" fill="#2e9e8f"/><text x="430" y="185" font-size="11" fill="#2e9e8f" text-anchor="middle">吸收</text></svg>', caption: '图3　能级图：电子从高能级跳向低能级放出光子（实线），反之吸收光子（虚线）。' }
    ],
    exercises: [
      { type: 'choice', question: '关于氢原子光谱，下列说法正确的是？', options: ['氢原子发光是连续光谱', '氢原子光谱是分立的线状谱，只有几条特定频率的亮线', '氢原子光谱与白光的光谱完全相同', '氢原子不能发光'], answer: '氢原子光谱是分立的线状谱，只有几条特定频率的亮线', explanation: '氢气放电发光后经过三棱镜，得到的不是连续的彩色光带，而是几条位置固定、彼此分开的亮线，这叫线状谱。它说明氢原子只能发出某些特定频率的光，对应原子内部分立的能级。白光才是连续光谱，二者不同。' },
      { type: 'choice', question: '玻尔跃迁假设中，电子从高能级 Eₘ 跃迁到低能级 Eₙ 时，放出光子的能量满足？', options: ['hν = Eₙ − Eₘ', 'hν = Eₘ − Eₙ', 'hν = Eₘ + Eₙ', 'hν 与能级差无关'], answer: 'hν = Eₘ − Eₙ', explanation: '跃迁假设规定：电子从较高能级 Eₘ 跳到较低能级 Eₙ 时，原子放出一份能量，表现为一个光子，光子能量等于两能级之差，即 hν = Eₘ − Eₙ（因为 Eₘ 高于 Eₙ，所以差值为正）。反过来从低到高跃迁则要吸收能量 hν = Eₙ − Eₘ。' },
      { type: 'choice', question: '氢原子能级公式为 Eₙ = E₁ / n²，基态 E₁ = −13.6 eV。关于能级，正确的是？', options: ['n 越大能级越低', 'n = 2 时 E₂ = −3.4 eV', '基态能量为 0', 'n 越大，能级越负'], answer: 'n = 2 时 E₂ = −3.4 eV', explanation: '由 Eₙ = E₁ / n² 且 E₁ = −13.6 eV 可得 E₂ = −13.6 / 4 = −3.4 eV。能级是负数，n 越大 Eₙ 负得越少、能量越高（而不是越低），基态 n = 1 时能量最低为 −13.6 eV，不是 0。' },
      { type: 'fill', question: '氢原子中电子处于 n = 1 的最低能量稳定状态，叫做___；当电子跳到 n = 2、3 等更高能级时，这些状态叫做___（两空分别填"基态"或"激发态"）。', answer: '基态|激发态', explanation: 'n = 1 时氢原子能量最低、最稳定，叫基态；当原子吸收能量使电子跃迁到 n = 2、3、4 等更高能级时，这些状态统称激发态。激发态不稳定，电子会很快跳回低能级并发出光子。' },
      { type: 'fill', question: '电子从低能级跳到高能级时必须"吃进"一份光子，这过程叫___（填"发射"或"吸收"）光谱；从高能级跳回低能级放出光子的过程叫___（填"发射"或"吸收"）光谱。', answer: '吸收|发射', explanation: '电子从低能级跳到高能级，需要吸收一个能量正好等于能级差的光子，形成吸收光谱；电子从高能级跳回低能级，多余能量以光子形式放出，形成发射光谱。口诀：往下跳放光（发射），往上跳吃光（吸收）。' }
    ]
  });
})();
