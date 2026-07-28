(function () {
  var v = gzGetVolume('english', 'zt3');
  if (!v) return;
  v.points.push(
    {
      id: `zt3-u1-l1`,
      name: `题型基本特征`,
      chapter: `语法填空 · 第1单元 题型总览与命题趋势`,
      difficulty: `基础`,
      content: [
        { type: 'heading', text: '一、先认识语法填空长什么样' },
        { type: 'paragraph', text: '语法填空是高考英语的一道大题，给一篇约200词的短文，里面挖了10个空让你填。它不像完形填空给你四个选项去选，而是让你自己写出正确的词或词形。说白了，就是考你"在真实语篇里用对英语"的能力。' },
        { type: 'list', items: ['一篇短文，大概200个单词，读起来不费劲。', '短文里被挖掉10个空，每个空旁边可能给一个提示词，也可能什么都不给。', '每空1.5分，一共15分，是试卷里稳定拿分的一块。', '题材多是咱们熟悉的方向：传统文化、科技、环保这些。'] },
        { type: 'table', headers: ['项目', '具体说明'], rows: [['分值', '10小题 × 1.5分 = 15分'], ['语篇长度', '约200词'], ['语篇体裁', '说明文或记叙文为主'], ['题材方向', '传统文化、科技创新、环境保护、文化交流、身心健康五大主题'], ['设题方式', '有提示词（6—7空）+ 无提示词（3—4空）']] },
        { type: 'paragraph', text: '这张表把语法填空的"硬件"说清楚了：一共10个空，总分15分；文章不长，大概200词；体裁常是说明文或记叙文；内容围绕五大主题；填空方式分成两类——有提示词和无提示词。下面我们就重点搞懂这两类空到底怎么考。' },
        { type: 'keypoint', label: '重点·先记框架', text: '语法填空的<strong>总盘子</strong>：10空、15分、约200词、<br>体裁偏说明文或记叙文，设题分"有提示词"和"无提示词"两类。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">图1 语法填空基本盘：10空、15分、约200词</text><rect x="40" y="70" width="180" height="160" rx="12" fill="#9c56d4"/><text x="130" y="135" font-size="34" fill="#ffffff" text-anchor="middle">10空</text><text x="130" y="170" font-size="15" fill="#ffffff" text-anchor="middle">小题</text><rect x="250" y="70" width="180" height="160" rx="12" fill="#b87fd8"/><text x="340" y="135" font-size="34" fill="#3a2a4a" text-anchor="middle">15分</text><text x="340" y="170" font-size="15" fill="#3a2a4a" text-anchor="middle">每空1.5分</text><rect x="460" y="70" width="180" height="160" rx="12" fill="#9c56d4"/><text x="550" y="135" font-size="30" fill="#ffffff" text-anchor="middle">约200词</text><text x="550" y="170" font-size="15" fill="#ffffff" text-anchor="middle">语篇长度</text></svg>', caption: '图1 语法填空基本盘：10个空、总分15分、语篇约200词' },
        { type: 'heading', text: '二、两类空格总览' },
        { type: 'paragraph', text: '语法填空的10个空，按"给不给提示词"分成两大类。这两类考的东西完全不同：一类考你会不会"变形"，另一类考你会不会"填功能词"。分清它们，复习才有方向。' },
        { type: 'list', items: ['有提示词类：空后给一个单词，比如 achievement，你要按句子需要把它变成正确形式（名词变复数、动词变形容词、形容词变副词等）。', '无提示词类：空前后什么都不给，你要自己判断该填什么功能词，比如 a、the、in、because、that 这些。', '数量上，有提示词一般占6到7个空，无提示词占3到4个空。', '复习时两类要分别练：一类练"词形变化规则"，一类练"功能词用法"。'] },
        { type: 'list', items: ['有提示词常考：名词单复数、动词时态语态、形容词副词比较级、词性转换（如 care→careful）。', '无提示词常考：冠词（a/an/the）、介词（in/on/at/with）、连词（and/but/because）、从句引导词（that/which/who）、代词（it/this/one）。', '判断窍门：空后紧跟一个单词，多半是有提示词类；空前空后都光秃秃，多半是无提示词类。'] },
        { type: 'example', label: '例题', text: '有提示词类：句子 "His ____ (achieve) made us proud." 提示词是 achieve（动词， achievement 是其名词）。这里要名词作主语，所以填 achievement。这就是"按词性做词形变化"。' },
        { type: 'warn', label: '易错', text: '易错：有提示词时<strong>别照抄原词</strong>，<br>一定要先看空在句子里当什么成分，再决定变什么形。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">图2 两类空格占比：有提示词6—7空，无提示词3—4空</text><rect x="60" y="80" width="280" height="180" rx="10" fill="#9c56d4"/><text x="200" y="150" font-size="20" fill="#ffffff" text-anchor="middle">有提示词</text><text x="200" y="185" font-size="22" fill="#ffffff" text-anchor="middle">6—7空</text><text x="200" y="215" font-size="13" fill="#ffffff" text-anchor="middle">考词形变化</text><rect x="360" y="140" width="260" height="120" rx="10" fill="#b87fd8"/><text x="490" y="190" font-size="20" fill="#3a2a4a" text-anchor="middle">无提示词</text><text x="490" y="220" font-size="22" fill="#3a2a4a" text-anchor="middle">3—4空</text><text x="490" y="248" font-size="13" fill="#3a2a4a" text-anchor="middle">考功能词</text><text x="340" y="300" font-size="13" fill="#5a7a2a" text-anchor="middle">两者合计正好10个空</text></svg>', caption: '图2 两类空格占比：有提示词约6—7空，无提示词约3—4空' },
        { type: 'heading', text: '三、五大题材方向' },
        { type: 'paragraph', text: '语法填空的文章不是随便写的，而是围绕五个熟悉的主题转。了解这些主题，平时练阅读时就能有的放矢，考试碰到也不陌生。' },
        { type: 'list', items: ['传统文化：春节、书法、茶、戏曲等中国味道的内容。', '科技创新：人工智能、航天、新能源等新鲜事儿。', '环境保护：减塑、护林、气候变化等绿色话题。', '文化交流：中外之间怎么互相了解、互相学习。', '身心健康：运动、饮食、睡眠、心理健康等生活话题。'] },
        { type: 'tip', label: '技巧', text: '读文章先看<strong>主题词</strong>，<br>主题一确定，很多空的语感就来了，比如环保文常出现 protect、save 这类词。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">图3 语法填空五大题材方向</text><rect x="21" y="70" width="110" height="140" rx="10" fill="#9c56d4"/><text x="76" y="135" font-size="14" fill="#ffffff" text-anchor="middle">传统文化</text><text x="76" y="165" font-size="12" fill="#ffffff" text-anchor="middle">春节书法</text><rect x="153" y="70" width="110" height="140" rx="10" fill="#b87fd8"/><text x="208" y="135" font-size="14" fill="#3a2a4a" text-anchor="middle">科技创新</text><text x="208" y="165" font-size="12" fill="#3a2a4a" text-anchor="middle">AI航天</text><rect x="285" y="70" width="110" height="140" rx="10" fill="#9c56d4"/><text x="340" y="135" font-size="14" fill="#ffffff" text-anchor="middle">环境保护</text><text x="340" y="165" font-size="12" fill="#ffffff" text-anchor="middle">减塑护林</text><rect x="417" y="70" width="110" height="140" rx="10" fill="#b87fd8"/><text x="472" y="135" font-size="14" fill="#3a2a4a" text-anchor="middle">文化交流</text><text x="472" y="165" font-size="12" fill="#3a2a4a" text-anchor="middle">中外互鉴</text><rect x="549" y="70" width="110" height="140" rx="10" fill="#9c56d4"/><text x="604" y="135" font-size="14" fill="#ffffff" text-anchor="middle">身心健康</text><text x="604" y="165" font-size="12" fill="#ffffff" text-anchor="middle">运动睡眠</text></svg>', caption: '图3 语法填空常考五大题材：传统、科技、环保、文化、健康' },
        { type: 'keypoint', label: '重点·复习落点', text: '复习语法填空要<strong>两手抓</strong>：<br>一手练词形变化规则，一手练功能词在语境里的用法。' },
        { type: 'paragraph', text: '记住这张"基本特征"地图：10空15分、约200词、说明文或记叙文、五大主题、两类设空。下一节我们看看近几年命题在怎么变，帮你把劲使在刀刃上。' }
      ],
      exercises: [
        { type: 'choice', question: '高考英语语法填空的分值构成是下列哪一种？', options: ['A. 10小题×1分=10分', 'B. 10小题×1.5分=15分', 'C. 15小题×1分=15分', 'D. 20小题×1分=20分'], answer: 'B. 10小题×1.5分=15分', explanation: '语法填空共10个小题，每空1.5分，合计15分。选项A每空算1分不对，选项C小题数错，选项D小题数和分值都错，所以正确选项是B。' },
        { type: 'choice', question: '语法填空的语篇体裁主要以哪一类为主？', options: ['A. 诗歌', 'B. 说明文或记叙文为主', 'C. 剧本', 'D. 菜谱'], answer: 'B. 说明文或记叙文为主', explanation: '语法填空的文章体裁以说明文或记叙文为主，内容清晰、叙事或介绍性强，便于设空考查。诗歌、剧本、菜谱都不是常考体裁，所以选B。' },
        { type: 'choice', question: '语法填空中"有提示词"类空格主要考查什么？', options: ['A. 填写冠词', 'B. 根据提示词词性做词形变化', 'C. 填写介词', 'D. 填写连词'], answer: 'B. 根据提示词词性做词形变化', explanation: '有提示词类的空会给出一个单词，要求你根据它在句子中的成分把词变成正确形式，比如名词变复数、形容词变副词。冠词、介词、连词属于无提示词类，所以选B。' },
        { type: 'fill', question: '语法填空共10个空，其中有提示词约____空，无提示词约3—4空。', answer: '6—7|6-7|六到七', explanation: '语法填空10个空中，有提示词类一般占6到7个空，无提示词类占3到4个空。所以这里填"6—7"（或"六到七"），代表有提示词的数量范围。' },
        { type: 'fill', question: '无提示词类空格常考功能词，包括冠词、介词、连词、从句引导词和____。', answer: '代词', explanation: '无提示词类考查的是功能词，常见有五大类：冠词、介词、连词、从句引导词和代词。代词如 it、this、one 等，用来避免重复或指代前文，所以这里填"代词"。' }
      ]
    },
    {
      id: `zt3-u1-l2`,
      name: `命题趋势`,
      chapter: `语法填空 · 第1单元 题型总览与命题趋势`,
      difficulty: `基础`,
      content: [
        { type: 'heading', text: '一、命题趋势总览' },
        { type: 'paragraph', text: '语法填空这几年稳中带变：题目更活、句子更长、更讲究语境。但万变不离其宗，有四大核心考点始终常考。下面先把四大趋势和四大考点摆出来，让你心里有数。' },
        { type: 'list', items: ['趋势一：语篇结构从"隐性"到"显性"，设空从"细节衔接"转向"主旨统领"。', '趋势二：长难句增多，句式更复杂，对句子分析能力要求提高。', '趋势三：语境化加重，单纯考语法规则的题减少，更多要结合上下文判断。', '趋势四：核心考点稳定，非谓语动词、时态语态、词性转换、从句引导词四大考点是常客。'] },
        { type: 'keypoint', label: '重点·变与不变', text: '命题<strong>变</strong>在形式更活、句子更长、更重语境；<br><strong>不变</strong>在四大核心考点始终稳定出现。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">图1 语法填空四大核心考点</text><rect x="40" y="70" width="260" height="110" rx="10" fill="#9c56d4"/><text x="170" y="120" font-size="17" fill="#ffffff" text-anchor="middle">非谓语动词</text><text x="170" y="150" font-size="13" fill="#ffffff" text-anchor="middle">to do / doing / done</text><rect x="380" y="70" width="260" height="110" rx="10" fill="#b87fd8"/><text x="510" y="120" font-size="17" fill="#3a2a4a" text-anchor="middle">时态语态</text><text x="510" y="150" font-size="13" fill="#3a2a4a" text-anchor="middle">过去时 / 被动</text><rect x="40" y="200" width="260" height="110" rx="10" fill="#b87fd8"/><text x="170" y="250" font-size="17" fill="#3a2a4a" text-anchor="middle">词性转换</text><text x="170" y="280" font-size="13" fill="#3a2a4a" text-anchor="middle">名变形 / 形变副</text><rect x="380" y="200" width="260" height="110" rx="10" fill="#9c56d4"/><text x="510" y="250" font-size="17" fill="#ffffff" text-anchor="middle">从句引导词</text><text x="510" y="280" font-size="13" fill="#ffffff" text-anchor="middle">that / which / who</text></svg>', caption: '图1 语法填空四大核心考点：非谓语、时态语态、词性转换、从句引导词' },
        { type: 'heading', text: '二、趋势一：语篇结构从隐性到显性' },
        { type: 'paragraph', text: '过去题目常把结构藏起来，空多设在句子之间的细节衔接处；现在结构更"摆明"，设空更看重你能不能统领全文主旨。简单说，就是不仅考你盯一句，还考你懂不懂整篇。' },
        { type: 'example', label: '例题', text: '旧题可能只问"横线处填哪个连词连上下句"；新题会让你根据全段主旨选一个词，或者判断某句话在全文起什么作用。这就是从"隐性衔接"到"显性统领"的变化。' },
        { type: 'tip', label: '技巧', text: '应对显性结构：<strong>先通读抓主旨</strong>，<br>给每段标个小标题，全文脉络清楚，结构类空就不慌。' },
        { type: 'heading', text: '三、趋势二：长难句增多' },
        { type: 'paragraph', text: '现在的文章里，长句子越来越多，一个句子里套着从句、非谓语，读起来像绕口令。这意味着你光认识单词不够，还得会"拆句子"，看清主干是谁、修饰是谁。' },
        { type: 'warn', label: '易错', text: '易错：遇到长句<strong>别从头硬读到尾</strong>，<br>先找主谓宾主干，再处理修饰成分，否则容易填错词形。' },
        { type: 'example', label: '例题', text: '简单句："The cat slept." 一眼看懂。长难句："The cat that ate the fish slept on the sofa which we bought." 里面套了定语从句，分析不清就容易在 ate 和 bought 的时态上出错。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">图2 长难句增多：简单句 → 复合句</text><rect x="40" y="80" width="250" height="140" rx="10" fill="#b87fd8"/><text x="165" y="135" font-size="16" fill="#3a2a4a" text-anchor="middle">简单句</text><text x="165" y="170" font-size="14" fill="#3a2a4a" text-anchor="middle">The cat slept.</text><line x1="310" y1="150" x2="374" y2="150" stroke="#7a3fb0" stroke-width="3"/><polygon points="374,143 390,150 374,157" fill="#7a3fb0"/><rect x="390" y="80" width="250" height="140" rx="10" fill="#9c56d4"/><text x="515" y="125" font-size="15" fill="#ffffff" text-anchor="middle">复合句</text><text x="515" y="155" font-size="12" fill="#ffffff" text-anchor="middle">The cat that ate fish</text><text x="515" y="178" font-size="12" fill="#ffffff" text-anchor="middle">slept on the sofa.</text><text x="340" y="270" font-size="13" fill="#5a7a2a" text-anchor="middle">句子变长变复杂，要会拆主干</text></svg>', caption: '图2 长难句增多：从简单句发展为带从句的复合句' },
        { type: 'heading', text: '四、趋势三：语境化加重' },
        { type: 'paragraph', text: '以前有些题只要背住语法规则就能填，现在这类"裸考语法"的题少了。更多题目要你结合上下文——看前一句、后一句，甚至整段在讲什么，才能填对。' },
        { type: 'list', items: ['读空所在的整句，别只看前后两个词。', '往前看主语、时态，往后看搭配和逻辑。', '遇到无提示词空，先判断这句话缺什么成分（缺主语？缺介词？）。', '把选项或词形放进原文读一遍，顺不顺口往往能帮你判对错。'] },
        { type: 'example', label: '例题', text: '孤立看 "____ book is interesting"，你不知道填 a 还是 the；但结合上文"我昨天买了一本书"，下文指代同一本，就该填 the。这就是语境化的力量。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3edfa"/><text x="340" y="34" text-anchor="middle" font-size="17" font-weight="bold" fill="#7a3fb0">图3 语境化加重：孤立语法 → 结合上下文</text><rect x="40" y="80" width="250" height="140" rx="10" fill="#b87fd8"/><text x="165" y="135" font-size="15" fill="#3a2a4a" text-anchor="middle">孤立语法</text><text x="165" y="170" font-size="13" fill="#3a2a4a" text-anchor="middle">只背规则硬套</text><line x1="310" y1="150" x2="374" y2="150" stroke="#7a3fb0" stroke-width="3"/><polygon points="374,143 390,150 374,157" fill="#7a3fb0"/><rect x="390" y="80" width="250" height="140" rx="10" fill="#9c56d4"/><text x="515" y="130" font-size="15" fill="#ffffff" text-anchor="middle">结合上下文</text><text x="515" y="160" font-size="13" fill="#ffffff" text-anchor="middle">看前后句定词</text><text x="515" y="188" font-size="12" fill="#ffffff" text-anchor="middle">a 还是 the</text><text x="340" y="270" font-size="13" fill="#5a7a2a" text-anchor="middle">多读语境，少死记规则</text></svg>', caption: '图3 语境化加重：从孤立考语法转向结合上下文判断' },
        { type: 'heading', text: '五、趋势四：核心考点稳定' },
        { type: 'paragraph', text: '尽管形式在变，真正高频的考点一直很稳：非谓语动词、时态语态、词性转换、从句引导词。把这四块练扎实，就抓住了语法填空的大头分数。' },
        { type: 'table', headers: ['核心考点', '考查内容'], rows: [['非谓语动词', '动词不作谓语时的形式：to do、doing、done'], ['时态语态', '动词的时间与被动形式，如一般过去时、被动语态'], ['词性转换', '提示词词性变化，如名词变形容词、形容词变副词'], ['从句引导词', 'that、which、who、where 等引导定从、状从']] },
        { type: 'tip', label: '技巧', text: '四考点怎么练：<strong>非谓语看是否作谓语</strong>，<br>时态看时间状语，词性转换看空当什么成分，从句看缺什么成分。' },
        { type: 'keypoint', label: '重点·抓大放小', text: '复习要<strong>先保四大核心考点</strong>，<br>再兼顾功能词和语境分析，分数就稳了。' },
        { type: 'paragraph', text: '一句话总结命题趋势：结构更显性、句子更长、更重语境，但四大核心考点稳如泰山。看清方向，复习就不盲目。' }
      ],
      exercises: [
        { type: 'choice', question: '语法填空命题中，语篇结构的变化趋势是下列哪一种？', options: ['A. 从显性到隐性', 'B. 从隐性到显性，设空从细节衔接到主旨统领', 'C. 完全取消结构考查', 'D. 设空只考单词拼写'], answer: 'B. 从隐性到显性，设空从细节衔接到主旨统领', explanation: '命题趋势指出，语篇结构从隐性走向显性，设空重点由考句子间的细节衔接，转向考能统领全文的主旨。选项A说反了，C、D都不符合实际趋势，所以选B。' },
        { type: 'choice', question: '“长难句增多”这一趋势主要意味着什么？', options: ['A. 句子变简单了', 'B. 句式更复杂，对句子分析能力要求提高', 'C. 不再考查句子', 'D. 只考单词不考句法'], answer: 'B. 句式更复杂，对句子分析能力要求提高', explanation: '长难句增多指文章里复合句、嵌套结构更多，要求学生会拆分主干和修饰，分析能力要更强。选项A、C、D都与"长难句增多"的含义相反或无关，所以选B。' },
        { type: 'choice', question: '下面哪一项不属于语法填空的四大核心考点？', options: ['A. 非谓语动词', 'B. 时态语态', 'C. 词性转换', 'D. 汉字书写'], answer: 'D. 汉字书写', explanation: '语法填空四大核心考点是非谓语动词、时态语态、词性转换、从句引导词。汉字书写不是英语语法填空的考查内容，所以选D。' },
        { type: 'fill', question: '语境化加重指单纯考语法规则的题减少，更多需要结合____来判断填什么词。', answer: '上下文', explanation: '命题趋势中"语境化加重"表示孤立考语法规则的题目变少，更多空格要结合前后文、整段甚至全文的语境才能填对。所以这里填"上下文"。' },
        { type: 'fill', question: '四大核心考点中，考查动词不作谓语时的形式（如 to do、doing、done）的是____。', answer: '非谓语动词', explanation: '非谓语动词是语法填空四大核心考点之一，专门考查动词在句中不作谓语时的三种形式：不定式 to do、动名词 doing、过去分词 done。所以这里填"非谓语动词"。' }
      ]
    }
  );
})();
