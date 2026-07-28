(function () {
  var v = gzGetVolume('english', 'zt1');
  if (!v) return;
  v.points.push(
    {
      id: `zt1-u3-l1`,
      name: `核心语法体系`,
      chapter: `词汇与语法 · 第3单元 语法体系（一）`,
      difficulty: `基础`,
      content: [
        { type: 'heading', text: '一、什么是语法' },
        { type: 'paragraph', text: '语法就像说话和写句子的"交通规则"。我们说话不能乱说，写句子也要按规矩来。英语语法一共分两大部分：一部分管"单个词怎么用"，另一部分管"词怎么拼成句子"。' },
        { type: 'list', items: [
          `词法：研究单个词的规矩，比如名词、动词、形容词、副词、代词、介词、连词、冠词怎么用。`,
          `句法：研究怎么把词拼成正确的句子，比如句子成分、时态、语态、非谓语动词、三大从句、特殊句式。`
        ]},
        { type: 'paragraph', text: '学语法不要一上来就钻细节。先把整体框架记在脑子里，再往里面填内容，就像先看清地图再出门，不会迷路。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图1 语法地图：从词到句的路线</text><rect x="40" y="80" width="120" height="48" rx="8" fill="#9c56d4"/><text x="100" y="109" font-size="15" fill="#ffffff" text-anchor="middle">词类</text><rect x="200" y="80" width="120" height="48" rx="8" fill="#b87fd8"/><text x="260" y="109" font-size="15" fill="#3a2a4a" text-anchor="middle">句子成分</text><rect x="360" y="80" width="120" height="48" rx="8" fill="#b87fd8"/><text x="420" y="109" font-size="15" fill="#3a2a4a" text-anchor="middle">时态语态</text><rect x="200" y="170" width="120" height="48" rx="8" fill="#b87fd8"/><text x="260" y="199" font-size="15" fill="#3a2a4a" text-anchor="middle">非谓语</text><rect x="360" y="170" width="120" height="48" rx="8" fill="#b87fd8"/><text x="420" y="199" font-size="15" fill="#3a2a4a" text-anchor="middle">三大从句</text><rect x="520" y="125" width="120" height="48" rx="8" fill="#9c56d4"/><text x="580" y="154" font-size="15" fill="#ffffff" text-anchor="middle">特殊句式</text><line x1="160" y1="104" x2="200" y2="104" stroke="#7a3fb0" stroke-width="2"/><line x1="320" y1="104" x2="360" y2="104" stroke="#7a3fb0" stroke-width="2"/><line x1="420" y1="104" x2="420" y2="170" stroke="#7a3fb0" stroke-width="2"/><line x1="260" y1="128" x2="260" y2="170" stroke="#7a3fb0" stroke-width="2"/><line x1="480" y1="104" x2="520" y2="129" stroke="#7a3fb0" stroke-width="2"/><line x1="480" y1="194" x2="520" y2="149" stroke="#7a3fb0" stroke-width="2"/></svg>`, caption: '图1 语法地图：从词类到特殊句式的整体路线' },
        { type: 'heading', text: '二、词法：单个词的规矩' },
        { type: 'list', items: [
          `名词：表示人或事物的名字，如 book（书）、teacher（老师）。`,
          `动词：表示动作或状态，如 run（跑）、be（是）。`,
          `形容词：修饰名词，如 red（红色的）、happy（开心的）。`,
          `副词：修饰动词或形容词，如 quickly（快速地）。`,
          `代词：代替名词，如 he（他）、this（这个）。`,
          `介词：表示关系，如 in（在……里）、on（在……上）。`,
          `连词：连接词或句子，如 and（和）、but（但是）。`,
          `冠词：放在名词前，如 a、an、the。`
        ]},
        { type: 'keypoint', label: '重点·八大词类', text: '英语里最常用的词分成<strong>八类</strong>：名词、动词、形容词、副词、代词、介词、连词、冠词。<br>记住这八类，看句子时就能给每个词"贴标签"。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图2 八大词类一览</text><rect x="40" y="70" width="140" height="46" rx="8" fill="#9c56d4"/><text x="110" y="98" font-size="14" fill="#ffffff" text-anchor="middle">名词</text><rect x="200" y="70" width="140" height="46" rx="8" fill="#9c56d4"/><text x="270" y="98" font-size="14" fill="#ffffff" text-anchor="middle">动词</text><rect x="360" y="70" width="140" height="46" rx="8" fill="#9c56d4"/><text x="430" y="98" font-size="14" fill="#ffffff" text-anchor="middle">形容词</text><rect x="520" y="70" width="120" height="46" rx="8" fill="#9c56d4"/><text x="580" y="98" font-size="14" fill="#ffffff" text-anchor="middle">副词</text><rect x="40" y="140" width="140" height="46" rx="8" fill="#b87fd8"/><text x="110" y="168" font-size="14" fill="#3a2a4a" text-anchor="middle">代词</text><rect x="200" y="140" width="140" height="46" rx="8" fill="#b87fd8"/><text x="270" y="168" font-size="14" fill="#3a2a4a" text-anchor="middle">介词</text><rect x="360" y="140" width="140" height="46" rx="8" fill="#b87fd8"/><text x="430" y="168" font-size="14" fill="#3a2a4a" text-anchor="middle">连词</text><rect x="520" y="140" width="120" height="46" rx="8" fill="#b87fd8"/><text x="580" y="168" font-size="14" fill="#3a2a4a" text-anchor="middle">冠词</text><text x="340" y="225" font-size="14" fill="#3a2a4a" text-anchor="middle">前四个常带"实义"，后四个多是"辅助"作用</text></svg>`, caption: '图2 八大词类：实词与辅助词' },
        { type: 'paragraph', text: '下面用一张表把八大词类整理一下，方便对照记忆。' },
        { type: 'table', headers: ['词类', '作用', '例子'], rows: [
          ['名词', '表示人或事物', 'book 书'],
          ['动词', '表示动作或状态', 'eat 吃'],
          ['形容词', '修饰名词', 'big 大的'],
          ['副词', '修饰动/形', 'fast 快地'],
          ['代词', '代替名词', 'he 他'],
          ['介词', '表关系', 'on 在…上'],
          ['连词', '连接', 'and 和'],
          ['冠词', '限定名词', 'the 这/那']
        ]},
        { type: 'heading', text: '三、句法：把词拼成句子' },
        { type: 'list', items: [
          `句子成分：主语（谁）、谓语（做什么）、宾语（动作对象）等。`,
          `时态与语态：动作的时间和主动被动。`,
          `非谓语动词：动词但不当谓语用，如 to do、doing。`,
          `三大从句：名词性从句、定语从句、状语从句。`,
          `特殊句式：倒装、强调、虚拟语气等。`
        ]},
        { type: 'example', label: '例句/例题', text: 'The <strong>boy</strong> (主语) <strong>ate</strong> (谓语) an <strong>apple</strong> (宾语).<br>这句话里：男孩是主语，吃是谓语，苹果是宾语，这就是句法在起作用。' },
        { type: 'warn', label: '易错', text: '很多同学把"词法"和"句法"搞混：<strong>词法管单个词</strong>，<strong>句法管整句话</strong>。做题时先想清楚这道题考的是"词"还是"句"。' },
        { type: 'tip', label: '记忆', text: '用"盖房子"来记：词法是一块块砖（单个词），句法是图纸（怎么把砖垒成房子）。先有砖，再按图纸盖。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图3 句法的五大板块</text><rect x="40" y="80" width="170" height="50" rx="8" fill="#9c56d4"/><text x="125" y="110" font-size="14" fill="#ffffff" text-anchor="middle">句子成分</text><rect x="255" y="80" width="170" height="50" rx="8" fill="#b87fd8"/><text x="340" y="110" font-size="14" fill="#3a2a4a" text-anchor="middle">时态语态</text><rect x="470" y="80" width="170" height="50" rx="8" fill="#b87fd8"/><text x="555" y="110" font-size="14" fill="#3a2a4a" text-anchor="middle">非谓语</text><rect x="150" y="170" width="170" height="50" rx="8" fill="#b87fd8"/><text x="235" y="200" font-size="14" fill="#3a2a4a" text-anchor="middle">三大从句</text><rect x="360" y="170" width="170" height="50" rx="8" fill="#9c56d4"/><text x="445" y="200" font-size="14" fill="#ffffff" text-anchor="middle">特殊句式</text><text x="340" y="260" font-size="14" fill="#3a2a4a" text-anchor="middle">从成分到特殊句式，难度一层层加大</text></svg>`, caption: '图3 句法五大板块：从基础到特殊' },
        { type: 'paragraph', text: '本单元我们重点先学"词法"里的核心部分，再进入"句法"里的时态与语态，由浅入深。' },
        { type: 'heading', text: '四、本单元学习路线' },
        { type: 'list', items: [
          `第一步：看清语法地图，知道词法和句法分别管什么。`,
          `第二步：掌握核心词类的用法（名词、动词、形容词等）。`,
          `第三步：学习时态与语态，能正确写出动作的时间和被动形式。`,
          `第四步：通过练习巩固，做题时先判断考的是词还是句。`
        ]}
      ],
      exercises: [
        { type: 'choice', question: '英语语法主要分为哪两大部分？', options: ['词法和句法', '读音和拼写', '汉字和拼音', '主语和宾语'], answer: '词法和句法', explanation: '英语语法整体分成两大部分：词法研究单个词的用法，句法研究如何把词组成正确的句子。读音拼写属于语音和拼写范畴，汉字拼音不属于英语语法，主语宾语只是句子成分的一部分，都不能概括全部语法。' },
        { type: 'choice', question: '下列哪个内容属于"词法"研究的范围？', options: ['名词的复数变化', '句子的主语', '宾语从句', '被动语态'], answer: '名词的复数变化', explanation: '词法管的是单个词的规矩，名词的复数变化（如 book 变 books）正是单个词的用法规则。句子的主语属于句子成分，宾语从句属于从句，被动语态属于语态，这三者都归句法管，而不是词法。' },
        { type: 'choice', question: '句子 "The book is on the desk." 主要体现了哪一部分语法？', options: ['词法', '句法', '词汇', '语音'], answer: '句法', explanation: '这句话讲的是"书在桌上"这个完整的意思，涉及主语 the book、谓语 is、表语 on the desk 如何组合成正确句子，属于句法范畴。虽然句子里有单个词，但整句话的组合规则才是句法研究的内容。' },
        { type: 'fill', question: '英语语法分为______和句法两大部分。', answer: '词法|词法知识', explanation: '英语语法整体分为词法和句法两大部分。词法研究单个词的用法规则，句法研究如何把词组合成正确的句子。填空时写"词法"即可，有时也说"词法知识"，两个答案都正确。' },
        { type: 'fill', question: '把单个的词按照规则组合成正确句子所遵循的规则，叫做______。', answer: '句法|句法规则', explanation: '句法研究的是如何把词拼成正确的句子，包括句子成分、时态、语态、从句等。与管单个词的"词法"相对，组合成句的规则就叫做句法，也可写作"句法规则"。' }
      ]
    },
    {
      id: `zt1-u3-l2`,
      name: `时态与语态`,
      chapter: `词汇与语法 · 第3单元 语法体系（一）`,
      difficulty: `基础`,
      content: [
        { type: 'heading', text: '一、什么是时态' },
        { type: 'paragraph', text: '时态就是告诉我们"动作在什么时候发生、处在什么状态"。它可以拆成两个维度：一个是时间，一个是状态。把时间和状态组合起来，一共能拼出16种时态，但我们初中到高中先重点掌握8种常用的。' },
        { type: 'list', items: [
          `时间有四个：现在、过去、将来、过去将来。`,
          `状态有四个：一般、进行、完成、完成进行。`,
          `时间 × 状态 = 16种组合，常用的是其中8种。`
        ]},
        { type: 'svg', svg: `<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图1 时态二维表：时间 × 状态</text><rect x="150" y="60" width="100" height="40" rx="6" fill="#9c56d4"/><text x="200" y="85" font-size="14" fill="#ffffff" text-anchor="middle">状态＼时间</text><rect x="260" y="60" width="80" height="40" rx="6" fill="#b87fd8"/><text x="300" y="85" font-size="14" fill="#3a2a4a" text-anchor="middle">现在</text><rect x="350" y="60" width="80" height="40" rx="6" fill="#b87fd8"/><text x="390" y="85" font-size="14" fill="#3a2a4a" text-anchor="middle">过去</text><rect x="440" y="60" width="80" height="40" rx="6" fill="#b87fd8"/><text x="480" y="85" font-size="14" fill="#3a2a4a" text-anchor="middle">将来</text><rect x="150" y="110" width="100" height="40" rx="6" fill="#b87fd8"/><text x="200" y="135" font-size="14" fill="#3a2a4a" text-anchor="middle">一般</text><rect x="150" y="160" width="100" height="40" rx="6" fill="#b87fd8"/><text x="200" y="185" font-size="14" fill="#3a2a4a" text-anchor="middle">进行</text><rect x="150" y="210" width="100" height="40" rx="6" fill="#b87fd8"/><text x="200" y="235" font-size="14" fill="#3a2a4a" text-anchor="middle">完成</text><rect x="260" y="110" width="80" height="40" rx="6" fill="#9c56d4"/><text x="300" y="135" font-size="13" fill="#ffffff" text-anchor="middle">★一般</text><rect x="350" y="110" width="80" height="40" rx="6" fill="#9c56d4"/><text x="390" y="135" font-size="13" fill="#ffffff" text-anchor="middle">★过去</text><rect x="440" y="110" width="80" height="40" rx="6" fill="#9c56d4"/><text x="480" y="135" font-size="13" fill="#ffffff" text-anchor="middle">★将来</text><rect x="260" y="160" width="80" height="40" rx="6" fill="#9c56d4"/><text x="300" y="185" font-size="13" fill="#ffffff" text-anchor="middle">★进行</text><rect x="350" y="210" width="80" height="40" rx="6" fill="#9c56d4"/><text x="390" y="235" font-size="13" fill="#ffffff" text-anchor="middle">★完成</text></svg>`, caption: '图1 时态二维表：时间（列）与状态（行）交叉' },
        { type: 'heading', text: '二、八种常用时态' },
        { type: 'table', headers: ['时态', '结构', '例句'], rows: [
          ['一般现在', 'do/does', 'He plays basketball.'],
          ['一般过去', 'did', 'He played yesterday.'],
          ['一般将来', 'will do', 'He will play tomorrow.'],
          ['现在进行', 'am/is/are doing', 'He is playing now.'],
          ['过去进行', 'was/were doing', 'He was playing then.'],
          ['现在完成', 'have/has done', 'He has played.'],
          ['过去完成', 'had done', 'He had played.'],
          ['现在完成进行', 'have/has been doing', 'He has been playing.']
        ]},
        { type: 'keypoint', label: '重点·八种时态', text: '最常考的8种时态：<strong>一般现在、一般过去、一般将来、现在进行、过去进行、现在完成、过去完成、现在完成进行</strong>。<br>记住它们的基本结构，看到时间词就能选对。' },
        { type: 'list', items: [
          `看到 every day、often → 一般现在时。`,
          `看到 yesterday、last week → 一般过去时。`,
          `看到 now、 Look! → 现在进行时。`,
          `看到 already、just → 现在完成时。`
        ]},
        { type: 'example', label: '例句/例题', text: 'I <strong>do</strong> my homework every day.（一般现在）<br>He <strong>is reading</strong> a book now.（现在进行）<br>She <strong>has finished</strong> her work.（现在完成）' },
        { type: 'warn', label: '易错', text: '现在完成时（have done）和一般过去时（did）最容易混：<strong>一般过去只说过去发生了</strong>，<strong>现在完成强调和现在的联系</strong>。如 "I ate" 只说吃过；"I have eaten" 强调现在饱了或影响现在。' },
        { type: 'tip', label: '记忆', text: '把"时间词"当成路标：看到时间词就先定时间，再看动作是否在进行或已完成，两步就能锁定时态。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图2 主动变被动：一步转换</text><rect x="40" y="90" width="220" height="60" rx="8" fill="#9c56d4"/><text x="150" y="118" font-size="14" fill="#ffffff" text-anchor="middle">主动：He wrote the letter.</text><text x="150" y="138" font-size="12" fill="#ffffff" text-anchor="middle">他写了这封信</text><rect x="420" y="90" width="220" height="60" rx="8" fill="#5a7a2a"/><text x="530" y="118" font-size="14" fill="#ffffff" text-anchor="middle">被动：The letter was written.</text><text x="530" y="138" font-size="12" fill="#ffffff" text-anchor="middle">这封信被写了</text><line x1="260" y1="120" x2="420" y2="120" stroke="#7a3fb0" stroke-width="2"/><text x="340" y="112" font-size="13" fill="#c0392b" text-anchor="middle">宾语变主语</text><text x="340" y="148" font-size="13" fill="#3a2a4a" text-anchor="middle">动词变 be + 过去分词</text></svg>`, caption: '图2 主动句变被动句：宾语升主语，动词变 be+过去分词' },
        { type: 'heading', text: '三、被动语态' },
        { type: 'paragraph', text: '语态表示主语是"做动作"还是"被做动作"。主动语态里主语是动作发出者；被动语态里主语是动作承受者。被动语态的公式很简单：be + 过去分词。' },
        { type: 'list', items: [
          `第一步：把主动句的宾语变成被动句的主语。`,
          `第二步：把动词变成 be + 过去分词（written、eaten 等）。`,
          `第三步：把主动句的主语放在 by 后面（可省略）。`,
          `be 要随时态变化：is、am、are、was、were、been。`
        ]},
        { type: 'example', label: '例句/例题', text: '主动：He <strong>writes</strong> the book.<br>被动：The book <strong>is written</strong> by him.<br>这里 book 从宾语变成主语，writes 变成 is written（be + 过去分词）。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图3 被动语态公式</text><rect x="120" y="100" width="90" height="50" rx="8" fill="#9c56d4"/><text x="165" y="130" font-size="15" fill="#ffffff" text-anchor="middle">be</text><rect x="230" y="100" width="160" height="50" rx="8" fill="#5a7a2a"/><text x="310" y="130" font-size="14" fill="#ffffff" text-anchor="middle">过去分词</text><rect x="410" y="100" width="90" height="50" rx="8" fill="#b87fd8"/><text x="455" y="130" font-size="14" fill="#3a2a4a" text-anchor="middle">(by + 主语)</text><text x="340" y="200" font-size="15" fill="#3a2a4a" text-anchor="middle">be 随时态变：is / am / are / was / were</text><text x="340" y="240" font-size="15" fill="#c0392b" text-anchor="middle">例：The book is written by him.</text></svg>`, caption: '图3 被动语态基本结构：be + 过去分词（+ by 主语）' },
        { type: 'paragraph', text: '被动语态常用于不知道或不必说出动作发出者时，比如 "The window was broken."（窗户被打破了），重点在"窗户"而不是谁打破的。' },
        { type: 'heading', text: '四、易混对比小结' },
        { type: 'list', items: [
          `时态看"时间+状态"，语态看"主动还是被动"。`,
          `现在完成强调与现在的联系，一般过去只说过去。`,
          `被动 = be + 过去分词，be 的时态要和句子一致。`
        ]}
      ],
      exercises: [
        { type: 'choice', question: '被动语态的基本结构是什么？', options: ['be + 过去分词', 'have + 过去分词', 'do + 动词原形', 'will + 动词'], answer: 'be + 过去分词', explanation: '被动语态的构成公式是 be 动词加动词的过去分词，例如 is written、was eaten。have + 过去分词是现在完成时的结构，do + 动词原形是一般现在时，will + 动词是一般将来时，都不是被动语态的结构。' },
        { type: 'choice', question: '把 "He wrote a letter." 变成被动语态，新句子的主语应该是？', options: ['A letter', 'He', 'Wrote', 'Letter'], answer: 'A letter', explanation: '主动变被动时，原句的宾语要升为新句子的主语。原句里 a letter 是 wrote 的宾语，所以变成被动后主语是 A letter，句子为 A letter was written (by him)。He 是原主语，会变成 by 后的宾语，不是新主语。' },
        { type: 'choice', question: '想表达"动作正在发生"，应该使用哪种时态？', options: ['现在进行时', '一般现在时', '现在完成时', '一般过去时'], answer: '现在进行时', explanation: '表示动作正在进行要用现在进行时，结构是 am/is/are +  doing，常搭配 now、Look! 等词。一般现在时表示习惯或真理，现在完成时强调与现在的联系，一般过去时只说过去发生，都不能表达"正在进行"。' },
        { type: 'fill', question: '现在完成时的基本结构是 have/has + ______。', answer: '过去分词|过去分词（done）', explanation: '现在完成时由助动词 have 或 has 加上动词的过去分词构成，用来表示过去发生的事对现在造成的影响或持续到现在。过去分词常以 -ed 结尾或是不规则形式，如 done、eaten、written 等。' },
        { type: 'fill', question: '在句子 "The book is written by him." 中，is written 属于______语态。', answer: '被动|被动语态', explanation: 'is written 由 be 动词 is 加上过去分词 written 构成，符合被动语态 be + 过去分词的结构，意思是"这本书被他写"。所以这里填"被动"或"被动语态"都正确，与主动语态相对。' }
      ]
    }
  );
})();
