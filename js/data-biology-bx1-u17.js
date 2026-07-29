/* 生物学 · 必修1 分子与细胞 · 第5章 · 课时：第4节 能量之源——光与光合作用 */
(function () {
  var v = gzGetVolume('biology', 'bx1');
  if (!v) return;
  v.points.push({
    id: 'bx1-u17',
    name: '第4节 能量之源——光与光合作用',
    chapter: '必修1 分子与细胞 · 第5章 细胞的能量供应和利用',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、捕获光能的色素' },
      { type: 'paragraph', text: '绿叶中的色素能够捕获太阳光能，是光合作用的第一步。这些色素分布在叶绿体的<strong>类囊体薄膜</strong>上。通过纸层析法可以把绿叶中的色素分离开，在滤纸条上看到四条色素带，从上到下依次是胡萝卜素、叶黄素、叶绿素 a、叶绿素 b。' },
      { type: 'list', items: ['叶绿素 a：呈蓝绿色，是主要的光合色素，能转换光能', '叶绿素 b：呈黄绿色，辅助吸收光能', '胡萝卜素：呈橙黄色，属于类胡萝卜素', '叶黄素：呈黄色，属于类胡萝卜素'] },
      { type: 'heading', text: '二、色素的吸收光谱' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">叶绿体中的色素吸收光谱</text><rect x="40" y="70" width="270" height="180" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="175" y="105" font-size="15" fill="#3f7d1e" text-anchor="middle" font-weight="bold">叶绿素（a、b）</text><text x="175" y="138" font-size="13" fill="#2e3a22" text-anchor="middle">主要吸收红光和蓝紫光</text><text x="175" y="168" font-size="13" fill="#5aa832" text-anchor="middle" font-weight="bold">对绿光吸收最少</text><text x="175" y="198" font-size="13" fill="#2e3a22" text-anchor="middle">所以叶片多呈绿色</text><rect x="370" y="70" width="270" height="180" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="505" y="105" font-size="15" fill="#3f7d1e" text-anchor="middle" font-weight="bold">类胡萝卜素</text><text x="505" y="138" font-size="13" fill="#2e3a22" text-anchor="middle">主要吸收蓝紫光</text><text x="505" y="168" font-size="13" fill="#5aa832" text-anchor="middle" font-weight="bold">保护叶绿素免受强光伤害</text><text x="505" y="198" font-size="13" fill="#2e3a22" text-anchor="middle">包括胡萝卜素和叶黄素</text><text x="340" y="310" font-size="13" fill="#2e3a22" text-anchor="middle">叶绿素合成需要镁（Mg）和光照，缺镁或黑暗中叶片会发黄。</text></svg>', caption: '图1　叶绿素主要吸收红光和蓝紫光，类胡萝卜素主要吸收蓝紫光。' },
      { type: 'paragraph', text: '叶绿素对绿光吸收最少，绿光被反射出来，所以叶片在我们眼里通常是绿色的。叶绿素中含有镁（Mg），因此植物缺镁时叶绿素合成受阻，叶片会发黄。类胡萝卜素还能在强光下保护叶绿素，避免被光氧化破坏。' },
      { type: 'keypoint', label: '重点·光合作用总反应式', text: '<strong>光合作用的总反应式可写为：CO₂ + H₂O →(光能,叶绿体) (CH₂O) + O₂。</strong>其中 (CH₂O) 代表糖类等有机物，反应条件是光能和在叶绿体中进行。可以看出，光合作用把无机物合成为有机物，并把光能转化为储存在有机物中的化学能，同时释放氧气。' },
      { type: 'heading', text: '三、叶绿体是光合作用的场所' },
      { type: 'paragraph', text: '叶绿体是进行光合作用的细胞器，内部有许多由类囊体堆叠形成的<strong>基粒</strong>，类囊体薄膜上有色素和光反应所需的酶；类囊体之间的液体叫<strong>基质</strong>，含有暗反应所需的酶，以及少量的 DNA 和核糖体。' },
      { type: 'table', headers: ['结构', '位置', '主要功能'], rows: [['类囊体薄膜', '基粒中', '分布色素，进行光反应'], ['基质', '类囊体之间', '进行暗反应，含相关酶'], ['基粒', '叶绿体内部', '由类囊体堆叠，扩大膜面积'], ['外膜与内膜', '叶绿体表面', '控制物质进出叶绿体']] },
      { type: 'heading', text: '四、光反应与暗反应' },
      { type: 'paragraph', text: '<strong>光反应</strong>必须在有光的条件下进行，发生在类囊体薄膜上。水在光下被分解产生 [H] 和氧气，同时生成 ATP。光反应把光能转变成活跃的化学能，储存在 ATP 和 [H] 中。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">光反应与暗反应的联系</text><rect x="40" y="80" width="270" height="180" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="175" y="112" font-size="15" fill="#3f7d1e" text-anchor="middle" font-weight="bold">光反应</text><text x="175" y="142" font-size="13" fill="#2e3a22" text-anchor="middle">场所：类囊体薄膜</text><text x="175" y="170" font-size="13" fill="#5aa832" text-anchor="middle" font-weight="bold">水光解产 [H]、O₂、ATP</text><text x="175" y="200" font-size="13" fill="#2e3a22" text-anchor="middle">需要光</text><polygon points="310,170 348,158 348,182" fill="#3f7d1e"/><rect x="370" y="80" width="270" height="180" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="505" y="112" font-size="15" fill="#3f7d1e" text-anchor="middle" font-weight="bold">暗反应</text><text x="505" y="142" font-size="13" fill="#2e3a22" text-anchor="middle">场所：叶绿体基质</text><text x="505" y="170" font-size="13" fill="#5aa832" text-anchor="middle" font-weight="bold">CO₂ 固定、C₃ 还原成糖</text><text x="505" y="200" font-size="13" fill="#2e3a22" text-anchor="middle">不需光，需 ATP 和 [H]</text><text x="340" y="300" font-size="13" fill="#2e3a22" text-anchor="middle">光反应为暗反应提供 ATP 和 [H]；暗反应为光反应补充 ADP 和 Pi。</text></svg>', caption: '图2　光反应在类囊体薄膜、暗反应在基质，二者通过 ATP 与 [H] 相联系。' },
      { type: 'paragraph', text: '<strong>暗反应</strong>（又称碳反应）不需要光直接参与，发生在叶绿体基质中。它先让二氧化碳与五碳化合物结合被固定，形成三碳化合物（C₃），然后利用光反应提供的 ATP 和 [H]，把 C₃ 还原成糖类等有机物，同时再生五碳化合物。' },
      { type: 'list', items: ['光反应必须在光下进行，暗反应有光无光都能进行', '光反应在类囊体薄膜，暗反应在叶绿体基质', '光反应产物 ATP 和 [H] 是暗反应的能量和还原力来源', '暗反应为光反应提供 ADP、Pi 和 NADP⁺，二者相互依赖'] },
      { type: 'warn', label: '易错·产物氧气的来源', text: '很多同学以为光合作用放出的氧气来自二氧化碳，这是错误的。<strong>同位素标记实验证明，光合作用释放的 O₂ 全部来自水（H₂O）的光解</strong>，而不是来自 CO₂。二氧化碳在暗反应中被固定、还原，最终进入糖类等有机物。' },
      { type: 'example', label: '例题·光照停止的影响', text: '若突然停止光照，短时间内叶绿体中 C₃ 和 C₅ 的含量如何变化？<br>答：停止光照后，光反应停止，ATP 和 [H] 供应减少，C₃ 的还原变慢；而 CO₂ 固定仍在进行，C₃ 继续生成。因此 C₃ 含量上升，C₅ 因消耗后难以及时再生而下降。结论是 C₃ 增多、C₅ 减少。' },
      { type: 'heading', text: '五、影响光合作用的因素' },
      { type: 'paragraph', text: '光合速率受多种因素影响，常见的是<strong>光照强度、二氧化碳浓度和温度</strong>。光照增强、CO₂ 浓度提高通常使光合速率上升；温度通过影响酶活性起作用，存在最适温度。农业生产中常通过合理密植、施有机肥、调控温度来提高产量。' },
      { type: 'tip', label: '提示·提高光合产量的办法', text: '大棚种植可增施有机肥（提供 CO₂）、用无色透明薄膜（透过全光谱）、白天适当升温夜间降温。记住：<strong>光是动力、CO₂ 是原料、温度是催化剂</strong>，三者协调才能让作物多制造有机物。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">光照强度对光合速率的影响</text><rect x="60" y="70" width="220" height="160" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="170" y="110" font-size="14" fill="#3f7d1e" text-anchor="middle" font-weight="bold">弱光时</text><text x="170" y="145" font-size="13" fill="#2e3a22" text-anchor="middle">光合小于呼吸</text><text x="170" y="175" font-size="13" fill="#5aa832" text-anchor="middle" font-weight="bold">净光合为负</text><polygon points="280,150 318,138 318,162" fill="#3f7d1e"/><rect x="400" y="70" width="220" height="160" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="510" y="110" font-size="14" fill="#3f7d1e" text-anchor="middle" font-weight="bold">强光时</text><text x="510" y="145" font-size="13" fill="#2e3a22" text-anchor="middle">光合大于呼吸</text><text x="510" y="175" font-size="13" fill="#5aa832" text-anchor="middle" font-weight="bold">净光合为正、积累有机物</text><text x="340" y="290" font-size="13" fill="#2e3a22" text-anchor="middle">光照达到光补偿点后，光合速率随光强上升，最终受 CO₂ 或温度限制。</text></svg>', caption: '图3　光照增强使光合速率上升，超过一定强度后趋于平稳。' }
    ],
    exercises: [
      { type: 'choice', question: '绿叶中的色素主要分布在叶绿体的什么结构上？', options: ['外膜', '类囊体薄膜', '基质', '内膜'], answer: '类囊体薄膜', explanation: '与光合作用有关的色素（叶绿素和类胡萝卜素）都分布在叶绿体的类囊体薄膜上，类囊体堆叠形成基粒以扩大膜面积。外膜、内膜和基质中基本不含光合色素。因此选类囊体薄膜。' },
      { type: 'choice', question: '光合作用中释放的氧气来自哪种物质？', options: ['二氧化碳', '葡萄糖', '水', '叶绿素'], answer: '水', explanation: '同位素标记实验表明，光合作用释放的氧气全部来自水的光解（H₂O → [H] + O₂），而不是来自二氧化碳。二氧化碳中的氧最终进入有机物和水。因此选水。' },
      { type: 'choice', question: '下列关于光反应和暗反应的说法，正确的是？', options: ['光反应在基质进行', '暗反应需要光直接参加', '光反应为暗反应提供 ATP 和 [H]', '暗反应在类囊体薄膜进行'], answer: '光反应为暗反应提供 ATP 和 [H]', explanation: '光反应在类囊体薄膜上进行，产生 ATP 和 [H] 并释放 O₂；暗反应在叶绿体基质中进行，利用光反应提供的 ATP 和 [H] 把 CO₂ 还原成糖类。暗反应不直接需要光。因此正确说法是光反应为暗反应提供 ATP 和 [H]。' },
      { type: 'fill', question: '光合作用的总反应式中，CO₂ 和 H₂O 在光能和叶绿体的条件下合成有机物并释放___。', answer: 'O₂', explanation: '光合作用的总反应式为 CO₂ + H₂O →(光能,叶绿体) (CH₂O) + O₂。其中二氧化碳和水是无机原料，在光能和叶绿体条件下被合成为糖类等有机物，同时释放出氧气。因此释放的物质是 O₂。' },
      { type: 'fill', question: '叶绿体中由类囊体堆叠形成、能扩大膜面积的结构叫做___。', answer: '基粒', explanation: '叶绿体内部有许多由类囊体堆叠而成的结构，叫做基粒。类囊体薄膜上分布着光合色素和光反应所需的酶，基粒的大量堆叠大大扩大了光反应的膜面积。因此填基粒。' }
    ]
  });
})();
