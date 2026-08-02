/* 生物学 · 高三复习 · 遗传与进化 · 第2章 · 课时：第2节 基因在染色体上 */
(function () {
  var v = gzGetVolume('biology', 'zt2');
  if (!v) return;
  v.points.push({
    id: 'zt2-u6',
    name: '第2节 基因在染色体上',
    chapter: '遗传与进化 · 第2章 基因和染色体的关系',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、萨顿的假说：基因在染色体上' },
      { type: 'paragraph', text: '1903 年，美国遗传学家萨顿在研究蝗虫精子和卵细胞形成时，发现基因和染色体的行为存在明显的平行关系。他由此提出：<strong>基因是由染色体携带着从亲代传递给子代的，即基因位于染色体上。</strong>这是第一次把抽象的遗传因子（基因）落到了具体的细胞结构上。' },
      { type: 'list', items: [
        '基因在杂交中保持完整性和独立性，染色体在配子形成和受精中也有稳定的形态结构',
        '体细胞中基因成对存在，染色体也成对；配子中只含有成对基因中的一个和成对染色体中的一条',
        '体细胞中成对的基因一个来自父方、一个来自母方，同源染色体也是如此',
        '非等位基因在形成配子时自由组合，非同源染色体在减数第一次分裂后期也自由组合'
      ] },
      { type: 'keypoint', label: '核心概念·萨顿假说', text: '<strong>萨顿运用类比推理法，依据基因与染色体行为的一致性，提出基因位于染色体上。</strong>类比推理的结论没有逻辑必然性，仍需实验验证——完成验证工作的是摩尔根。' },
      { type: 'paragraph', text: '可以把基因想象成乘客，染色体想象成公共汽车。减数分裂时车一分为二，每位乘客也跟着分到不同的车里。萨顿看到基因和染色体的「乘车」规律完全一样，便推测它们坐在同一辆车上。' },
      { type: 'heading', text: '二、摩尔根的果蝇实验：用实验证明基因在染色体上' },
      { type: 'paragraph', text: '摩尔根起初并不相信萨顿的假说。他用果蝇做材料，发现白眼性状总是和性别相关联。正是这一现象，让他用严谨方法把假说证明确立了下来。果蝇作为材料有三大优点：繁殖快、后代多、染色体少且相对性状明显。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图1 摩尔根果蝇杂交实验</text><rect x="40" y="70" width="190" height="66" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="135" y="98" font-size="13" fill="#2e3a22" text-anchor="middle">P 红眼雌（纯种）</text><text x="135" y="120" font-size="12" fill="#5aa832" text-anchor="middle">XᵂXᵂ</text><rect x="450" y="70" width="190" height="66" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="545" y="98" font-size="13" fill="#2e3a22" text-anchor="middle">P 白眼雄</text><text x="545" y="120" font-size="12" fill="#5aa832" text-anchor="middle">XʷY</text><polygon points="230,103 290,95 290,123" fill="#3f7d1e"/><text x="340" y="118" font-size="22" font-weight="bold" fill="#3f7d1e" text-anchor="middle">×</text><polygon points="390,103 450,95 450,123" fill="#3f7d1e"/><rect x="220" y="165" width="240" height="58" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="190" font-size="13" fill="#2e3a22" text-anchor="middle">F₁ 全为红眼</text><text x="340" y="212" font-size="12" fill="#5aa832" text-anchor="middle">雌 XᵂXʷ 雄 XᵂY</text><polygon points="340,133 340,158 330,158" fill="#3f7d1e"/><text x="340" y="248" font-size="12" fill="#2e3a22" text-anchor="middle">F₁ 雌雄交配</text><polygon points="340,223 340,248 330,248" fill="#3f7d1e"/><rect x="90" y="282" width="200" height="58" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="190" y="315" font-size="13" fill="#2e3a22" text-anchor="middle">F₂ 红眼</text><rect x="390" y="282" width="200" height="58" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="490" y="315" font-size="13" fill="#2e3a22" text-anchor="middle">F₂ 白眼（全雄）</text><text x="190" y="268" font-size="13" fill="#5aa832" font-weight="bold" text-anchor="middle">3</text><text x="490" y="268" font-size="13" fill="#5aa832" font-weight="bold" text-anchor="middle">1</text></svg>', caption: '图1　摩尔根果蝇杂交：F₂ 红眼与白眼约为 3∶1，且白眼全为雄性。' },
      { type: 'paragraph', text: '实验结果：F₁ 全为红眼，说明红眼对白眼是显性；F₂ 中红眼与白眼约为 3∶1，符合分离定律；但<strong>所有白眼果蝇都是雄性</strong>，雌性中没有白眼。这提示控制白眼的基因很可能位于 X 染色体上，Y 染色体上没有它的等位基因。' },
      { type: 'list', items: [
        '假设控制白眼的基因（w）位于 X 染色体上，Y 上不携带其等位基因',
        '红眼母本为 XᵂXᵂ，白眼父本为 XʷY，杂交得 F₁ 全红眼（XᵂXʷ、XᵂY）',
        'F₁ 雌雄交配，F₂ 雌性为 XᵂXᵂ、XᵂXʷ 全红眼，雄性为 XᵂY 红眼、XʷY 白眼',
        '白眼只在雄性出现，红眼∶白眼约 3∶1，与实验完全吻合'
      ] },
      { type: 'heading', text: '三、假说—演绎法的验证' },
      { type: 'paragraph', text: '摩尔根按假说—演绎法进一步验证：先根据假说进行演绎推理，如果假说成立，那么让 F₁ 红眼雌果蝇（XᵂXʷ）与白眼雄果蝇（XʷY）测交，子代应出现红眼雌、红眼雄、白眼雌、白眼雄四种，比例约为 1∶1∶1∶1。实验结果果然如此，假说得到证实。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图2 测交验证</text><rect x="40" y="80" width="200" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="140" y="115" font-size="13" fill="#2e3a22" text-anchor="middle">F₁ 红眼雌 XᵂXʷ</text><rect x="440" y="80" width="200" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="540" y="115" font-size="13" fill="#2e3a22" text-anchor="middle">白眼雄 XʷY</text><polygon points="240,110 300,102 300,128" fill="#3f7d1e"/><text x="340" y="124" font-size="20" font-weight="bold" fill="#3f7d1e" text-anchor="middle">×</text><polygon points="380,110 440,102 440,128" fill="#3f7d1e"/><rect x="70" y="200" width="150" height="55" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="145" y="232" font-size="12" fill="#2e3a22" text-anchor="middle">红眼雌 XᵂXʷ</text><rect x="250" y="200" width="150" height="55" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="325" y="232" font-size="12" fill="#2e3a22" text-anchor="middle">白眼雌 XʷXʷ</text><rect x="430" y="200" width="150" height="55" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="505" y="232" font-size="12" fill="#2e3a22" text-anchor="middle">红眼雄 XᵂY</text><rect x="430" y="200" width="150" height="55" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><rect x="610" y="200" width="0" height="0" fill="none"/><text x="325" y="270" font-size="12" fill="#2e3a22" text-anchor="middle">子代红眼雌∶白眼雌∶红眼雄∶白眼雄 ≈ 1∶1∶1∶1，假说成立。</text></svg>', caption: '图2　测交子代四种表现型约为 1∶1∶1∶1，验证基因位于 X 染色体。' },
      { type: 'example', label: '例题·果蝇杂交推理', text: '已知果蝇红眼（W）对白眼（w）为显性，基因位于 X 染色体上。一只红眼雌蝇与一只白眼雄蝇杂交，子代雌蝇全为红眼、雄蝇全为白眼。<br>分析：若红眼雌为 XᵂXʷ，与 XʷY 杂交，子代雌为 XᵂXʷ（红）、XʷXʷ（白），不符全红；故红眼雌必为 XᵂXᵂ，与 XʷY 杂交，雌全为 XᵂXʷ（红），雄全为 XᵂY（红）亦不符。<br>应为红眼雌 XᵂXʷ 与白眼雄 XʷY 时雄有红有白。题设雄全白，说明母本只提供 Xʷ，即母本为 XʷXʷ（白眼），与「红眼雌」矛盾，故需重新审视——实际符合题意的是白眼雌 XʷXʷ 与红眼雄 XᵂY：雌全红（XᵂXʷ）、雄全白（XʷY）。' },
      { type: 'warn', label: '易错·几个区分', text: '① 萨顿提出基因在染色体上是类比推理，不是实验证明；摩尔根才是实验证明。② 基因在染色体上，不等于基因在 DNA 上——染色体由 DNA 和蛋白质组成，基因是有遗传效应的 DNA 片段，基因在染色体上呈线性排列。③ 白眼只在雄性出现，不能误读为「白眼基因在 Y 染色体上」，而应在 X 上。' },
      { type: 'tip', label: '高频考点·假说—演绎步骤', text: '假说—演绎法的五步要记牢：观察现象→提出假说→演绎推理→实验验证→得出结论。高考常以「摩尔根如何验证」设题，关键是测交预期与实验结果的吻合。另注意：果蝇性别决定为 XY 型，雌性 XX、雄性 XY。' },
      { type: 'heading', text: '四、孟德尔遗传定律的现代解释' },
      { type: 'paragraph', text: '摩尔根的工作不仅证明了基因在染色体上，还把孟德尔定律落到了细胞学基础：基因的分离定律，实质是等位基因随同源染色体的分开而分离；基因的自由组合定律，实质是非同源染色体上的非等位基因自由组合。染色体是基因的载体，基因在染色体上呈线性排列。' },
      { type: 'table', headers: ['平行关系', '基因的行为', '染色体的行为'], rows: [
        ['存在形式', '在杂交中保持完整独立', '配子与受精中形态稳定'],
        ['体细胞中的存在', '成对存在', '成对存在'],
        ['配子中的存在', '含成对中的一个', '含成对中的一条'],
        ['来源', '一个来自父方一个来自母方', '同源染色体一条父方一条母方'],
        ['组合', '非等位基因自由组合', '非同源染色体自由组合']
      ] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图3 基因在染色体上呈线性排列</text><rect x="60" y="120" width="560" height="22" rx="11" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><rect x="120" y="110" width="26" height="42" rx="6" fill="#3f7d1e"/><text x="133" y="138" font-size="13" fill="#ffffff" text-anchor="middle" font-weight="bold">A</text><rect x="240" y="110" width="26" height="42" rx="6" fill="#3f7d1e"/><text x="253" y="138" font-size="13" fill="#ffffff" text-anchor="middle" font-weight="bold">B</text><rect x="360" y="110" width="26" height="42" rx="6" fill="#3f7d1e"/><text x="373" y="138" font-size="13" fill="#ffffff" text-anchor="middle" font-weight="bold">C</text><rect x="480" y="110" width="26" height="42" rx="6" fill="#3f7d1e"/><text x="493" y="138" font-size="13" fill="#ffffff" text-anchor="middle" font-weight="bold">D</text><polygon points="320,122 290,114 290,142" fill="#3f7d1e"/><text x="340" y="175" font-size="13" fill="#2e3a22" text-anchor="middle">一条染色体上多个基因沿纵向排列</text><rect x="60" y="220" width="560" height="22" rx="11" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="262" font-size="12" fill="#5aa832" text-anchor="middle">基因与染色体行为平行，故基因位于染色体上</text></svg>', caption: '图3　一条染色体上有许多基因，基因在染色体上呈线性排列。' },
      { type: 'paragraph', text: '小结：萨顿用类比推理提出基因在染色体上，摩尔根用果蝇杂交实验（假说—演绎法）加以证明。从此，基因不再是一个抽象符号，而是定位在染色体上的实体，为后续研究基因的本质打下了基础。' }
    ],
    exercises: [
      { type: 'choice', question: '萨顿提出「基因在染色体上」所运用的方法以及摩尔根证明该结论所运用的方法分别是？', options: ['假说—演绎法、类比推理法', '类比推理法、假说—演绎法', '假说—演绎法、假说—演绎法', '类比推理法、类比推理法'], answer: '类比推理法、假说—演绎法', explanation: '萨顿根据基因与染色体行为存在平行关系，用类比推理提出基因在染色体上，但类比推理的结论没有必然性；摩尔根通过果蝇杂交实验，用假说—演绎法（观察、假说、演绎、验证、结论）最终实验证明了基因位于染色体上。' },
      { type: 'choice', question: '摩尔根果蝇杂交实验中，F₂ 代白眼果蝇的出现特点是？', options: ['白眼既有雌性也有雄性', '白眼果蝇全部为雄性', '白眼果蝇全部为雌性', '白眼与红眼之比为 1∶1'], answer: '白眼果蝇全部为雄性', explanation: '控制白眼的基因位于 X 染色体上，Y 染色体上没有其等位基因。摩尔根实验中 F₁ 红眼雌（XᵂXʷ）与红眼雄（XᵂY）交配，F₂ 中雄性出现 XʷY 为白眼，雌性均为 XᵂXᵂ 或 XᵂXʷ 为红眼，因此白眼果蝇全为雄性，且红眼∶白眼约 3∶1。' },
      { type: 'choice', question: '下列关于基因与染色体关系的叙述，正确的是？', options: ['基因在染色体上呈线性排列，但萨顿未证明这一点', '摩尔根证明基因在 DNA 上而不是染色体上', '染色体是基因的载体，基因都在染色体上（细胞质基因除外）', '萨顿用假说—演绎法证明了基因在染色体上'], answer: '染色体是基因的载体，基因都在染色体上（细胞质基因除外）', explanation: '摩尔根证明基因位于染色体上，后来的研究进一步表明基因在染色体上呈线性排列；染色体是基因的主要载体，真核生物细胞核基因在染色体上，细胞质中的线粒体和叶绿体也含少量基因。萨顿用的是类比推理而非假说—演绎法。' },
      { type: 'fill', question: '摩尔根用果蝇杂交实验证明基因位于染色体上，他所使用的研究方法是___（填研究方法名称）。', answer: '假说—演绎法', explanation: '摩尔根面对白眼性状与性别相关联的现象，先提出基因位于 X 染色体上的假说，再通过测交进行演绎推理和实验验证，这种「观察—假说—演绎—验证—结论」的程序就是假说—演绎法，与孟德尔一致。' },
      { type: 'fill', question: '萨顿根据基因与染色体行为存在___关系，提出基因位于染色体上。', answer: '平行', explanation: '萨顿发现基因在杂交中保持完整独立、体细胞成对、配子成单、来源父母各一、非等位基因自由组合，这些行为与染色体的行为高度一致，即存在平行关系，由此类比推断基因位于染色体上。' }
    ]
  });
})();
