/* ============================================================
 * 高三复习 · 计算压轴 · 专题三 热学与近代物理计算
 * 课时13：气体实验定律与理想气体状态方程计算
 * 数据注入：physics.zt5.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt5');
  if (!v) return;

  v.points.push({
    id: 'zt5-u13',
    name: '气体实验定律与理想气体状态方程计算（玻意耳/查理/盖-吕萨克定律、pV/T=常量、液柱/活塞类）',
    chapter: '计算压轴 · 专题三 热学与近代物理计算',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、描述气体状态的三个参量' },
      { type: 'paragraph', text: '要研究气体，先得说清楚它"处在什么状态"。气体的状态用三个量来描述：压强 p、体积 V、温度 T（这里温度必须用热力学温度，单位开尔文，记作 K）。只要这三个量确定了，气体的状态就确定了。在气体定律题里，任何温度都要先换成开尔文：T = t + 273（t 是摄氏度）。' },
      { type: 'list', items: ['压强 p：气体对容器壁的挤压，常用单位帕斯卡(Pa)、标准大气压(atm)，1 atm ≈ 1.01×10⁵ Pa', '体积 V：气体充满整个容器的容积，单位立方米(m³)或升(L)，1 L = 10⁻³ m³', '温度 T：必须用热力学温度 K，T = t + 273；绝对零度是 0 K（即 −273 ℃）'] },
      { type: 'keypoint', label: '重点·状态参量', text: '<strong>气体的状态由压强 p、体积 V、热力学温度 T 三个量共同决定。</strong><br>做题第一步永远是：把摄氏温度换成开尔文 T = t + 273，且压强、体积单位要统一后再代入定律。' },
      { type: 'heading', text: '二、玻意耳定律（温度不变，等温过程）' },
      { type: 'paragraph', text: '当温度保持不变时，一定质量气体的压强和体积成反比。比如用针管吸水后堵住出口，推动活塞让体积变小，你会感觉手越来越费劲，这就是压强变大了。写成公式就是 p₁ × V₁ = p₂ × V₂，也就是说 p × V 的乘积是个常数。' },
      { type: 'keypoint', label: '重点·玻意耳定律', text: '<strong>等温变化：p₁ × V₁ = p₂ × V₂（温度不变，质量不变）。</strong><br>也可以记作 p × V = 常量。在 p–V 图像上，它是一条向下弯的双曲线。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">玻意耳定律：等温线（p–V 图像）</text><rect x="60" y="60" width="560" height="220" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><line x1="90" y1="250" x2="590" y2="250" stroke="#234b45" stroke-width="2"/><line x1="90" y1="70" x2="90" y2="250" stroke="#234b45" stroke-width="2"/><text x="345" y="278" font-size="13" fill="#234b45" text-anchor="middle">体积 V</text><text x="70" y="95" font-size="13" fill="#234b45">压强 p</text><path d="M 150 235 Q 320 150 540 90" stroke="#4fb3a5" stroke-width="3" fill="none"/><circle cx="150" cy="235" r="5" fill="#234b45"/><circle cx="540" cy="90" r="5" fill="#234b45"/><text x="150" y="258" font-size="12" fill="#234b45" text-anchor="middle">状态1</text><text x="540" y="80" font-size="12" fill="#234b45" text-anchor="middle">状态2</text><text x="345" y="300" font-size="13" fill="#234b45" text-anchor="middle">体积变大则压强变小，曲线向右下弯</text></svg>', caption: '图1　玻意耳定律 p–V 图像：温度不变时，体积越大压强越小，呈向下弯的双曲线。' },
      { type: 'heading', text: '三、查理定律（体积不变，等容过程）' },
      { type: 'paragraph', text: '当体积保持不变时，一定质量气体的压强与热力学温度成正比。比如给汽车轮胎打气后停在烈日下，体积几乎没变但温度升高，胎压会明显增大，甚至爆胎，就是查理定律的体现。公式是 p₁/T₁ = p₂/T₂。注意这里 T 必须用开尔文，不能用摄氏度。' },
      { type: 'keypoint', label: '重点·查理定律', text: '<strong>等容变化：p₁/T₁ = p₂/T₂（体积不变）。</strong><br>压强与热力学温度成正比；在 p–T 图像上，它是一条过原点的直线。' },
      { type: 'heading', text: '四、盖-吕萨克定律（压强不变，等压过程）' },
      { type: 'paragraph', text: '当压强保持不变时，一定质量气体的体积与热力学温度成正比。温度越高，气体膨胀得越大。公式是 V₁/T₁ = V₂/T₂。打足气的气球拿到冰箱冷冻室，体积会缩小，就是等压收缩。' },
      { type: 'list', items: ['玻意耳：温度不变，p₁V₁ = p₂V₂', '查理：体积不变，p₁/T₁ = p₂/T₂', '盖-吕萨克：压强不变，V₁/T₁ = V₂/T₂', '三条定律都要求"质量不变"，这是前提条件'] },
      { type: 'warn', label: '易错', text: '<strong>查理定律和盖-吕萨克定律里的温度 T 必须是热力学温度（开尔文），不能直接用摄氏度代入分式！</strong><br>例如把 27 ℃ 代入，要先算 T = 27 + 273 = 300 K。若温度用摄氏度，会出现"除以 0"或比例错的低级失误。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">盖-吕萨克定律：等压线（V–T 图像）</text><rect x="60" y="60" width="560" height="220" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><line x1="110" y1="250" x2="590" y2="250" stroke="#234b45" stroke-width="2"/><line x1="110" y1="70" x2="110" y2="250" stroke="#234b45" stroke-width="2"/><text x="345" y="278" font-size="13" fill="#234b45" text-anchor="middle">热力学温度 T</text><text x="92" y="95" font-size="13" fill="#234b45">体积 V</text><line x1="110" y1="250" x2="560" y2="80" stroke="#4fb3a5" stroke-width="3"/><circle cx="230" cy="206" r="5" fill="#234b45"/><circle cx="450" cy="120" r="5" fill="#234b45"/><text x="230" y="228" font-size="12" fill="#234b45" text-anchor="middle">状态1</text><text x="450" y="112" font-size="12" fill="#234b45" text-anchor="middle">状态2</text><text x="345" y="300" font-size="13" fill="#234b45" text-anchor="middle">过原点直线：温度越高体积越大</text></svg>', caption: '图2　盖-吕萨克定律 V–T 图像：压强不变时，体积与热力学温度成正比，是过原点的直线。' },
      { type: 'heading', text: '五、理想气体状态方程（万能公式）' },
      { type: 'paragraph', text: '三条实验定律其实可以统一成一个公式：对于任意两个状态，p₁ × V₁ / T₁ = p₂ × V₂ / T₂，这个值对一定质量的气体是恒定的，叫理想气体状态方程。只要知道初末状态的其中五个量，就能求第六个量，不用管中间经过了什么过程，非常方便。' },
      { type: 'keypoint', label: '重点·状态方程', text: '<strong>理想气体状态方程：p₁ × V₁ / T₁ = p₂ × V₂ / T₂（质量不变）。</strong><br>当某一个参量不变时，它就退化为对应的实验定律，是解题的"万能钥匙"。' },
      { type: 'example', label: '例题·活塞类计算', text: '例：某气缸内封闭一定质量气体，初始压强 p₁ = 1.0×10⁵ Pa、体积 V₁ = 2.0 L、温度 t₁ = 27 ℃。缓慢加热使温度升高到 t₂ = 127 ℃，同时活塞自由移动使压强保持不变。求末态体积 V₂。<br><strong>解析</strong>：先换算温度 T₁ = 27 + 273 = 300 K，T₂ = 127 + 273 = 400 K。压强不变用盖-吕萨克定律：V₁/T₁ = V₂/T₂，得 V₂ = V₁ × T₂ / T₁ = 2.0 × 400 / 300 ≈ 2.67 L。' },
      { type: 'table', headers: ['定律', '条件', '公式', '图像形状'], rows: [['玻意耳', '温度不变', 'p₁V₁ = p₂V₂', 'p–V 双曲线'], ['查理', '体积不变', 'p₁/T₁ = p₂/T₂', 'p–T 过原点直线'], ['盖-吕萨克', '压强不变', 'V₁/T₁ = V₂/T₂', 'V–T 过原点直线'], ['状态方程', '质量不变', 'p₁V₁/T₁ = p₂V₂/T₂', '统一形式']] },
      { type: 'heading', text: '六、液柱与活塞类问题的压强处理' },
      { type: 'paragraph', text: '实际题目常出现"U 形管液柱"或"活塞"。这类题的关键是把状态参量中的压强 p 算对。静止液柱产生的压强 Δp = ρ × g × h（ρ 是液体密度，h 是液柱高度差）。开口端通常是大气压 p₀。活塞平衡时，两侧气体压强通过活塞受力平衡相联系。' },
      { type: 'list', items: ['液柱问题：某处压强 = 大气压 p₀ ± ρgh（向下加深加，向上减）', '活塞问题：活塞受力平衡，列出 p左S = p右S + 重力/外力', '水银密度 ρ = 13.6×10³ kg/m³，1 cmHg ≈ 1333 Pa', '同一水平液面处压强相等，常用来找液柱两侧压强关系'] },
      { type: 'warn', label: '易错', text: '<strong>液柱高度差 h 要换算成米再算压强，且 Δp = ρgh 中的 g 取 9.8 或 10 N/kg 要看题目约定。</strong><br>常见错是把"cmHg"直接当 Pa 用。例如 76 cmHg 对应约 1.01×10⁵ Pa，不是 76 Pa。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">液柱类：U 形管两侧压强关系</text><rect x="120" y="80" width="40" height="160" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><rect x="320" y="120" width="40" height="120" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><rect x="200" y="100" width="120" height="20" fill="#4fb3a5"/><text x="260" y="95" font-size="12" fill="#234b45" text-anchor="middle">h 液柱高度差</text><text x="140" y="255" font-size="12" fill="#234b45" text-anchor="middle">左侧 p₁</text><text x="340" y="255" font-size="12" fill="#234b45" text-anchor="middle">右侧 p₂</text><text x="260" y="290" font-size="13" fill="#234b45" text-anchor="middle">同一水平面压强相等：p₁ = p₂ ± ρgh</text><line x1="200" y1="150" x2="200" y2="150" stroke="#234b45" stroke-width="2"/><text x="500" y="160" font-size="13" fill="#234b45">Δp = ρgh</text><text x="500" y="184" font-size="13" fill="#234b45">h 是两侧液面高度差</text></svg>', caption: '图3　U 形管液柱问题：取同一水平液面，两侧压强相等，借此建立 p₁ 与 p₂ 的关系。' },
      { type: 'tip', label: '提示', text: '<strong>解题四步法：一画状态图、二标 pVT、三统一单位、四列方程。</strong><br>把初末状态画出来，分别在旁边写出 p、V、T；温度统一成 K；压强统一成 Pa；体积统一成 m³（或都用 L 也行，但要前后一致）；最后代入对应的定律或状态方程。' },
      { type: 'example', label: '例题·液柱等温', text: '例：一端封闭、一端开口的均匀细玻璃管，竖直放置，开口向下，管内水银柱长 h = 19 cm，封闭气柱长 L₁ = 20 cm。已知大气压 p₀ = 76 cmHg，温度不变。将管缓慢倒转成开口向上，求稳定后气柱长度 L₂。<br><strong>解析</strong>：初态开口向下，气体压强 p₁ = p₀ − h = 76 − 19 = 57 cmHg，V₁ ∝ L₁ = 20。倒转后开口向上，p₂ = p₀ + h = 76 + 19 = 95 cmHg。等温用玻意耳定律 p₁L₁ = p₂L₂，得 L₂ = 57×20/95 = 12 cm。' },
      { type: 'paragraph', text: '这一节把三条实验定律和状态方程串成一条线：质量不变的前提下，状态方程包揽一切；遇到具体过程再退化成对应定律。液柱和活塞题只是多了一步"压强怎么算"的功夫，状态方程本身不变。' }
    ],
    exercises: [
      { type: 'choice', question: '一定质量气体做等温变化，初态 p₁=1.0×10⁵ Pa、V₁=2.0 L，末态体积变为 V₂=4.0 L，则末态压强 p₂ 为？', options: ['2.0×10⁵ Pa', '0.5×10⁵ Pa', '4.0×10⁵ Pa', '1.0×10⁵ Pa'], answer: '0.5×10⁵ Pa', explanation: '等温变化用玻意耳定律 p₁V₁ = p₂V₂。代入 1.0×10⁵ × 2.0 = p₂ × 4.0，得 p₂ = 2.0/4.0 × 10⁵ = 0.5×10⁵ Pa。体积变为原来的 2 倍，压强变为原来的 1/2，符合反比关系。' },
      { type: 'choice', question: '关于查理定律 p₁/T₁ = p₂/T₂，下列说法中正确的是？', options: ['T 可以用摄氏度', '适用条件是体积不变', '适用条件是压强不变', '温度用摄氏度时公式依然成立'], answer: '适用条件是体积不变', explanation: '查理定律的适用条件是气体体积保持不变（等容过程），公式为 p₁/T₁ = p₂/T₂，且 T 必须是热力学温度（开尔文），不能用摄氏度。若用摄氏度，比例会出错，所以"T 可以用摄氏度"和"用摄氏度依然成立"都是错的。' },
      { type: 'choice', question: '理想气体状态方程 p₁V₁/T₁ = p₂V₂/T₂ 的使用前提是？', options: ['气体质量不变', '温度必须不变', '压强必须不变', '体积必须不变'], answer: '气体质量不变', explanation: '理想气体状态方程描述的是同一部分气体（质量不变）在两个状态之间的 p、V、T 关系。当某个参量不变时会退化成对应实验定律，但它本身并不要求温度、压强或体积中哪一个保持不变，唯一前提是气体质量不变。' },
      { type: 'fill', question: '竖直放置、开口向下的细玻璃管，管内水银柱长 h = 19 cm，大气压 p₀ = 76 cmHg，则封闭气体的压强 p = ___ cmHg。', answer: '57', explanation: '开口向下时，封闭气体压强等于大气压减去水银柱产生的压强，即 p = p₀ − h = 76 − 19 = 57 cmHg。注意单位用 cmHg 可直接相减，若换 Pa 需再乘换算系数。' },
      { type: 'fill', question: '某气体初态 T₁ = 300 K，加热后 T₂ = 450 K，压强保持不变，若初态体积 V₁ = 2.0 L，则末态体积 V₂ = ___ L（保留两位有效数字）。', answer: '3.0', explanation: '压强不变用盖-吕萨克定律 V₁/T₁ = V₂/T₂。代入 V₂ = V₁ × T₂ / T₁ = 2.0 × 450 / 300 = 3.0 L。计算时温度必须用开尔文，这里已给出 K，直接代入即可。' }
    ]
  });
})();
