/* 地理 · 选择性必修1 · 第2章 · 课时：构造地貌的形成 */
(function () {
  var v = gzGetVolume('geography', 'xb1');
  if (!v) return;
  v.points.push({
    id: 'xb1-u4',
    name: '第2节 构造地貌的形成',
    chapter: '选择性必修1 · 第2章 地表形态的塑造',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、地质构造与褶皱' },
      { type: 'paragraph', text: '岩层在内外力作用下发生变形或变位，留下的「痕迹」称为地质构造。褶皱是最常见的一种地质构造，它是岩层受到水平挤压而发生弯曲形成的。褶皱的基本形态有背斜和向斜：岩层向上拱起的叫背斜，向下弯曲的叫向斜。' },
      { type: 'list', items: ['褶皱：岩层受挤压弯曲形成的连续波状构造', '背斜：岩层向上拱起', '向斜：岩层向下弯曲', '岩层新老关系：背斜中心老、两翼新；向斜中心新、两翼老'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">背斜与向斜的形态</text><path d="M 80 200 Q 200 100 320 200" fill="none" stroke="#2a6fa8" stroke-width="2"/><path d="M 360 200 Q 480 100 600 200" fill="none" stroke="#2a6fa8" stroke-width="2"/><path d="M 80 230 Q 200 130 320 230" fill="none" stroke="#2a6fa8" stroke-width="2"/><path d="M 360 230 Q 480 130 600 230" fill="none" stroke="#2a6fa8" stroke-width="2"/><text x="200" y="160" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">背斜（拱起）</text><text x="480" y="160" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">向斜（弯曲）</text><line x1="200" y1="200" x2="200" y2="250" stroke="#c1583b" stroke-width="2"/><text x="200" y="270" font-size="11" fill="#1f3a4d">中心岩层老</text><line x1="480" y1="200" x2="480" y2="250" stroke="#c1583b" stroke-width="2"/><text x="480" y="270" font-size="11" fill="#1f3a4d">中心岩层新</text></svg>', caption: '图1　背斜岩层向上拱起、中心岩层老；向斜向下弯曲、中心岩层新。' },
      { type: 'keypoint', label: '重点·地形倒置', text: '<strong>背斜未必成山、向斜未必成谷。</strong>初期背斜因岩层上拱形成山，向斜形成谷；但背斜顶部受张力易被侵蚀，长期风化后可能变成谷地；向斜槽部受挤压、岩石坚硬不易被侵蚀，反而可能保留成山。因此「背斜山、向斜谷」不是绝对的，判断构造应看岩层新老而非地形。' },
      { type: 'heading', text: '二、断层与断块山' },
      { type: 'paragraph', text: '当岩层受到的挤压力或张力超过岩石的承受限度时，岩层会发生断裂，并且断裂面两侧岩块沿断裂面发生明显的位移，这种构造称为断层。断层中相对上升的岩块称为地垒，常形成块状山地（断块山）；相对下降的岩块称为地堑，常形成谷地或盆地。' },
      { type: 'list', items: ['断层：岩层断裂并发生位移', '地垒：断层中相对上升的岩块，成断块山', '地堑：断层中相对下降的岩块，成谷地或盆地', '华山、庐山、泰山都是典型断块山'] },
      { type: 'table', headers: ['构造', '岩块运动', '地貌', '实例'], rows: [['地垒', '相对上升', '块状山、断块山', '华山、庐山、泰山'], ['地堑', '相对下降', '谷地、盆地', '汾河谷地、渭河平原'], ['断层带', '破裂错位', '断裂谷、泉出露', '东非大裂谷']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">断层：地垒与地堑</text><rect x="120" y="120" width="120" height="160" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="180" y="200" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">地垒</text><text x="180" y="225" font-size="11" fill="#1f3a4d" text-anchor="middle">上升成山</text><rect x="320" y="180" width="120" height="100" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="380" y="225" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">地堑</text><text x="380" y="248" font-size="11" fill="#1f3a4d" text-anchor="middle">下降成谷</text><line x1="240" y1="120" x2="320" y2="180" stroke="#c1583b" stroke-width="2"/><line x1="240" y1="280" x2="320" y2="280" stroke="#c1583b" stroke-width="2"/><text x="280" y="160" font-size="11" fill="#1f3a4d" text-anchor="middle">断裂面</text></svg>', caption: '图2　断层中地垒上升成块状山，地堑下降成谷地或盆地。' },
      { type: 'example', label: '例题·判断构造地貌', text: '题目：华山属于哪类构造地貌？<br>A. 褶皱山　B. 断块山　C. 火山　D. 三角洲<br>解析：华山是断层构造中相对上升的岩块（地垒）形成的块状山地，属于断块山，不是由岩层弯曲（褶皱）形成，也不是火山喷发或流水堆积。类似还有庐山、泰山。所以答案为断块山。' },
      { type: 'heading', text: '三、火山与地震' },
      { type: 'paragraph', text: '岩浆沿地壳薄弱地带上升，喷出地表或侵入地下，冷却后形成火山地貌。火山喷发堆积成火山锥，火山口积水可成火口湖。地震多发生在板块交界带的断裂活动处，是地球内部能量突然释放的表现，也常沿断层分布。' },
      { type: 'warn', label: '易错·背斜与向斜的判断依据', text: '判断背斜向斜绝不能只看地形高低，必须看岩层的新老关系：中心岩层老、两翼新的是背斜；中心岩层新、两翼老的是向斜。很多题目故意用「背斜成谷」来迷惑，只要依据岩层新老就能稳准判断。' },
      { type: 'tip', label: '提示·构造与资源', text: '背斜是良好的储油、储气构造（因为油气密度小，向上聚集于拱起顶部）；向斜是良好的储水构造（槽部低凹易蓄水）。断层处岩石破碎，常发育泉水或沟谷，但大型工程（如水库、隧道）要避开断层带，以免诱发灾害。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">背斜储油、向斜储水</text><path d="M 120 200 Q 250 110 380 200" fill="none" stroke="#2a6fa8" stroke-width="2"/><path d="M 120 230 Q 250 140 380 230" fill="none" stroke="#2a6fa8" stroke-width="2"/><text x="250" y="155" font-size="12" fill="#1f3a4d" text-anchor="middle" font-weight="bold">背斜（储油储气）</text><ellipse cx="250" cy="180" rx="30" ry="14" fill="#c1583b" opacity="0.6"/><text x="250" y="184" font-size="11" fill="#fff">油</text><path d="M 420 200 Q 550 290 680 200" fill="none" stroke="#2a6fa8" stroke-width="2"/><path d="M 420 230 Q 550 320 680 230" fill="none" stroke="#2a6fa8" stroke-width="2"/><text x="550" y="270" font-size="12" fill="#1f3a4d" text-anchor="middle" font-weight="bold">向斜（储水）</text><ellipse cx="550" cy="265" rx="28" ry="12" fill="#3d6fb5" opacity="0.6"/><text x="550" y="269" font-size="11" fill="#fff">水</text></svg>', caption: '图3　背斜顶部储油储气，向斜槽部蓄水，是常见资源构造。' },
      { type: 'heading', text: '四、构造地貌与人类活动' },
      { type: 'paragraph', text: '构造地貌不仅决定山川格局，也影响人类工程建设、资源勘探和城市选址。了解褶皱、断层分布，能帮助我们合理选址、规避灾害。例如隧道宜选背斜（结构稳定、不易积水），水库坝址要避开断层带。' },
      { type: 'list', items: ['隧道选背斜：岩层稳定、不易积水', '水库避开断层：防止渗漏与诱发地震', '油气勘探重背斜、找水重向斜', '山区建房避开陡崖与断裂带'] },
      { type: 'keypoint', label: '重点·本课时核心结论', text: '<strong>构造地貌两大主角：</strong>褶皱（背斜、向斜）与断层（地垒、地堑）。判断褶皱看岩层新老，判断断层看是否错位位移。背斜储油、向斜储水、地垒成山、地堑成谷，这些规律直接服务于资源勘探和工程建设。' }
    ],
    exercises: [
      { type: 'choice', question: '判断背斜和向斜的科学依据是？', options: ['地形高低', '岩层新老关系', '岩层颜色', '岩石硬度'], answer: '岩层新老关系', explanation: '背斜是岩层向上拱起、中心岩层老两翼新；向斜是岩层向下弯曲、中心岩层新两翼老。由于可能发生地形倒置（背斜成谷、向斜成山），不能依据地形高低判断，而必须依据岩层的新老关系来区分构造类型。' },
      { type: 'choice', question: '断层中相对上升的岩块形成的地貌是？', options: ['地堑', '谷地', '地垒（断块山）', '盆地'], answer: '地垒（断块山）', explanation: '断层两侧岩块沿断裂面发生位移，相对上升的岩块称为地垒，常形成块状山地即断块山，如华山、庐山、泰山；相对下降的岩块称为地堑，常形成谷地或盆地，如汾河谷地、渭河平原。' },
      { type: 'choice', question: '下列山地中属于断块山的是？', options: ['喜马拉雅山', '华山', '富士山', '乞力马扎罗山'], answer: '华山', explanation: '华山是断层中地垒上升形成的断块山。喜马拉雅山是板块挤压形成的褶皱山，富士山和乞力马扎罗山是火山。断块山的典型代表还有庐山和泰山，它们都因断层活动而相对抬升。' },
      { type: 'fill', question: '背斜是良好的储___、储___构造，向斜是良好的储___构造。', answer: '油；气；水', explanation: '背斜岩层向上拱起，密度小的油气受浮力作用聚集于顶部，因此背斜是良好的储油、储气构造；向斜槽部低凹，地下水易向此处汇集，因此向斜是良好的储水构造。这也是地质找矿找水的重要依据。' },
      { type: 'fill', question: '工程建设中，隧道应尽量选在___（背斜/向斜），水库坝址应避开___带。', answer: '背斜；断层', explanation: '背斜岩层拱起、结构相对稳定且不易积水，适合修建隧道；断层处岩石破碎、易发生渗漏并可能诱发地震等灾害，因此水库、大型工程必须避开断层带。这是构造地貌知识在工程选址中的直接应用。' }
    ]
  });
})();
