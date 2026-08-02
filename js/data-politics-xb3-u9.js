/* 思想政治 · 选择性必修3 · 逻辑与思维 · 第九课 理解质量互变 */
(function () {
  var v = gzGetVolume('politics', 'xb3');
  if (!v) return;
  v.points.push({
    id: 'xb3-u9',
    name: '第九课 理解质量互变',
    chapter: '高二思想政治（选择性必修3 逻辑与思维）· 第九课 理解质量互变',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、认识质与量' },
      { type: 'paragraph', text: '任何事物都有两面可量：它"是什么"（质），以及它"有多大、多强、多快"（量）。质和量是理解变化的第一步，也是质量互变规律的起点。' },
      { type: 'keypoint', label: '重点·质与量的含义', text: '<strong>质是一事物成为自身并区别于其他事物的内在规定性，事物一旦丧失自己的质，就不再是自己（如水变成水蒸气，液态的质就变了）。量是事物存在和发展的规模、程度、速度等可以用数量表示的属性。质和量都是事物本身固有的规定性，二者统一于具体事物。</strong>' },
      { type: 'list', items: ['质：决定事物"是什么"的内在规定性，质变了事物就不再是自己。', '量：规模、程度、速度、结构等可用数量表示的属性，量变了事物仍是自己（量变不改变质）。', '任何事物都是质和量的统一体。'] },
      { type: 'table', headers: ['', '质', '量'], rows: [['回答', '事物是什么', '事物有多大、多强、多快'], ['变化后果', '质变质，事物就不再是自己', '量变不改变事物自身'], ['举例', '水与冰靠"液态/固态"的质区分', '水温从10度升到90度，还是水']] },
      { type: 'example', label: '例子·一杯水的质与量', text: '常温下这杯水，它的"质"是液态水；把它加热到90摄氏度，温度（量）变了，但它还是水。可一旦继续加热到100摄氏度以上变成水蒸气，"质"就变了——水不再是液态的水。这个例子把"量变不改变自身、质变改变自身"讲得明明白白。' },

      { type: 'heading', text: '二、量变与质变的关系' },
      { type: 'paragraph', text: '事物的发展，既表现为量上的慢慢积累，也表现为质上的飞跃。质量互变规律揭示了这两者的关系：没有量变的积累，就不会有质的飞跃。' },
      { type: 'list', items: ['量变是质变的必要准备：质变靠一点一滴的量变积累而成。', '质变是量变的必然结果：量变达到一定程度，必然引起质变。', '质变为新的量变开辟道路：旧阶段结束，新阶段在新质基础上又开始新的量变。'] },
      { type: 'table', headers: ['', '量变', '质变'], rows: [['含义', '事物数量的增减或场所的变更', '事物根本性质的变化（由一种质态到另一种）'], ['特点', '渐进的、不显著的变化', '根本的、显著的变化'], ['关系', '是质变的必要准备', '是量变的必然结果']] },
      { type: 'example', label: '例子·水滴石穿与积少成多', text: '水滴石穿：每一滴水的冲击是微小的量变，长年累月，石头终于被滴穿，这是质变。学习也是：每天背几个单词是量变，坚持一年后英语突飞猛进是质变。反过来，一次考试砸了不算质变（只是量的波动），只有能力层次的根本变化才是质变。' },
      { type: 'warn', label: '易错·量变不一定自动引起质变', text: '有同学以为"只要量变就会质变"。其实量变必须达到"一定程度"（突破度的界限）才会引起质变。比如水温在0到100摄氏度之间无论怎么变，都还是水，只有突破100度（或0度）才质变。所以"量变是必要准备"不等于"任意小的量变都导致质变"，关键在于是否越过度的临界点。' },

      { type: 'heading', text: '三、把握适度原则' },
      { type: 'paragraph', text: '既然量变质变有个"临界点"，那做事就不能太过也不能不及。这个临界点围成的范围，就是"度"。把握度，就是把握分寸。' },
      { type: 'list', items: ['适度：事物保持自己质的量的限度（范围、幅度）。', '要求一：防止"过"——超过度的上限，事物就向坏的方向质变。', '要求二：防止"不及"——没达到度的下限，该有的效果也出不来。', '在"度"的范围内认识和改造事物，才能达到预期目的。'] },
      { type: 'keypoint', label: '重点·在度的范围内活动', text: '<strong>适度原则要求我们认识事物的度，在度的范围内活动，既要反对"过头"（过犹不及），也要反对"不够"（火候不到）。比如吃药，剂量不够治不了病（不及），超量又伤身（过）。把握适度，就是把握"刚刚好"的界限，这是质量互变规律给我们的生活智慧。</strong>' },
      { type: 'tip', label: '学习提示', text: '质量互变规律记三句话：量变是准备、质变是结果、质变为新量变开路。做题看到"循序渐进""防微杜渐""过犹不及"，都对应本课：前两者强调量变的积累与临界，后者强调适度原则。把"度"理解为"安全带"，在带内最稳妥。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">质与量</text><rect x="90" y="70" width="230" height="110" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="205" y="110" font-size="14" fill="#3d1f24" text-anchor="middle" font-weight="bold">质</text><text x="205" y="138" font-size="12" fill="#3d1f24" text-anchor="middle">是什么</text><text x="205" y="162" font-size="11" fill="#3d1f24" text-anchor="middle">变质就不再是自己</text><rect x="360" y="70" width="230" height="110" rx="10" fill="#b8334a"/><text x="475" y="110" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">量</text><text x="475" y="138" font-size="12" fill="#fff" text-anchor="middle">多大·多强·多快</text><text x="475" y="162" font-size="11" fill="#fff" text-anchor="middle">量变不改变自身</text><text x="340" y="235" font-size="12" fill="#3d1f24" text-anchor="middle">任何事物都是质和量的统一体。</text></svg>', caption: '图1　质规定"是什么"，量规定"有多大"。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 270" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="270" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">量变与质变的辩证关系</text><text x="200" y="110" font-size="13" fill="#3d1f24" text-anchor="middle">量变（积累）</text><text x="480" y="110" font-size="13" fill="#3d1f24" text-anchor="middle">质变（飞跃）</text><line x1="280" y1="110" x2="400" y2="110" stroke="#d4485a" stroke-width="2"/><polygon points="400,110 388,105 388,115" fill="#d4485a"/><text x="340" y="160" font-size="12" fill="#3d1f24" text-anchor="middle">量变是质变的必要准备</text><text x="340" y="190" font-size="12" fill="#3d1f24" text-anchor="middle">质变是量变的必然结果</text><text x="340" y="220" font-size="12" fill="#3d1f24" text-anchor="middle">质变为新的量变开辟道路</text></svg>', caption: '图2　量变与质变相互衔接、循环上升。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">把握适度原则</text><rect x="120" y="80" width="440" height="40" rx="20" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="150" y="105" font-size="12" fill="#3d1f24" text-anchor="middle">不及</text><text x="340" y="105" font-size="12" fill="#b8334a" text-anchor="middle" font-weight="bold">适度（度的范围）</text><text x="530" y="105" font-size="12" fill="#3d1f24" text-anchor="middle">过</text><line x1="120" y1="80" x2="120" y2="140" stroke="#d4485a" stroke-width="2"/><line x1="560" y1="80" x2="560" y2="140" stroke="#d4485a" stroke-width="2"/><text x="340" y="200" font-size="12" fill="#3d1f24" text-anchor="middle">在度的范围内活动，防止"过"与"不及"。</text></svg>', caption: '图3　适度原则：守住度的上下限。' }
    ],
    exercises: [
      { type: 'choice', question: '关于质，下列说法正确的是？', options: ['质是可以用数量表示的属性', '质变了事物就不再是自己', '量变必然立即引起质变', '质和量没有关系'], answer: '质变了事物就不再是自己', explanation: '质是一事物成为自身并区别于他物的内在规定性，一旦丧失自己的质，事物就不再是自己（如水变为水蒸气，液态的质消失）。质是定性规定，不是数量属性（那是量）；"量变必然立即引起质变"错在忽视度的界限；质和量统一于事物，并非无关。故选"质变了事物就不再是自己"。' },
      { type: 'choice', question: '"水滴石穿"主要体现了？', options: ['量变是质变的必要准备', '质变不影响量变', '只有质变有意义', '量变质变互不相关'], answer: '量变是质变的必要准备', explanation: '水滴石穿中，每一滴水的冲击是微小量变，长年累月积累到一定程度，石头被滴穿，发生质变。这正说明量变是质变的必要准备，没有量变的日积月累就没有质变的发生。质变会为新的量变开辟道路，并非"不影响"；量变质变密切相关。故选"量变是质变的必要准备"。' },
      { type: 'choice', question: '适度原则要求我们？', options: ['越多越好', '越少越好', '在度的范围内活动，防止过与不及', '不考虑度的界限'], answer: '在度的范围内活动，防止过与不及', explanation: '适度是事物保持自己质的量的限度。适度原则要求我们在度的范围内认识和改造事物，既要防止超过上限的"过"（过犹不及），也要防止没达下限的"不及"（火候不到）。"越多越好""越少越好""不考虑度"都违背了适度原则。故选"在度的范围内活动，防止过与不及"。' },
      { type: 'fill', question: '质是事物成为自身并区别于他物的___；量是事物存在发展的___、___、___等可用数量表示的属性。', answer: '内在规定性；规模；程度；速度', explanation: '质是一事物成为自身并区别于其他事物的内在规定性；量是事物存在和发展的规模、程度、速度等可以用数量表示的属性。质回答"是什么"，量回答"有多大、多强、多快"。填空依次填：内在规定性、规模、程度、速度。' },
      { type: 'fill', question: '量变与质变的关系：量变是质变的___，质变是量变的___，质变为新的量变___。把握___原则要在度的范围内活动。', answer: '必要准备；必然结果；开辟道路；适度', explanation: '质量互变规律三句话：量变是质变的必要准备，质变是量变的必然结果，质变为新的量变开辟道路。由此引出方法论——把握适度原则，即在度的范围内活动，防止"过"与"不及"。填空依次填：必要准备、必然结果、开辟道路、适度。' }
    ]
  });
})();
