/* 思想政治 · 选择性必修3 · 逻辑与思维 · 第四课 准确把握概念 */
(function () {
  var v = gzGetVolume('politics', 'xb3');
  if (!v) return;
  v.points.push({
    id: 'xb3-u4',
    name: '第四课 准确把握概念',
    chapter: '高二思想政治（选择性必修3 逻辑与思维）· 第四课 准确把握概念',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、概念的概述' },
      { type: 'paragraph', text: '概念是我们思考的最小零件。我们说话写文章，靠一个个概念搭起来。把一个模糊的想法说清楚，第一步就是先把概念搞准。概念不清楚，后面判断、推理全都会歪。' },
      { type: 'keypoint', label: '重点·概念靠语词来表达', text: '<strong>概念是通过揭示事物的本质属性而反映事物的思维形式。它有两个要点：第一，概念反映的是"本质属性"，不是表面现象；第二，概念不能光在脑子里，必须通过语词（词语、词组）才能说出来、写下来。同一个概念可以用不同语词表达（如"医生"和"大夫"），同一个语词也可能表达不同概念（如"白头翁"既指鸟也指老人）。</strong>' },
      { type: 'list', items: ['概念是思维的基本单元，判断和推理都由概念组合而成。', '概念反映本质属性，使我们能把一事物和他事物区分开。', '概念离不开语词：没有语词，概念就无法表达和交流。'] },

      { type: 'heading', text: '二、概念的两个基本特征：内涵与外延' },
      { type: 'paragraph', text: '每个概念都有"里子"和"面子"两面：里子是它到底是什么（内涵），面子是它管哪些东西（外延）。把这两面都弄清，概念才算真正把握住。' },
      { type: 'table', headers: ['', '内涵', '外延'], rows: [['回答的问题', '"是什么"（本质属性）', '"有哪些"（范围）'], ['含义', '概念所反映的事物的本质属性', '具有该本质属性的事物的范围'], ['举例', '"人"的内涵：能制造工具、会思考的动物', '"人"的外延：张三、李四、古今中外所有人']] },
      { type: 'example', label: '例子·用"三角形"看内涵与外延', text: '三角形"的内涵"是"由三条线段首尾相连围成的封闭图形"——这回答了它是什么；"外蜒"则是所有具体的三角形：锐角三角形、直角三角形、钝角三角形，以及每一个画在纸上的三角形个体。内涵管"定义"，外延管"成员名单"。' },
      { type: 'list', items: ['相容关系（两个概念的外延有重叠）：全同关系、属种关系、交叉关系。', '不相容关系（外延全不重叠，也叫全异关系）：矛盾关系、反对关系。', '矛盾关系：两个概念外延互斥且加起来等于上位概念全部（如"男"与"女"）。', '反对关系：两个概念外延互斥但加起来小于上位概念全部（如"红"与"绿"，中间还有"蓝"等）。'] },
      { type: 'warn', label: '易错·矛盾关系不等于反对关系', text: '有同学把"黑"和"白"当成矛盾关系，其实它们是反对关系——除了黑白还有红黄蓝等颜色。矛盾关系要求两者加起来"刚好占满"上位概念（如"正义战争"与"非正义战争"穷尽一切战争）。判断口诀：加起来等于全部是矛盾，小于全部是反对。这是考试高频区分点。' },

      { type: 'heading', text: '三、明确概念的方法：下定义与划分' },
      { type: 'paragraph', text: '光知道概念有内涵和外延还不够，我们还得有办法把它们说准。明确内涵靠"下定义"，明确外延靠"划分"，这是逻辑学里最实用的两套工具。' },
      { type: 'table', headers: ['方法', '明确什么', '怎么做（要点）'], rows: [['下定义', '概念的内涵', '用简明的语句揭示概念所反映的客观事物的本质属性，常采取"被定义项=种差+邻近属概念"的格式'], ['划分', '概念的外延', '把概念的外延分为若干小类，需遵循相应逻辑规则，避免"划分标准不一"等错误']] },
      { type: 'example', label: '例子·给"三角形"下定义与划分', text: '下定义："三角形是由三条线段首尾相连围成的封闭图形。"这里"封闭图形"是邻近属概念，"三条线段首尾相连围成"是种差。划分：把三角形分为锐角三角形、直角三角形、钝角三角形三类——划分标准是"最大内角的大小"。定义讲清"是什么"，划分列清"有哪些"，两招合起来概念就稳了。' },
      { type: 'tip', label: '学习提示', text: '记住分工：概念含糊，先问"它到底是什么"（下定义，管内涵）；再问"它都包括谁"（划分，管外延）。下定义和划分都要守规则，比如划分不能"越级"、不能"标准乱换"，否则会闹出"把人分为男人、女人、小孩"这种重叠笑话（小孩和男人女人标准冲突）。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">概念的内涵与外延</text><circle cx="240" cy="170" r="90" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="240" y="165" font-size="14" fill="#3d1f24" text-anchor="middle" font-weight="bold">内涵</text><text x="240" y="188" font-size="11" fill="#3d1f24" text-anchor="middle">是什么</text><circle cx="440" cy="170" r="90" fill="#b8334a"/><text x="440" y="165" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">外延</text><text x="440" y="188" font-size="11" fill="#fff" text-anchor="middle">有哪些</text><text x="340" y="270" font-size="12" fill="#3d1f24" text-anchor="middle">内涵答"是什么"，外延列"有哪些"，两面合起来才是完整概念。</text></svg>', caption: '图1　概念的内涵（里子）与外延（面子）。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">概念外延的相容与不相容关系</text><rect x="40" y="70" width="280" height="100" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="180" y="100" font-size="14" fill="#3d1f24" text-anchor="middle" font-weight="bold">相容关系</text><text x="180" y="125" font-size="11" fill="#3d1f24" text-anchor="middle">全同·属种·交叉</text><text x="180" y="145" font-size="11" fill="#3d1f24" text-anchor="middle">外延有重叠</text><rect x="360" y="70" width="280" height="100" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="500" y="100" font-size="14" fill="#3d1f24" text-anchor="middle" font-weight="bold">不相容关系</text><text x="500" y="125" font-size="11" fill="#3d1f24" text-anchor="middle">矛盾·反对（全异）</text><text x="500" y="145" font-size="11" fill="#3d1f24" text-anchor="middle">外延不重叠</text><text x="340" y="220" font-size="12" fill="#3d1f24" text-anchor="middle">矛盾：加起来占满全部；反对：加起来小于全部。</text></svg>', caption: '图2　外延关系的两大类别。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 270" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="270" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">明确概念的两大方法</text><rect x="90" y="70" width="240" height="120" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="210" y="110" font-size="15" fill="#3d1f24" text-anchor="middle" font-weight="bold">下定义</text><text x="210" y="138" font-size="12" fill="#3d1f24" text-anchor="middle">明确内涵（是什么）</text><text x="210" y="162" font-size="11" fill="#3d1f24" text-anchor="middle">种差+邻近属概念</text><rect x="350" y="70" width="240" height="120" rx="10" fill="#b8334a"/><text x="470" y="110" font-size="15" fill="#fff" text-anchor="middle" font-weight="bold">划分</text><text x="470" y="138" font-size="12" fill="#fff" text-anchor="middle">明确外延（有哪些）</text><text x="470" y="162" font-size="11" fill="#fff" text-anchor="middle">分成若干小类</text><text x="340" y="235" font-size="12" fill="#3d1f24" text-anchor="middle">一个管"是什么"，一个管"有哪些"，配合才能说清概念。</text></svg>', caption: '图3　下定义与划分分工明确概念。' }
    ],
    exercises: [
      { type: 'choice', question: '概念必须通过什么才能表达出来？', options: ['只能通过判断', '只能通过语词', '只能通过推理', '只能通过图形'], answer: '只能通过语词', explanation: '概念是反映事物本质属性的思维形式，它必须借助语词（词语、词组）才能被说出来、写下来、用于交流。同一个概念可以用不同语词表达（如"医生"与"大夫"），但概念本身不能脱离语词独立存在。判断和推理是由概念构成的更高思维形式，图形也不是概念的表达载体，因此正确选项是"只能通过语词"。' },
      { type: 'choice', question: '概念的内涵是指？', options: ['概念所反映的事物的范围', '概念所反映的事物的本质属性', '概念使用的语词', '概念的外延之和'], answer: '概念所反映的事物的本质属性', explanation: '概念有两个基本特征：内涵和外延。内涵是概念所反映的事物的本质属性，回答"是什么"；外延是具有该本质属性的事物的范围，回答"有哪些"。题干问"内涵"，对应"本质属性"而非"范围（外延）"，也不是语词本身。故选"本质属性"一项。' },
      { type: 'choice', question: '下列外延关系中属于不相容关系的是？', options: ['全同关系', '属种关系', '矛盾关系', '交叉关系'], answer: '矛盾关系', explanation: '概念外延关系分相容与不相容两类。相容关系包括全同、属种、交叉（外延有重叠）；不相容关系即全异关系，包括矛盾关系和反对关系（外延不重叠）。全同、属种、交叉都是相容关系，只有矛盾关系属于不相容关系，故选此项。' },
      { type: 'fill', question: '明确概念内涵的方法是___，明确概念外延的方法是___；两者合称___。', answer: '下定义；划分；明确概念的方法', explanation: '逻辑学中，明确概念内涵用"下定义"（揭示本质属性，回答是什么），明确概念外延用"划分"（把概念分成若干小类，列清有哪些）。这两套工具合起来就是明确概念的基本方法。填空依次填：下定义、划分、明确概念的方法（或答"下定义与划分"）。' },
      { type: 'fill', question: '概念的两个基本特征是___和___；其中回答"事物有哪些"的是___；"男"与"女"属于外延的___关系。', answer: '内涵；外延；外延；矛盾', explanation: '概念的两个基本特征是内涵（是什么）和外延（有哪些）。"事物有哪些"显然是外延。而"男"与"女"两个概念外延互斥，且合起来刚好等于"性别"这一上位概念的全部，符合"加起来占满全部"的标准，属于矛盾关系（区别于反对关系）。填空依次填：内涵、外延、外延、矛盾。' }
    ]
  });
})();
