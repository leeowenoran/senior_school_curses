/* ============================================================
 * 高二物理 · 选择性必修 第三册 · 第二章 气体、固体和液体
 * 课时5：气体实验定律
 * 数据注入：physics.xb3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb3');
  if (!v) return;

  v.points.push({
    id: 'xb3-u5',
    name: '气体实验定律',
    chapter: '选择性必修 第三册 · 第二章 气体、固体和液体',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、先统一温度单位：热力学温度 K' },
      { type: 'paragraph', text: '前面我们一直用摄氏温度 t，单位是 ℃。但在气体定律里，直接用摄氏温度常常不方便，甚至会算错。科学家专门定义了一种新的温度——热力学温度，用大写字母 T 表示，单位是开尔文，记作 K。两者的关系非常像一个"平移"：热力学温度比摄氏温度整整多了 273。' },
      { type: 'keypoint', label: '重点·温度换算', text: '<strong>热力学温度 T 与摄氏温度 t 的关系：T = 273 + t</strong>（更精确一点是 T = 273.15 + t）。也就是说，0℃ 对应 273 K，100℃ 对应 373 K。后面所有气体定律里的温度，都要代入 T（单位 K），不能直接代入 t（单位 ℃）。' },
      { type: 'paragraph', text: '为什么必须换成 K？因为气体定律描述的是"压强、体积、温度"三者之间的比例关系，而比例关系的"零点"必须是真正的零点。摄氏温度的 0℃ 只是水的冰点，并不是"没有温度"；而热力学温度的 0 K 才是理论上的最低温度。只有用 K，查理定律、盖吕萨克定律才成立。' },
      { type: 'tip', label: '提示', text: '做题时记住一句话：<strong>看到气体定律，先把摄氏温度加 273 换成 K 再代入。</strong>很多同学算错，就是因为把 ℃ 直接代进去了。' },
      { type: 'heading', text: '二、玻意耳定律（质量不变、温度不变，叫等温过程）' },
      { type: 'paragraph', text: '想象一只注射器，堵住出口，推动活塞让体积变小，你会感觉越来越费劲——这是因为体积被压缩后，里面的气体压强变大了。反过来，体积变大，压强就变小。玻意耳定律说的就是这种"温度不变时压强和体积的关系"。' },
      { type: 'keypoint', label: '重点·玻意耳定律', text: '<strong>一定质量的气体，温度保持不变时，压强 p 和体积 V 成反比，即 p₁ × V₁ = p₂ × V₂。</strong>也可以写成 p × V = 常量（一个固定不变的数）。体积变成一半，压强就变成两倍。' },
      { type: 'paragraph', text: '打个比方：同样多的气体分子被关在瓶子里，瓶子越小，分子撞到瓶壁越频繁、越用力，压强就越大。这就是玻意耳定律背后的直观图像。' },
      { type: 'example', label: '例题·用玻意耳定律', text: '一个排球体积 V₁ = 2.0 升，内部压强 p₁ = 1.0 标准大气压。用打气筒把它的体积压到 V₂ = 1.0 升，温度保持不变，求此时压强 p₂。<br><br><strong>解析</strong>：<br>由玻意耳定律 p₁ × V₁ = p₂ × V₂，得<br>p₂ = p₁ × V₁ / V₂ = 1.0 × 2.0 / 1.0 = <strong>2.0 标准大气压</strong>。<br>体积压成原来的一半，压强正好变成两倍，符合反比关系。' },
      { type: 'warn', label: '易错', text: '<strong>玻意耳定律有前提：气体的质量不能变，温度也不能变。</strong>常见错误有两个：一是漏气（质量变了）还硬套公式；二是把摄氏温度直接代进去。另外，压强和体积的乘积"p×V"中的温度必须恒定，如果一边加热一边压缩，就不是等温过程，不能用这条定律。' },
      { type: 'list', items: ['前提：一定质量的气体，温度保持不变（等温）', '结论：p₁ × V₁ = p₂ × V₂，压强和体积成反比', '图像：在 p-V 图上是一条向下弯的曲线（双曲线）', '体积减半，压强就加倍；体积加倍，压强减半'] },
      { type: 'heading', text: '三、查理定律（质量不变、体积不变，叫等容过程）' },
      { type: 'paragraph', text: '把气体封在一个固定的容器里，比如汽车轮胎、密闭的钢瓶，体积 V 不能变。这时如果给气体加热，温度升高，气体的压强就会增大——夏天暴晒的自行车胎容易爆，就是这个道理。查理定律描述"体积不变时压强和温度的关系"。' },
      { type: 'keypoint', label: '重点·查理定律', text: '<strong>一定质量的气体，体积保持不变时，压强 p 和热力学温度 T 成正比，即 p₁/T₁ = p₂/T₂。</strong>也可写成 p/T = 常量。注意这里的 T 必须用 K，不能用 ℃。' },
      { type: 'list', items: ['前提：一定质量的气体，体积保持不变（等容）', '结论：p₁/T₁ = p₂/T₂，压强和温度（K）成正比', '温度升高到两倍（按 K 算），压强也增大到两倍', '图像：在 p-T 图上是一条过原点的倾斜直线'] },
      { type: 'warn', label: '易错', text: '<strong>查理定律里的温度必须是热力学温度 T（K）。</strong>如果用摄氏温度 t，会得到"p 和 t 成正比"的错误结论，而且图像不过原点。只有用 K，压强才真正和温度成正比，图像才是一条从 0 K 出发的直线。' },
      { type: 'heading', text: '四、盖吕萨克定律（质量不变、压强不变，叫等压过程）' },
      { type: 'paragraph', text: '给一个气球加热，你会看到它鼓得更大；冷却之后又缩回去。如果让气体在一个可以滑动的活塞里受热膨胀，同时保证外界压强不变，那么体积就会随温度升高而变大。盖吕萨克定律描述"压强不变时体积和温度的关系"。' },
      { type: 'keypoint', label: '重点·盖吕萨克定律', text: '<strong>一定质量的气体，压强保持不变时，体积 V 和热力学温度 T 成正比，即 V₁/T₁ = V₂/T₂。</strong>也可写成 V/T = 常量。同样，T 必须用 K。' },
      { type: 'list', items: ['前提：一定质量的气体，压强保持不变（等压）', '结论：V₁/T₁ = V₂/T₂，体积和温度（K）成正比', '温度加倍（按 K 算），体积也加倍', '图像：在 V-T 图上是一条过原点的倾斜直线'] },
      { type: 'table', headers: ['定律名称', '不变的量（前提）', '公式', '图像形状'], rows: [['玻意耳定律', '温度 T 不变（等温）', 'p₁ × V₁ = p₂ × V₂', 'p-V 图：向下弯的双曲线'], ['查理定律', '体积 V 不变（等容）', 'p₁/T₁ = p₂/T₂', 'p-T 图：过原点的直线'], ['盖吕萨克定律', '压强 p 不变（等压）', 'V₁/T₁ = V₂/T₂', 'V-T 图：过原点的直线']] },
      { type: 'tip', label: '提示', text: '<strong>三条实验定律都只在"气体质量不变"时成立，温度一律用 K。</strong>它们的区别只在于"哪个量保持不变"：玻意耳是温度不变，查理是体积不变，盖吕萨克是压强不变。先把前提条件看准，再选公式。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">玻意耳定律：温度不变，p 与 V 成反比（双曲线）</text><line x1="90" y1="250" x2="620" y2="250" stroke="#234b45" stroke-width="2"/><line x1="90" y1="250" x2="90" y2="50" stroke="#234b45" stroke-width="2"/><polygon points="620,250 608,244 608,256" fill="#234b45"/><polygon points="90,50 84,62 96,62" fill="#234b45"/><text x="610" y="270" font-size="13" fill="#234b45">体积 V</text><text x="70" y="46" font-size="13" fill="#234b45">压强 p</text><polyline points="120,55 210,150 300,185 390,200 480,212 570,222" fill="none" stroke="#2e9e8f" stroke-width="3"/><circle cx="120" cy="55" r="5" fill="#4fb3a5"/><circle cx="210" cy="150" r="5" fill="#4fb3a5"/><circle cx="300" cy="185" r="5" fill="#4fb3a5"/><circle cx="390" cy="200" r="5" fill="#4fb3a5"/><text x="340" y="285" font-size="13" fill="#234b45" text-anchor="middle">体积变小，压强变大；体积变大，压强变小</text></svg>', caption: '图1　玻意耳定律的 p-V 图像是一条向下弯的曲线，表示压强和体积成反比。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">查理定律：体积不变，p 与 T(K) 成正比（过原点直线）</text><line x1="90" y1="250" x2="620" y2="250" stroke="#234b45" stroke-width="2"/><line x1="90" y1="250" x2="90" y2="50" stroke="#234b45" stroke-width="2"/><polygon points="620,250 608,244 608,256" fill="#234b45"/><polygon points="90,50 84,62 96,62" fill="#234b45"/><text x="610" y="270" font-size="13" fill="#234b45">温度 T(K)</text><text x="70" y="46" font-size="13" fill="#234b45">压强 p</text><line x1="90" y1="250" x2="560" y2="70" stroke="#2e9e8f" stroke-width="3"/><circle cx="325" cy="160" r="5" fill="#4fb3a5"/><circle cx="445" cy="115" r="5" fill="#4fb3a5"/><text x="340" y="285" font-size="13" fill="#234b45" text-anchor="middle">温度升到两倍，压强也升到两倍，直线过 0K 原点</text></svg>', caption: '图2　查理定律的 p-T 图像是一条过原点的直线，压强与热力学温度成正比。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">盖吕萨克定律：压强不变，V 与 T(K) 成正比（过原点直线）</text><line x1="90" y1="250" x2="620" y2="250" stroke="#234b45" stroke-width="2"/><line x1="90" y1="250" x2="90" y2="50" stroke="#234b45" stroke-width="2"/><polygon points="620,250 608,244 608,256" fill="#234b45"/><polygon points="90,50 84,62 96,62" fill="#234b45"/><text x="610" y="270" font-size="13" fill="#234b45">温度 T(K)</text><text x="70" y="46" font-size="13" fill="#234b45">体积 V</text><line x1="90" y1="250" x2="560" y2="70" stroke="#2e9e8f" stroke-width="3"/><circle cx="325" cy="160" r="5" fill="#4fb3a5"/><circle cx="445" cy="115" r="5" fill="#4fb3a5"/><text x="340" y="285" font-size="13" fill="#234b45" text-anchor="middle">温度升到两倍，体积也升到两倍，直线过 0K 原点</text></svg>', caption: '图3　盖吕萨克定律的 V-T 图像也是一条过原点的直线，体积与热力学温度成正比。' }
    ],
    exercises: [
      { type: 'choice', question: '关于热力学温度 T 与摄氏温度 t 的关系，正确的是？', options: ['T = t − 273', 'T = 273 + t', 'T = t / 273', 'T 和 t 没有任何关系'], answer: 'T = 273 + t', explanation: '热力学温度 T（单位 K）与摄氏温度 t（单位 ℃）的关系是 T = 273 + t，更精确是 T = 273.15 + t。例如 0℃ 对应 273 K，100℃ 对应 373 K。气体定律中的温度必须统一用热力学温度 K 代入，不能直接用 ℃。' },
      { type: 'choice', question: '一定质量的气体温度保持不变，体积缩小为原来的一半，则压强变为？', options: ['不变', '变为原来的 2 倍', '变为原来的 1/2', '变为原来的 4 倍'], answer: '变为原来的 2 倍', explanation: '这是玻意耳定律的等温过程：p₁ × V₁ = p₂ × V₂。体积变为原来的一半即 V₂ = V₁/2，代入得 p₂ = p₁ × V₁ / (V₁/2) = 2 × p₁，所以压强变为原来的 2 倍。压强和体积成反比。' },
      { type: 'choice', question: '查理定律描述的是哪种条件下压强与温度的关系？', options: ['温度不变', '体积不变', '压强不变', '质量不变但三个量都变'], answer: '体积不变', explanation: '查理定律的前提是"一定质量的气体，体积保持不变"（等容过程），此时压强 p 与热力学温度 T 成正比：p₁/T₁ = p₂/T₂。玻意耳定律才是温度不变，盖吕萨克定律是压强不变，不要把前提条件记混。' },
      { type: 'fill', question: '一定质量的气体，压强保持不变时，体积 V 与热力学温度 T 成正比，这条定律叫___定律（填"玻意耳""查理"或"盖吕萨克"）。', answer: '盖吕萨克', explanation: '盖吕萨克定律的前提是压强不变（等压过程），公式为 V₁/T₁ = V₂/T₂，体积和热力学温度成正比。玻意耳定律对应温度不变，查理定律对应体积不变，三者靠"哪个量保持不变"来区分。' },
      { type: 'fill', question: '用气体实验定律解题时，温度必须代入热力学温度 T（单位 K），若某气体摄氏温度为 27℃，则代入公式的温度应为 T = ___ K。', answer: '300', explanation: '由 T = 273 + t，摄氏温度 27℃ 对应的热力学温度为 T = 273 + 27 = 300 K。很多同学直接把 27 代进查理定律或盖吕萨克定律的公式，得到错误结果，关键是先用 T = 273 + t 把摄氏温度换算成 K。' }
    ]
  });
})();
