/* 生物学 · 必修2 遗传与进化 · 第5章 · 课时：第2节 染色体变异 */
(function () {
  var v = gzGetVolume('biology', 'bx2');
  if (!v) return;
  v.points.push({
    id: 'bx2-u13',
    name: '第2节 染色体变异',
    chapter: '必修2 遗传与进化 · 第5章 基因突变及其他变异',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、染色体结构的变异' },
      { type: 'paragraph', text: '染色体是基因的载体，如果染色体的片段发生改变，其上带有的基因也会增减或重排，这种变异叫<strong>染色体结构变异</strong>。它主要有四种类型：缺失、重复、倒位和易位。结构变异往往后果比较严重，因为在显微镜下就能观察到，常导致生物性状明显改变甚至不育。' },
      { type: 'list', items: ['缺失：染色体丢失某一片段，基因随之减少', '重复：染色体多出一段相同片段，基因重复', '倒位：某一片段颠倒 180 度后重新接上', '易位：非同源染色体之间交换片段，位置改变'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 330" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="330" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图1 染色体结构变异的四种类型</text><rect x="40" y="70" width="280" height="55" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="180" y="104" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">缺失：ABC·DEF → AB·EF</text><rect x="360" y="70" width="280" height="55" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="500" y="104" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">重复：ABC·DEF → ABC·BDEF</text><rect x="40" y="150" width="280" height="55" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="180" y="184" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">倒位：ABC·DEF → ADC·BEF</text><rect x="360" y="150" width="280" height="55" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="500" y="184" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">易位：非同源染色体互换片段</text><text x="340" y="260" font-size="14" fill="#5aa832" text-anchor="middle" font-weight="bold">结构变异改变基因的数目或排列顺序</text><text x="340" y="300" font-size="13" fill="#2e3a22" text-anchor="middle">缺失、重复、倒位、易位都属于染色体结构变异。</text></svg>', caption: '图1 染色体结构变异含缺失、重复、倒位、易位四类，改变基因数目或顺序。' },
      { type: 'heading', text: '二、染色体数目变异与染色体组' },
      { type: 'paragraph', text: '染色体数目变异指细胞内染色体数目成倍或个别地增减。要理解倍数，先认识<strong>染色体组</strong>：细胞中的一组非同源染色体，它们在形态、功能上各不相同，但携带着控制一种生物生长发育的全部遗传信息。一个染色体组里的染色体，彼此不重复、共同构成一套完整蓝图。' },
      { type: 'keypoint', label: '重点·染色体组的概念', text: '<strong>染色体组是细胞中的一组非同源染色体，形态功能各异，但共同携带控制该生物生长发育的全部遗传信息。</strong>判断一个细胞含几个染色体组，可看同种形态的染色体有几条；有几条就有几个组。二倍体含两个组，配子通常只含一个组。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图2 一个染色体组 = 一套非同源染色体</text><rect x="60" y="90" width="120" height="50" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="120" y="121" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">①</text><rect x="200" y="90" width="120" height="50" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="260" y="121" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">②</text><rect x="340" y="90" width="120" height="50" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="400" y="121" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">③</text><polygon points="460,115 522,102 522,128" fill="#3f7d1e"/><rect x="530" y="90" width="120" height="50" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="590" y="121" font-size="14" fill="#5aa832" text-anchor="middle" font-weight="bold">一组</text><text x="340" y="230" font-size="13" fill="#2e3a22" text-anchor="middle">① ② ③ 形态功能不同，合起来是一个染色体组</text><text x="340" y="280" font-size="14" fill="#5aa832" text-anchor="middle" font-weight="bold">二倍体有两个组，配子只有一个组</text></svg>', caption: '图2 一个染色体组由形态功能不同的非同源染色体组成，携带全套遗传信息。' },
      { type: 'heading', text: '三、二倍体与多倍体' },
      { type: 'paragraph', text: '由受精卵发育而来、体细胞含两个染色体组的个体叫<strong>二倍体</strong>，人、果蝇、大多数动植物都是二倍体。含三个及以上染色体组的叫多倍体。香蕉是三倍体，马铃薯是四倍体。多倍体茎秆粗壮、叶片和果实较大、营养物质多，但发育常延迟、结实率低。' },
      { type: 'table', headers: ['类型', '染色体组数', '例子', '主要特点'], rows: [['二倍体', '2 个', '人、玉米、普通小麦近缘种', '正常可育，最常见'], ['三倍体', '3 个', '香蕉', '茎粗叶大、营养多、高度不育'], ['四倍体', '4 个', '马铃薯', '器官粗大、营养物质丰富']] },
      { type: 'list', items: ['成因：细胞分裂时纺锤体被抑制，染色体复制后不分开', '常用药物：秋水仙素能抑制纺锤体形成', '低温也能诱导染色体加倍，原理类似', '多倍体特点：茎粗、叶大、营养多，但常晚熟不育'] },
      { type: 'heading', text: '四、单倍体' },
      { type: 'paragraph', text: '<strong>单倍体</strong>是由配子（如花粉、卵细胞）直接发育成的个体，所以它含有的染色体组数等于该物种配子中的组数，不一定是一个组。单倍体植株通常长得弱小，而且高度不育，因为减数分裂时染色体联会紊乱。但它在育种上很有用：先花药离体培养得单倍体，再用秋水仙素加倍，能快速得到纯合二倍体。' },
      { type: 'example', label: '例题·判断单倍体', text: '普通小麦是六倍体，其花粉离体培养得到的植株是几倍体？<br>分析：单倍体看来源，由配子直接发育而来就是单倍体，与含几个染色体组无关。普通小麦花粉含 3 个染色体组，培养出的植株仍是单倍体，只是它含 3 个组。<br>结论：该植株是单倍体，染色体组数为 3，植株弱小且不育。' },
      { type: 'heading', text: '五、低温诱导与育种应用' },
      { type: 'paragraph', text: '染色体数目变异可以被人为诱导。低温和秋水仙素都能阻止纺锤体形成，使复制后的染色体留在同一个细胞里，从而得到多倍体；而花药离体培养结合秋水仙素处理，则用于单倍体育种。这两种技术都是高中生物的重要实验和育种手段。' },
      { type: 'warn', label: '易错·组数判断', text: '① 单倍体不是只含一个染色体组，配子发育来的都叫单倍体，组数等于配子组数；② 二倍体、多倍体必须是由受精卵发育而来的个体，配子直接发育的不算；③ 秋水仙素和低温都抑制纺锤体，不是促进分裂；④ 多倍体植株大但不一定可育，三倍体香蕉就高度不育；⑤ 染色体组是一组非同源染色体，不是任意几条染色体。' },
      { type: 'tip', label: '提示·育种两条路', text: '记住两条育种线：<strong>要纯合快就用单倍体育种（花药离体培养 + 秋水仙素），要粗大营养多就用多倍体育种（秋水仙素或低温）。</strong>判断时先看来源是配子还是受精卵，再看用了什么诱导手段，就能分清单倍体、二倍体和多倍体。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 330" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="330" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图3 单倍体与多倍体育种思路</text><rect x="40" y="80" width="280" height="70" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="180" y="115" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">花药离体培养</text><text x="180" y="140" font-size="13" fill="#2e3a22" text-anchor="middle">得单倍体（弱小不育）</text><polygon points="320,115 382,102 382,128" fill="#3f7d1e"/><rect x="390" y="80" width="250" height="70" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="515" y="115" font-size="14" fill="#5aa832" text-anchor="middle" font-weight="bold">秋水仙素加倍</text><text x="515" y="140" font-size="13" fill="#2e3a22" text-anchor="middle">得纯合二倍体</text><text x="340" y="210" font-size="13" fill="#2e3a22" text-anchor="middle">另一路：秋水仙素或低温抑制纺锤体 → 多倍体</text><rect x="170" y="240" width="340" height="55" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="273" font-size="14" fill="#2e3a22" text-anchor="middle">单倍体育种快出纯合；多倍体粗大营养多</text></svg>', caption: '图3 单倍体育种经花药离体培养加秋水仙素得纯合子；多倍体由纺锤体抑制获得。' }
    ],
    exercises: [
      { type: 'choice', question: '下列中属于染色体结构变异的是？', options: ['染色体数目加倍', '非同源染色体片段交换', '基因碱基对替换', '染色体复制'], answer: '非同源染色体片段交换', explanation: '染色体结构变异包括缺失、重复、倒位和易位。易位指非同源染色体之间交换片段，属于结构变异。染色体数目加倍属于数目变异，基因碱基对替换属于基因突变，染色体复制是正常过程。因此正确选项是非同源染色体片段交换。' },
      { type: 'choice', question: '香蕉是三倍体，其特点通常是？', options: ['植株弱小且高度不育', '茎粗叶大营养多但高度不育', '完全可育结实多', '只有一个染色体组'], answer: '茎粗叶大营养多但高度不育', explanation: '多倍体一般茎秆粗壮、叶片和果实较大、营养物质含量较高，但常因减数分裂联会紊乱而高度不育。香蕉是三倍体，符合茎粗叶大、营养多且高度不育的特点，而不是植株弱小（那是单倍体）或完全可育。因此选茎粗叶大营养多但高度不育。' },
      { type: 'choice', question: '由花粉直接培养得到的植株，一般称为？', options: ['二倍体', '多倍体', '单倍体', '三倍体'], answer: '单倍体', explanation: '单倍体的定义是由配子（如花粉、卵细胞）直接发育而成的个体，与含有几个染色体组无关。花粉是雄配子，由其离体培养得到的植株就是单倍体，通常长得弱小且高度不育。正确选项是单倍体。' },
      { type: 'fill', question: '秋水仙素和低温都能抑制___的形成，使染色体复制后不能移向两极，从而得到多倍体。', answer: '纺锤体', explanation: '秋水仙素和低温诱导多倍体的原理相同，都是抑制细胞分裂前期纺锤体的形成，导致复制后的染色体不能被拉向两极，细胞也不分裂，最终使细胞内染色体数目加倍形成多倍体。因此横线处应填纺锤体。' },
      { type: 'fill', question: '细胞中的一组非同源染色体，形态功能各不相同，但携带控制该生物生长发育的全部遗传信息，这一组染色体称为一个___。', answer: '染色体组', explanation: '染色体组是指细胞中的一组非同源染色体，它们在形态和功能上各不相同，却共同携带着控制生物生长发育的全部遗传信息。判断染色体组数可看同种形态的染色体有几条。二倍体含两个染色体组，配子通常只含一个染色体组。因此横线处应填染色体组。' }
    ]
  });
})();
