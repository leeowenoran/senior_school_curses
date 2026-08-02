/* 思想政治 · 选择性必修3 · 逻辑与思维 · 第五课 正确运用判断 */
(function () {
  var v = gzGetVolume('politics', 'xb3');
  if (!v) return;
  v.points.push({
    id: 'xb3-u5',
    name: '第五课 正确运用判断',
    chapter: '高二思想政治（选择性必修3 逻辑与思维）· 第五课 正确运用判断',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、判断的概述' },
      { type: 'paragraph', text: '概念只是零件，把零件连成一句话、对一个事情作出肯定或否定，就形成了判断。我们每天都在做判断："今天会下雨""他是个诚实的人"。判断是推理的原料，判断准了，推理才可能准。' },
      { type: 'keypoint', label: '重点·判断的两个基本特征', text: '<strong>判断是对认识对象有所断定的思维形式，它有两个基本特征：第一，必须"有所断定"——要么肯定、要么否定，不置可否不算判断；第二，一定有"真假之分"——判断要么符合事实为真，要么不符合事实为假。一个句子如果不断定任何事（如"请把门关上"这种祈使句、疑问句），就不是判断。</strong>' },
      { type: 'list', items: ['判断是对对象有所断定的思维形式，由概念构成。', '基本特征一：有所断定（肯定或否定）。', '基本特征二：有真假之分（符合事实为真，否则为假）。', '不表示断定或没有真假的语句（疑问句、祈使句、感叹句）一般不是判断。'] },

      { type: 'heading', text: '二、正确运用简单判断' },
      { type: 'paragraph', text: '简单判断是不包含其他判断的判断，最常见的是性质判断和关系判断。它们结构简单，却是日常表达的主力。' },
      { type: 'table', headers: ['类型', '含义', '举例'], rows: [['性质判断（直言判断）', '断定对象具有或不具有某种性质', '"所有金属都导电""有的花不是红色的"'], ['关系判断', '断定对象之间具有某种关系', '"北京在广州的北边""小明比小红高"']] },
      { type: 'example', label: '例子·一句话分出两种简单判断', text: '"所有金属都导电"是性质判断，它断定"金属"这个对象具有"导电"的性质。"北京在广州的北边"是关系判断，它断定北京和广州之间"在北边"的方位关系。性质判断盯着"一个对象怎么样"，关系判断盯着"两个对象之间怎样"。' },
      { type: 'list', items: ['性质判断的构成：量项（所有/有的/这个）+ 主项 + 联项（是/不是）+ 谓项。', '关系判断要留意关系的对称性：对称关系（甲对乙怎样，乙对甲也怎样，如"等于"）、反对称关系（甲对乙怎样，乙对甲必不怎样，如"大于"）、非对称关系（不一定，如"认识"）。', '关系还有传递性：传递关系（甲>乙且乙>丙，则甲>丙）、反传递、非传递。'] },
      { type: 'warn', label: '易错·把关系判断当成性质判断', text: '很多同学看到"小明比小红高"就当成性质判断，以为在说"小明"的性质。其实它断定的是"小明"和"小红"两个人之间的"高矮"关系，属于关系判断。关系判断的真假取决于对象间关系是否成立，而且要注意对称性、传递性——"甲认识乙"推不出"乙认识甲"（非对称）。这是判断分类题的高频陷阱。' },

      { type: 'heading', text: '三、正确运用复合判断' },
      { type: 'paragraph', text: '复合判断是由两个或两个以上简单判断组合而成的判断，常用"并且""或者""如果…那么"等联结词。复合判断的真假，取决于它包含的各个简单判断以及联结方式。' },
      { type: 'table', headers: ['类型', '含义', '真假规则'], rows: [['联言判断', '断定几种情况同时存在（并且）', '全真才真，一假即假'], ['选言判断', '断定几种情况至少一种存在（或者）', '相容：一真即真；不相容：有且只有一真才真'], ['假言判断', '断定事物情况间的条件关系（如果…那么）', '分充分、必要、充分必要条件，依条件性质定真假']] },
      { type: 'example', label: '例子·三种复合判断各举一例', text: '①联言："他既聪明又努力"——两个部分都真，整句才真，只要有一假整句就假。②选言："或者坐火车，或者坐飞机"——相容选言只要一种方式成立整句就真。③假言："如果明天下雨，就不去郊游"——断定"下雨"是"不去郊游"的条件。联言要"全真"，选言要"至少一真"，假言看"条件关系"。' },
      { type: 'tip', label: '学习提示', text: '判断分类三步法：先看含不含其他判断——不含是简单判断（性质/关系），含是复合判断（联言/选言/假言）。再记真假规则：联言"全真才真"、相容选言"一真即真"、假言"看条件"。考试常让你判断一个句子属于哪类，并分析其真假，套路就这两步。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">判断的两个基本特征</text><rect x="90" y="70" width="240" height="110" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="210" y="110" font-size="14" fill="#3d1f24" text-anchor="middle" font-weight="bold">有所断定</text><text x="210" y="138" font-size="12" fill="#3d1f24" text-anchor="middle">肯定或否定</text><text x="210" y="162" font-size="11" fill="#3d1f24" text-anchor="middle">不置可否不算判断</text><rect x="350" y="70" width="240" height="110" rx="10" fill="#b8334a"/><text x="470" y="110" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">有真假之分</text><text x="470" y="138" font-size="12" fill="#fff" text-anchor="middle">符合事实为真</text><text x="470" y="162" font-size="11" fill="#fff" text-anchor="middle">否则为假</text><text x="340" y="240" font-size="12" fill="#3d1f24" text-anchor="middle">疑问句、祈使句一般不是判断，因为它们不断定、无真假。</text></svg>', caption: '图1　判断必须"有所断定"且"有真假之分"。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 290" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="290" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">判断的分类：简单判断与复合判断</text><rect x="60" y="65" width="270" height="170" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="195" y="95" font-size="14" fill="#3d1f24" text-anchor="middle" font-weight="bold">简单判断</text><text x="195" y="125" font-size="12" fill="#3d1f24" text-anchor="middle">性质判断（直言）</text><text x="195" y="150" font-size="12" fill="#3d1f24" text-anchor="middle">关系判断</text><text x="195" y="180" font-size="11" fill="#3d1f24" text-anchor="middle">不含其他判断</text><rect x="350" y="65" width="270" height="170" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="485" y="95" font-size="14" fill="#3d1f24" text-anchor="middle" font-weight="bold">复合判断</text><text x="485" y="125" font-size="12" fill="#3d1f24" text-anchor="middle">联言·选言·假言</text><text x="485" y="150" font-size="12" fill="#3d1f24" text-anchor="middle">由简单判断组合</text><text x="485" y="180" font-size="11" fill="#3d1f24" text-anchor="middle">含联结词</text></svg>', caption: '图2　判断的两大分支。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 290" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="290" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">复合判断的真假规则</text><rect x="50" y="65" width="180" height="100" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="140" y="100" font-size="13" fill="#3d1f24" text-anchor="middle" font-weight="bold">联言</text><text x="140" y="125" font-size="11" fill="#3d1f24" text-anchor="middle">全真才真</text><text x="140" y="145" font-size="11" fill="#3d1f24" text-anchor="middle">一假即假</text><rect x="250" y="65" width="180" height="100" rx="10" fill="#b8334a"/><text x="340" y="100" font-size="13" fill="#fff" text-anchor="middle" font-weight="bold">选言</text><text x="340" y="125" font-size="11" fill="#fff" text-anchor="middle">一真即真</text><text x="340" y="145" font-size="11" fill="#fff" text-anchor="middle">（相容）</text><rect x="450" y="65" width="180" height="100" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="540" y="100" font-size="13" fill="#3d1f24" text-anchor="middle" font-weight="bold">假言</text><text x="540" y="125" font-size="11" fill="#3d1f24" text-anchor="middle">看条件</text><text x="540" y="145" font-size="11" fill="#3d1f24" text-anchor="middle">关系成立否</text><text x="340" y="210" font-size="12" fill="#3d1f24" text-anchor="middle">复合判断的真假由支判断和联结方式共同决定。</text></svg>', caption: '图3　联言、选言、假言判断的真假规则。' }
    ],
    exercises: [
      { type: 'choice', question: '下列属于判断的是？', options: ['请把门关上', '今天天气真好啊', '北京是中国的首都', '你吃饭了吗'], answer: '北京是中国的首都', explanation: '判断是对认识对象有所断定且有真假之分的思维形式。"北京是中国的首都"断定了一个事实，有真假，是判断。其余三项："请把门关上"是祈使句，"今天天气真好啊"是感叹句，"你吃饭了吗"是疑问句，它们都不表示断定、没有真假，因此不是判断。' },
      { type: 'choice', question: '"小明比小红高"属于哪种判断？', options: ['性质判断', '关系判断', '联言判断', '假言判断'], answer: '关系判断', explanation: '性质判断断定对象"自身"具有或不具有某种性质，而"小明比小红高"断定的是小明和小红两个人之间的"高矮"关系，属于关系判断。它不是联言（没有"并且"组合多个判断），也不是假言（没有条件关系）。注意关系判断要留意对称性和传递性，这道题直接考分类。' },
      { type: 'choice', question: '联言判断"他既聪明又努力"为真的条件是？', options: ['两部分有一真即可', '两部分全真才真', '两部分全假才真', '与两部分真假无关'], answer: '两部分全真才真', explanation: '联言判断断定几种事物情况同时存在，其真假规则是"全真才真，一假即假"。所以"他既聪明又努力"只有在"聪明"和"努力"两部分都为真时才真，只要有一部分假，整句就假。这与选言判断"一真即真"正好相反，是复合判断真假规则的基本考点。' },
      { type: 'fill', question: '判断的两个基本特征是___和___；其中"符合事实为真、不符合为假"指的是___。', answer: '有所断定；有真假之分；有真假之分', explanation: '判断是对认识对象有所断定的思维形式，两个基本特征：一是"有所断定"（肯定或否定），二是对错"有真假之分"（符合事实为真，否则为假）。"符合事实为真、不符合为假"描述的正是第二个特征"有真假之分"。填空依次填：有所断定、有真假之分、有真假之分。' },
      { type: 'fill', question: '不含其他判断的是___判断（含性质判断和___判断）；由简单判断组合而成的是___判断（含联言、___、假言）。', answer: '简单；关系；复合；选言', explanation: '判断按是否含其他判断分为两类：简单判断不含其他判断，包括性质判断（直言判断）和关系判断；复合判断由简单判断通过联结词组合而成，包括联言判断、选言判断、假言判断。填空依次填：简单、关系、复合、选言。' }
    ]
  });
})();
