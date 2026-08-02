/* 生物学 · 高三复习 · 稳态与调节 · 第3章 · 课时：第3节 神经调节与体液调节的关系（二）水盐调节 */
(function () {
  var v = gzGetVolume('biology', 'zt3');
  if (!v) return;
  v.points.push({
    id: 'zt3-u13',
    name: '第3节 神经调节与体液调节的关系（二）水盐调节',
    chapter: '稳态与调节 · 第3章 体液调节',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、水盐平衡调节（以水平衡为主）' },
      { type: 'paragraph', text: '水和无机盐的平衡对维持内环境稳定非常重要。饮水不足、失水过多或吃盐太多，都会使<strong>细胞外液渗透压升高</strong>，刺激下丘脑的渗透压感受器，进而启动水盐调节，最终让尿量减少、保留水分。这一过程的关键激素是<strong>抗利尿激素</strong>。' },
      { type: 'keypoint', text: '核心概念：抗利尿激素（ADH）。它由下丘脑合成并分泌，经神经纤维运送到垂体后叶储存，需要时由垂体释放入血；作用是促进肾小管和集合管对水的重吸收，使尿量减少、保留水分。记住「下丘脑分泌、垂体释放」这八个字。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="320" fill="#eef6e4"/><text x="24" y="44" fill="#3f7d1e" font-size="20" font-family="sans-serif">图1 水盐平衡调节过程</text><rect x="40" y="110" width="180" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="52" y="144" fill="#2e3a22" font-size="15" font-family="sans-serif">渗透压升高</text><rect x="280" y="110" width="180" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="300" y="144" fill="#2e3a22" font-size="15" font-family="sans-serif">下丘脑→垂体释放</text><rect x="520" y="110" width="130" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="535" y="144" fill="#2e3a22" font-size="15" font-family="sans-serif">ADH</text><line x1="220" y1="138" x2="276" y2="138" stroke="#3f7d1e" stroke-width="3"/><polygon points="268,130 288,138 268,146" fill="#3f7d1e"/><line x1="460" y1="138" x2="516" y2="138" stroke="#3f7d1e" stroke-width="3"/><polygon points="508,130 528,138 508,146" fill="#3f7d1e"/><rect x="280" y="220" width="320" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="296" y="254" fill="#2e3a22" font-size="15" font-family="sans-serif">肾小管集合管重吸收水↑→尿量减少</text><line x1="440" y1="166" x2="440" y2="216" stroke="#3f7d1e" stroke-width="3"/><polygon points="432,208 440,228 448,208" fill="#3f7d1e"/></svg>', caption: '细胞外液渗透压升高促使垂体释放抗利尿激素，促进肾小管集合管重吸收水，尿量减少。' },
      { type: 'paragraph', text: '完整链条是：饮水少或失水多 → 细胞外液渗透压升高 → 下丘脑渗透压感受器兴奋 → 垂体释放抗利尿激素 → 肾小管、集合管加强重吸收水 → 尿量减少、保留水分 → 渗透压回落。相反，饮水过多时渗透压降低，抗利尿激素释放减少，尿量增多排出多余水。' },
      { type: 'list', items: [
        '起点：细胞外液渗透压变化（升高或降低）。',
        '感受器与中枢：下丘脑的渗透压感受器。',
        '激素：抗利尿激素，由下丘脑分泌、垂体释放。',
        '效应：肾小管、集合管对水的重吸收量改变，最终改变尿量。'
      ] },
      { type: 'table', headers: ['情境', '抗利尿激素', '尿量'], rows: [
        ['饮水不足、失水过多', '增加', '减少'],
        ['大量饮水', '减少', '增加']
      ] },
      { type: 'heading', text: '二、抗利尿激素的来源与释放' },
      { type: 'paragraph', text: '抗利尿激素是下丘脑神经分泌细胞合成的，合成后顺着轴突运到垂体后叶（神经垂体）储存。当机体需要时，垂体把已经储存的激素释放到血液中。所以严格说：<strong>下丘脑是「生产车间」，垂体是「发货仓库」</strong>，激素由下丘脑制造、由垂体释放。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="300" fill="#eef6e4"/><text x="24" y="44" fill="#3f7d1e" font-size="20" font-family="sans-serif">图2 抗利尿激素：下丘脑分泌、垂体释放</text><rect x="60" y="120" width="170" height="60" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="80" y="156" fill="#2e3a22" font-size="16" font-family="sans-serif">下丘脑（合成）</text><rect x="450" y="120" width="170" height="60" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="478" y="156" fill="#2e3a22" font-size="16" font-family="sans-serif">垂体（释放）</text><line x1="230" y1="150" x2="446" y2="150" stroke="#3f7d1e" stroke-width="3"/><polygon points="438,142 458,150 438,158" fill="#3f7d1e"/><text x="270" y="138" fill="#5aa832" font-size="14" font-family="sans-serif">运送并储存</text><text x="250" y="210" fill="#2e3a22" font-size="15" font-family="sans-serif">释放入血后作用于肾小管、集合管</text></svg>', caption: '抗利尿激素在下丘脑合成，经轴突运至垂体储存，再由垂体释放进入血液。' },
      { type: 'warn', text: '易错辨析：抗利尿激素是「下丘脑分泌、垂体释放」，不能说成「垂体分泌」。下丘脑负责合成与分泌，垂体只负责储存和释放。这与TRH、TSH的分泌部位不同，复习时务必把「分泌」和「释放」两个动作分开记。' },
      { type: 'tip', text: '高频考点：尿量变化的因果链。题目常给「大量出汗后」问尿量，答案一定减少——因为失水使渗透压升高、抗利尿激素增加、重吸收水增多。抓住「渗透压↑→激素↑→重吸收↑→尿量↓」这一串即可快速作答。' },
      { type: 'example', text: '例题（高考风格）：某人长时间未饮水，其血浆渗透压和尿量的变化分别是？思路：未饮水导致失水，血浆渗透压升高；渗透压升高刺激下丘脑，垂体释放抗利尿激素增加，肾小管集合管重吸收水增多，尿量减少。结论：血浆渗透压升高、尿量减少。考查水盐调节的因果顺序。' },
      { type: 'heading', text: '三、与体温调节对照复习' },
      { type: 'paragraph', text: '水盐调节和前面学的体温调节有很多相似之处，可以对照记忆：两者的<strong>调节中枢都在下丘脑</strong>，都既用到神经调节（感受器、中枢）又用到体液调节（激素），最终都通过效应器改变输出量来维持稳态。区别在于体温调节的效应是血管收缩、战栗、激素产热，水盐调节的效应是改变肾小管对水的重吸收。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="320" fill="#eef6e4"/><text x="24" y="44" fill="#3f7d1e" font-size="20" font-family="sans-serif">图3 体温调节与水盐调节对照</text><rect x="40" y="100" width="280" height="180" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="120" y="130" fill="#3f7d1e" font-size="17" font-family="sans-serif">体温调节</text><text x="60" y="165" fill="#2e3a22" font-size="14" font-family="sans-serif">中枢：下丘脑</text><text x="60" y="195" fill="#2e3a22" font-size="14" font-family="sans-serif">神经：血管、战栗</text><text x="60" y="225" fill="#2e3a22" font-size="14" font-family="sans-serif">体液：甲状腺肾上腺激素</text><text x="60" y="255" fill="#2e3a22" font-size="14" font-family="sans-serif">结果：体温稳定</text><rect x="360" y="100" width="280" height="180" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="440" y="130" fill="#3f7d1e" font-size="17" font-family="sans-serif">水盐调节</text><text x="380" y="165" fill="#2e3a22" font-size="14" font-family="sans-serif">中枢：下丘脑</text><text x="380" y="195" fill="#2e3a22" font-size="14" font-family="sans-serif">神经：渗透压感受器</text><text x="380" y="225" fill="#2e3a22" font-size="14" font-family="sans-serif">体液：抗利尿激素</text><text x="380" y="255" fill="#2e3a22" font-size="14" font-family="sans-serif">结果：渗透压稳定</text></svg>', caption: '体温与水盐调节中枢均在下丘脑，均结合神经与体液调节来维持不同指标的稳态。' },
      { type: 'list', items: [
        '共同点：调节中枢都在下丘脑，都含神经调节和体液调节。',
        '不同点：体温调节改变化散热与产热，水盐调节改变水的重吸收。',
        '记忆窍门：下丘脑是「总调度室」，管体温、管水盐、还管血糖。'
      ] },
      { type: 'warn', text: '易错：水盐调节中「感受器」在下丘脑，但「渴觉」的产生部位在大脑皮层。与体温觉类似，下丘脑负责调节、大脑皮层负责产生感觉，二者不要混淆。' },
      { type: 'tip', text: '解题提醒：凡是出现「下丘脑」「抗利尿激素」「尿量」就往水盐调节链条靠；凡是出现「垂体释放」要立刻反应出激素来自下丘脑合成。把分泌与释放拆开，选项陷阱就能避开。' },
      { type: 'paragraph', text: '小结：水盐平衡调节的核心是抗利尿激素——下丘脑分泌、垂体释放，作用于肾小管和集合管促进水重吸收，从而减少尿量。它与体温调节一脉相承，都把下丘脑作为中枢，是体液调节与神经调节协调的又一范例。' }
    ],
    exercises: [
      { type: 'choice', question: '抗利尿激素的来源和去向是？', options: ['下丘脑分泌、垂体释放', '垂体分泌', '下丘脑分泌', '肾脏分泌'], answer: '下丘脑分泌、垂体释放', explanation: '抗利尿激素由下丘脑神经分泌细胞合成并分泌，沿轴突运至垂体后叶储存，需要时由垂体释放入血。因此不能说由垂体分泌，下丘脑负责生产、垂体负责释放。' },
      { type: 'choice', question: '抗利尿激素的主要作用是？', options: ['促进肾小管集合管对水的重吸收', '抑制水的重吸收', '促进钠重吸收', '促进尿量增加'], answer: '促进肾小管集合管对水的重吸收', explanation: '抗利尿激素作用于肾小管和集合管，促进其对水的重吸收，使尿量减少、保留体内水分，从而降低细胞外液渗透压。其余选项均与事实相反。' },
      { type: 'choice', question: '人大量出汗而未及时饮水时，尿量会怎样变化？', options: ['增加', '减少', '不变', '先增后减'], answer: '减少', explanation: '大量出汗使机体失水，细胞外液渗透压升高，刺激下丘脑释放更多抗利尿激素，肾小管集合管重吸收水增多，于是尿量减少。这是水盐调节维持稳态的典型表现。' },
      { type: 'fill', question: '抗利尿激素作用的靶部位是肾小管和______。', answer: '集合管', explanation: '抗利尿激素特异性作用于肾小管和集合管，促进二者对水的重吸收。集合管是尿液浓缩的最后环节，激素在此发挥作用使水分回血液、尿量减少。' },
      { type: 'fill', question: '细胞外液渗透压升高时，下丘脑渗透压感受器兴奋，促使垂体释放______。', answer: '抗利尿激素', explanation: '渗透压升高信号传到下丘脑，下丘脑促使神经垂体释放抗利尿激素，后者经血液到达肾脏，增强肾小管集合管对水的重吸收，从而把渗透压拉回正常。' }
    ]
  });
})();
