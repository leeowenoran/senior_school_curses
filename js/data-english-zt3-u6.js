/* ============================================================
 * 高三英语复习专题 · 语法填空（english.zt3）
 * 第6单元：解题策略与备考
 * 第1课时：解题步骤与常见易错点
 * 第2课时：词性转换高频后缀与备考策略
 * 数据注入：english.zt3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('english', 'zt3');
  if (!v) return;

  v.points.push(
    /* ---------------- 第1课时 解题步骤与常见易错点 ---------------- */
    {
      id: `zt3-u6-l1`,
      name: `解题步骤与常见易错点`,
      chapter: `语法填空 · 第6单元 解题策略与备考`,
      difficulty: `基础`,
      content: [
        { type: 'heading', text: `一、解题四步：按步骤走，不慌不乱` },
        { type: 'paragraph', text: `语法填空看着吓人，其实它有固定的解题节奏。只要按四步走，先把文章读明白，再动手填空，准确率会明显提高。下面把每一步拆开讲，让你知道每一步到底该干什么、看什么。` },
        { type: 'keypoint', label: `第一步 通读全文，把握主旨`, text: `<strong>速读首尾段</strong>：看第一段和最后一段，弄清文章在讲什么、作者是什么态度。<br><strong>定时态基调</strong>：全文是过去时还是现在时，心里先有个数。<br><strong>不孤立看句</strong>：空格的意思常由上下文决定，别看完一句就急着填。` },
        { type: 'keypoint', label: `第二步 分析空格，分类处理`, text: `<strong>有提示词</strong>：给了一个单词，就判词性→析功能→变形（名词变复数、动词变时态或非谓语、形容词变副词等）。<br><strong>无提示词</strong>：没给词，就分析句子缺什么成分→判功能词类型（冠词、介词、连词、代词）→选词。` },
        { type: 'keypoint', label: `第三步 逐空突破，先易后难`, text: `<strong>先填有把握的</strong>：把一眼能看出的空先写上，建立信心。<br><strong>一空一词</strong>：每个空只填一个单词，不写短语或整句。<br><strong>再攻难题</strong>：利用已填信息反推拿不准的空。` },
        { type: 'keypoint', label: `第四步 通读复核，验证答案`, text: `<strong>查语法</strong>：时态、单复数、词性对不对。<br><strong>查逻辑</strong>：读起来顺不顺，意思连不连贯。<br><strong>查拼写</strong>：单词字母拼对没有，尤其后缀别漏。` },
        { type: 'list', items: [`第一步 通读全文：速读首尾，明主旨与时态基调`, `第二步 分析空格：有提示词变形，无提示词选功能词`, `第三步 逐空突破：先易后难，一空一词`, `第四步 通读复核：查语法、逻辑、拼写`] },
        { type: 'list', items: [`有提示词：判词性→析功能→变形（名、动、形、副等）`, `无提示词：析结构缺成分→判功能词→选词`, `有提示词极少填原形，多半要变形`, `无提示词不考词性变形，只考功能词`] },
        { type: 'svg', svg: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">解题四步流程图</text><rect x="90" y="64" width="500" height="52" rx="10" fill="#ead9f6" stroke="#9c56d4" stroke-width="2"/><text x="110" y="86" font-size="15" fill="#3a2a4a" font-weight="bold">第一步 通读全文</text><text x="110" y="106" font-size="13" fill="#3a2a4a">速读首尾，明确主旨与时态基调</text><line x1="340" y1="116" x2="340" y2="128" stroke="#9c56d4" stroke-width="2"/><rect x="90" y="128" width="500" height="52" rx="10" fill="#ead9f6" stroke="#9c56d4" stroke-width="2"/><text x="110" y="150" font-size="15" fill="#3a2a4a" font-weight="bold">第二步 分析空格</text><text x="110" y="170" font-size="13" fill="#3a2a4a">有提示词变形，无提示词选功能词</text><line x1="340" y1="180" x2="340" y2="192" stroke="#9c56d4" stroke-width="2"/><rect x="90" y="192" width="500" height="52" rx="10" fill="#ead9f6" stroke="#9c56d4" stroke-width="2"/><text x="110" y="214" font-size="15" fill="#3a2a4a" font-weight="bold">第三步 逐空突破</text><text x="110" y="234" font-size="13" fill="#3a2a4a">先易后难，一空一词</text><line x1="340" y1="244" x2="340" y2="256" stroke="#9c56d4" stroke-width="2"/><rect x="90" y="256" width="500" height="52" rx="10" fill="#ead9f6" stroke="#9c56d4" stroke-width="2"/><text x="110" y="278" font-size="15" fill="#3a2a4a" font-weight="bold">第四步 通读复核</text><text x="110" y="298" font-size="13" fill="#3a2a4a">查语法、逻辑、拼写</text><text x="340" y="340" font-size="13" fill="#7a3fb0" text-anchor="middle">四步顺序：通读 → 分类 → 突破 → 复核</text></svg>`, caption: `图1　解题四步流程图：通读全文、分析空格、逐空突破、通读复核，按序推进不跳步。` },
        { type: 'heading', text: `二、常见易错点：这些坑最容易踩` },
        { type: 'paragraph', text: `语法填空的丢分，往往不是不会，而是"想当然"。下面用一张表把七类最常见易错点列出来，每类都配上具体表现和应对策略，考前看一遍能少踩很多坑。` },
        { type: 'table', headers: [`易错类型`, `具体表现`, `应对策略`], rows: [
          [`混淆谓语与非谓语`, `句中已有谓语，仍填谓语形式`, `先找谓语，确认后再决定用非谓语`],
          [`时态判断失误`, `忽略时间状语，前后时态不一致`, `关注时间词和前后句时态是否一致`],
          [`非谓语形式选错`, `不定式、现在分词、过去分词混淆`, `按主动被动、进行完成、目的来判断`],
          [`词性转换错误`, `形容词变副词拼写出错`, `掌握高频后缀，如 happy 变 happily`],
          [`从句引导词选错`, `分不清关系代词与副词`, `分析引导词在从句中充当什么成分`],
          [`冠词遗漏或误用`, `忽略特指与泛指`, `判断是否特指，定冠词还是不定冠词`],
          [`名词单复数错误`, `忽略可数不可数`, `看修饰语和数量暗示，如 many、a 等`]
        ] },
        { type: 'warn', label: `易错 谓语非谓语混淆`, text: `最典型的坑：句子已经有谓语了，你还在空里填谓语。记住<strong>一个句子只有一个谓语</strong>（并列句除外）。比如 "He ___ (go) to school and reads books." 已有 reads，所以 go 要变成非谓语 going 或 to go，不能填 goes。` },
        { type: 'keypoint', label: `关键 先找谓语，再判非谓语`, text: `见到动词提示词，先问"<strong>这句已有谓语了吗</strong>"。<br>① 已有谓语→空里填<strong>非谓语动词</strong>（to do、doing、done）。<br>② 还没有谓语→空里才填<strong>谓语动词</strong>（注意时态和单复数）。` },
        { type: 'example', label: `例题 谓语与非谓语`, text: `句子：<strong>___ (walk) in the park, the old man found a wallet.</strong><br><br>分析：先找谓语——found 已经是谓语。句首空作时间状语，表示"老人在公园走的时候"，主动且进行，所以填 <strong>walking</strong>。若填 walked 就变成两个谓语，错了。` },
        { type: 'warn', label: `易错 时态判断失误`, text: `提示词给的是动词，别只背原形。<strong>先找时间状语</strong>：yesterday、last week 用过去时；since、for 用完成时；now、often 用现在时。还要注意<strong>和前后句时态保持一致</strong>。` },
        { type: 'svg', svg: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">先找谓语，再判非谓语</text><rect x="60" y="64" width="560" height="50" rx="10" fill="#ffffff" stroke="#9c56d4" stroke-width="2"/><text x="80" y="94" font-size="16" fill="#3a2a4a">___ (walk) in the park, the old man found a wallet.</text><rect x="60" y="140" width="270" height="70" rx="10" fill="#fbe3e0" stroke="#c0392b" stroke-width="2"/><text x="80" y="166" font-size="14" fill="#3a2a4a" font-weight="bold">① 找谓语</text><text x="80" y="190" font-size="14" fill="#c0392b">found 已是谓语</text><text x="80" y="208" font-size="13" fill="#3a2a4a">一句一个谓语</text><rect x="350" y="140" width="270" height="70" rx="10" fill="#e8f3dc" stroke="#5a7a2a" stroke-width="2"/><text x="370" y="166" font-size="14" fill="#3a2a4a" font-weight="bold">② 判非谓语</text><text x="370" y="190" font-size="14" fill="#5a7a2a">句首作状语</text><text x="370" y="208" font-size="13" fill="#3a2a4a">主动进行用 walking</text><line x1="330" y1="175" x2="350" y2="175" stroke="#9c56d4" stroke-width="2"/><rect x="60" y="240" width="560" height="60" rx="10" fill="#ead9f6" stroke="#9c56d4" stroke-width="2"/><text x="80" y="266" font-size="15" fill="#3a2a4a" font-weight="bold">答案：walking（现在分词，主动且进行）</text><text x="80" y="290" font-size="13" fill="#3a2a4a">若填 walked 就变成两个谓语，错误。</text><text x="340" y="338" font-size="13" fill="#7a3fb0" text-anchor="middle">铁律：先找谓语，再决定用非谓语</text></svg>`, caption: `图2　遇到动词提示词，先圈出句中已有谓语，再判断空格该用非谓语形式。` },
        { type: 'heading', text: `三、一空一词与通读复核` },
        { type: 'tip', label: `提示 一空一词`, text: `语法填空<strong>每空只填一个单词</strong>。给提示词就变形（一个词），无提示词就选一个功能词。不要写两个词，也不要写短语或句子。不确定的空先空着，最后用排除法。` },
        { type: 'paragraph', text: `很多同学习惯填完就交卷，其实最后一步"通读复核"最值钱。把整篇连起来读一遍，你会发现一些单独看没问题、连起来却别扭的地方：词性不对、单复数不对、逻辑不连。这些靠逐空判断很难发现，通读一遍就现形了。` },
        { type: 'example', label: `例题 通读复核`, text: `某篇讲环保的短文，你填了 "pollute" 作主语。通读复核时发现：主语位置应是名词，且意思要"污染"这件事，应改为 <strong>pollution</strong>。这就是<strong>通读一遍</strong>能抓出的词性错误。` },
        { type: 'warn', label: `易错 冠词与名词数`, text: `冠词看<strong>特指还是泛指</strong>：第二次提到的东西用 the，第一次单数可数用 a 或 an。名词数看<strong>可数不可数</strong>：advice、information 不可数，不能加 s；many、two 后接复数。` },
        { type: 'svg', svg: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">一空一词 与 通读复核</text><rect x="50" y="70" width="270" height="160" rx="12" fill="#ead9f6" stroke="#9c56d4" stroke-width="2"/><text x="185" y="104" font-size="16" fill="#7a3fb0" font-weight="bold" text-anchor="middle">一空一词</text><text x="70" y="138" font-size="14" fill="#3a2a4a">每个空只填一个单词，</text><text x="70" y="162" font-size="14" fill="#3a2a4a">不写短语，不写整句。</text><text x="70" y="190" font-size="14" fill="#3a2a4a">提示词变形也只变一个词。</text><text x="70" y="214" font-size="13" fill="#5a7a2a">不确定的空先空着</text><rect x="360" y="70" width="270" height="160" rx="12" fill="#ead9f6" stroke="#9c56d4" stroke-width="2"/><text x="495" y="104" font-size="16" fill="#7a3fb0" font-weight="bold" text-anchor="middle">通读复核</text><text x="380" y="138" font-size="14" fill="#3a2a4a">填完通读全文一遍，</text><text x="380" y="162" font-size="14" fill="#3a2a4a">查语法、逻辑、拼写。</text><text x="380" y="190" font-size="14" fill="#3a2a4a">词性错、单复数错，</text><text x="380" y="214" font-size="13" fill="#5a7a2a">通读最容易发现</text><line x1="320" y1="150" x2="360" y2="150" stroke="#b87fd8" stroke-width="2"/><rect x="60" y="260" width="560" height="56" rx="10" fill="#fbe3e0" stroke="#c0392b" stroke-width="2"/><text x="80" y="294" font-size="15" fill="#c0392b" font-weight="bold">提醒：不复核等于白做，最后一步千万别省</text></svg>`, caption: `图3　左卡提醒一空一词，右卡提醒通读复核，两件事决定得分上限。` },
        { type: 'list', items: [`谓语唯一：一句一个谓语，多了就用非谓语`, `时态看时间词，也看前后句一致`, `非谓语三兄弟：to do、doing、done 各管主动被动`, `形容词变副词加 ly，拼写别漏`, `冠词看特指泛指，名词看可数不可数`] },
        { type: 'heading', text: `四、本课小结` },
        { type: 'list', items: [`解题四步：通读、分类、突破、复核`, `有提示词填变形，无提示词填功能词`, `先找谓语再判非谓语，避免双谓语`, `一空一词，填完务必通读复核`] }
      ],
      exercises: [
        { type: 'choice', question: `语法填空解题的第一步应该做什么？`, options: [`通读全文把握主旨`, `拿到题立刻逐空填空`, `只看空格所在的句子`, `先翻词典查生词`], answer: `通读全文把握主旨`, explanation: `解题第一步是通读全文，速读首尾段，弄清文章主旨、作者态度和时态基调，不孤立地看单个句子。若拿到题就逐空填或只看单句，很容易因不理解上下文而填错。因此先通读再填空是正确顺序。` },
        { type: 'choice', question: `当句中已经有一个谓语时，空格若需要动词形式，应当填什么？`, options: [`谓语动词`, `非谓语动词`, `动词原形`, `情态动词`], answer: `非谓语动词`, explanation: `一个简单句通常只有一个谓语。若句中已有谓语，空格处就不能再填谓语，而要用非谓语动词，即 to do、doing 或 done 的形式。例如 He went to the park and ___ (play) 中已有 went，play 应变为 playing 或 to play，不能填 plays。` },
        { type: 'choice', question: `语法填空中"一空一词"指的是什么？`, options: [`每空只能填一个单词`, `每空至少填两个词`, `可以填一整句话`, `必须填短语`], answer: `每空只能填一个单词`, explanation: `语法填空规则是"一空一词"，即每个空格只填一个单词：有提示词就变形为一个词，无提示词就选一个功能词。不能填短语或整句，也不能填两个词。不确定的空可先空着，最后用排除法处理。` },
        { type: 'fill', question: `语法填空的解题核心口诀是：先____，再填空。（填两个汉字）`, answer: `通读|通读全文`, explanation: `语法填空的解题核心是"先通读，再填空"。通读能帮你把握文章主旨、时态基调和逻辑关系，避免在没理解语境的情况下孤立判断。很多错误都源于没通读就急着填，因此通读是第一步也是关键一步。` },
        { type: 'fill', question: `无提示词空格一般不考查词性变形，重点考查从句引导词、冠词和____（填一类词，如介词）。`, answer: `介词`, explanation: `无提示词的空格考查的是功能词，包括冠词、介词、连词和代词等，不考词性变形。比如固定搭配里缺介词、定语从句缺关系词、上下文缺转折连词等。因此复习无提示词时，要把重点放在功能词的用法和固定搭配上。` }
      ]
    },

    /* ---------------- 第2课时 词性转换高频后缀与备考策略 ---------------- */
    {
      id: `zt3-u6-l2`,
      name: `词性转换高频后缀与备考策略`,
      chapter: `语法填空 · 第6单元 解题策略与备考`,
      difficulty: `基础`,
      content: [
        { type: 'heading', text: `一、词性转换高频后缀：一张表记牢` },
        { type: 'paragraph', text: `语法填空里，很多空是给你一个单词，让你"变个形"填进去。这就考你对词性转换和后缀的熟悉程度。下面用一张表把最高频的后缀一次记牢，再配记忆口诀，看到提示词就能脱口而出对应的形式。` },
        { type: 'table', headers: [`转换方向`, `常见后缀`, `示例`], rows: [
          [`动词 → 名词`, `-tion / -sion, -ment, -ing, -ence / -ance`, `congratulate → congratulation`],
          [`形容词 → 名词`, `-ness, -ity, -dom`, `happy → happiness`],
          [`名词 → 形容词`, `-ful, -less, -ous, -al, -ive, -able`, `profession → professional`],
          [`动词 → 形容词`, `-ing（主动）, -ed（被动）`, `interest → interesting / interested`],
          [`形容词 → 副词`, `-ly`, `official → officially`],
          [`加否定前缀`, `un-, in- / im- / il- / ir-, dis-, non-`, `happy → unhappy`]
        ] },
        { type: 'keypoint', label: `动 → 名 高频后缀`, text: `<strong>-tion / -sion</strong>：congratulate → <strong>congratulation</strong>，decide → decision<br><strong>-ment</strong>：develop → development，achieve → achievement<br><strong>-ing</strong>：build → building，mean → meaning<br><strong>-ence / -ance</strong>：differ → difference，appear → appearance` },
        { type: 'keypoint', label: `形 → 名 高频后缀`, text: `<strong>-ness</strong>：happy → <strong>happiness</strong>，ill → illness<br><strong>-ity</strong>：able → ability，possible → possibility<br><strong>-dom</strong>：free → freedom，wise → wisdom` },
        { type: 'keypoint', label: `名 → 形 高频后缀`, text: `<strong>-ful</strong>：care → careful，help → helpful<br><strong>-less</strong>：care → careless，home → homeless<br><strong>-ous</strong>：danger → dangerous<br><strong>-al</strong>：profession → <strong>professional</strong>，nature → natural<br><strong>-ive</strong>：act → active，create → creative<br><strong>-able</strong>：value → valuable，reason → reasonable` },
        { type: 'keypoint', label: `动 → 形 -ing / -ed`, text: `<strong>-ing 表主动、令人…</strong>：interest → <strong>interesting</strong>（令人感兴趣的）<br><strong>-ed 表被动、感到…</strong>：interest → <strong>interested</strong>（感到感兴趣的）<br>同理：bore → boring / bored，excite → exciting / excited` },
        { type: 'keypoint', label: `形 → 副 高频后缀`, text: `<strong>-ly</strong>：official → <strong>officially</strong>，quick → quickly，careful → carefully<br>注意特殊：good → <strong>well</strong>，true → truly，whole → wholly` },
        { type: 'keypoint', label: `否定前缀`, text: `<strong>un-</strong>：happy → unhappy，able → unable<br><strong>in- / im- / il- / ir-</strong>：possible → impossible，legal → illegal，regular → irregular<br><strong>dis-</strong>：like → dislike，agree → disagree<br><strong>non-</strong>：smoker → non-smoker` },
        { type: 'list', items: [`动变名多去 e 加 -tion，如 decide → decision`, `形变副多数加 -ly，注意 good → well 等特殊`, `名变形 -ful 与 -less 常成对：careful / careless`, `现在分词 -ing 令人…，过去分词 -ed 感到…`] },
        { type: 'list', items: [`-tion 与 -sion：看原词尾，deciDe → deciSion，celebrate → celebration`, `-able 与 -ible：value → valuable，possible 本身以ible结尾`, `-ance 与 -ence：appear → appearance，differ → difference`, `-al 与 -ive：profession → professional，act → active`] },
        { type: 'svg', svg: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">词性转换后缀地图</text><rect x="40" y="60" width="190" height="120" rx="10" fill="#ead9f6" stroke="#9c56d4" stroke-width="2"/><text x="135" y="84" font-size="14" fill="#7a3fb0" font-weight="bold" text-anchor="middle">动词 → 名词</text><text x="55" y="110" font-size="12" fill="#3a2a4a">-tion / -sion</text><text x="55" y="130" font-size="12" fill="#3a2a4a">-ment, -ing</text><text x="55" y="150" font-size="12" fill="#3a2a4a">-ence / -ance</text><text x="55" y="172" font-size="12" fill="#5a7a2a">congratulate →</text><text x="55" y="188" font-size="12" fill="#5a7a2a">congratulation</text><rect x="245" y="60" width="190" height="120" rx="10" fill="#ead9f6" stroke="#9c56d4" stroke-width="2"/><text x="340" y="84" font-size="14" fill="#7a3fb0" font-weight="bold" text-anchor="middle">形容词 → 名词</text><text x="260" y="110" font-size="12" fill="#3a2a4a">-ness, -ity</text><text x="260" y="130" font-size="12" fill="#3a2a4a">-dom</text><text x="260" y="172" font-size="12" fill="#5a7a2a">happy →</text><text x="260" y="188" font-size="12" fill="#5a7a2a">happiness</text><rect x="450" y="60" width="190" height="120" rx="10" fill="#ead9f6" stroke="#9c56d4" stroke-width="2"/><text x="545" y="84" font-size="14" fill="#7a3fb0" font-weight="bold" text-anchor="middle">名词 → 形容词</text><text x="465" y="110" font-size="12" fill="#3a2a4a">-ful -less -ous</text><text x="465" y="130" font-size="12" fill="#3a2a4a">-al -ive -able</text><text x="465" y="172" font-size="12" fill="#5a7a2a">profession →</text><text x="465" y="188" font-size="12" fill="#5a7a2a">professional</text><rect x="40" y="196" width="190" height="120" rx="10" fill="#ead9f6" stroke="#9c56d4" stroke-width="2"/><text x="135" y="220" font-size="14" fill="#7a3fb0" font-weight="bold" text-anchor="middle">动词 → 形容词</text><text x="55" y="246" font-size="12" fill="#3a2a4a">-ing 主动</text><text x="55" y="266" font-size="12" fill="#3a2a4a">-ed 被动</text><text x="55" y="308" font-size="12" fill="#5a7a2a">interest →</text><text x="55" y="324" font-size="12" fill="#5a7a2a">interesting / interested</text><rect x="245" y="196" width="190" height="120" rx="10" fill="#ead9f6" stroke="#9c56d4" stroke-width="2"/><text x="340" y="220" font-size="14" fill="#7a3fb0" font-weight="bold" text-anchor="middle">形容词 → 副词</text><text x="260" y="258" font-size="12" fill="#3a2a4a">-ly</text><text x="260" y="308" font-size="12" fill="#5a7a2a">official →</text><text x="260" y="324" font-size="12" fill="#5a7a2a">officially</text><rect x="450" y="196" width="190" height="120" rx="10" fill="#ead9f6" stroke="#9c56d4" stroke-width="2"/><text x="545" y="220" font-size="14" fill="#7a3fb0" font-weight="bold" text-anchor="middle">否定前缀</text><text x="465" y="246" font-size="12" fill="#3a2a4a">un- in- im- il-</text><text x="465" y="266" font-size="12" fill="#3a2a4a">ir- dis- non-</text><text x="465" y="308" font-size="12" fill="#5a7a2a">happy →</text><text x="465" y="324" font-size="12" fill="#5a7a2a">unhappy</text><text x="340" y="344" font-size="13" fill="#7a3fb0" text-anchor="middle">六类转换方向，对应各自的高频后缀</text></svg>`, caption: `图1　词性转换后缀地图：动→名、形→名、名→形、动→形、形→副、否定前缀，一图全覆盖。` },
        { type: 'heading', text: `二、三轮备考策略：循序渐进` },
        { type: 'paragraph', text: `复习语法填空不能盲目刷题，要分三轮推进：一轮打基础，二轮练专项，三轮提速度。每一轮目标不同，方法也不同。把三轮串起来，能力才会稳稳上涨。` },
        { type: 'keypoint', label: `一轮 夯实基础`, text: `系统梳理<strong>有提示词</strong>与<strong>无提示词</strong>四大考点；背熟高频后缀和否定前缀；记牢固定搭配与不规则动词表。基础不牢，后面专项练再多也白费。` },
        { type: 'keypoint', label: `二轮 专项突破`, text: `限时训练：每组 10 题，<strong>7 到 8 分钟</strong>完成；精析近三年真题至少三轮；把错题按考点归类；重点突破长难句和<strong>非谓语判断</strong>。` },
        { type: 'keypoint', label: `三轮 综合提升`, text: `做整套模拟题练节奏和时间分配；反复看<strong>错题本</strong>；关注人与自我、人与社会、人与自然、科技、文化五大主题词汇。保持手感，稳中求快。` },
        { type: 'list', items: [`一轮：系统梳理考点，背后缀与固定搭配`, `二轮：限时训练 + 真题精析 + 错题归类`, `三轮：整套模拟练节奏，回顾错题本`, `全程：建错题本，按考点分类`] },
        { type: 'tip', label: `提示 日常积累`, text: `每天做四件小事：<strong>朗读</strong>课文训练语感；积累<strong>派生词</strong>（一个根词联想它的名、动、形、副）；练<strong>划分句子成分</strong>；把错题按考点记进本子。日积月累，语感自然来。` },
        { type: 'warn', label: `易错 两类空格分离`, text: `记住一条铁律：<strong>无提示词不考词性变形，只考功能词</strong>（冠词、介词、连词、代词）；<strong>有提示词极少填原形</strong>，几乎都要变形。把这两类考点完全分开记，就不会乱。` },
        { type: 'example', label: `例题 后缀应用`, text: `给出提示词 interest，句子 "The book is very ___ (interest)."<br><br>分析：空在 be 后作表语，修饰物 book，表示"令人感兴趣的"，用 <strong>interesting</strong>。若说 "I am ___ in it." 修饰人，用 <strong>interested</strong>。这就是 -ing 与 -ed 的区别。` },
        { type: 'svg', svg: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">三轮备考时间轴</text><line x1="80" y1="190" x2="600" y2="190" stroke="#9c56d4" stroke-width="3"/><circle cx="160" cy="190" r="16" fill="#9c56d4"/><text x="160" y="195" font-size="13" fill="#ffffff" text-anchor="middle">1</text><circle cx="340" cy="190" r="16" fill="#9c56d4"/><text x="340" y="195" font-size="13" fill="#ffffff" text-anchor="middle">2</text><circle cx="520" cy="190" r="16" fill="#9c56d4"/><text x="520" y="195" font-size="13" fill="#ffffff" text-anchor="middle">3</text><text x="160" y="150" font-size="14" fill="#7a3fb0" font-weight="bold" text-anchor="middle">一轮</text><text x="160" y="234" font-size="13" fill="#3a2a4a" text-anchor="middle">夯实基础</text><text x="160" y="254" font-size="12" fill="#3a2a4a" text-anchor="middle">梳考点背后缀</text><text x="340" y="150" font-size="14" fill="#7a3fb0" font-weight="bold" text-anchor="middle">二轮</text><text x="340" y="234" font-size="13" fill="#3a2a4a" text-anchor="middle">专项突破</text><text x="340" y="254" font-size="12" fill="#3a2a4a" text-anchor="middle">限时练真题</text><text x="520" y="150" font-size="14" fill="#7a3fb0" font-weight="bold" text-anchor="middle">三轮</text><text x="520" y="234" font-size="13" fill="#3a2a4a" text-anchor="middle">综合提升</text><text x="520" y="254" font-size="12" fill="#3a2a4a" text-anchor="middle">整套模拟</text><text x="340" y="320" font-size="13" fill="#7a3fb0" text-anchor="middle">基础 → 突破 → 提升，循序渐进</text></svg>`, caption: `图2　三轮复习时间轴：一轮夯实基础、二轮专项突破、三轮综合提升，层层递进。` },
        { type: 'heading', text: `三、核心提醒：三位一体` },
        { type: 'paragraph', text: `说了这么多技巧，最后记住一句话：语法填空不是单纯考语法，而是考你在语境里用语法的能力。下面这张图把核心思想画出来，三个圈缺一不可。` },
        { type: 'keypoint', label: `核心 先通读再填空`, text: `解题核心是"<strong>先通读，再填空</strong>"——在理解语篇整体意义的基础上，结合<strong>句子结构分析</strong>和<strong>上下文逻辑</strong>来判断。有提示词抓谓语与非谓语、词性转换；无提示词抓引导词与冠词、介词。` },
        { type: 'tip', label: `提示 三位一体`, text: `坚持"<strong>基础 + 语境 + 技巧</strong>"三位一体：基础是后缀与搭配，语境是上下文逻辑，技巧是四步解题法。三者结合，语法填空完全可以拿满分。` },
        { type: 'svg', svg: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">基础 + 语境 + 技巧 三位一体</text><circle cx="250" cy="180" r="80" fill="#b87fd8" fill-opacity="0.5" stroke="#9c56d4" stroke-width="2"/><circle cx="340" cy="180" r="80" fill="#9c56d4" fill-opacity="0.5" stroke="#9c56d4" stroke-width="2"/><circle cx="430" cy="180" r="80" fill="#b87fd8" fill-opacity="0.5" stroke="#9c56d4" stroke-width="2"/><text x="250" y="185" font-size="15" fill="#3a2a4a" font-weight="bold" text-anchor="middle">基础</text><text x="340" y="185" font-size="15" fill="#3a2a4a" font-weight="bold" text-anchor="middle">语境</text><text x="430" y="185" font-size="15" fill="#3a2a4a" font-weight="bold" text-anchor="middle">技巧</text><text x="340" y="300" font-size="15" fill="#5a7a2a" font-weight="bold" text-anchor="middle">三者结合 → 语法填空可拿满分</text><text x="340" y="330" font-size="13" fill="#7a3fb0" text-anchor="middle">先通读再填空，基础+语境+技巧缺一不可</text></svg>`, caption: `图3　基础、语境、技巧三圆相交，共同支撑"语法填空拿满分"的目标。` },
        { type: 'list', items: [`后缀地图：动→名、形→名、名→形、动→形、形→副、否定前缀`, `-ing 令人…，-ed 感到…；-ly 变副词`, `三轮复习：夯实 → 突破 → 提升`, `两类空格考点分离：无提示不考变形`] },
        { type: 'heading', text: `四、本课小结` },
        { type: 'list', items: [`词性转换靠后缀，否定靠前缀`, `备考分三轮，日常重积累`, `解题核心：先通读，再填空`, `基础+语境+技巧，语法填空可满分`] }
      ],
      exercises: [
        { type: 'choice', question: `动词 congratulate 变成名词，使用的后缀是？`, options: [`-tion`, `-ment`, `-ness`, `-ful`], answer: `-tion`, explanation: `congratulate 变为名词是 congratulation，使用后缀 -tion（拼写上 celebrate 变 celebration 用 -tion，congratulate 同理）。-ment 多用于 develop→development，-ness 是形容词变名词如 happy→happiness，-ful 是名词变形容词如 care→careful，都不符合。` },
        { type: 'choice', question: `形容词 happy 变成名词"幸福"，使用的后缀是？`, options: [`-ity`, `-ness`, `-dom`, `-ment`], answer: `-ness`, explanation: `happy 变名词是 happiness，加后缀 -ness。-ity 用于 able→ability，-dom 用于 free→freedom，-ment 用于 develop→development，均不适用。掌握这些常见后缀，词性转换题就能快速作答。` },
        { type: 'choice', question: `动词 interest 变为"令人感兴趣的"，应使用哪种形式？`, options: [`interested`, `interesting`, `interest`, `interests`], answer: `interesting`, explanation: `interest 的现在分词 interesting 表示"令人感兴趣的"，用于修饰事物，如 an interesting book；-ed 形式 interested 表示"感到感兴趣的"，用于修饰人，如 I am interested。此处"令人感兴趣的"修饰物，应选 interesting。` },
        { type: 'fill', question: `形容词变为副词，通常在词尾加____（如 official → officially）。`, answer: `-ly`, explanation: `形容词变副词最常见的方式是加后缀 -ly，如 official→officially、quick→quickly、careful→carefully。也有特殊变化如 good→well、true→truly，但绝大多数规则形容词直接加 -ly，这是语法填空最高频的考点之一。` },
        { type: 'fill', question: `名词 profession 变为形容词 professional，加的后缀是____。`, answer: `-al`, explanation: `profession 变为形容词是 professional，加后缀 -al。其他名词变形容词的后缀还有 -ful（care→careful）、-ous（danger→dangerous）、-ive（act→active）、-able（value→valuable）。记住 profession→professional 这组，考试常直接考。` }
      ]
    }

  );
})();
