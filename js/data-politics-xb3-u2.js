/* 思想政治 · 选择性必修3 · 逻辑与思维 · 第二课 把握逻辑要义 */
(function () {
  var v = gzGetVolume('politics', 'xb3');
  if (!v) return;
  v.points.push({
    id: 'xb3-u2',
    name: '第二课 把握逻辑要义',
    chapter: '高二思想政治（选择性必修3 逻辑与思维）· 第二课 把握逻辑要义',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、"逻辑"这个词有几种意思' },
      { type: 'paragraph', text: '"逻辑"是个多义词。日常生活中我们脱口而出的"逻辑"，放在不同语境里意思完全不同。课本告诉我们，现代汉语里的"逻辑"主要有四种含义。分清它指哪一种，是避免概念混乱的第一步。' },
      { type: 'list', items: ['与"规律"同义：如"历史发展的逻辑"，指历史演进的客观规律。', '指"逻辑规律与规则"：如"说话写文章要讲逻辑"，指思维要遵守的规则。', '指认识问题的某种"思维方法"：如"这是强盗逻辑"，指一套歪理式的思考方式。', '指"逻辑学"这门学问：如"我要修一门逻辑课"，指研究思维形式结构的学科。'] },
      { type: 'example', label: '例子·一句话四种"逻辑"', text: '①"事物发展有其内在逻辑"——这里"逻辑"指规律；②"你这个推理不合逻辑"——指逻辑规律与规则；③"这种诡辩是强盗逻辑"——指一种思维方法；④"逻辑是大学的必修课"——指逻辑学这门学问。同一个词，四层意思，全靠语境区分。' },
      { type: 'keypoint', label: '重点·看语境定含义', text: '<strong>判断"逻辑"指什么，关键看它所在的句子：说自然、社会"怎么走"多指规律；说人"说话办事"多指规则；说某套歪理多指思维方法；说一门"课、书、学问"多指逻辑学。本书后面重点研究的是第二种——思维要遵守的"逻辑规律与规则"，以及第四种——作为学科的逻辑学。</strong>' },

      { type: 'heading', text: '二、狭义逻辑学与广义逻辑学' },
      { type: 'paragraph', text: '作为学问的"逻辑学"也分宽窄。我们通常说的"逻辑课"多指狭义逻辑学，也就是形式逻辑；而把辩证逻辑也包进来，就是广义逻辑学。两者是基础和扩展的关系。' },
      { type: 'table', headers: ['', '狭义逻辑学', '广义逻辑学'], rows: [['研究内容', '思维形式结构及其规律（形式逻辑）', '包含狭义逻辑学和辩证逻辑'], ['地位', '学习广义逻辑学的基础', '在狭义逻辑学之上的拓展']] },
      { type: 'list', items: ['形式逻辑：研究概念、判断、推理这些思维形式的结构和规律，不直接管内容真假，只管结构对不对。', '辩证逻辑：把辩证法用到思维上，研究思维如何反映事物的运动、发展、矛盾。', '学习顺序：先打好形式逻辑的底子，再去学辩证逻辑，所以"学狭义是学广义的基础"。'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">"逻辑"的四种含义与逻辑学的宽窄</text><rect x="40" y="60" width="580" height="70" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="330" y="90" font-size="13" fill="#3d1f24" text-anchor="middle" font-weight="bold">现代汉语"逻辑"四义：规律 · 规则 · 思维方法 · 逻辑学</text><text x="330" y="113" font-size="11" fill="#3d1f24" text-anchor="middle">看语境定含义</text><rect x="120" y="160" width="200" height="90" rx="10" fill="#b8334a"/><text x="220" y="195" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">狭义逻辑学</text><text x="220" y="220" font-size="11" fill="#fff" text-anchor="middle">形式逻辑</text><text x="220" y="238" font-size="11" fill="#fff" text-anchor="middle">研究形式结构</text><rect x="360" y="160" width="200" height="90" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="460" y="195" font-size="14" fill="#3d1f24" text-anchor="middle" font-weight="bold">广义逻辑学</text><text x="460" y="220" font-size="11" fill="#3d1f24" text-anchor="middle">狭义+辩证逻辑</text><text x="460" y="238" font-size="11" fill="#3d1f24" text-anchor="middle">以狭义为基础</text></svg>', caption: '图1　"逻辑"四义与狭义、广义逻辑学的关系。' },

      { type: 'warn', label: '易错·别把"规则"和"学问"搞混', text: '考试常出干扰项：把"说话要符合逻辑"说成指"逻辑学"。其实前者指"逻辑规律与规则"（第二种含义），只有当它指一门课、一本书时才指"逻辑学"（第四种含义）。分辨的诀窍：带"课、学、书、学科"字眼的是学问；说"办事、推理、表达"合不合逻辑的，是规则。' },

      { type: 'heading', text: '三、逻辑思维的基本要求（形式逻辑三大规律）' },
      { type: 'paragraph', text: '形式逻辑有几条基本规律，是正确思维的必要条件。最核心的是三条：同一律、矛盾律、排中律。它们分别保证思维"确定、一致、明确"，违反了就会出笑话甚至自相矛盾。' },
      { type: 'table', headers: ['规律', '公式', '要求（保持什么）', '违反时的错误'], rows: [['同一律', 'A是A', '确定性：同一思维过程中，概念和判断保持自身同一，不能偷换', '偷换概念、偷换论题'], ['矛盾律', 'A不是非A', '一致性：矛盾判断和反对判断不能同真，必有一假', '自相矛盾'], ['排中律', 'A或者非A', '明确性：矛盾判断不能同假，必有一真', '两不可']] },
      { type: 'example', label: '例子·三条规律各挨一拳', text: '①同一律：甲说"年轻人要奋斗"，乙反驳"可有人躺平也挺好"——乙把"年轻人"偷换成"有人"，偷换论题。②矛盾律：有人说"这件事我全知道，又有一部分不知道"——既肯定又否定同一件事，自相矛盾。③排中律：问"你支不支持？"答"既不支持也不反对"——在两个矛盾判断间"两不可"，态度不明。' },
      { type: 'keypoint', label: '重点·三条规律一句话口诀', text: '<strong>同一律管"确定"（别偷换）；矛盾律管"一致"（别自相矛盾，矛盾判断不能同真）；排中律管"明确"（别两不可，矛盾判断不能同假）。注意矛盾律和排中律都针对"矛盾判断"：矛盾律说不能"都真"，排中律说不能"都假"。一个管同真，一个管同假，正好互补。</strong>' },
      { type: 'tip', label: '学习提示', text: '做题时先判断题干犯了哪类错：概念被偷偷换掉→同一律；一句话里同时肯定又否定→矛盾律；在"是"与"非"之间模棱两可、两边都不认→排中律。把三条规律的"公式+要求+错误"背成一组，考试直接套。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">形式逻辑三大基本规律</text><rect x="40" y="65" width="180" height="90" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="130" y="95" font-size="14" fill="#3d1f24" text-anchor="middle" font-weight="bold">同一律</text><text x="130" y="118" font-size="11" fill="#3d1f24" text-anchor="middle">A是A</text><text x="130" y="138" font-size="11" fill="#3d1f24" text-anchor="middle">保确定·防偷换</text><rect x="250" y="65" width="180" height="90" rx="10" fill="#b8334a"/><text x="340" y="95" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">矛盾律</text><text x="340" y="118" font-size="11" fill="#fff" text-anchor="middle">A不是非A</text><text x="340" y="138" font-size="11" fill="#fff" text-anchor="middle">保一致·防自相矛盾</text><rect x="460" y="65" width="180" height="90" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="550" y="95" font-size="14" fill="#3d1f24" text-anchor="middle" font-weight="bold">排中律</text><text x="550" y="118" font-size="11" fill="#3d1f24" text-anchor="middle">A或非A</text><text x="550" y="138" font-size="11" fill="#3d1f24" text-anchor="middle">保明确·防两不可</text><text x="340" y="210" font-size="12" fill="#3d1f24" text-anchor="middle">三条规律管住思维的确定、一致、明确，是正确思考的底线。</text></svg>', caption: '图2　同一律、矛盾律、排中律各自守护一种思维品质。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">矛盾律与排中律：一个管"同真"一个管"同假"</text><rect x="80" y="70" width="240" height="120" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="200" y="105" font-size="14" fill="#3d1f24" text-anchor="middle" font-weight="bold">矛盾律</text><text x="200" y="132" font-size="12" fill="#3d1f24" text-anchor="middle">矛盾判断不能同真</text><text x="200" y="156" font-size="12" fill="#3d1f24" text-anchor="middle">必有一假</text><rect x="360" y="70" width="240" height="120" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="480" y="105" font-size="14" fill="#3d1f24" text-anchor="middle" font-weight="bold">排中律</text><text x="480" y="132" font-size="12" fill="#3d1f24" text-anchor="middle">矛盾判断不能同假</text><text x="480" y="156" font-size="12" fill="#3d1f24" text-anchor="middle">必有一真</text><text x="340" y="230" font-size="12" fill="#3d1f24" text-anchor="middle">两者对象都是"矛盾判断"，一个禁同真，一个禁同假。</text></svg>', caption: '图3　矛盾律与排中律的分工。' }
    ],
    exercises: [
      { type: 'choice', question: '下列语境中"逻辑"指"逻辑规律与规则"的是？', options: ['历史发展有其内在逻辑', '你这个推理不合逻辑', '这是典型的强盗逻辑', '逻辑学是大学必修课'], answer: '你这个推理不合逻辑', explanation: '"逻辑"四义中，说"推理、说话、办事"合不合规则，指的是逻辑规律与规则（第二种含义）。"历史发展有其内在逻辑"指规律；"强盗逻辑"指一种思维方法；"逻辑学是必修课"指这门学问。只有"推理不合逻辑"是在说思维没遵守规则，故选此项。' },
      { type: 'choice', question: '有人说"这件事我完全清楚，又有一点也不清楚"，这违反了？', options: ['同一律', '矛盾律', '排中律', '充足理由律'], answer: '矛盾律', explanation: '矛盾律要求思维保持一致，矛盾判断和反对判断不能同真，必有一假。既说"完全清楚"又说"一点也不清楚"，对同一件事同时肯定又否定，属于自相矛盾，违反矛盾律。同一律管偷换，排中律管"两不可"，充足理由律不在本课三条基本规律之列。' },
      { type: 'choice', question: '面对"你支持还是反对"的提问，回答"既不支持也不反对"，这违反了？', options: ['同一律', '矛盾律', '排中律', '辩证律'], answer: '排中律', explanation: '排中律要求思维具有明确性，在两个矛盾判断之间不能同假，必有一真。"支持"与"反对"是相互矛盾的判断，回答"都不"就是两边都否定，犯了"两不可"的错误，违反排中律。同一律管偷换概念，矛盾律管自相矛盾，均不符合。' },
      { type: 'fill', question: '形式逻辑三大基本规律是___、___、___；其中"保一致、防自相矛盾"的是___。', answer: '同一律；矛盾律；排中律；矛盾律', explanation: '形式逻辑三大基本规律是同一律（A是A，保确定性，防偷换）、矛盾律（A不是非A，保一致性，防自相矛盾）、排中律（A或非A，保明确性，防两不可）。矛盾律禁止矛盾判断同真，所以"保一致、防自相矛盾"对应的是矛盾律。填空需写全三个名称。' },
      { type: 'fill', question: '狭义逻辑学即___，研究思维形式结构及其规律；广义逻辑学还包括___；学习___是学习广义逻辑学的基础。', answer: '形式逻辑；辩证逻辑；狭义逻辑学', explanation: '作为学问的"逻辑学"分宽窄：狭义逻辑学就是形式逻辑，研究概念、判断、推理等形式结构及其规律；广义逻辑学在形式逻辑之外还包括辩证逻辑。课本明确指出，学习狭义逻辑学是学习广义逻辑学的基础，所以要先打好形式逻辑的底子。三个空依次填形式逻辑、辩证逻辑、狭义逻辑学。' }
    ]
  });
})();
