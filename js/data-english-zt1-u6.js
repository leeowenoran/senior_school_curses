(function () {
  var v = gzGetVolume('english', 'zt1');
  if (!v) return;
  v.points.push(
    {
      id: `zt1-u6-l1`,
      name: `特殊句式与词类`,
      chapter: `词汇与语法 · 第6单元 收束`,
      difficulty: `基础`,
      content: [
        { type: 'heading', text: '一、什么是特殊句式' },
        { type: 'paragraph', text: '特殊句式就是和平时说话顺序不一样的句子。它们把某些词提前、省掉或者加强，让句子更有力、更清楚。' },
        { type: 'list', items: ['强调句：把想说的人或事特别突出', '倒装句：把助动词或 be 动词放到主语前面', '省略句：上下文清楚时省掉重复的词', '虚拟语气：说一些和事实相反的话'] },
        { type: 'svg', svg: `<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">特殊句式家族</text><rect x="30" y="60" width="290" height="70" rx="10" fill="#9c56d4"/><text x="175" y="95" font-size="15" fill="#ffffff" text-anchor="middle">强调句</text><text x="175" y="118" font-size="12" fill="#ffffff" text-anchor="middle">It is ... that ...</text><rect x="360" y="60" width="290" height="70" rx="10" fill="#b87fd8"/><text x="505" y="95" font-size="15" fill="#3a2a4a" text-anchor="middle">倒装句</text><text x="505" y="118" font-size="12" fill="#3a2a4a" text-anchor="middle">助动词提前</text><rect x="30" y="160" width="290" height="70" rx="10" fill="#b87fd8"/><text x="175" y="195" font-size="15" fill="#3a2a4a" text-anchor="middle">省略句</text><text x="175" y="218" font-size="12" fill="#3a2a4a" text-anchor="middle">省掉重复部分</text><rect x="360" y="160" width="290" height="70" rx="10" fill="#9c56d4"/><text x="505" y="195" font-size="15" fill="#ffffff" text-anchor="middle">虚拟语气</text><text x="505" y="218" font-size="12" fill="#ffffff" text-anchor="middle">与事实相反</text><text x="340" y="270" font-size="13" fill="#3a2a4a" text-anchor="middle">四种特殊句式，记住它们长什么样</text></svg>`, caption: '图1 特殊句式家族：四种常见特殊句式' },
        { type: 'heading', text: '二、强调句（It is ... that ...）' },
        { type: 'paragraph', text: '强调句的结构是：It is/was + 被强调的部分 + that + 剩下的部分。它可以强调主语、宾语，也可以强调时间或地点。' },
        { type: 'example', label: '例句', text: 'It was <strong>Tom</strong> that broke the window.<br>正是汤姆打破了窗户。（强调主语 Tom）' },
        { type: 'keypoint', label: '重点·强调句', text: '强调句的招牌结构是 <strong>It is/was ... that ...</strong>。<br>把它去掉，句子仍然完整：Tom broke the window.' },
        { type: 'warn', label: '易错', text: '强调句里只能用 <strong>that</strong>（指人时也可用 who），不能用 which 或 when 来凑数。' },
        { type: 'heading', text: '三、倒装句' },
        { type: 'paragraph', text: '倒装就是把助动词、be 动词或情态动词放到主语前面。最常见的开头词是 only、never、not only 这类词。' },
        { type: 'example', label: '例句', text: 'Only then <strong>did</strong> he realize the truth.<br>直到那时他才明白真相。（助动词 did 提前）' },
        { type: 'tip', label: '记忆', text: '看见 <strong>only + 状语</strong> 放在句首，后面通常要倒装，把 did/do/does 或 was/were 提前。' },
        { type: 'heading', text: '四、省略句' },
        { type: 'paragraph', text: '省略句是在对话或上下文已经清楚的时候，省掉重复的部分，让说话更简洁，不啰嗦。' },
        { type: 'example', label: '例句', text: '—See you!<br>—(I will) see you!<br>再见！——（我）再见！括号里的内容可以省掉。' },
        { type: 'heading', text: '五、虚拟语气' },
        { type: 'paragraph', text: '虚拟语气用来表达和事实相反的想法、愿望或假设。常出现在 if 引导的条件句里，表示“如果……就好了”。' },
        { type: 'example', label: '例句', text: 'If I <strong>were</strong> you, I would study harder.<br>如果我是你，我会更努力学习。（事实上我不是你）' },
        { type: 'warn', label: '易错', text: '虚拟语气里，不管主语是谁，be 动词一律用 <strong>were</strong>，不用 was。' },
        { type: 'heading', text: '六、词类（冠词、介词、代词、连词）' },
        { type: 'paragraph', text: '词类就是单词的类别。高考常考的有四种小词：冠词、介词、代词、连词，它们虽小却很重要。' },
        { type: 'list', items: ['冠词 a/an/the：表示“一个”或“这个”', '介词 in/on/at：表示时间或地点', '代词 it/one：用来指代别的东西', '连词 and/but/because：把词或句子连起来'] },
        { type: 'svg', svg: `<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#f3edfa"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">冠词 a / an / the</text><circle cx="120" cy="120" r="55" fill="#9c56d4"/><text x="120" y="115" font-size="18" fill="#ffffff" text-anchor="middle">a</text><text x="120" y="140" font-size="11" fill="#ffffff" text-anchor="middle">辅音音素前</text><circle cx="340" cy="120" r="55" fill="#b87fd8"/><text x="340" y="115" font-size="18" fill="#3a2a4a" text-anchor="middle">an</text><text x="340" y="140" font-size="11" fill="#3a2a4a" text-anchor="middle">元音音素前</text><circle cx="560" cy="120" r="55" fill="#7a3fb0"/><text x="560" y="115" font-size="18" fill="#ffffff" text-anchor="middle">the</text><text x="560" y="140" font-size="11" fill="#ffffff" text-anchor="middle">特指</text></svg>`, caption: '图2 冠词 a/an/the：看发音选 a 还是 an' },
        { type: 'heading', text: '七、冠词 a / an / the 怎么选' },
        { type: 'paragraph', text: 'a 和 an 都表示“一个”，区别在后面单词的发音。the 表示“这个、那个”，指特定的人或物。' },
        { type: 'table', headers: ['冠词', '用法', '例子'], rows: [['a', '用在辅音音素开头的词前', 'a book（一本书）'], ['an', '用在元音音素开头的词前', 'an apple（一个苹果）'], ['the', '表示特指的人或物', 'the boy（那个男孩）']] },
        { type: 'keypoint', label: '重点·a 还是 an', text: '看 <strong>发音</strong> 不看字母：hour 读“奥尔”是元音，用 <strong>an</strong>；university 读“尤”是辅音，用 <strong>a</strong>。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#f3edfa"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">词类四兄弟</text><rect x="30" y="70" width="140" height="80" rx="10" fill="#9c56d4"/><text x="100" y="105" font-size="14" fill="#ffffff" text-anchor="middle">冠词</text><text x="100" y="128" font-size="11" fill="#ffffff" text-anchor="middle">a/an/the</text><rect x="190" y="70" width="140" height="80" rx="10" fill="#b87fd8"/><text x="260" y="105" font-size="14" fill="#3a2a4a" text-anchor="middle">介词</text><text x="260" y="128" font-size="11" fill="#3a2a4a" text-anchor="middle">in/on/at</text><rect x="350" y="70" width="140" height="80" rx="10" fill="#b87fd8"/><text x="420" y="105" font-size="14" fill="#3a2a4a" text-anchor="middle">代词</text><text x="420" y="128" font-size="11" fill="#3a2a4a" text-anchor="middle">it/one</text><rect x="510" y="70" width="140" height="80" rx="10" fill="#9c56d4"/><text x="580" y="105" font-size="14" fill="#ffffff" text-anchor="middle">连词</text><text x="580" y="128" font-size="11" fill="#ffffff" text-anchor="middle">and/but</text><text x="340" y="190" font-size="13" fill="#3a2a4a" text-anchor="middle">四个小词，撑起句子骨架</text></svg>`, caption: '图3 词类四兄弟：常考的四种小词' }
      ],
      exercises: [
        { type: 'choice', question: '下面哪一句是正确的强调句？', options: ['It was Tom broke the window.', 'It was Tom that broke the window.', 'It is Tom break the window.', 'Tom was it that broke the window.'], answer: 'It was Tom that broke the window.', explanation: '强调句的标准结构是 It is/was + 被强调部分 + that + 其余内容。选项 B 用了 that 连接并正确强调了主语 Tom，去掉 It was ... that ... 后句子仍完整：Tom broke the window。其他选项结构错误，缺少 that 或动词形式不对。' },
        { type: 'choice', question: '“直到那时他才明白”用倒装应写成下列哪一句？', options: ['Only then he realized the truth.', 'Only then did he realize the truth.', 'He only then did realize the truth.', 'Only then he did realize the truth.'], answer: 'Only then did he realize the truth.', explanation: '倒装句要求把助动词 did 放到主语 he 前面，构成 Only then did he realize。选项 A 没有倒装，C 和 D 的词序混乱。只有把 did 提前才符合“only + 状语放句首要倒装”的规则，因此选 B。' },
        { type: 'choice', question: '单词“hour（小时）”前面应该用哪个冠词？', options: ['a hour', 'an hour', 'the hour', 'a hours'], answer: 'an hour', explanation: 'hour 这个词虽然以字母 h 开头，但 h 在这里不发音，读音开头是一个元音，所以前面要用 an。a 用在辅音开头的词前，the 表示特指，都不合适。因此正确选项是 an hour。' },
        { type: 'fill', question: '请在空格处填入合适的冠词：She is ___ honest girl.（她是一个诚实的女孩。）', answer: 'an|An', explanation: 'honest 以字母 h 开头，但 h 不发音，它的读音开头是一个元音，所以前面要用 an。冠词 a 用在辅音开头的词前面，放在这里不对。因此空格填 an，句首大写写成 An 也可以。' },
        { type: 'fill', question: '请把句子变成强调句，强调主语 Tom：___ ___ Tom that broke the window.（正是汤姆打破了窗户。）', answer: 'It was|It is', explanation: '强调句的结构是 It is/was + 被强调部分 + that + 其余内容。我们要强调主语 Tom，所以用 It was（讲述过去的事）或 It is（强调一般情况）都可以，后面接 Tom that broke the window。因此填 It was 或 It is。' }
      ]
    },
    {
      id: `zt1-u6-l2`,
      name: `语法填空两类空格与复习规划`,
      chapter: `词汇与语法 · 第6单元 收束`,
      difficulty: `基础`,
      content: [
        { type: 'heading', text: '一、语法填空的两类空格' },
        { type: 'paragraph', text: '语法填空题的空格可以分成两大类：一类给了提示词，一类没有给提示词。看清是哪种，做法完全不一样。' },
        { type: 'list', items: ['给提示词的空格：括号里已经有词，要你变形', '无提示词的空格：括号里没词，要你填虚词'] },
        { type: 'svg', svg: `<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#f3edfa"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">语法填空两类空格</text><rect x="30" y="60" width="300" height="160" rx="10" fill="#9c56d4"/><text x="180" y="90" font-size="15" fill="#ffffff" text-anchor="middle">① 给提示词</text><text x="180" y="120" font-size="12" fill="#ffffff" text-anchor="middle">看括号里的词变形</text><text x="180" y="145" font-size="12" fill="#ffffff" text-anchor="middle">名词/动词/形容词变化</text><text x="180" y="170" font-size="12" fill="#ffffff" text-anchor="middle">例：book → books</text><text x="180" y="195" font-size="12" fill="#ffffff" text-anchor="middle">看句子需要什么形式</text><rect x="350" y="60" width="300" height="160" rx="10" fill="#b87fd8"/><text x="500" y="90" font-size="15" fill="#3a2a4a" text-anchor="middle">② 无提示词</text><text x="500" y="120" font-size="12" fill="#3a2a4a" text-anchor="middle">填虚词</text><text x="500" y="145" font-size="12" fill="#3a2a4a" text-anchor="middle">冠词/介词/连词等</text><text x="500" y="170" font-size="12" fill="#3a2a4a" text-anchor="middle">看缺什么成分填什么</text><text x="500" y="195" font-size="12" fill="#3a2a4a" text-anchor="middle">例：___ noon → at</text></svg>`, caption: '图1 语法填空两类空格：给提示词与无提示词' },
        { type: 'heading', text: '二、给提示词的空格怎么变' },
        { type: 'paragraph', text: '括号里给了词，就要根据句子意思和语法让它变形。变什么，全看它在句子里充当什么成分。' },
        { type: 'list', items: ['名词：变单复数或所有格，如 book → books', '动词：变时态、被动、非谓语或主谓一致', '形容词/副词：变比较级或最高级'] },
        { type: 'example', label: '例题', text: 'There are many ___ (book) on the desk.<br>括号里是 book，前面有 many，要变复数，填 <strong>books</strong>。' },
        { type: 'keypoint', label: '重点·给提示词', text: '给提示词的空格，永远先想：这个词在句子里<strong>做什么成分</strong>，再决定怎么变。' },
        { type: 'warn', label: '易错', text: '动词变形最易错：别忘了看主语单复数、看时间状语、看主动还是<strong>被动</strong>。' },
        { type: 'heading', text: '三、无提示词的空格填什么' },
        { type: 'paragraph', text: '没有提示词，只能填虚词。先看空格在句子里缺什么成分，再决定填哪种词性的词。' },
        { type: 'list', items: ['缺冠词：填 a/an/the', '缺介词：填 in/on/at 等', '缺连接：填 and/but/because 或关系词', '缺指代：填 it/one 等人称或关系代词'] },
        { type: 'example', label: '例题', text: 'We usually have lunch ___ noon.<br>noon 是具体时刻，前面用介词 <strong>at</strong>，填 at。' },
        { type: 'tip', label: '记忆', text: '无提示词空格记住一句口诀：<strong>缺什么成分，填什么词性</strong>，先判断再下笔。' },
        { type: 'heading', text: '四、三轮复习规划' },
        { type: 'paragraph', text: '复习要分阶段进行，一轮打底、二轮攻弱、三轮冲刺，一步一个脚印才稳。' },
        { type: 'table', headers: ['轮次', '任务', '目标'], rows: [['一轮', '夯实基础，过一遍知识点', '知识点无遗漏'], ['二轮', '专题突破，攻自己的弱项', '弱项变强项'], ['三轮', '套题冲刺，限时训练', '适应考试节奏']] },
        { type: 'list', items: ['一轮：把课本和笔记从头过一遍', '二轮：针对错题和薄弱点集中练习', '三轮：做整套题，严格按照考试时间'] },
        { type: 'svg', svg: `<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f3edfa"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">三轮复习规划</text><rect x="30" y="60" width="180" height="90" rx="10" fill="#9c56d4"/><text x="120" y="95" font-size="14" fill="#ffffff" text-anchor="middle">一轮</text><text x="120" y="120" font-size="11" fill="#ffffff" text-anchor="middle">夯实基础</text><rect x="250" y="60" width="180" height="90" rx="10" fill="#b87fd8"/><text x="340" y="95" font-size="14" fill="#3a2a4a" text-anchor="middle">二轮</text><text x="340" y="120" font-size="11" fill="#3a2a4a" text-anchor="middle">专题突破</text><rect x="470" y="60" width="180" height="90" rx="10" fill="#7a3fb0"/><text x="560" y="95" font-size="14" fill="#ffffff" text-anchor="middle">三轮</text><text x="560" y="120" font-size="11" fill="#ffffff" text-anchor="middle">套题冲刺</text></svg>`, caption: '图2 三轮复习规划：一轮打底、二轮攻弱、三轮冲刺' },
        { type: 'heading', text: '五、复习核心提醒' },
        { type: 'paragraph', text: '复习不只是刷题，更要讲究方法。下面三件事，坚持做就能见效。' },
        { type: 'keypoint', label: '重点·核心提醒', text: '常翻<strong>错题本</strong>、坚持<strong>限时训练</strong>、培养<strong>语篇意识</strong>（在整篇文章里看语法）。' },
        { type: 'example', label: '怎么做', text: '做一篇完形填空，不孤立看某一句，而是读完<strong>整段</strong>再判断空格，这就是语篇意识。' },
        { type: 'warn', label: '易错', text: '只背孤立的语法规则、不读上下文，最容易在语篇题上丢分，一定要<strong>放在文章里</strong>看。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f3edfa"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">复习核心提醒</text><rect x="30" y="60" width="190" height="90" rx="10" fill="#9c56d4"/><text x="125" y="105" font-size="13" fill="#ffffff" text-anchor="middle">翻错题本</text><rect x="245" y="60" width="190" height="90" rx="10" fill="#b87fd8"/><text x="340" y="105" font-size="13" fill="#3a2a4a" text-anchor="middle">限时训练</text><rect x="460" y="60" width="190" height="90" rx="10" fill="#9c56d4"/><text x="555" y="105" font-size="13" fill="#ffffff" text-anchor="middle">语篇意识</text></svg>`, caption: '图3 复习核心提醒：三件要坚持的事' },
        { type: 'tip', label: '记忆', text: '把错题本放在手边，每天花十分钟翻一翻，比做十套新题更管用。' }
      ],
      exercises: [
        { type: 'choice', question: '语法填空中，括号内给出动词时，空格通常考查什么？', options: ['填一个随机的名词', '动词的时态、被动、非谓语或主谓一致', '只填动词原形', '填一个形容词'], answer: '动词的时态、被动、非谓语或主谓一致', explanation: '给提示词的空格，括号里已经给了词，我们要根据句子意思和语法让它变形，比如动词要变成正确的时态、被动、非谓语或和主语保持一致。其他选项说填名词或形容词都不对。因此选“动词的时态、被动、非谓语或主谓一致”。' },
        { type: 'choice', question: '无提示词的空格，应该填下面哪一类词？', options: ['实义动词', '冠词、介词、连词、代词、关系词等虚词', '形容词', '副词'], answer: '冠词、介词、连词、代词、关系词等虚词', explanation: '无提示词的空格，括号里没有给词，只能填虚词，也就是冠词、介词、连词、代词、关系词这类词。实义动词、形容词、副词一般都有实际意思，不会凭空填。因此选“冠词、介词、连词、代词、关系词等虚词”。' },
        { type: 'choice', question: '复习的“三轮规划”中，二轮主要做什么？', options: ['夯实基础，过一遍知识点', '专题突破，攻打自己的弱项', '套题冲刺，限时训练', '什么都不做'], answer: '专题突破，攻打自己的弱项', explanation: '三轮复习里，一轮是夯实基础过知识点，二轮是专题突破攻打自己的弱项，三轮才是套题冲刺限时训练。题目问二轮做什么，所以选“专题突破，攻打自己的弱项”。' },
        { type: 'fill', question: '括号内给出名词 book，句子需要复数：There are many ___ (book) on the desk.（桌上有许多书。）', answer: 'books|Books', explanation: '括号里给的是名词 book，句子前面有 many（许多），说明要用复数形式，book 的复数是直接加 s 变成 books。注意不是所有名词都加 s，但 book 是规则变化。故填 books。' },
        { type: 'fill', question: '无提示词空格：We usually have lunch ___ noon.（我们通常在中午吃午饭。）', answer: 'at|At', explanation: '这句话说的是“我们通常在中午吃午饭”，noon 表示时刻“中午”，表示具体时刻前面用介词 at。in 用在年、月、季节前，on 用在某一天前，都不合适。因此空格填 at。' }
      ]
    }
  );
})();
