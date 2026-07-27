/* ============================================================
 * 高一英语 · 必修 第二册 · Unit 5 Music（人教版2019版）
 * 第1课时：核心词汇与过去分词作表语
 * 第2课时：重点句型与过去分词作状语
 * 数据注入：english.bx2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('english', 'bx2');
  if (!v) return;

  v.points.push(
    /* ---------------- 第1课时 核心词汇与过去分词作表语 ---------------- */
    {
      id: 'bx2-u5-l1',
      name: '核心词汇与过去分词作表语',
      chapter: 'Unit 5 Music · 核心词汇与过去分词作表语',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、Unit 5 核心词汇梳理（名词与动词）' },
        { type: 'paragraph', text: '本单元围绕“音乐”主题，出现大量与音乐表演、情感体验相关的核心词汇。我们先按词性分类记忆，重点关注表示人物的名词、表示动作或状态的动词，以及表达感受的名词。' },
        { type: 'table', headers: ['单词', '词性', '释义', '用法提示'], rows: [
          ['perform', 'vt./vi.', '表演；表现', 'perform a song 表演一首歌'],
          ['audience', 'n.', '观众；听众', 'a large audience 大量观众'],
          ['composer', 'n.', '作曲家', 'a famous composer 著名作曲家'],
          ['conductor', 'n.', '指挥', 'the conductor of the band 乐队指挥'],
          ['enable', 'vt.', '使能够', 'enable sb. to do 使某人能够做'],
          ['relief', 'n.', '宽慰；减轻', 'a sense of relief 宽慰感'],
          ['capability', 'n.', '能力；才能', 'have the capability 具备能力'],
          ['prove', 'vt./vi.', '证明；显示出', 'prove (to be) useful 证明有用']
        ] },
        { type: 'keypoint', label: '重点·perform', text: 'perform 既可作<strong>及物动词</strong>（perform a song 表演一首歌），也可作<strong>不及物动词</strong>（The band performs tonight 乐队今晚上演）。其派生名词为 performance（表演）与 performer（表演者）。' },
        { type: 'paragraph', text: 'enable 与 capability 常搭配使用：enable sb. to do sth. 表示“使某人能够做某事”，capability 表示“能力、才能”，二者都强调达成某事的条件或本领。prove 作系动词时可接形容词，如 The method proved (to be) useful。' },
        { type: 'list', items: [
          '按“人物—动作—感受”三类记忆：composer / conductor / audience 是人物，perform / enable / prove 是动作，relief / capability 是感受或能力',
          'perform 注意及物与不及物两种用法，作名词时加 -ance / -er 派生',
          'prove 作连系动词时可接形容词或 to be + 形容词，强调“结果显示为”'
        ] },
        { type: 'heading', text: '二、Unit 5 常用短语' },
        { type: 'paragraph', text: '下列短语在阅读与写作中高频出现，需做到“见词知义、能写能用”，尤其注意其中的介词搭配。' },
        { type: 'table', headers: ['短语', '汉语释义', '注意点'], rows: [
          ['fall in love with', '爱上；喜欢上', 'fall 用 fell，with 后接人或物'],
          ['prove to be', '证明是；结果是', 'to be 常可省略'],
          ['remind sb. of', '使某人想起', 'of 后接想起的对象'],
          ['add...to...', '把……加入', 'to 后为接收方'],
          ['in addition to', '除……之外（还有）', 'to 为介词，后接 -ing'],
          ['be absorbed in', '全神贯注于', 'in 为介词，后接 -ing']
        ] },
        { type: 'keypoint', label: '重点·fall in love with', text: 'fall in love with 表示“爱上、喜欢上”，注意 <strong>fall 用过去式 fell</strong>，with 后接人或物；其反义表达为 fall out of love with。该短语强调情感的产生过程。' },
        { type: 'list', items: [
          'remind sb. of 中 of 不可省略，后接“已被唤起记忆的事物”',
          'in addition to 后接名词或动名词，意为“除……之外还有”',
          'be absorbed in 中 in 为介词，后接名词或 -ing 形式'
        ] },
        { type: 'warn', label: '易错·remind 搭配', text: 'remind 常见搭配有三：<strong>remind sb. of sth.</strong>（使某人想起某事）、<strong>remind sb. to do</strong>（提醒某人去做）、<strong>remind sb. that...</strong>（提醒某人……）。of 与 to do 不可混淆：of 接“已存在的事物”，to do 接“尚未发生的动作”。' },
        { type: 'example', label: '例题1·词汇与短语运用', text: '根据汉语提示完成句子：<br>① The beautiful music ______ (使我想起) my childhood. → reminded me of<br>② She ______ (爱上) the piano music at once. → fell in love with<br>③ He was so ______ (沉浸于) the song that he forgot the time. → absorbed in<br>④ The new app can ______ (使能够) users to create their own music. → enable' },
        { type: 'heading', text: '三、过去分词作表语' },
        { type: 'paragraph', text: '过去分词放在系动词（be, look, seem, feel 等）之后，构成“主—系—表”结构，用来描述主语的状态或感受，而不是表示被动的动作。' },
        { type: 'keypoint', label: '重点·过去分词作表语', text: '当过去分词作<strong>表语</strong>时，它相当于<strong>形容词</strong>，说明主语的<strong>状态或感受</strong>。常见结构：<strong>主语 + 系动词 + 过去分词</strong>。例如 He looks worried.（他看起来很担忧。）' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3edfa"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">音乐演出场景：从创作到欣赏</text><rect x="40" y="80" width="130" height="54" rx="8" fill="#e6d4f5" stroke="#9c56d4" stroke-width="2"/><text x="105" y="104" font-size="15" fill="#3a2a4a" text-anchor="middle" font-weight="bold">作曲家</text><text x="105" y="124" font-size="13" fill="#7a3fb0" text-anchor="middle">composer</text><rect x="215" y="80" width="130" height="54" rx="8" fill="#e6d4f5" stroke="#9c56d4" stroke-width="2"/><text x="280" y="104" font-size="15" fill="#3a2a4a" text-anchor="middle" font-weight="bold">指挥</text><text x="280" y="124" font-size="13" fill="#7a3fb0" text-anchor="middle">conductor</text><rect x="390" y="80" width="130" height="54" rx="8" fill="#e6d4f5" stroke="#9c56d4" stroke-width="2"/><text x="455" y="104" font-size="15" fill="#3a2a4a" text-anchor="middle" font-weight="bold">演奏者</text><text x="455" y="124" font-size="13" fill="#7a3fb0" text-anchor="middle">performer</text><rect x="255" y="190" width="150" height="54" rx="8" fill="#d9c2ee" stroke="#7a3fb0" stroke-width="2"/><text x="330" y="214" font-size="15" fill="#3a2a4a" text-anchor="middle" font-weight="bold">观众 / 听众</text><text x="330" y="234" font-size="13" fill="#7a3fb0" text-anchor="middle">audience</text><g stroke="#9c56d4" stroke-width="2.5" fill="#9c56d4"><line x1="170" y1="107" x2="213" y2="107"/><polygon points="213,107 203,102 203,112"/><line x1="345" y1="107" x2="389" y2="107"/><polygon points="389,107 379,102 379,112"/><line x1="455" y1="134" x2="370" y2="188"/><polygon points="370,188 378,180 362,180"/></g><text x="340" y="285" font-size="14" fill="#3a2a4a" text-anchor="middle">创作者与表演者共同呈现音乐，最终打动 audience（观众）。</text></svg>', caption: '图1　音乐演出场景：作曲家创作、指挥统筹、演奏者表演，最终打动观众。' },
        { type: 'example', label: '例题2·过去分词作表语', text: '判断下列句中过去分词的作用：<br>① The audience was <strong>moved</strong>. → moved 作表语，说明观众“被感动的”状态。<br>② We were <strong>excited</strong> at the concert. → excited 作表语，说明“感到兴奋的”。<br>注意：这类词已由分词转化为 <strong>-ed 形容词</strong>，侧重“人自身的感受”。' },
        { type: 'warn', label: '易错·-ed 与 -ing 形容词', text: '作表语时，<strong>-ed 形容词</strong>（如 moved, excited, interested）表示“感到……的”，主语多为人；<strong>-ing 形容词</strong>（如 moving, exciting, interesting）表示“令人……的”，主语多为事物。比较：The film is <strong>moving</strong>（令人感动的）与 We are <strong>moved</strong>（被感动的）。' },
        { type: 'tip', label: '提示·识别技巧', text: '判断一个过去分词是否作表语，可试着把它换成同义形容词：若句意通顺，则为<strong>表语（状态）</strong>；若强调“被……”，则可能是<strong>被动语态（动作）</strong>。例如 She is married.（状态，表语）与 The house was built last year.（动作，被动语态）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#f3edfa"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">过去分词作表语结构：主语 + 系动词 + 过去分词</text><rect x="40" y="80" width="150" height="56" rx="8" fill="#e6d4f5" stroke="#9c56d4" stroke-width="2"/><text x="115" y="104" font-size="15" fill="#3a2a4a" text-anchor="middle" font-weight="bold">主语 S</text><text x="115" y="124" font-size="13" fill="#7a3fb0" text-anchor="middle">He / The audience</text><rect x="255" y="80" width="150" height="56" rx="8" fill="#e6d4f5" stroke="#9c56d4" stroke-width="2"/><text x="330" y="104" font-size="15" fill="#3a2a4a" text-anchor="middle" font-weight="bold">系动词 L</text><text x="330" y="124" font-size="13" fill="#7a3fb0" text-anchor="middle">be / look / seem</text><rect x="470" y="80" width="150" height="56" rx="8" fill="#d9c2ee" stroke="#7a3fb0" stroke-width="2"/><text x="545" y="104" font-size="15" fill="#3a2a4a" text-anchor="middle" font-weight="bold">过去分词 P</text><text x="545" y="124" font-size="13" fill="#7a3fb0" text-anchor="middle">moved / worried</text><g stroke="#9c56d4" stroke-width="2.5" fill="#9c56d4"><line x1="190" y1="108" x2="253" y2="108"/><polygon points="253,108 243,103 243,113"/><line x1="405" y1="108" x2="469" y2="108"/><polygon points="469,108 459,103 459,113"/></g><text x="340" y="185" font-size="14" fill="#3a2a4a" text-anchor="middle">例：He looks worried. / The audience was moved.（P 说明主语状态，相当于形容词）</text></svg>', caption: '图2　过去分词作表语的结构：主语 + 系动词 + 过去分词，分词说明主语状态。' },
        { type: 'heading', text: '四、本课小结' },
        { type: 'list', items: [
          '核心词汇：perform / audience / composer / conductor / enable / relief / capability / prove',
          '常用短语：fall in love with, prove to be, remind sb. of, add...to..., in addition to, be absorbed in',
          '过去分词作表语等于形容词，表主语状态：主语 + 系动词 + 过去分词',
          '-ed 形容词表“感到”，-ing 形容词表“令人”',
          '注意区分过去分词作表语（状态）与被动语态（动作）'
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#f3edfa"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">Unit 5 词汇与语法关系图</text><rect x="250" y="60" width="180" height="50" rx="8" fill="#e6d4f5" stroke="#9c56d4" stroke-width="2"/><text x="340" y="90" font-size="15" fill="#3a2a4a" text-anchor="middle" font-weight="bold">Unit 5 Music</text><rect x="40" y="150" width="150" height="50" rx="8" fill="#d9c2ee" stroke="#7a3fb0" stroke-width="2"/><text x="115" y="180" font-size="14" fill="#3a2a4a" text-anchor="middle">核心词汇</text><rect x="265" y="150" width="150" height="50" rx="8" fill="#d9c2ee" stroke="#7a3fb0" stroke-width="2"/><text x="340" y="180" font-size="14" fill="#3a2a4a" text-anchor="middle">常用短语</text><rect x="490" y="150" width="150" height="50" rx="8" fill="#d9c2ee" stroke="#7a3fb0" stroke-width="2"/><text x="565" y="180" font-size="14" fill="#3a2a4a" text-anchor="middle">过去分词作表语</text><g stroke="#9c56d4" stroke-width="2.5" fill="#9c56d4"><line x1="300" y1="110" x2="115" y2="148"/><polygon points="115,148 125,146 120,138"/><line x1="330" y1="110" x2="340" y2="148"/><polygon points="340,148 350,146 345,138"/><line x1="360" y1="110" x2="565" y2="148"/><polygon points="565,148 555,146 560,138"/></g><text x="340" y="235" font-size="14" fill="#3a2a4a" text-anchor="middle">词汇是理解语篇的基础，过去分词作表语是本课核心语法。</text></svg>', caption: '图3　Unit 5 词汇与语法关系：词汇、短语与过去分词作表语同属本单元基础。' }
      ],
      exercises: [
        { type: 'choice', question: 'The band will ______ a new song at the concert tonight.', options: ['perform', 'prove', 'remind', 'enable'], answer: 'perform', explanation: 'perform 意为“表演、表现”，可作及物或不及物动词，符合“乐队今晚上演一首新歌”的语境。prove 意为证明，remind 意为提醒或使想起，enable 意为使能够，均不符合“表演歌曲”的语义。' },
        { type: 'choice', question: 'The beautiful song ______ me ______ my hometown.', options: ['reminds; of', 'reminds; to', 'reminds; with', 'reminds; for'], answer: 'reminds; of', explanation: 'remind sb. of sth. 表示“使某人想起某事”，句中 song 使“我”唤起对 hometown 的回忆，故用 reminds me of。remind sb. to do 表示提醒去做某事，与句意（已存在的回忆）不符；with 与 for 均不是 remind 的搭配介词。' },
        { type: 'fill', question: 'He was so ______ (absorb) in the music that he forgot the time.', answer: 'absorbed', explanation: 'be absorbed in 是固定短语，意为“全神贯注于”，in 为介词；absorb 须用过去分词 absorbed 与 was 构成系表结构，表示“沉浸于音乐中”的状态，相当于 -ed 形容词。' },
        { type: 'choice', question: 'In "The audience was moved.", the word "moved" serves as ______.', options: ['主语', '宾语', '表语', '状语'], answer: '表语', explanation: '在 The audience was moved. 中，was 是系动词，moved 说明主语 the audience 的状态（被感动的），作表语而非主语、宾语或状语。因此 moved 在此为过去分词作表语，描述主语感受。' },
        { type: 'fill', question: 'The new technology can ______ (able) disabled people to "see" music.', answer: 'enable', explanation: 'enable sb. to do sth. 是固定用法，意为“使某人能够做某事”。括号中 able 是形容词，此处需其动词形式 enable；can 后接动词原形，故填 enable，与后面的 to do 构成使役结构。' }
      ]
    },

    /* ---------------- 第2课时 重点句型与过去分词作状语 ---------------- */
    {
      id: 'bx2-u5-l2',
      name: '重点句型与过去分词作状语',
      chapter: 'Unit 5 Music · 重点句型与过去分词作状语',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、Unit 5 重点句型' },
        { type: 'paragraph', text: '本单元出现若干交际与评价类重点句型，多用于表达感受、建议与意愿，是写作与口语的常用素材，需做到结构准确、介词搭配正确。' },
        { type: 'table', headers: ['句型', '汉语释义', '例句'], rows: [
          ['It is (not) surprising that...', '……（不）令人惊讶', 'It is surprising that he can play the piano.'],
          ['How / What about...?', '……怎么样？（提建议）', 'What about going to the concert?'],
          ['I feel like doing...', '我想做……', 'I feel like listening to some music.']
        ] },
        { type: 'keypoint', label: '重点·It is (not) surprising that', text: '该句型中 <strong>it 为形式主语</strong>，真正的主语是后面的 that 从句。<strong>surprising</strong> 为 -ing 形容词，表示“令人惊讶的”，用来修饰事物而非人。' },
        { type: 'paragraph', text: 'How / What about...? 用于提出建议或征询意见，about 为介词，后接名词或 -ing 形式。I feel like doing... 表示“想要做某事”，like 在此为介词，后接 -ing 形式，不接动词原形。' },
        { type: 'list', items: [
          'It is surprising that + 从句（that 在口语中可省略）',
          'What about + 名词 / -ing（用来提建议）',
          'I feel like + -ing（用来表意愿）'
        ] },
        { type: 'warn', label: '易错·about 后接形式', text: 'How about 与 What about 中的 about 是<strong>介词</strong>，后接动词时<strong>必须用 -ing</strong>，不能说 What about go。同理 I feel like 后也接 -ing，不接动词原形，这是考试中的高频考点。' },
        { type: 'example', label: '例题1·句型运用', text: '补全对话：<br>— The concert was wonderful. ______ (你觉得再去听一场怎么样)？<br>— ______ (我想再去听) the symphony next week.<br>参考：What about going to one? / I feel like going to' },
        { type: 'heading', text: '二、过去分词作状语' },
        { type: 'paragraph', text: '过去分词（短语）可以置于句首或句中，修饰谓语动词，表示时间、原因、条件、让步等，其逻辑主语就是句子的主语。' },
        { type: 'keypoint', label: '重点·过去分词作状语', text: '过去分词作<strong>状语</strong>时，与主语构成<strong>被动或已完成</strong>的关系，常表示<strong>时间 / 原因 / 条件 / 让步</strong>。例如 <strong>Deeply moved</strong>, she burst into tears.（原因：因为被深深感动而流泪。）' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#f3edfa"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">过去分词作状语：逻辑主语判断</text><rect x="60" y="70" width="220" height="60" rx="8" fill="#e6d4f5" stroke="#9c56d4" stroke-width="2"/><text x="170" y="98" font-size="15" fill="#3a2a4a" text-anchor="middle" font-weight="bold">句子主语 S</text><text x="170" y="118" font-size="13" fill="#7a3fb0" text-anchor="middle">the city / she</text><rect x="400" y="70" width="220" height="60" rx="8" fill="#d9c2ee" stroke="#7a3fb0" stroke-width="2"/><text x="510" y="98" font-size="15" fill="#3a2a4a" text-anchor="middle" font-weight="bold">与分词关系</text><text x="510" y="118" font-size="13" fill="#7a3fb0" text-anchor="middle">被动 / 已完成</text><rect x="230" y="170" width="220" height="56" rx="8" fill="#cdeac0" stroke="#5a7a2a" stroke-width="2"/><text x="340" y="194" font-size="15" fill="#3a2a4a" text-anchor="middle" font-weight="bold">用过去分词 (-ed)</text><text x="340" y="214" font-size="13" fill="#5a7a2a" text-anchor="middle">Seen / Moved / Given</text><g stroke="#9c56d4" stroke-width="2.5" fill="#9c56d4"><line x1="280" y1="100" x2="399" y2="100"/><polygon points="399,100 389,95 389,105"/><line x1="510" y1="130" x2="340" y2="168"/><polygon points="340,168 350,166 345,158"/></g><text x="340" y="248" font-size="14" fill="#3a2a4a" text-anchor="middle">主语承受动作 → 过去分词作状语（而非现在分词）。</text></svg>', caption: '图1　过去分词作状语的逻辑主语判断：主语与分词被动或已完成时用 -ed。' },
        { type: 'example', label: '例题2·过去分词作状语', text: '分析下列句中分词作状语的用法：<br>① <strong>Seen</strong> from the hill, the city looks beautiful.（时间 / 条件：当从山上看时，city 与 see 被动）<br>② <strong>Given</strong> more time, we could finish the work.（条件：如果给予更多时间）<br>③ <strong>Deeply moved</strong>, she cried.（原因：因为被感动）' },
        { type: 'warn', label: '易错·逻辑主语一致', text: '过去分词作状语时，其<strong>逻辑主语必须是句子主语</strong>。若主语与分词是<strong>被动或已完成</strong>关系，用过去分词；若主语不能承受该动作，则属误用。如 × Seen from the hill, I saw the city.（I 不能“被看”）应改为 <strong>Seen from the hill, the city looked beautiful.</strong>' },
        { type: 'heading', text: '三、过去分词与现在分词作状语的区分' },
        { type: 'paragraph', text: '两种分词作状语的核心区别在于逻辑主语与分词之间的“主动 / 被动”以及“进行 / 完成”关系，判断时始终把分词看作修饰主语的形容词或副词。' },
        { type: 'table', headers: ['分词类型', '与主语关系', '含义侧重', '例词'], rows: [
          ['过去分词作状语', '被动 / 已完成', '强调“被……、已经……”', 'Seen, Given, Moved'],
          ['现在分词作状语', '主动 / 正在进行', '强调“正在……、主动做”', 'Seeing, Giving, Moving']
        ] },
        { type: 'keypoint', label: '重点·区分口诀', text: '记住：<strong>主语承受动作 → 过去分词</strong>（被动 / 完成）；<strong>主语发出动作 → 现在分词</strong>（主动 / 进行）。把分词当作“形容词 / 副词”来看它与主语的语义关系即可，这是解题的根本依据。' },
        { type: 'list', items: [
          '过去分词作状语：主语 + 被动 / 完成 → 用 -ed 形式',
          '现在分词作状语：主语 + 主动 / 进行 → 用 -ing 形式',
          '两者逻辑主语都必须是句子主语，否则需用独立主格结构'
        ] },
        { type: 'tip', label: '提示·判断三步法', text: '① 找句子主语；② 看主语与分词是主动还是被动；③ 被动或已完成选<strong>过去分词</strong>，主动或进行选<strong>现在分词</strong>。遇到“感到 / 令人”类形容词时同理（-ed 修饰人，-ing 修饰物）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#f3edfa"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">音乐影响情感的概念图</text><rect x="60" y="90" width="180" height="60" rx="8" fill="#e6d4f5" stroke="#9c56d4" stroke-width="2"/><text x="150" y="118" font-size="15" fill="#3a2a4a" text-anchor="middle" font-weight="bold">听音乐 Music</text><rect x="360" y="90" width="180" height="60" rx="8" fill="#d9c2ee" stroke="#7a3fb0" stroke-width="2"/><text x="450" y="118" font-size="15" fill="#3a2a4a" text-anchor="middle" font-weight="bold">产生感受 Feeling</text><rect x="210" y="190" width="260" height="50" rx="8" fill="#cdeac0" stroke="#5a7a2a" stroke-width="2"/><text x="340" y="219" font-size="14" fill="#3a2a4a" text-anchor="middle">-ed 形容词：moved / excited / relaxed</text><g stroke="#9c56d4" stroke-width="2.5" fill="#9c56d4"><line x1="240" y1="120" x2="359" y2="120"/><polygon points="359,120 349,115 349,125"/><line x1="450" y1="150" x2="340" y2="188"/><polygon points="340,188 350,186 345,178"/></g><text x="340" y="248" font-size="14" fill="#3a2a4a" text-anchor="middle">音乐使人“感到……”，对应过去分词作表语（-ed 形容词）。</text></svg>', caption: '图2　音乐影响情感：听音乐使人产生感受，对应 -ed 形容词作表语。' },
        { type: 'heading', text: '四、本课小结' },
        { type: 'list', items: [
          '重点句型：It is (not) surprising that..., How / What about..., I feel like doing...',
          '过去分词作状语：逻辑主语等于句子主语，表被动 / 完成（时间 / 原因 / 条件 / 让步）',
          '现在分词作状语：表主动 / 进行',
          '区分关键：主语承受动作 → -ed，主语发出动作 → -ing',
          'about 与 feel like 后均接 -ing 形式'
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#f3edfa"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">重点句型与分词作状语总览</text><rect x="40" y="70" width="180" height="60" rx="8" fill="#e6d4f5" stroke="#9c56d4" stroke-width="2"/><text x="130" y="98" font-size="14" fill="#3a2a4a" text-anchor="middle" font-weight="bold">重点句型</text><text x="130" y="118" font-size="12" fill="#7a3fb0" text-anchor="middle">It is surprising...</text><rect x="250" y="70" width="180" height="60" rx="8" fill="#e6d4f5" stroke="#9c56d4" stroke-width="2"/><text x="340" y="98" font-size="14" fill="#3a2a4a" text-anchor="middle" font-weight="bold">过去分词作状语</text><text x="340" y="118" font-size="12" fill="#7a3fb0" text-anchor="middle">被动 / 完成</text><rect x="460" y="70" width="180" height="60" rx="8" fill="#e6d4f5" stroke="#9c56d4" stroke-width="2"/><text x="550" y="98" font-size="14" fill="#3a2a4a" text-anchor="middle" font-weight="bold">现在分词作状语</text><text x="550" y="118" font-size="12" fill="#7a3fb0" text-anchor="middle">主动 / 进行</text><g stroke="#9c56d4" stroke-width="2.5" fill="#9c56d4"><line x1="220" y1="100" x2="249" y2="100"/><polygon points="249,100 239,95 239,105"/><line x1="430" y1="100" x2="459" y2="100"/><polygon points="459,100 449,95 449,105"/></g><text x="340" y="190" font-size="14" fill="#3a2a4a" text-anchor="middle">句型用于表达感受与建议；分词作状语看主语</text><text x="340" y="214" font-size="14" fill="#3a2a4a" text-anchor="middle">“承受 → -ed，发出 → -ing”。</text></svg>', caption: '图3　本课时总览：重点句型与两种分词作状语的对比关系。' }
      ],
      exercises: [
        { type: 'choice', question: 'Which sentence uses a past participle as an adverbial?', options: ['Seen from the hill, the city is beautiful.', 'Seeing the city, I liked it.', 'The city is beautiful.', 'He saw the city.'], answer: 'Seen from the hill, the city is beautiful.', explanation: 'Seen from the hill, the city is beautiful. 中 Seen 是过去分词作状语，修饰主句，逻辑主语是 the city（被看），表被动或条件。Seeing... 是现在分词作状语；其余两句不含分词作状语。' },
        { type: 'choice', question: '— ______ going to the concert? — Good idea!', options: ['How about', 'How', 'What', 'Why not'], answer: 'How about', explanation: 'How about going to the concert? 用来提出建议，about 是介词后接 -ing，符合答语 Good idea!。How 单独不能接 going；What 后也需 about；Why not 后接动词原形而非 -ing。' },
        { type: 'fill', question: '______ (move) by the song, she could not help crying.', answer: 'Moved', explanation: 'Moved by the song 是过去分词短语作状语，逻辑主语是 she，与 move 构成被动关系（被歌曲感动），故用过去分词 Moved，表原因，相当于 Because she was moved by the song。' },
        { type: 'choice', question: 'It is surprising ______ he can play three instruments.', options: ['that', 'what', 'which', 'who'], answer: 'that', explanation: 'It is surprising that... 中 it 是形式主语，that 引导真正的主语从句，that 在此不可换为 what / which / who。句意为“他竟能演奏三种乐器，这令人惊讶”。' },
        { type: 'fill', question: 'I feel like ______ (listen) to some light music now.', answer: 'listening', explanation: 'feel like doing sth. 是固定搭配，意为“想要做某事”，like 在此为介词，后接动词 -ing 形式，故填 listening，不可填 listen 或 to listen。' }
      ]
    }

  );
})();
