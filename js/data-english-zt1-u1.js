(function () {
  var v = gzGetVolume('english', 'zt1');
  if (!v) return;
  v.points.push(
    {
      id: `zt1-u1-l1`,
      name: `词汇量要求与课标依据`,
      chapter: `词汇与语法 · 第1单元 词汇知识（一）`,
      difficulty: `基础`,
      content: [
        { type: 'heading', text: '一、高考要掌握多少单词' },
        { type: 'paragraph', text: '高考英语课程标准要求同学们掌握大约3000到3100个单词，这些单词叫做"课标词汇"。达到这个数量，才能比较顺利地读懂试卷上的文章，也才能写出通顺的作文。' },
        { type: 'list', items: ['必修词汇：最基础、最常用的一批词，人人都要会。', '选择性必修词汇：在必修之上再增加的一批词，难度稍大。', '两级词汇加起来，总数约为3000到3100个。'] },
        { type: 'table', headers: ['级别', '特点', '大约数量'], rows: [['必修', '最基础、最常用', '约2000个'], ['选择性必修', '难度更大、更书面', '约1000到1100个']] },
        { type: 'keypoint', label: '重点·课标词汇', text: '高考要求的 <strong>3000—3100个课标词汇</strong> 是整个复习的底线，<br>少了它们，阅读和写作都会很吃力。' },
        { type: 'paragraph', text: '词汇不是随便背背就行，它分成必修和选择性必修两级，一级比一级多、一级比一级难。我们复习时要先抓必修，再补选择性必修。' },
        { type: 'example', label: '例句/例题', text: '小明给自己定计划：<strong>每天记20个词</strong>，一年下来就能积累七千多个词，<br>远远超过课标要求，考试时自然更轻松。' },
        { type: 'tip', label: '记忆', text: '把单词放进<strong>句子</strong>里记，比单独背字母更有效；<br>比如记 apple，就写 "I eat a red apple."' },
        { type: 'heading', text: '二、词汇要会读、会写、会用' },
        { type: 'list', items: ['会读：看到单词能正确读出声音。', '会写：能正确拼出字母，不写错。', '会用：能在句子里选对词、用对意思。'] },
        { type: 'warn', label: '易错', text: '很多同学以为<strong>背下来就算会了</strong>，其实只会读、不会写也不会用，<br>考试写句子时照样出错，这是常见失分点。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图1 词汇金字塔：从会读到会用</text><polygon points="340,60 245,145 435,145" fill="#9c56d4"/><text x="340" y="120" font-size="14" fill="#ffffff" text-anchor="middle">顶层：会用</text><polygon points="245,155 435,155 205,235 475,235" fill="#b87fd8"/><text x="340" y="205" font-size="14" fill="#3a2a4a" text-anchor="middle">中层：会写</text><polygon points="205,245 475,245 165,295 515,295" fill="#9c56d4"/><text x="340" y="278" font-size="14" fill="#ffffff" text-anchor="middle">底层：会读</text></svg>', caption: '图1 词汇金字塔：底层会读、中层会写、顶层会用' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图2 每天20词，一年积累很多</text><rect x="80" y="200" width="60" height="30" fill="#9c56d4"/><rect x="170" y="170" width="60" height="60" fill="#b87fd8"/><rect x="260" y="140" width="60" height="90" fill="#9c56d4"/><rect x="350" y="100" width="60" height="130" fill="#b87fd8"/><rect x="440" y="60" width="60" height="170" fill="#9c56d4"/><text x="110" y="245" font-size="12" fill="#3a2a4a" text-anchor="middle">第1月</text><text x="200" y="245" font-size="12" fill="#3a2a4a" text-anchor="middle">第2月</text><text x="290" y="245" font-size="12" fill="#3a2a4a" text-anchor="middle">第3月</text><text x="380" y="245" font-size="12" fill="#3a2a4a" text-anchor="middle">第6月</text><text x="470" y="245" font-size="12" fill="#3a2a4a" text-anchor="middle">第12月</text></svg>', caption: '图2 每天记20个词，柱形越长代表积累越多' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图3 课标词汇分两级</text><rect x="270" y="50" width="140" height="40" rx="8" fill="#9c56d4"/><text x="340" y="76" font-size="14" fill="#ffffff" text-anchor="middle">课标词汇</text><line x1="340" y1="90" x2="200" y2="140" stroke="#7a3fb0" stroke-width="2"/><line x1="340" y1="90" x2="480" y2="140" stroke="#7a3fb0" stroke-width="2"/><rect x="130" y="140" width="140" height="40" rx="8" fill="#b87fd8"/><text x="200" y="166" font-size="14" fill="#3a2a4a" text-anchor="middle">必修词汇</text><rect x="410" y="140" width="160" height="40" rx="8" fill="#b87fd8"/><text x="490" y="166" font-size="14" fill="#3a2a4a" text-anchor="middle">选择性必修</text><text x="200" y="210" font-size="13" fill="#3a2a4a" text-anchor="middle">约2000个·最基础</text><text x="490" y="210" font-size="13" fill="#3a2a4a" text-anchor="middle">约1000+个·更难</text></svg>', caption: '图3 课标词汇分为必修与选择性必修两级' },
        { type: 'keypoint', label: '重点·三层能力', text: '真正掌握一个词，要同时做到 <strong>会读、会写、会用</strong> 三层，<br>其中"会用"最难也最重要。' },
        { type: 'example', label: '例句/例题', text: '阅读时遇到 "develop"，只要知道是"发展"就行（会读会认）；<br>但写作时要写出 "We should <strong>develop</strong> good habits." 才是会用。' },
        { type: 'tip', label: '记忆', text: '每天用新词<strong>造一个句子</strong>，坚持一个月，用词会越来越顺手。' },
        { type: 'paragraph', text: '词汇量不是死记硬背的数字，而是能在阅读中认出、在写作中用出来的真本事。底子打好了，后面的语法和阅读都会变简单。' },
        { type: 'list', items: ['早上花10分钟复习昨天的词。', '白天用新词造一句话写进日记。', '晚上用单词卡快速过一遍，错的标红第二天再看。'] },
        { type: 'paragraph', text: '只要方法对、坚持住，课标要求的3000多词完全可以在高中三年稳稳拿下。' }
      ],
      exercises: [
        { type: 'choice', question: '根据课标，高考英语要求掌握的单词数量大约是下面哪一个？', options: ['A. 1500个左右', 'B. 3000—3100个左右', 'C. 5000个左右', 'D. 8000个左右'], answer: 'B. 3000—3100个左右', explanation: '高考英语课标要求掌握约3000到3100个单词，这些叫做课标词汇。选项A太少，达不到考试要求；选项C和D又过多，超出了课标范围。所以正确答案约为3000到3100个，也就是选项B。' },
        { type: 'choice', question: '课标词汇按难度分成几级？', options: ['A. 一级', 'B. 两级', 'C. 三级', 'D. 四级'], answer: 'B. 两级', explanation: '课标把词汇分成必修和选择性必修两级。必修是每个学生都要会的基础词，选择性必修是在必修之上再增加的词，数量逐级增多。所以词汇并不是只分一级，也不是三级或四级，而是清晰的两级结构，答案选B。' },
        { type: 'choice', question: '掌握足够的词汇，是读懂文章和下面哪一件事的基础？', options: ['A. 唱歌好听', 'B. 写好作文', 'C. 跑步快', 'D. 画画好看'], answer: 'B. 写好作文', explanation: '词汇是英语两项重要输出的基础：一是读懂别人写的文章，二是自己写出好的作文。唱歌、跑步、画画和英语词汇量没有直接关系，所以正确选项是B，写好作文。' },
        { type: 'fill', question: '词汇不仅要会读、会写，还要能够在句子里正确_____。', answer: '用|使用', explanation: '学单词不能只停留在认识和抄写，最终要在句子里用对，比如写作文或口语表达时选对词。只会读和写还不够，真正掌握是会用，所以填"用"或"使用"。' },
        { type: 'fill', question: '高考课标要求的词汇量大约是_____个单词。', answer: '3000|3100|3000到3100', explanation: '根据高中英语课程标准，高考要求掌握约3000到3100个单词，这些属于课标词汇。记住这个大致范围，有助于我们制定每天的记词计划，所以填3000或3100都可以。' }
      ]
    },
    {
      id: `zt1-u1-l2`,
      name: `词汇考查三个层次`,
      chapter: `词汇与语法 · 第1单元 词汇知识（一）`,
      difficulty: `基础`,
      content: [
        { type: 'heading', text: '一、词汇考查的三个层次' },
        { type: 'paragraph', text: '高考对词汇的考查分成三个层次，要求不一样。搞清楚每一层要会到什么程度，复习才能不白费力气。' },
        { type: 'list', items: ['第一层：核心词汇，写作和口语必须会用。', '第二层：阅读词汇，看到能认识意思即可。', '第三层：完形与语法填空词汇，要掌握搭配和词形变化。'] },
        { type: 'table', headers: ['层次', '要求', '是否要会写'], rows: [['核心词汇', '会拼写、会搭配、会用', '要会写'], ['阅读词汇', '看到认识意思', '不一定要写'], ['完形/语法填空词汇', '掌握搭配和词形变化', '常要写对']] },
        { type: 'keypoint', label: '重点·三个层次', text: '三个层次的关键区别是 <strong>"认得"和"会用"</strong>：<br>阅读词只需认得，核心词必须会用。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图1 词汇考查三个层次</text><rect x="140" y="55" width="400" height="55" rx="8" fill="#9c56d4"/><text x="340" y="88" font-size="14" fill="#ffffff" text-anchor="middle">第一层 核心词汇：会拼写、会搭配、会用</text><rect x="140" y="130" width="400" height="55" rx="8" fill="#b87fd8"/><text x="340" y="163" font-size="14" fill="#3a2a4a" text-anchor="middle">第二层 阅读词汇：看到能认识意思</text><rect x="140" y="205" width="400" height="55" rx="8" fill="#9c56d4"/><text x="340" y="238" font-size="14" fill="#ffffff" text-anchor="middle">第三层 完形/语法：掌握搭配和词形变化</text></svg>', caption: '图1 词汇考查三个层次从上到下要求不同' },
        { type: 'paragraph', text: '核心词汇大约2000个，是写作和说话离不开的词，比如常用的动词、名词、形容词，必须会拼写也会搭配。' },
        { type: 'example', label: '例句/例题', text: '写句子 "He <strong>decided</strong> to study hard." 中 decide 是核心词，<br>既要拼对，也要知道和 to do 搭配，这就是"会用"。' },
        { type: 'warn', label: '易错', text: '有人把阅读词也当核心词去死背拼写，<strong>浪费时间</strong>；<br>也有人把核心词只当阅读词，写作时写不出，都会丢分。' },
        { type: 'heading', text: '二、认得和用会的区别' },
        { type: 'list', items: ['认得：看到词知道中文意思，用于读文章。', '会用：能在作文或口语中正确写出、用对。', '同一词可能只需认得，也可能必须会用，看层次。'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图2 "认得"与"会用"对比</text><rect x="70" y="55" width="250" height="150" rx="8" fill="#b87fd8"/><text x="195" y="90" font-size="15" fill="#3a2a4a" text-anchor="middle">认得</text><text x="195" y="120" font-size="13" fill="#3a2a4a" text-anchor="middle">看到知道意思</text><text x="195" y="145" font-size="13" fill="#3a2a4a" text-anchor="middle">用于读文章</text><text x="195" y="170" font-size="13" fill="#3a2a4a" text-anchor="middle">不一定要会写</text><rect x="360" y="55" width="250" height="150" rx="8" fill="#9c56d4"/><text x="485" y="90" font-size="15" fill="#ffffff" text-anchor="middle">会用</text><text x="485" y="120" font-size="13" fill="#ffffff" text-anchor="middle">能正确写出</text><text x="485" y="145" font-size="13" fill="#ffffff" text-anchor="middle">用在作文口语</text><text x="485" y="170" font-size="13" fill="#ffffff" text-anchor="middle">要会搭配</text></svg>', caption: '图2 认得和用会是两种不同的要求' },
        { type: 'tip', label: '记忆', text: '给每个核心词记一个<strong>固定搭配</strong>，如 "make a decision"，比单背词义牢靠。' },
        { type: 'paragraph', text: '阅读词汇量大，但要求低，看到能猜出或认出意思就能读懂文章；完形和语法填空则要求我们写对词形，比如把名词变成形容词。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f3edfa"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图3 复习三步关系</text><rect x="60" y="70" width="160" height="50" rx="8" fill="#9c56d4"/><text x="140" y="100" font-size="13" fill="#ffffff" text-anchor="middle">保住核心词</text><rect x="260" y="70" width="160" height="50" rx="8" fill="#b87fd8"/><text x="340" y="100" font-size="13" fill="#3a2a4a" text-anchor="middle">扩大阅读词</text><rect x="460" y="70" width="160" height="50" rx="8" fill="#9c56d4"/><text x="540" y="100" font-size="13" fill="#ffffff" text-anchor="middle">练词形变化</text><line x1="220" y1="95" x2="260" y2="95" stroke="#7a3fb0" stroke-width="2"/><line x1="420" y1="95" x2="460" y2="95" stroke="#7a3fb0" stroke-width="2"/><text x="340" y="170" font-size="13" fill="#3a2a4a" text-anchor="middle">三步按顺序进行，缺一不可</text><rect x="200" y="195" width="280" height="50" rx="8" fill="#b87fd8"/><text x="340" y="225" font-size="13" fill="#3a2a4a" text-anchor="middle">目标：词汇少丢分</text></svg>', caption: '图3 复习按保核心、扩阅读、练变化三步推进' },
        { type: 'example', label: '例句/例题', text: '语法填空："She is <strong>helpful</strong>." 要把 help 变成 helpful（形容词），<br>这就是完形/语法层要求的词形变化。' },
        { type: 'keypoint', label: '重点·复习策略', text: '先保住 <strong>2000核心词</strong> 的拼写与搭配，再用阅读扩大认词量，<br>最后练词形变化，三步缺一不可。' },
        { type: 'tip', label: '记忆', text: '准备三色卡：<strong>红卡</strong>核心词、<strong>蓝卡</strong>阅读词、<strong>绿卡</strong>搭配，分类复习更高效。' },
        { type: 'list', items: ['红卡每天默写，错词反复练。', '蓝卡阅读时顺手划，见多就熟。', '绿卡写作前翻一翻，避免搭配错。'] },
        { type: 'paragraph', text: '把三个层次分清楚，复习就有章法：该背的背牢，该认的认熟，该变的变对，词汇分就不会轻易丢了。' }
      ],
      exercises: [
        { type: 'choice', question: '在词汇考查的三个层次中，写作和口语必须会用的核心词汇大约有多少个？', options: ['A. 约500个', 'B. 约2000个', 'C. 约4000个', 'D. 约100个'], answer: 'B. 约2000个', explanation: '核心词汇是写作和口语中必须会用的词，大约2000个，要求会拼写也会搭配。选项A和D太少，选项C又太多，所以符合课标说法的是约2000个，选B。' },
        { type: 'choice', question: '对于阅读词汇，我们的要求主要是什么？', options: ['A. 必须会拼写', 'B. 看到能认识意思', 'C. 必须会唱歌', 'D. 必须会翻译整本书'], answer: 'B. 看到能认识意思', explanation: '阅读词汇用来读懂文章，只要看到单词能认出它的意思就可以，不一定要会写。选项A要求过高，C和D与阅读无关，所以正确做法是看到能认识意思，选B。' },
        { type: 'choice', question: '在完形填空和语法填空中，词汇主要考查什么？', options: ['A. 单词的颜色', 'B. 常见搭配和词形变化', 'C. 单词的价钱', 'D. 单词的天气'], answer: 'B. 常见搭配和词形变化', explanation: '完形和语法填空常考词语的固定搭配，以及名词、动词等的词形变化，比如加后缀变成另一种词性。颜色和价钱、天气都不是考查内容，所以选B。' },
        { type: 'fill', question: '学单词时要分清"认得"和"_____"是两个不同的要求。', answer: '会用|使用', explanation: '很多词我们看着眼熟、知道意思，这叫"认得"；但要在作文或说话中正确写出来、用出来，才叫"会用"。两者要求不同，阅读词只需认得，核心词必须会用，所以填"会用"。' },
        { type: 'fill', question: '核心词汇不仅要求会拼写，还要求掌握它的常见_____。', answer: '搭配', explanation: '核心词汇在写作和口语里要用对，光会拼写法不够，还要知道它常和哪些词一起用，比如固定短语和句型。这种常见组合叫做搭配，所以填"搭配"。' }
      ]
    }
  );
})();
