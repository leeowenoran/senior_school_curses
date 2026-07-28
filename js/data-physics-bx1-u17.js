/* ============================================================
 * 高一物理 · 必修 第一册 · 第四章 运动和力的关系
 * 课时17：实验：探究加速度与力、质量的关系
 * 数据注入：physics.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx1');
  if (!v) return;

  v.points.push({
    id: 'bx1-u17',
    name: '实验：探究加速度与力、质量的关系',
    chapter: '必修第一册 · 第四章 运动和力的关系',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、实验要研究的问题' },
      { type: 'paragraph', text: '我们已经知道，力能改变物体的运动状态，也就是能让物体产生加速度；而质量大的物体更难被推动。那么加速度到底和力、和质量各有什么关系？这一节就用实验来找出它们之间的定量规律：加速度 a 随合力 F 怎样变，随质量 m 又怎样变。' },
      { type: 'keypoint', label: '重点·控制变量法', text: '<strong>本实验同时涉及三个量（加速度、力、质量），必须采用控制变量法：</strong><br>① 保持质量 m 不变，研究加速度 a 与合力 F 的关系；<br>② 保持合力 F 不变，研究加速度 a 与质量 m 的关系。' },
      { type: 'paragraph', text: '控制变量法是物理实验里极常用的思想：当有多个因素同时影响一个结果时，先让其中几个保持不变，只改变一个因素，看结果怎么变，再换下一个因素。这样就把"多变量"的复杂问题拆成了一连串"单变量"的简单问题。' },
      { type: 'list', items: ['保持质量不变，改变拉力，测不同拉力下的加速度，看 a 与 F 的关系', '保持拉力不变，在小车上加配重改变总质量，看 a 与 m 的关系', '分别作出 a 随 F、a 随 m 变化的图像，从图像形状判断规律', '注意要让图像接近过原点的直线，才能说明"成正比"'] },
      { type: 'heading', text: '二、实验装置与测量方法' },
      { type: 'paragraph', text: '常见的做法是：把小车放在水平长木板上，用细绳跨过定滑轮，另一端挂砝码盘。砝码盘和砝码的重力近似提供小车所受的拉力；小车拖着纸带，用打点计时器在纸带上打点，再通过纸带算出小车的加速度。' },
      { type: 'keypoint', label: '重点·三个量怎么测', text: '<strong>加速度 a：</strong>由打点计时器纸带，用相邻相等时间内的位移差公式计算。<br><strong>合力 F：</strong>近似等于悬挂砝码的总重力（需满足小车质量远大于砝码质量）。<br><strong>质量 m：</strong>用天平测出小车及所加配重的总质量。' },
      { type: 'example', label: '例题·数据处理', text: '某组保持小车质量不变，改变悬挂砝码重力得到如下数据：拉力 F 越大，纸带算出的加速度 a 越大，且作出的 a–F 图像是一条过原点的直线。这说明什么？<br><br><strong>解析</strong>：<br>图像是过原点的直线，说明加速度 a 与拉力 F 成正比关系。即：在质量一定时，物体的加速度与它受到的合力大小成正比。这正是我们要寻找的第一条规律。' },
      { type: 'warn', label: '易错', text: '<strong>第一，木板要适当倾斜以平衡摩擦力，否则小车受的合力不等于砝码重力，a–F 图像会不通过原点。</strong><br><strong>第二，必须让小车质量远大于砝码（及盘）质量，砝码重力才能近似等于对小车的拉力；否则拉力被高估，误差很大。</strong>这两点是实验成功的关键，也是考试常考的易错点。' },
      { type: 'table', headers: ['研究对象', '保持不变的量', '改变的量', '观察的量'], rows: [['小车', '质量 m', '拉力 F（换砝码）', '加速度 a'], ['小车', '拉力 F', '质量 m（加配重）', '加速度 a'], ['纸带', '打点周期（电源频率）', '—', '由点距算 a']] },
      { type: 'tip', label: '提示', text: '<strong>怎样判断摩擦力已经平衡好？</strong>不挂砝码，轻推一下小车，若小车能在木板上近似做匀速直线运动（纸带上点距均匀），就说明重力沿斜面的分力刚好抵消了摩擦力，此时小车受到的合力就等于绳子的拉力。' },
      { type: 'list', items: ['先平衡摩擦力，再挂砝码做实验', '天平测质量，打点计时器测加速度', '作 a–F 图像和 a 与质量倒数 1/m 的图像', '图像是过原点直线，才能下"正比"结论'] },
      { type: 'heading', text: '三、实验结论' },
      { type: 'paragraph', text: '把两组实验的图像合起来看：质量不变时，a 随 F 增大而正比例增大；力不变时，a 随 m 增大而减小，且 a 与质量的倒数 1/m 成正比。也就是说，加速度同时正比于力、反比于质量。' },
      { type: 'keypoint', label: '重点·实验结论', text: '<strong>物体的加速度 a 与所受合力 F 成正比，与物体的质量 m 成反比。</strong>写成关系式就是 a = F / m。这既是本实验的结论，也正是下一节牛顿第二定律的内容。' },
      { type: 'paragraph', text: '这个结论非常漂亮：它把"力""质量""加速度"三个概念用一个简单的关系连在一起。有了它，我们就能定量地预言——给了多大的力、物体有多重，它就会以多大的加速度运动。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">实验装置：小车、纸带与打点计时器</text><rect x="60" y="200" width="420" height="20" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><rect x="120" y="160" width="120" height="40" rx="6" fill="#4fb3a5"/><text x="180" y="185" font-size="14" fill="#234b45" text-anchor="middle">小车</text><line x1="240" y1="180" x2="430" y2="180" stroke="#234b45" stroke-width="2"/><circle cx="445" cy="180" r="14" fill="none" stroke="#234b45" stroke-width="2"/><line x1="430" y1="180" x2="430" y2="120" stroke="#234b45" stroke-width="2"/><rect x="420" y="120" width="40" height="30" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="440" y="112" font-size="12" fill="#234b45" text-anchor="middle">砝码</text><rect x="500" y="120" width="120" height="100" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="560" y="175" font-size="13" fill="#234b45" text-anchor="middle">打点计时器</text><text x="340" y="285" font-size="13" fill="#234b45" text-anchor="middle">细绳拉力提供合力，纸带用于计算加速度</text></svg>', caption: '图1　探究实验装置：小车受细绳拉力，拖纸带由打点计时器记录运动。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">质量不变时，加速度 a 与合力 F 成正比</text><line x1="80" y1="250" x2="600" y2="250" stroke="#234b45" stroke-width="2"/><line x1="80" y1="250" x2="80" y2="60" stroke="#234b45" stroke-width="2"/><text x="340" y="278" font-size="14" fill="#234b45" text-anchor="middle">合力 F</text><text x="50" y="150" font-size="14" fill="#234b45" text-anchor="middle" transform="rotate(-90 50 150)">加速度 a</text><line x1="80" y1="250" x2="540" y2="90" stroke="#4fb3a5" stroke-width="3"/><circle cx="230" cy="200" r="6" fill="#234b45"/><circle cx="380" cy="150" r="6" fill="#234b45"/><circle cx="540" cy="90" r="6" fill="#234b45"/><text x="340" y="290" font-size="12" fill="#234b45" text-anchor="middle">过原点的直线 → a 与 F 成正比</text></svg>', caption: '图2　保持质量不变，a–F 图像为过原点直线，说明加速度与合力成正比。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">力不变时，加速度 a 与质量倒数 1/m 成正比</text><line x1="80" y1="250" x2="600" y2="250" stroke="#234b45" stroke-width="2"/><line x1="80" y1="250" x2="80" y2="60" stroke="#234b45" stroke-width="2"/><text x="320" y="278" font-size="13" fill="#234b45" text-anchor="middle">质量的倒数 1/m</text><text x="50" y="150" font-size="14" fill="#234b45" text-anchor="middle" transform="rotate(-90 50 150)">加速度 a</text><line x1="80" y1="250" x2="540" y2="90" stroke="#4fb3a5" stroke-width="3"/><circle cx="210" cy="198" r="6" fill="#234b45"/><circle cx="360" cy="148" r="6" fill="#234b45"/><circle cx="520" cy="92" r="6" fill="#234b45"/><text x="340" y="290" font-size="12" fill="#234b45" text-anchor="middle">过原点的直线 → a 与 1/m 成正比，即 a 与 m 成反比</text></svg>', caption: '图3　保持力不变，a 与 1/m 图像为过原点直线，说明加速度与质量成反比。' }
    ],
    exercises: [
      { type: 'choice', question: '本实验探究加速度与力、质量的关系时，采用的科学研究方法是？', options: ['等效替代法', '控制变量法', '理想实验法', '微量放大法'], answer: '控制变量法', explanation: '实验同时涉及加速度、合力、质量三个物理量。为了弄清它们之间的关系，需要先保持质量不变研究加速度与合力的关系，再保持合力不变研究加速度与质量的关系，这种"每次只让一个量变化"的方法叫控制变量法。它把多变量问题分解为多个单变量问题，是本实验的核心方法。' },
      { type: 'choice', question: '为了让悬挂砝码的重力近似等于小车受到的拉力，实验应当满足的条件是？', options: ['小车质量远小于砝码质量', '小车质量远大于砝码质量', '木板必须绝对水平', '不需要任何条件'], answer: '小车质量远大于砝码质量', explanation: '实际上小车受到的拉力并不严格等于砝码重力，只有当小车质量远大于砝码（含盘）质量时，砝码的加速度才很小，拉力才近似等于砝码重力。若小车质量太小，砝码下落加速度明显，拉力会被显著低估，导致较大误差。所以实验要求小车质量远大于砝码质量。' },
      { type: 'choice', question: '在保持小车质量不变的情况下，作出的加速度 a 随合力 F 变化的图像是过原点的直线，这说明？', options: ['a 与 F 成反比', 'a 与 F 成正比', 'a 与 F 无关', 'a 随 F 增大而减小'], answer: 'a 与 F 成正比', explanation: '图像是过原点的直线，表明加速度 a 与合力 F 的比值是一个常数，即 a 与 F 成正比关系。这正是质量一定时实验得到的结论：物体加速度大小与它受到的合力大小成正比。由此也为牛顿第二定律 a = F / m 提供了实验依据。' },
      { type: 'fill', question: '实验前必须把木板的一端适当垫高，目的是使重力沿木板的分力抵消摩擦力，这一步操作叫作___摩擦力。', answer: '平衡', explanation: '如果不平衡摩擦力，小车运动时会受到木板摩擦阻力的作用，实际合力就不等于绳子的拉力，作出的 a–F 图像会明显不通过原点，影响"正比"结论的判断。把木板一端垫高，让重力沿斜面的分力刚好抵消摩擦力后，小车受到的合力才等于绳的拉力，这一步称为平衡摩擦力。' },
      { type: 'fill', question: '本实验的结论可写成关系式：加速度 a 等于合力 F 除以质量 m，即 a = ___。', answer: 'F / m', explanation: '保持质量不变时加速度与合力成正比，保持合力不变时加速度与质量成反比，综合两条规律得到 a = F / m。这就是牛顿第二定律的表达式，表明物体的加速度与它所受合力成正比、与它的质量成反比，加速度方向与合力方向相同。' }
    ]
  });
})();
