/* 地理 · 必修 第一册 · 第1章 · 课时：第4节 地球的圈层结构 */
(function () {
  var v = gzGetVolume('geography', 'bx1');
  if (!v) return;
  v.points.push({
    id: 'bx1-u4',
    name: '第4节 地球的圈层结构',
    chapter: '必修 第一册 · 第1章 宇宙中的地球',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、我们怎么看见地球内部' },
      { type: 'paragraph', text: '地球内部被厚厚的岩石包裹，人无法直接钻到地心去观察。科学家借助地震波来给地球做「CT」。地震波是地震发生时在地球内部传播的弹性波，它遇到不同物质时速度和方向会改变，通过分析这些改变，就能反推出地球内部的结构。' },
      { type: 'list', items: ['纵波（P 波）：传播快，能通过固体、液体和气体', '横波（S 波）：传播慢，只能通过固体，不能通过液体', '地震波速度发生突然变化的地方，就是圈层分界面', '根据波速变化，把地球内部分成地壳、地幔、地核'] },
      { type: 'table', headers: ['地震波', '传播速度', '能通过的物质'], rows: [['纵波（P 波）', '较快', '固体 液体 气体'], ['横波（S 波）', '较慢', '仅固体']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">地震波速度与内部界面</text><line x1="80" y1="70" x2="80" y2="280" stroke="#1f3a4d" stroke-width="2"/><text x="65" y="180" font-size="13" fill="#1f3a4d" text-anchor="middle" transform="rotate(-90 65 180)">深度增加</text><polyline points="90,90 250,150 250,150 420,200 420,200 620,250" fill="none" stroke="#2a6fa8" stroke-width="3"/><polyline points="90,110 250,200 420,260 620,275" fill="none" stroke="#3389c4" stroke-width="3"/><text x="160" y="120" font-size="12" fill="#1f3a4d">纵波（快）</text><text x="160" y="150" font-size="12" fill="#1f3a4d">横波（慢）</text><line x1="250" y1="70" x2="250" y2="280" stroke="#1f3a4d" stroke-width="1.5" stroke-dasharray="5,4"/><text x="250" y="300" font-size="12" fill="#1f3a4d" text-anchor="middle">莫霍界面</text><line x1="420" y1="70" x2="420" y2="280" stroke="#1f3a4d" stroke-width="1.5" stroke-dasharray="5,4"/><text x="420" y="300" font-size="12" fill="#1f3a4d" text-anchor="middle">古登堡界面</text><text x="340" y="305" font-size="12" fill="#1f3a4d" text-anchor="middle">波速跳变处即为圈层分界面。</text></svg>', caption: '图1　地震波在莫霍界面和古登堡界面处速度明显变化。' },
      { type: 'keypoint', label: '重点·内部圈层的划分依据', text: '<strong>划分地球内部圈层的依据是地震波波速的变化：</strong>在地下约 33 千米处（大陆），纵波和横波速度都明显加快，这一界面叫莫霍界面，它是地壳和地幔的分界；在约 2900 千米深处，横波突然消失、纵波明显减速，这一界面叫古登堡界面，它是地幔和地核的分界。记住两个界面的名字和位置即可。' },
      { type: 'heading', text: '二、地球内部的三大圈层' },
      { type: 'paragraph', text: '地球内部从外到内依次为地壳、地幔和地核。地壳是最外面薄薄的一层固态岩石；地幔厚度最大，上地幔的顶部有一层能缓慢流动的软流层，被认为是岩浆的发源地；地核分为外核和内核，外核呈液态，内核为固态，主要成分是铁和镍。' },
      { type: 'list', items: ['地壳：固态岩石，平均厚度约 17 千米，大陆厚、大洋薄', '地幔：占地球体积最大，上地幔含软流层', '地核：外核液态、内核固态，成分以铁镍为主', '岩石圈＝地壳＋上地幔顶部，都是由硬岩石组成'] },
      { type: 'table', headers: ['圈层', '状态', '主要特征'], rows: [['地壳', '固态', '薄，由岩石组成，大陆更厚'], ['地幔', '固态（软流层可流动）', '最厚，软流层是岩浆源地'], ['地核', '外核液态、内核固态', '铁镍为主，温度压力极高']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">地球内部圈层剖面</text><circle cx="340" cy="200" r="150" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="3"/><circle cx="340" cy="200" r="120" fill="#bcd9f0" stroke="#2a6fa8" stroke-width="2"/><circle cx="340" cy="200" r="70" fill="#9fc6e8" stroke="#2a6fa8" stroke-width="2"/><circle cx="340" cy="200" r="38" fill="#7fb0d8" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="205" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">内核</text><text x="470" y="150" font-size="13" fill="#1f3a4d" text-anchor="middle">外核</text><text x="500" y="200" font-size="13" fill="#1f3a4d" text-anchor="middle">地幔</text><text x="500" y="250" font-size="13" fill="#1f3a4d" text-anchor="middle">地壳</text><text x="340" y="345" font-size="12" fill="#1f3a4d" text-anchor="middle">由内到外：内核 → 外核 → 地幔 → 地壳；软流层在上地幔。</text></svg>', caption: '图2　地球内部由外到内为地壳、地幔、地核（外核液态、内核固态）。' },
      { type: 'warn', label: '易错·岩石圈不等于地壳', text: '① 地壳只是最外面那层薄薄的岩石，而岩石圈包括地壳和上地幔顶部，范围更大；② 软流层属于上地幔，不在岩石圈之内，它是岩浆可能发源的地方；③ 横波到了外核就消失，说明外核是液态，这一点常用来判断地核状态。把「地壳」和「岩石圈」分开，是考试常考易错点。' },
      { type: 'heading', text: '三、地球的外部圈层' },
      { type: 'paragraph', text: '包裹在固体地球外面的，是大气圈、水圈和生物圈。它们彼此联系、互相影响，共同构成人类赖以生存的自然环境。其中生物圈最特殊，它渗透在其它圈层之中，是最活跃、最富有生命力的圈层。' },
      { type: 'list', items: ['大气圈：由气体和悬浮物质组成，底部与地表相连', '水圈：由液态、固态和气态水组成，连续但不规则', '生物圈：生物及其生存环境的总称，跨大气圈、水圈、岩石圈', '三大外部圈层相互联系、相互渗透'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">地球的外部圈层</text><circle cx="340" cy="210" r="60" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="3"/><text x="340" y="215" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">岩石圈</text><ellipse cx="340" cy="210" rx="110" ry="95" fill="none" stroke="#3389c4" stroke-width="3"/><text x="340" y="100" font-size="13" fill="#1f3a4d" text-anchor="middle">大气圈</text><ellipse cx="340" cy="210" rx="150" ry="125" fill="none" stroke="#2a6fa8" stroke-width="3"/><text x="500" y="150" font-size="13" fill="#1f3a4d" text-anchor="middle">水圈</text><circle cx="470" cy="250" r="10" fill="#3389c4"/><text x="490" y="254" font-size="12" fill="#1f3a4d">生物圈</text><text x="340" y="345" font-size="12" fill="#1f3a4d" text-anchor="middle">大气圈、水圈、生物圈包裹地表，生物圈渗透于各圈层之间。</text></svg>', caption: '图3　外部圈层由大气圈、水圈、生物圈组成，生物圈最活跃。' },
      { type: 'example', label: '例题·外部圈层', text: '题目：下列关于外部圈层的说法，正确的是？<br>A. 水圈是不连续的　B. 生物圈只包括植物和动物<br>C. 大气圈由气体和悬浮物组成　D. 水圈仅指海洋水<br>解析：水圈包括海洋水、陆地水、大气水和生物水，是连续但不规则的圈层，A、D 错；生物圈是生物及其生存环境的总称，跨越大气圈底部、水圈全部和岩石圈上部，不只是动植物本身，B 错；大气圈正是由气体和悬浮物质组成的，C 正确。故选大气圈由气体和悬浮物组成。' },
      { type: 'tip', label: '提示·记忆外部圈层', text: '外部三个圈层可以一句话串起来：<strong>大气圈在上、水圈在外、生物圈最活</strong>。生物圈的特殊之处在于它不是独立的一层，而是渗透在大气圈底部、水圈全部和岩石圈上部，把各圈层联系起来，所以被认为是地球最活跃、最富有生命力的圈层。考试中只要看到「最活跃」基本就是指生物圈。' },
      { type: 'heading', text: '四、圈层之间相互影响' },
      { type: 'paragraph', text: '地球的各个圈层并不是彼此孤立的。例如，太阳辐射驱动大气运动和水循环，风化、侵蚀等外力作用把岩石圈的物质搬到水圈，生物通过光合作用和呼吸把大气、水、岩石联系起来。认识圈层，就是认识自然环境这个整体。' },
      { type: 'example', label: '例题·内部圈层界面', text: '题目：横波消失、纵波明显减速的界面是？<br>A. 莫霍界面　B. 古登堡界面　C. 软流层　D. 岩石圈底界<br>解析：在莫霍界面，纵波和横波速度都加快；而在约 2900 千米深处的古登堡界面，横波突然消失、纵波明显减速，这是由于外核呈液态、横波不能在液体中传播造成的。这一特征是划分地幔和地核的关键依据，因此正确选项是古登堡界面。' }
    ],
    exercises: [
      { type: 'choice', question: '划分地球内部圈层的主要依据是？', options: ['岩石颜色', '地震波波速变化', '矿产分布', '地表高低'], answer: '地震波波速变化', explanation: '人类无法直接观测地球内部，主要通过地震波来探测。地震波在不同物质中传播速度不同，在莫霍界面和古登堡界面处波速发生明显突变，科学家据此把地球内部分成地壳、地幔和地核。岩石颜色、矿产分布和地表高低都不能系统反映内部圈层结构，因此依据是地震波波速变化。' },
      { type: 'choice', question: '横波（S 波）不能够通过的物质状态是？', options: ['固体', '液体', '气体和固体', '真空'], answer: '液体', explanation: '横波的传播需要介质发生剪切变形，而液体和气体不能承受剪切，所以横波只能通过固体，不能通过液体和气体。正是利用这一点，当横波在约 2900 千米处消失时，科学家判断该深度的外核是液态。纵波则固液气三态都能通过。因此横波不能通过的是液体。' },
      { type: 'choice', question: '下列关于岩石圈的说法，正确的是？', options: ['岩石圈就是地壳', '岩石圈包括地壳和上地幔顶部', '岩石圈包含软流层', '岩石圈是最厚的内部圈层'], answer: '岩石圈包括地壳和上地幔顶部', explanation: '岩石圈是由硬岩石组成的圈层，包括地壳和上地幔顶部，范围比地壳大，所以不等于地壳。软流层位于上地幔上部、属于上地幔，但不在岩石圈范围内，是岩浆可能的发源地。最厚的内部圈层是地幔而非岩石圈。因此正确说法是岩石圈包括地壳和上地幔顶部。' },
      { type: 'fill', question: '地球内部两个主要界面中，地壳与地幔的分界是___界面，地幔与地核的分界是___界面。', answer: '莫霍；古登堡', explanation: '地震波速度第一次明显加快的界面位于地下约 33 千米（大陆），叫莫霍界面，它是地壳和地幔的分界线。波速第二次发生突变、横波消失的界面位于约 2900 千米深处，叫古登堡界面，它是地幔和地核的分界线。两个界面共同把地球内部分成三大圈层。' },
      { type: 'fill', question: '地球的外部圈层包括大气圈、水圈和___，其中___是最活跃、最富有生命力的圈层。', answer: '生物圈；生物圈', explanation: '包裹在固体地球外部的有大气圈、水圈和生物圈三大外部圈层，它们相互联系、相互渗透。生物圈是生物及其生存环境的总称，它跨越大气圈底部、水圈全部和岩石圈上部，把各圈层联系起来，是最活跃、最富有生命力的圈层，这一特征在考试中常作为判断依据。' }
    ]
  });
})();
