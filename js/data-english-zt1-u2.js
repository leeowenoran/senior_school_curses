(function () {
  var v = gzGetVolume('english', 'zt1');
  if (!v) return;
  v.points.push(
    {
      id: `zt1-u2-l1`,
      name: `词汇高频考点`,
      chapter: `词汇与语法 · 第2单元 词汇知识（二）`,
      difficulty: `基础`,
      content: [
        { type: 'heading', text: '一、本课重点' },
        { type: 'paragraph', text: '高考英语里，单词不光要认识，还要会变形、会搭配、懂生义、能辨析。这节课我们挑出四个最常考的词汇考点，用对比和例子帮你记牢。' },
        { type: 'list', items: [
          '词性转换：名词、动词、形容词、副词互相变',
          '短语动词与固定搭配：如 look up 查词典',
          '熟词生义：常见词的不常见意思',
          '近义词辨析：say / speak / talk / tell 的区别'
        ] },
        { type: 'keypoint', label: '重点·词性转换', text: '记住常见后缀：<br>名词变形容词常加 <strong>-ful / -y / -less</strong>；<br>形容词变副词常加 <strong>-ly</strong>。<br>例：care → careful → carefully → careless。' },
        { type: 'example', label: '例句', text: 'She is a <strong>careful</strong> girl. (形容词)<br>She does her homework <strong>carefully</strong>. (副词)<br>It is <strong>windy</strong> today. (wind 风 + y 有风的)' },
        { type: 'list', items: [
          '名词+ful → 形容词：care→careful, help→helpful',
          '形容词+ly → 副词：quick→quickly, slow→slowly',
          '名词+y → 形容词：wind→windy, rain→rainy',
          '加less表否定：care→careless 粗心的'
        ] },
        { type: 'table', headers: ['原词', '词性', '派生词', '新词性'], rows: [
          ['care', '名/动', 'careful', '形容词'],
          ['care', '名/动', 'carefully', '副词'],
          ['wind', '名词', 'windy', '形容词'],
          ['help', '名词', 'helpful', '形容词']
        ] },
        { type: 'warn', label: '易错', text: '拼写别漏字母！<strong>careful</strong> 是 care+ful，不是 care+full；<strong>truly</strong> 是 true 去 e 加 ly，不是 truely。' },
        { type: 'example', label: '短语动词', text: 'Please <strong>look up</strong> the word in the dictionary. 请查词典。<br>We must not <strong>put off</strong> the meeting. 不能推迟会议。<br><strong>Pay attention to</strong> the teacher. 注意老师讲的。' },
        { type: 'list', items: [
          'look up 查（词典、资料）',
          'put off 推迟',
          'put on 穿上；turn on 打开',
          'pay attention to 注意（to 后接名词或动名词）'
        ] },
        { type: 'tip', label: '记忆', text: '短语动词当成一个整体记，别拆开翻译。可以把"动词+介词"写成小卡片，每天看几张，比死背中文意思管用。' },
        { type: 'example', label: '熟词生义', text: 'I want to <strong>book</strong> a table. 这里的 book 是动词"预订"，不是书。<br>We drank from a clear <strong>spring</strong>. spring 此处是"泉水"，不是春天。<br>He stayed <strong>cool</strong>. cool 此处是"冷静的"，不是凉爽。' },
        { type: 'list', items: [
          'book 名词"书" → 动词"预订"',
          'spring 名词"春天" → "泉水"',
          'cool 形容词"凉爽" → "酷的 / 冷静"',
          'green 绿色 → "环保的"（green life 绿色生活）'
        ] },
        { type: 'table', headers: ['单词', '常见义', '生义/不常见义'], rows: [
          ['book', '书', '预订（动词）'],
          ['spring', '春天', '泉水'],
          ['cool', '凉爽的', '酷的 / 冷静的'],
          ['green', '绿色', '环保的']
        ] },
        { type: 'warn', label: '易错', text: '近义词别乱换：<strong>speak</strong> 后接语言或"说话"动作；<strong>say</strong> 后接说的内容；<strong>tell</strong> 后接人（tell me）；<strong>talk</strong> 强调交谈。' },
        { type: 'paragraph', text: 'say / speak / talk / tell 是高考最爱考的一组。只要记住各自"跟什么"，选择题基本不会错。下面用表格和图再巩固一遍。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图1 词性转换家族：care</text><rect x="50" y="90" width="120" height="50" rx="8" fill="#9c56d4"/><text x="110" y="120" font-size="16" fill="#ffffff" text-anchor="middle">care 名/动</text><rect x="260" y="90" width="120" height="50" rx="8" fill="#b87fd8"/><text x="320" y="120" font-size="16" fill="#ffffff" text-anchor="middle">careful 形</text><rect x="470" y="90" width="120" height="50" rx="8" fill="#b87fd8"/><text x="530" y="120" font-size="16" fill="#ffffff" text-anchor="middle">carefully 副</text><rect x="260" y="170" width="120" height="50" rx="8" fill="#b87fd8"/><text x="320" y="200" font-size="16" fill="#ffffff" text-anchor="middle">careless 形</text><line x1="170" y1="115" x2="255" y2="115" stroke="#3a2a4a" stroke-width="2"/><line x1="380" y1="115" x2="465" y2="115" stroke="#3a2a4a" stroke-width="2"/><line x1="320" y1="140" x2="320" y2="165" stroke="#3a2a4a" stroke-width="2"/></svg>`, caption: '图1 care 的四种词性变化' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图2 短语动词：look up</text><rect x="60" y="90" width="110" height="50" rx="8" fill="#9c56d4"/><text x="115" y="120" font-size="16" fill="#ffffff" text-anchor="middle">look 看</text><rect x="285" y="90" width="110" height="50" rx="8" fill="#9c56d4"/><text x="340" y="120" font-size="16" fill="#ffffff" text-anchor="middle">up 向上</text><rect x="510" y="90" width="120" height="50" rx="8" fill="#c0392b"/><text x="570" y="120" font-size="16" fill="#ffffff" text-anchor="middle">查(词典)</text><line x1="170" y1="115" x2="280" y2="115" stroke="#3a2a4a" stroke-width="2"/><line x1="395" y1="115" x2="505" y2="115" stroke="#3a2a4a" stroke-width="2"/><text x="340" y="180" font-size="14" fill="#3a2a4a" text-anchor="middle">两词合起来，意思常要重新记</text></svg>`, caption: '图2 look up 不是"向上看"而是"查" ' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图3 近义词辨析：说</text><rect x="40" y="80" width="140" height="60" rx="8" fill="#b87fd8"/><text x="110" y="105" font-size="15" fill="#3a2a4a" text-anchor="middle">say 说内容</text><text x="110" y="125" font-size="13" fill="#3a2a4a" text-anchor="middle">say hello</text><rect x="200" y="80" width="140" height="60" rx="8" fill="#b87fd8"/><text x="270" y="105" font-size="15" fill="#3a2a4a" text-anchor="middle">speak 说语言</text><text x="270" y="125" font-size="13" fill="#3a2a4a" text-anchor="middle">speak English</text><rect x="360" y="80" width="140" height="60" rx="8" fill="#b87fd8"/><text x="430" y="105" font-size="15" fill="#3a2a4a" text-anchor="middle">talk 交谈</text><text x="430" y="125" font-size="13" fill="#3a2a4a" text-anchor="middle">talk to me</text><rect x="520" y="80" width="140" height="60" rx="8" fill="#b87fd8"/><text x="590" y="105" font-size="15" fill="#3a2a4a" text-anchor="middle">tell 告诉人</text><text x="590" y="125" font-size="13" fill="#3a2a4a" text-anchor="middle">tell me</text><text x="340" y="190" font-size="14" fill="#5a7a2a" text-anchor="middle">记法：say内容、speak语、talk谈、tell人</text></svg>`, caption: '图3 四个"说"各跟什么' },
        { type: 'heading', text: '二、巩固小结' },
        { type: 'paragraph', text: '今天这四个考点——词性转换、短语动词、熟词生义、近义词辨析——几乎年年出现在高考里。把它们做成卡片随身带，见到就温一遍，考试就不慌。' }
      ],
      exercises: [
        { type: 'choice', question: 'care 的副词形式是哪个？', options: ['careful', 'carefully', 'careless', 'caring'], answer: 'carefully', explanation: '形容词变副词通常加 ly。care 先变形容词 careful（仔细的），再加 ly 变成 carefully（仔细地）。careless 是"粗心的"，不是副词，所以选 carefully。' },
        { type: 'choice', question: '短语动词 look up 在 "look up the word" 中的意思是？', options: ['向上看', '查(词典)', '寻找', '照顾'], answer: '查(词典)', explanation: 'look up 是固定短语动词，意思是"查阅、查找"，常用于在词典或资料里查单词。它不是"向上看"也不是"照顾"，所以正确选项是查(词典)。' },
        { type: 'choice', question: '打电话时 "May I ___ to Mary?" 应填哪个词？', options: ['say', 'speak', 'talk', 'tell'], answer: 'speak', explanation: '电话中用 speak to 表示"和某人讲话"，是固定用法。say 后接说话内容，tell 后接人且常用 tell me，talk 强调交谈，故此处选 speak。' },
        { type: 'fill', question: 'book 作动词时，意思是 ___ （如 book a table 订桌）。', answer: '预订|预定', explanation: 'book 常见是名词"书"，但作动词时表示"预订、预约"，如 book a table 订一张桌子、book a room 订房间。这是高考常考的熟词生义，要特别记住。' },
        { type: 'fill', question: 'windy（有风的）是由名词 ___ 加后缀 y 变成的形容词。', answer: 'wind|风', explanation: '很多天气词由名词加 y 变成形容词：wind 风→windy 有风的，rain 雨→rainy 下雨的，sun 太阳→sunny 晴朗的。所以 windy 来自名词 wind（风）。' }
      ]
    },
    {
      id: `zt1-u2-l2`,
      name: `词汇复习策略`,
      chapter: `词汇与语法 · 第2单元 词汇知识（二）`,
      difficulty: `基础`,
      content: [
        { type: 'heading', text: '一、五种好用的记词方法' },
        { type: 'paragraph', text: '背单词最怕"背了就忘"。下面五招都是经过验证的好办法，挑适合自己的组合用，比一遍遍抄写有效得多。' },
        { type: 'list', items: [
          '按话题分类记：学校生活、家庭、环保、科技',
          '在句子和文章里记：语境记忆，不孤立背',
          '按遗忘规律循环复习：隔天、隔周再回头看',
          '建错题本，专门记总写错、总记混的词',
          '用思维导图把同类词串成一张网'
        ] },
        { type: 'keypoint', label: '重点·语境记忆', text: '别只背"单词=中文"。把词放进<strong>句子</strong>里记，才知道它怎么用。<br>例：记 attention，就记 <strong>pay attention to</strong> the blackboard。' },
        { type: 'example', label: '例句', text: 'Instead of memorizing alone, she learned the word in a sentence: "We should <strong>protect</strong> the environment." 她把 protect 放在句子里记，一下就记住了意思和用法。' },
        { type: 'list', items: [
          '学校生活：classmate, homework, exam, library',
          '家庭：parent, neighbor, housework, relative',
          '环保：recycle, pollution, protect, green',
          '科技：computer, robot, internet, invention'
        ] },
        { type: 'table', headers: ['话题', '代表词', '记忆提示'], rows: [
          ['学校生活', 'exam, library', '想自己的校园日常'],
          ['家庭', 'parent, housework', '想在家做的事'],
          ['环保', 'recycle, protect', '想垃圾分类'],
          ['科技', 'robot, internet', '想常用电子产品']
        ] },
        { type: 'warn', label: '易错', text: '孤立背中文意思最容易忘，也最容易用错。比如只背"attention 注意"，考试时可能写成 attention the teacher，正确必须是 <strong>pay attention to</strong>。' },
        { type: 'tip', label: '记忆', text: '用艾宾浩斯遗忘曲线安排复习：当天背完，第2天、第4天、第7天、第15天各看一次，比考前突击管用太多。' },
        { type: 'example', label: '错题本', text: '小明总把 quite（相当）和 quiet（安静的）搞混，他把这对词写进错题本，旁边画了小图：quiet 里有个"et"像安静坐着。两周后他再也没错。' },
        { type: 'list', items: [
          '第1天：新词首次记忆',
          '第2天：快速复习一遍',
          '第4天：遮住中文自测',
          '第7天、第15天：再巩固'
        ] },
        { type: 'paragraph', text: '思维导图是把一个中心词和 related 词用线条连起来，像树枝一样。比如中心写"学校生活"，枝上挂 classmate、exam、library，一眼就能复习一大串。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图1 复习循环图（艾宾浩斯）</text><rect x="270" y="60" width="140" height="50" rx="20" fill="#9c56d4"/><text x="340" y="90" font-size="15" fill="#ffffff" text-anchor="middle">当天背</text><rect x="270" y="170" width="140" height="50" rx="20" fill="#b87fd8"/><text x="340" y="200" font-size="15" fill="#ffffff" text-anchor="middle">隔天复习</text><line x1="340" y1="110" x2="340" y2="165" stroke="#3a2a4a" stroke-width="2"/><rect x="60" y="115" width="140" height="50" rx="20" fill="#b87fd8"/><text x="130" y="145" font-size="15" fill="#ffffff" text-anchor="middle">隔周复习</text><rect x="480" y="115" width="140" height="50" rx="20" fill="#b87fd8"/><text x="550" y="145" font-size="15" fill="#ffffff" text-anchor="middle">当月复习</text><line x1="200" y1="140" x2="265" y2="140" stroke="#3a2a4a" stroke-width="2"/><line x1="415" y1="140" x2="480" y2="140" stroke="#3a2a4a" stroke-width="2"/><text x="340" y="255" font-size="14" fill="#5a7a2a" text-anchor="middle">越往后间隔越长，记得越牢</text></svg>`, caption: '图1 按遗忘规律循环复习' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图2 思维导图：学校生活</text><rect x="290" y="120" width="140" height="50" rx="10" fill="#9c56d4"/><text x="360" y="150" font-size="15" fill="#ffffff" text-anchor="middle">学校生活</text><rect x="60" y="60" width="120" height="44" rx="8" fill="#b87fd8"/><text x="120" y="87" font-size="14" fill="#3a2a4a" text-anchor="middle">classmate</text><rect x="60" y="200" width="120" height="44" rx="8" fill="#b87fd8"/><text x="120" y="227" font-size="14" fill="#3a2a4a" text-anchor="middle">exam</text><rect x="500" y="60" width="120" height="44" rx="8" fill="#b87fd8"/><text x="560" y="87" font-size="14" fill="#3a2a4a" text-anchor="middle">library</text><rect x="500" y="200" width="120" height="44" rx="8" fill="#b87fd8"/><text x="560" y="227" font-size="14" fill="#3a2a4a" text-anchor="middle">homework</text><line x1="180" y1="82" x2="290" y2="135" stroke="#3a2a4a" stroke-width="2"/><line x1="180" y1="222" x2="290" y2="165" stroke="#3a2a4a" stroke-width="2"/><line x1="500" y1="82" x2="430" y2="135" stroke="#3a2a4a" stroke-width="2"/><line x1="500" y1="222" x2="430" y2="165" stroke="#3a2a4a" stroke-width="2"/></svg>`, caption: '图2 用思维导图串起同类词' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图3 按话题分类记词</text><rect x="40" y="80" width="140" height="60" rx="8" fill="#9c56d4"/><text x="110" y="115" font-size="15" fill="#ffffff" text-anchor="middle">学校生活</text><rect x="200" y="80" width="140" height="60" rx="8" fill="#b87fd8"/><text x="270" y="115" font-size="15" fill="#3a2a4a" text-anchor="middle">家庭</text><rect x="360" y="80" width="140" height="60" rx="8" fill="#b87fd8"/><text x="430" y="115" font-size="15" fill="#3a2a4a" text-anchor="middle">环保</text><rect x="520" y="80" width="140" height="60" rx="8" fill="#b87fd8"/><text x="590" y="115" font-size="15" fill="#3a2a4a" text-anchor="middle">科技</text><text x="340" y="190" font-size="14" fill="#5a7a2a" text-anchor="middle">同一话题的词一起记，写作和口语都不卡壳</text></svg>`, caption: '图3 四大话题分类记词' },
        { type: 'heading', text: '二、今天就行动起来' },
        { type: 'paragraph', text: '方法再多，不动手也是零。今天就选一种开始：先建一个错题本，或画一张思维导图，比空想"明天再背"强一百倍。' },
        { type: 'list', items: [
          '今晚：把上周错词抄进错题本',
          '明天：用话题法复习 20 个词',
          '本周：画一张"家庭"思维导图',
          '坚持：按循环表复习，别断'
        ] },
        { type: 'tip', label: '坚持', text: '每天只花 10 分钟循环复习，比周末猛背两小时更牢。把单词卡设成手机壁纸，等车时就看一眼，积少成多。' },
        { type: 'paragraph', text: '记住：词汇不是一天堆出来的，而是每天滚雪球滚出来的。用对策略，高考词汇关一定能过。' }
      ],
      exercises: [
        { type: 'choice', question: '根据艾宾浩斯遗忘曲线，背完单词后最好怎么做？', options: ['只背一次就行', '按规律循环复习', '完全不复习', '只在考前背'], answer: '按规律循环复习', explanation: '人背完会很快忘记，艾宾浩斯曲线告诉我们：要在第2天、第4天、第7天等时间点回头复习，才能记牢。只背一次或只考前背都容易忘，所以选按规律循环复习。' },
        { type: 'choice', question: '把单词放进句子里记，这种方法叫什么？', options: ['语境记忆', '孤立背诵', '抄写记忆', '听写记忆'], answer: '语境记忆', explanation: '在句子或文章里记单词，能同时记住意思和用法，这叫语境记忆。孤立背诵只记中文意思，容易用错；抄写和听写只是辅助，不算语境记忆，故选语境记忆。' },
        { type: 'choice', question: '把"学校生活、家庭、环保、科技"等同类词串成一张网，用的是哪种工具？', options: ['错题本', '思维导图', '单词卡', '听录音'], answer: '思维导图', explanation: '思维导图用一个中心词向外发散，把同类词像树枝一样连起来，方便整体复习。错题本记易错词，单词卡单张记词，听录音练听力，都不等于把同类词串成网，所以选思维导图。' },
        { type: 'fill', question: '把总写错、总记混的词专门记在一个本子里，这个本子叫 ___ 本。', answer: '错题|错词', explanation: '错题本是复习词汇的好工具，专门收集自己写错、记混的词，旁边写清正确写法和记法。常看错题本能避免重复犯错，是高考提分的关键习惯之一。' },
        { type: 'fill', question: '我们可以按 ___ 来分类记单词，比如学校生活、家庭、环保、科技。', answer: '话题|主题', explanation: '按话题（也叫主题）分类记词，是把同一场景的单词放在一起，比如"学校生活"包含 exam、library 等。这样记词有场景感，写作和口语时更容易想起来，比乱序背更高效。' }
      ]
    }
  );
})();
