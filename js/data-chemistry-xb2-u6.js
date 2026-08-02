/* ============================================================
 * 化学 · 选择性必修2 物质结构与性质 · 第二章 分子结构与性质
 * 课时6：共价键
 * 数据注入：chemistry.xb2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'xb2');
  if (!v) return;

  v.points.push({
    id: 'xb2-u6',
    name: '共价键',
    chapter: '选择性必修2 物质结构与性质 · 第二章 分子结构与性质',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、共价键：两个原子“共用”一对电子' },
      { type: 'paragraph', text: '共价键是原子间通过共用电子对形成的相互作用。最简单的例子是氢气 H₂：两个 H 各拿出 1 个电子，凑成一对共用电子，把两个原子核“拉”在一起。可以想象成两个人各伸一只手、紧紧握住，谁也不松手。' },
      { type: 'keypoint', label: '重点·共价键本质', text: '<strong>共价键是原子间通过共用电子对所形成的相互作用，一般发生在非金属原子之间。</strong>成键的两原子都“贡献”电子，电子对为两原子共有。' },
      { type: 'list', items: ['共价键一般形成于非金属原子之间', '每个键通常用一、二、三条短线表示（单键、双键、三键）', '成键原子通过共用电子对使最外层趋于稳定'] },
      { type: 'heading', text: '二、σ 键与 π 键：两种重叠方式' },
      { type: 'paragraph', text: '原子轨道怎么重叠，决定了键的类型。如果两原子的轨道沿键轴方向“头碰头”地迎面重叠，重叠部分绕轴旋转对称，叫 σ 键（sigma 键）；如果两轨道在键轴两侧“肩并肩”地平行重叠，重叠部分呈镜像对称（上下两块），叫 π 键（pi 键）。孤单一根单键都是 σ 键；双键 = 1 个 σ 键 + 1 个 π 键；三键 = 1 个 σ 键 + 2 个 π 键。' },
      { type: 'keypoint', label: '重点·σ 键和 π 键', text: '<strong>σ 键是“头碰头”重叠、呈轴对称，可单独存在、较牢固；π 键是“肩并肩”重叠、呈镜像对称，通常存在于双键或三键中，较易断裂。</strong>' },
      { type: 'list', items: ['单键：1 个 σ 键', '双键：1 个 σ 键 + 1 个 π 键', '三键：1 个 σ 键 + 2 个 π 键'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">σ 键（头碰头）与 π 键（肩并肩）</text><circle cx="180" cy="120" r="40" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><circle cx="260" cy="120" r="40" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><ellipse cx="220" cy="120" rx="20" ry="40" fill="#d98e3a" opacity="0.6"/><text x="220" y="200" font-size="13" fill="#4a3724" text-anchor="middle">σ 键：沿轴头碰头，轴对称</text><circle cx="470" cy="120" r="40" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><circle cx="550" cy="120" r="40" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><ellipse cx="510" cy="80" rx="40" ry="14" fill="#d98e3a" opacity="0.6"/><ellipse cx="510" cy="160" rx="40" ry="14" fill="#d98e3a" opacity="0.6"/><text x="510" y="220" font-size="13" fill="#4a3724" text-anchor="middle">π 键：轴两侧肩并肩，镜像对称</text></svg>', caption: '图1　σ 键沿键轴头碰头重叠（轴对称），π 键在轴两侧肩并肩重叠（上下镜像对称）。' },
      { type: 'heading', text: '三、键参数：衡量键的“强弱”和分子的“形状”' },
      { type: 'paragraph', text: '描述共价键有三个常用参数。键能：断开 1 摩尔某键所需的能量，键能越大键越牢固、分子越稳定。键长：成键两原子核间的平均距离，键长越短通常键越强。键角：分子中两个化学键之间的夹角，它直接决定了分子的空间构型（比如水 H₂O 的键角约 104.5°，所以水是 V 形）。' },
      { type: 'keypoint', label: '重点·三大键参数', text: '<strong>键能越大、键越牢固；键长越短、键越强；键角决定分子的空间形状。</strong>三者合起来，既能判断分子稳不稳定，也能判断分子长什么样。' },
      { type: 'table', headers: ['键参数', '含义', '作用'], rows: [['键能', '断开 1 mol 键所需能量', '越大，键越牢、分子越稳定'], ['键长', '成键两核间的平均距离', '越短，键越强'], ['键角', '两化学键之间的夹角', '决定分子的空间构型']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 290" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="290" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">键参数示例：H₂O 的键角 与 N₂ 的键长/键能</text><circle cx="250" cy="180" r="26" fill="#b5651d"/><text x="250" y="185" font-size="13" fill="#ffffff" text-anchor="middle">O</text><circle cx="150" cy="120" r="22" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="150" y="125" font-size="12" fill="#4a3724" text-anchor="middle">H</text><circle cx="350" cy="120" r="22" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="350" y="125" font-size="12" fill="#4a3724" text-anchor="middle">H</text><line x1="250" y1="180" x2="152" y2="128" stroke="#d98e3a" stroke-width="3"/><line x1="250" y1="180" x2="348" y2="128" stroke="#d98e3a" stroke-width="3"/><path d="M200 165 A 55 55 0 0 1 300 165" fill="none" stroke="#b5651d" stroke-width="1.5"/><text x="250" y="225" font-size="13" fill="#4a3724" text-anchor="middle">H₂O 键角 ≈ 104.5°（V 形）</text><line x1="450" y1="180" x2="560" y2="180" stroke="#d98e3a" stroke-width="6"/><text x="505" y="165" font-size="12" fill="#4a3724" text-anchor="middle">N≡N</text><text x="505" y="215" font-size="13" fill="#4a3724" text-anchor="middle">三键：键长短、键能很大</text></svg>', caption: '图2　H₂O 因键角约 104.5° 呈 V 形；N₂ 的三键键长短、键能大，所以氮气很稳定。' },
      { type: 'heading', text: '四、极性键与非极性键：电子对被“抢”偏了吗' },
      { type: 'paragraph', text: '看成键两原子是不是“势均力敌”。如果两个原子相同（如 H₂、O₂、N₂），吸引电子能力一样，共用电子对不偏向任何一方，就是非极性共价键；如果两个原子不同（如 H–Cl、H–O），电负性有差异，电子对会偏向电负性大的那一边，就是极性共价键。偏向程度越大，键的极性越强。' },
      { type: 'keypoint', label: '重点·判断键的极性', text: '<strong>看成键原子的电负性差：差值为 0 是非极性键；差值不为 0 是极性键，差值越大极性越强。</strong>电子对偏向电负性大的原子，使该端略带负、另一端略带正。' },
      { type: 'list', items: ['非极性键：同种原子之间（H₂、Cl₂、O₂、N₂）', '极性键：不同种原子之间（HCl、H₂O、NH₃）', '共价键的极性是分子是否有极性的重要来源'] },
      { type: 'warn', label: '易错·键极 ≠ 分子极', text: '含有极性键的分子不一定就是极性分子。例如 CO₂ 里 C=O 是极性键，但 CO₂ 是直线形、完全对称，两端极性相互抵消，整体是非极性分子。分子是否极性要看“所有键的极性矢量相加”是否归零。这个坑在 u9 会专门讲，现在先记住：键有极性，分子未必有极性。' },
      { type: 'tip', label: '提示·配位键也是共价键', text: '配位键是一种特殊的共价键：成键的两个电子都来自同一个原子（提供孤电子对），另一个原子只提供空的轨道来“接住”这对电子。一旦形成，配位键和普通共价键没有区别。典型例子：NH₃ 把孤电子对给 H⁺ 形成 NH₄⁺，H₂O 把孤电子对给 H⁺ 形成 H₃O⁺。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">配位键：NH₃ 提供孤电子对，H⁺ 提供空轨道</text><circle cx="200" cy="160" r="34" fill="#b5651d"/><text x="200" y="165" font-size="14" fill="#ffffff" text-anchor="middle">N</text><text x="200" y="120" font-size="13" fill="#d98e3a" text-anchor="middle">孤电子对 :</text><circle cx="120" cy="110" r="20" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="120" y="115" font-size="12" fill="#4a3724" text-anchor="middle">H</text><circle cx="120" cy="215" r="20" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="120" y="220" font-size="12" fill="#4a3724" text-anchor="middle">H</text><circle cx="320" cy="160" r="20" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="320" y="165" font-size="12" fill="#4a3724" text-anchor="middle">H⁺</text><line x1="240" y1="150" x2="300" y2="158" stroke="#b5651d" stroke-width="3"/><polygon points="300,158 290,153 291,163" fill="#b5651d"/><text x="200" y="250" font-size="13" fill="#4a3724" text-anchor="middle">N 的孤对电子进入 H⁺ 空轨道 → NH₄⁺（配位键）</text></svg>', caption: '图3　配位键形成：N 提供孤电子对，H⁺ 提供空轨道，两者共用这对电子生成 NH₄⁺。' },
      { type: 'example', label: '例题·σ 键与 π 键', text: '题目：关于 σ 键和 π 键，下列说法正确的是？<br>A. 单键中既有 σ 键也有 π 键<br>B. 双键含 1 个 σ 键和 1 个 π 键<br>C. π 键比 σ 键更牢固<br>D. 头碰头重叠形成 π 键<br><br><strong>解析</strong>：单键只有 1 个 σ 键；双键 = 1 个 σ 键 + 1 个 π 键；π 键肩并肩重叠、较易断裂，比 σ 键弱；头碰头重叠形成的是 σ 键。所以选 B。' }
    ],
    exercises: [
      { type: 'choice', question: '一个碳碳双键（C=C）中包含的 σ 键和 π 键数量是？', options: ['1σ + 1π', '2σ', '1σ + 2π', '2π'], answer: '1σ + 1π', explanation: '双键由 1 个 σ 键（头碰头重叠）和 1 个 π 键（肩并肩重叠）组成；三键才是 1σ + 2π。所以碳碳双键 = 1σ + 1π，选该项。' },
      { type: 'choice', question: '下列共价键中，属于非极性键的是？', options: ['H–Cl', 'H–O', 'O=O', 'N–H'], answer: 'O=O', explanation: '非极性键存在于同种原子之间，电子对不偏向任何一方。O=O 是两个氧原子之间、电负性相同，是非极性键；H–Cl、H–O、N–H 都是不同原子、存在电负性差，属于极性键。' },
      { type: 'choice', question: '关于配位键，下列说法正确的是？', options: ['两原子各提供 1 个电子', '共用的一对电子都由一个原子提供', '一定只存在于离子化合物中', '只出现在金属单质里'], answer: '共用的一对电子都由一个原子提供', explanation: '配位键是特殊的共价键，共用的一对电子都由同一个原子（提供孤电子对）给出，另一个原子只提供空轨道接受。普通共价键才是双方各出 1 个电子。配位键常见于 NH₄⁺、H₃O⁺ 等，并非只存在于离子或金属中。' },
      { type: 'fill', question: '分子中两个相邻化学键之间的夹角叫做___，它直接决定分子的空间构型（如 H₂O 约 104.5° 呈 V 形）。', answer: '键角', explanation: '键角指分子中两个相邻化学键之间的夹角。键角不同，分子的空间形状就不同，例如水 H₂O 键角约 104.5° 所以是 V 形、二氧化碳键角 180° 所以是直线形。键长是核间距、键能是断键所需能量，都不是“夹角”。' },
      { type: 'fill', question: '配位键中，共用的一对电子全部来自___（填“提供孤电子对的原子”或“提供空轨道的原子”）。', answer: '提供孤电子对的原子', explanation: '配位键的特别之处在于：成键共用的一对电子都由同一个原子提供（该原子有孤电子对），另一个原子只提供接纳电子对的空轨道。形成后这对电子为两原子共有，配位键与普通共价键在性质上并无区别。' }
    ]
  });
})();
