/* 信息技术 · 高三复习 · 数据与算法 · 第14节 算法与数据的紧密联系 */
(function () {
  var v = gzGetVolume('it', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u14',
    name: '第14节 算法与数据的紧密联系',
    chapter: '八、算法与数据的关系',
    difficulty: '中等',
    content: [
      { type: 'heading', text: '一、用计算机解决问题本质是什么' },
      { type: 'paragraph', text: '前面学了算法，也学了数据，其实二者分不开。用计算机解决一个问题，本质上就是“对数据进行运算”的过程。算法规定“怎么算”，数据就是“被算的对象”。没有数据，算法再巧妙也没东西可算；没有算法，数据堆在那里也变不成有用的结果。' },
      { type: 'paragraph', text: '比如算出全班平均分：数据是每个同学的成绩，算法是“先累加、再除以人数”。把成绩（数据）喂给这套步骤（算法），才得到平均分。所以数据和算法是一枚硬币的两面。' },
      { type: 'keypoint', label: '重点·三要素', text: '<strong>算法处理问题有三要素：数据（算法处理的对象）、运算（对数据进行的处理操作）、控制转移（根据数据特征决定执行路径）。</strong>三者合在一起，才构成一个完整的“计算机解题”过程。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef2fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">算法与数据的三要素</text><rect x="40" y="70" width="180" height="80" rx="12" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="130" y="100" font-size="14" font-weight="bold" fill="#6266d9" text-anchor="middle">数据</text><text x="130" y="124" font-size="11" fill="#2a3454" text-anchor="middle">处理的对象</text><rect x="250" y="70" width="180" height="80" rx="12" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="340" y="100" font-size="14" font-weight="bold" fill="#6266d9" text-anchor="middle">运算</text><text x="340" y="124" font-size="11" fill="#2a3454" text-anchor="middle">对数据的操作</text><rect x="460" y="70" width="180" height="80" rx="12" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="550" y="100" font-size="14" font-weight="bold" fill="#6266d9" text-anchor="middle">控制转移</text><text x="550" y="124" font-size="11" fill="#2a3454" text-anchor="middle">按数据决定走哪条路</text><line x1="130" y1="150" x2="340" y2="198" stroke="#6266d9" stroke-width="1.5"/><line x1="340" y1="150" x2="340" y2="198" stroke="#6266d9" stroke-width="1.5"/><line x1="550" y1="150" x2="340" y2="198" stroke="#6266d9" stroke-width="1.5"/><rect x="220" y="198" width="240" height="50" rx="12" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="340" y="226" font-size="13" font-weight="bold" fill="#6266d9" text-anchor="middle">计算机解决问题</text><text x="340" y="266" font-size="12" fill="#6266d9" text-anchor="middle">三要素缺一不可</text></svg>', caption: '图1　算法三要素：数据、运算、控制转移，共同支撑“计算机解决问题”。' },
      { type: 'heading', text: '二、三要素分别怎么理解' },
      { type: 'paragraph', text: '数据，是算法要处理的原材料，比如一串成绩、一份名单。运算，是对数据做的“加工动作”，比如加、减、比较大小、排序。控制转移，是根据数据的不同情况，决定接下来走哪条路——比如“如果成绩及格就输出通过，否则输出补考”，这就是一个控制转移。' },
      { type: 'list', items: ['数据：算法加工的对象，如成绩、名单', '运算：对数据进行的处理操作，如加减、比较、排序', '控制转移：根据数据特征决定执行哪条路径，如 if 判断'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 290" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="290" fill="#eef2fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">例：根据成绩决定输出内容</text><rect x="60" y="60" width="180" height="56" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="150" y="88" font-size="12" fill="#2a3454" text-anchor="middle">数据：score</text><rect x="270" y="60" width="180" height="56" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="360" y="88" font-size="12" fill="#2a3454" text-anchor="middle">运算：比较大小</text><polygon points="530,52 600,52 565,90 500,90" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="550" y="78" font-size="12" font-weight="bold" fill="#6266d9" text-anchor="middle">控制转移</text><line x1="240" y1="88" x2="268" y2="88" stroke="#6266d9" stroke-width="1.5"/><line x1="450" y1="88" x2="498" y2="88" stroke="#6266d9" stroke-width="1.5"/><rect x="500" y="120" width="160" height="50" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="580" y="148" font-size="11" fill="#2a3454" text-anchor="middle">score>=60?</text><line x1="580" y1="170" x2="580" y2="196" stroke="#6266d9" stroke-width="1.5"/><text x="588" y="186" font-size="11" fill="#6266d9">是</text><rect x="500" y="198" width="160" height="44" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="580" y="224" font-size="11" fill="#2a3454" text-anchor="middle">输出“通过”</text><line x1="500" y1="142" x2="450" y2="142" stroke="#6266d9" stroke-width="1.5" stroke-dasharray="4,3"/><text x="430" y="132" font-size="11" fill="#6266d9">否</text><rect x="290" y="198" width="150" height="44" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="365" y="224" font-size="11" fill="#2a3454" text-anchor="middle">输出“补考”</text><text x="340" y="274" font-size="11" fill="#6266d9" text-anchor="middle">数据(score) → 运算(比较) → 控制转移(分支)</text></svg>', caption: '图2　一个完整例子：数据 score 经比较运算后，由控制转移决定输出“通过”还是“补考”。' },
      { type: 'tip', label: '提示·怎么记三要素', text: '<strong>记“料、动、路”三个字：料是数据（原料），动是运算（动作），路是控制转移（走哪条路）。</strong>做题看到“根据条件选择不同执行路径”，指的就是控制转移。' },
      { type: 'warn', label: '易错·把算法和数据割裂', text: '有同学背算法时只想“步骤”，忘了算法是“对数据”的步骤。选择题里常问“算法的处理对象是什么”，答案就是数据。记住：算法离不开数据，没有数据的算法是空转。' },
      { type: 'example', label: '例题·识别三要素', text: '题目：一段程序读入若干同学的成绩，找出其中最高的那个并输出。请指出其中的数据、运算、控制转移分别是什么。<br>解析：数据是读入的若干个成绩；运算是比较大小（不断用当前最大值和新成绩比较，必要时更新）；控制转移体现在“如果新成绩更大，就更新最大值，否则保持不变”这一根据数据特征决定的分支上。三者一起完成了“找最高分”这个算法。' }
    ],
    exercises: [
      { type: 'choice', question: '用计算机解决问题，本质上是？', options: ['纯粹的思考过程', '以“数据运算”方式实现', '只靠硬件完成，与软件无关', '只处理文字不处理数字'], answer: '以“数据运算”方式实现', explanation: '用计算机解决问题，本质上是以“数据运算”的方式实现的：算法规定怎么算，数据是运算的对象，二者紧密结合。' },
      { type: 'choice', question: '算法处理问题的三要素不包括下列哪一项？', options: ['数据', '运算', '控制转移', '硬件'], answer: '硬件', explanation: '三要素是数据（处理对象）、运算（对数据的操作）、控制转移（根据数据特征决定执行路径）。硬件是计算机的物理组成，不属于算法三要素。' },
      { type: 'choice', question: '“如果成绩及格就输出通过，否则输出补考”，这体现了三要素中的？', options: ['数据', '运算', '控制转移', '存储'], answer: '控制转移', explanation: '根据数据的不同特征（及格与否）来决定接下来执行哪条路径，这正是控制转移。数据是成绩本身，运算是比较，而“选哪条路”是控制转移。' },
      { type: 'fill', question: '算法三要素是：___（处理的对象）、___（对数据的操作）、___（根据数据特征决定执行路径）。', answer: '数据；运算；控制转移', explanation: '三要素为数据、运算、控制转移。数据是算法处理的对象，运算是对数据进行的处理操作，控制转移是根据数据特征决定执行路径。' },
      { type: 'fill', question: '用计算机解决问题，本质上是把___作为运算对象，按___规定的步骤进行加工，并由___决定执行走向。', answer: '数据；算法；控制转移', explanation: '计算机解题以数据运算方式实现：数据是运算对象，算法规定加工步骤，控制转移依据数据特征决定走哪条执行路径。' }
    ]
  });
})();
