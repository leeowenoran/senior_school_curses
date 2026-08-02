/* 生物学 · 高三复习 · 稳态与调节 · 第2章 · 课时：第3节 神经冲动的产生和传导（二）突触传递 */
(function () {
  var v = gzGetVolume('biology', 'zt3');
  if (!v) return;
  v.points.push({
    id: 'zt3-u6',
    name: '第3节 神经冲动的产生和传导（二）突触传递',
    chapter: '稳态与调节 · 第2章 神经调节',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、突触的结构' },
      { type: 'paragraph', text: '神经元与神经元之间，或者神经元与肌肉细胞、腺体细胞之间，并不是直接连在一起的，它们之间有一个专门负责传信的结构，叫作<strong>突触</strong>。可以把它想象成一个<strong>单向信箱</strong>：前一个人把信投进去，后一个人从自己这边的窗口取走，信只能从前传向后，不能倒着传。突触就是兴奋在神经元之间传递的必经关口。' },
      { type: 'list', items: ['突触前膜：突触前面（轴突末梢）的细胞膜，里面装着神经递质', '突触间隙：前后两个膜之间一条窄窄的缝隙，充满组织液', '突触后膜：突触后面（下一个神经元或效应器细胞）的细胞膜，上面有受体'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">突触的基本结构</text><rect x="40" y="90" width="200" height="120" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="140" y="135" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">突触前膜</text><text x="140" y="158" font-size="12" fill="#2e3a22" text-anchor="middle">含突触小泡</text><rect x="250" y="120" width="180" height="60" rx="8" fill="#eef6e4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="155" font-size="13" fill="#2e3a22" text-anchor="middle">突触间隙</text><rect x="440" y="90" width="200" height="120" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="540" y="135" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">突触后膜</text><text x="540" y="158" font-size="12" fill="#2e3a22" text-anchor="middle">含受体</text><polygon points="240,150 200,140 200,160" fill="#3f7d1e"/><text x="340" y="250" font-size="13" fill="#2e3a22" text-anchor="middle">一个突触由突触前膜、突触间隙、突触后膜三部分组成。</text></svg>', caption: '图1　突触由突触前膜、突触间隙和突触后膜三部分构成。' },
      { type: 'keypoint', label: '重点·突触结构', text: '突触由<strong>突触前膜、突触间隙、突触后膜</strong>三部分组成。突触前膜内含有突触小泡（装着神经递质），突触后膜上有能识别神经递质的受体。理解这三部分是弄懂兴奋如何跨神经元传递的前提。' },
      { type: 'heading', text: '二、兴奋在突触处的传递过程' },
      { type: 'paragraph', text: '当兴奋传导到轴突末梢时，突触前膜这一侧发生一系列变化，把信号以化学物质的形方式交给下一个细胞。整个过程可以分成清晰的几步，关键在于<strong>电信号先变成化学信号，再变回电信号</strong>。' },
      { type: 'list', items: ['兴奋到达突触前膜，使突触小泡向突触前膜移动并与之融合', '突触小泡释放神经递质进入突触间隙（以胞吐方式）', '神经递质穿过间隙，与突触后膜上的特异性受体结合', '受体被激活后，引起突触后膜电位变化，兴奋由此传向下一个神经元'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">兴奋在突触处的传递过程</text><rect x="40" y="110" width="150" height="70" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="115" y="150" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">兴奋到达</text><polygon points="200,145 175,135 175,155" fill="#3f7d1e"/><rect x="220" y="110" width="150" height="70" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="295" y="150" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">释放递质</text><polygon points="380,145 355,135 355,155" fill="#3f7d1e"/><rect x="400" y="110" width="150" height="70" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="475" y="150" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">结合受体</text><polygon points="560,145 535,135 535,155" fill="#3f7d1e"/><rect x="580" y="110" width="90" height="70" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="625" y="150" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">电位变化</text><text x="340" y="250" font-size="13" fill="#2e3a22" text-anchor="middle">兴奋 → 突触小泡释放神经递质 → 与突触后膜受体结合 → 突触后膜电位变化</text></svg>', caption: '图2　兴奋经突触传递：电信号→化学信号→电信号。' },
      { type: 'paragraph', text: '神经递质有很多种，比如乙酰胆碱、多巴胺等。它们被释放到间隙后，只能作用于下一个细胞，发挥作用后会被迅速分解或回收，这样信号才不会一直堆积。如果递质不被及时清除，下一个神经元就会被持续刺激，出现异常。' },
      { type: 'tip', label: '高频考点·单向传递原因', text: '考试最爱问「为什么突触传递是单向的」。标准答法：神经递质只存在于突触前膜的突触小泡中，只能由突触前膜释放，作用于突触后膜上的受体。后膜没有小泡、不能反向释放递质，所以信号只能从前向后传。抓住「递质只在突触前膜、只向前膜后的受体」即可得分。' },
      { type: 'keypoint', label: '重点·突触单向传递', text: '兴奋在突触处的传递是<strong>单向的</strong>，即只能由突触前膜传向突触后膜，不能反向。原因是神经递质只储存在突触前膜的小泡里，只能由前膜释放并作用于后膜受体。这是突触最核心的特点，也是反射弧中兴奋定向传导的基础。' },
      { type: 'heading', text: '三、突触传递的特点' },
      { type: 'list', items: ['单向传递：信号只能由突触前膜传向突触后膜，这是由递质释放方向决定的', '突触延搁：信号要经历释放、扩散、结合受体等化学步骤，速度比神经纤维上的电传导慢', '信号弱化与整合：一个神经元常接收多个突触的输入，后膜电位需要整合'] },
      { type: 'warn', label: '易错·传导与传递', text: '易错点：在一条离体的神经纤维上，兴奋可以双向传导；但在神经元之间（突触处），兴奋只能单向传递。很多同学把「神经纤维上的双向传导」套用到「突触传递」上导致出错。记住：纤维上双向，突触处单向。考试常把两者放在一起对比挖坑。' },
      { type: 'example', label: '例题·突触传递', text: '题目：下列有关突触传递的叙述，正确的是？<br>A. 兴奋在突触处可以双向传递<br>B. 神经递质由突触后膜释放<br>C. 兴奋在突触处的传递速度慢于在神经纤维上的传导<br>D. 神经递质作用于后膜后不会被分解<br>解析：神经递质只存在于突触前膜的小泡中，只能由前膜释放作用于后膜，所以传递是单向的，A、B均错。突触传递要经历递质释放、扩散、结合受体等化学过程，存在突触延搁，速度慢于神经纤维上的电传导，C正确。递质发挥作用后会被迅速分解或回收，D错。因此选 C。' },
      { type: 'table', headers: ['比较项目', '神经纤维上的传导', '突触处的传递'], rows: [['信号形式', '电信号（局部电流）', '电信号→化学信号→电信号'], ['方向', '双向（离体条件下）', '单向（前膜→后膜）'], ['速度', '快', '较慢（有突触延搁）'], ['结构基础', '细胞膜', '突触（前膜、间隙、后膜）']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">突触传递的两个关键特点</text><rect x="60" y="90" width="250" height="110" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="185" y="135" font-size="15" fill="#2e3a22" text-anchor="middle" font-weight="bold">特点一：单向传递</text><text x="185" y="162" font-size="13" fill="#2e3a22" text-anchor="middle">前膜释放→后膜接收</text><polygon points="320,148 290,138 290,158" fill="#3f7d1e"/><rect x="370" y="90" width="250" height="110" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="495" y="135" font-size="15" fill="#2e3a22" text-anchor="middle" font-weight="bold">特点二：突触延搁</text><text x="495" y="162" font-size="13" fill="#2e3a22" text-anchor="middle">化学步骤使速度变慢</text><text x="340" y="260" font-size="13" fill="#2e3a22" text-anchor="middle">单向传递与突触延搁，是突触区别于神经纤维传导的两大特征。</text></svg>', caption: '图3　突触传递的两大特点：单向传递与突触延搁。' },
      { type: 'paragraph', text: '总结：突触是神经元之间传递兴奋的枢纽。它的结构（前膜、间隙、后膜）决定了兴奋只能单向、且较慢地传向下一个细胞。这种看似低效的「慢」，其实让神经系统能够精细调控——不同通路、不同强度的输入在后膜被整合，才产生了复杂而协调的生理反应。' },
      { type: 'tip', label: '提示·答题模板', text: '遇到「突触传递特点」的填空题，优先写两个词：<strong>单向传递、突触延搁</strong>。解释原因时再补一句「神经递质只存在于突触前膜，只能由前膜释放作用于后膜」。这个模板几乎覆盖所有相关高考小题。' }
    ],
    exercises: [
      { type: 'choice', question: '下列关于突触结构的叙述，正确的是？', options: ['突触由突触前膜、突触间隙和突触后膜组成', '突触由树突、轴突和细胞体组成', '突触由细胞膜和细胞壁组成', '突触由血浆和组织液组成'], answer: '突触由突触前膜、突触间隙和突触后膜组成', explanation: '突触是神经元之间或神经元与效应器细胞之间传递兴奋的结构，由突触前膜、突触间隙和突触后膜三部分组成。神经元的基本结构是细胞体、树突和轴突，不是突触；细胞壁上细胞壁是植物细胞结构，人体细胞没有。因此正确选项是突触由突触前膜、突触间隙和突触后膜组成。' },
      { type: 'choice', question: '神经递质从突触前膜释放到突触间隙的方式是？', options: ['主动运输', '协助扩散', '自由扩散', '胞吐'], answer: '胞吐', explanation: '突触小泡与突触前膜融合，将神经递质排到突触间隙，这种大分子物质排出细胞的方式是胞吐，需要消耗能量但不需要载体蛋白。主动运输、协助扩散和自由扩散都是小分子跨膜运输方式，不适用于神经递质这种被包裹在囊泡里的物质。因此选胞吐。' },
      { type: 'choice', question: '兴奋在突触处的传递特点是？', options: ['双向传递，速度快', '单向传递，存在突触延搁', '双向传递，存在突触延搁', '单向传递，速度与神经纤维相同'], answer: '单向传递，存在突触延搁', explanation: '神经递质只存在于突触前膜的突触小泡中，只能由突触前膜释放并作用于突触后膜受体，所以兴奋在突触处只能单向传递。同时，传递要经历释放、扩散、结合受体等化学步骤，比神经纤维上的电传导慢，称为突触延搁。因此正确选项是单向传递，存在突触延搁。' },
      { type: 'fill', question: '兴奋在突触处的传递是___（填「单向」或「双向」）的，这是由神经递质的释放方向决定的。', answer: '单向', explanation: '神经递质只储存在突触前膜的突触小泡里，只能由突触前膜释放，穿过突触间隙后作用于突触后膜上的特异性受体。由于后膜不能反向释放递质，信号只能从前向后传递，因此兴奋在突触处的传递是单向的。这是突触区别于神经纤维传导的最重要特征。' },
      { type: 'fill', question: '神经递质与突触后膜上的___结合后，会引起突触后膜电位发生变化，使兴奋得以传递。', answer: '受体', explanation: '突触后膜上分布着能识别特定神经递质的受体蛋白。当神经递质从突触前膜释放并扩散到突触间隙后，会与突触后膜上的特异性受体结合，引起后膜离子通道开放或关闭，从而导致突触后膜电位发生变化，完成兴奋的跨神经元传递。' }
    ]
  });
})();
