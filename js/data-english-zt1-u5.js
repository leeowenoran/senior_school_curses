(function () {
  var v = gzGetVolume('english', 'zt1');
  if (!v) return;
  v.points.push(
    {
      id: `zt1-u5-l1`,
      name: `名词性从句`,
      chapter: `词汇与语法 · 第5单元 三大从句`,
      difficulty: `基础`,
      content: [
        { type: 'heading', text: '一、什么是名词性从句' },
        { type: 'paragraph', text: '名词性从句，就是在一个句子里，整个从句像一个"名词"一样去使用。我们平常说名词可以当主语、宾语、表语，名词性从句也能干这些活儿。简单说：把一整句话塞进句子里，让它扮演名词的角色。' },
        { type: 'list', items: [
          '主语从句：从句当作主语，放在句子最前面',
          '宾语从句：从句当作宾语，放在动词后面',
          '表语从句：从句当作表语，放在be动词后面',
          '同位语从句：从句用来解释前面某个名词的内容'
        ] },
        { type: 'keypoint', label: '重点·一句话记住', text: '名词性从句就是"把一句话当名词用"。<br>它常考四种位置：主语、宾语、表语、同位语。' },
        { type: 'example', label: '例句/例题', text: 'What he said is true.（他说的<strong>话</strong>是真的。）<br>这里 "What he said" 整句当主语，就是主语从句。' },
        { type: 'table', headers: ['引导词', '意思 / 作用'], rows: [
          ['that', '不充当成分，常不翻译，只起连接作用'],
          ['whether', '是否（可译作"是不是"）'],
          ['what', '……的东西 / 事情（在从句里充当成份）'],
          ['who / whom', '谁（人）'],
          ['which', '哪一个'],
          ['when / where / why', '什么时候 / 哪里 / 为什么']
        ] },
        { type: 'list', items: [
          'that：最省事，不占位，只牵线，常可省略（口语中）',
          'whether：表"是否"，不可省，也不能用 if 代替（正式书面）',
          'what：最特别，既牵线又在从句里干活（充当主语/宾语）',
          'when/where/why/who 等：带具体疑问含义，也在从句里充当成份'
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3edfa"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">名词性从句的四种位置</text><rect x="40" y="60" width="280" height="60" rx="8" fill="#9c56d4"/><text x="180" y="96" font-size="15" fill="#ffffff" text-anchor="middle">主语从句（句首当主语）</text><rect x="360" y="60" width="280" height="60" rx="8" fill="#b87fd8"/><text x="500" y="96" font-size="15" fill="#ffffff" text-anchor="middle">宾语从句（动词后当宾语）</text><rect x="40" y="160" width="280" height="60" rx="8" fill="#b87fd8"/><text x="180" y="196" font-size="15" fill="#ffffff" text-anchor="middle">表语从句（be后当表语）</text><rect x="360" y="160" width="280" height="60" rx="8" fill="#9c56d4"/><text x="500" y="196" font-size="15" fill="#ffffff" text-anchor="middle">同位语从句（解释名词）</text><text x="340" y="262" font-size="13" fill="#3a2a4a" text-anchor="middle">一句话当名词：主语、宾语、表语、同位语都能站</text></svg>', caption: '图1 名词性从句的四种位置' },
        { type: 'heading', text: '二、主语从句（从句作主语）' },
        { type: 'paragraph', text: '主语从句就是拿一整句话当主语，放在句子最前面，后面再接谓语。考试里最爱用 what 或 that 开头。当主语太长时，我们常把 "it" 放在前面当"假主语"，把真正的主语从句挪到句尾，这样读起来更顺。' },
        { type: 'example', label: '例句/例题', text: 'That he is honest is clear.（他诚实，这一点很清楚。）<br>更顺口的说法：It is clear that he is honest.（很明显他诚实。）' },
        { type: 'warn', label: '易错', text: 'what 和 that 不一样！<br>what 在从句里<strong>充当成份</strong>（当主语或宾语）；that 只是"牵线"，<strong>不充当任何成份</strong>。错把 what 写成 that，句子会缺成分。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3edfa"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">主语从句两种写法</text><rect x="40" y="60" width="290" height="80" rx="8" fill="#9c56d4"/><text x="185" y="92" font-size="14" fill="#ffffff" text-anchor="middle">正常语序</text><text x="185" y="118" font-size="12" fill="#ffffff" text-anchor="middle">What he said is true.</text><rect x="350" y="60" width="290" height="80" rx="8" fill="#b87fd8"/><text x="495" y="92" font-size="14" fill="#ffffff" text-anchor="middle">it作形式主语</text><text x="495" y="118" font-size="12" fill="#ffffff" text-anchor="middle">It is true what he said.</text><text x="340" y="185" font-size="13" fill="#3a2a4a" text-anchor="middle">长主语放后面，前面用 it 顶着，读着不累</text><text x="340" y="265" font-size="13" fill="#3a2a4a" text-anchor="middle">图例：紫块=主语从句，浅紫=形式主语 it</text></svg>', caption: '图2 主语从句的两种常见语序' },
        { type: 'heading', text: '三、宾语从句与表语从句' },
        { type: 'paragraph', text: '宾语从句跟在动词后面，当这个动词的"对象"。比如 "I know that he is honest" 里，that 引导的一整句就是 know 的宾语。表语从句则跟在 be 动词后面，说明"主语是什么"。像 "The truth is that he lied"（真相是他撒谎了）。' },
        { type: 'example', label: '例句/例题', text: 'I know that he is honest.（我知道他是诚实的。）<br>The truth is that he lied.（真相是他撒了谎。）' },
        { type: 'tip', label: '记忆', text: '看位置猜名字：<br>动词后 → 宾语（宾语从句）；<br>be 后 → 表语（表语从句）。<br>位置定名字，名字定考点。' },
        { type: 'table', headers: ['从句类型', '常出现位置', '例句'], rows: [
          ['宾语从句', '及物动词之后', 'I think (that) he is right.'],
          ['表语从句', 'be 动词之后', 'The problem is who did it.'],
          ['主语从句', '句首 / it 之后', 'It is sad that she left.']
        ] },
        { type: 'heading', text: '四、同位语从句（解释名词的内容）' },
        { type: 'paragraph', text: '同位语从句紧跟在一个名词后面，用来说明"这个名词到底是什么内容"。它最常跟在 news（消息）、fact（事实）、idea（想法）、truth（真相）这类词后面。注意：that 在同位语从句里同样不充当成分，只起连接作用。' },
        { type: 'example', label: '例句/例题', text: 'The news that we won surprised us.（我们获胜的<strong>消息</strong>让我们吃惊。）<br>that 引导的从句解释 news 的具体内容。' },
        { type: 'warn', label: '易错', text: '同位语从句和定语从句容易混：<br>同位语从句的 that <strong>不充当成分</strong>；定语从句的 that <strong>充当成份</strong>（当主语/宾语）。看 that 后面是否缺成分，就能分清。' },
        { type: 'tip', label: '记忆', text: '同位语 = 给名词"作注解"。<br>名词后面跟一整句解释"它是什么"，多为 that 引导，且 that 不干活。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3edfa"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">同位语从句结构</text><rect x="40" y="70" width="160" height="50" rx="8" fill="#9c56d4"/><text x="120" y="100" font-size="14" fill="#ffffff" text-anchor="middle">名词 news</text><rect x="230" y="70" width="200" height="50" rx="8" fill="#b87fd8"/><text x="330" y="100" font-size="13" fill="#ffffff" text-anchor="middle">that 引导(不充当成分)</text><rect x="460" y="70" width="180" height="50" rx="8" fill="#9c56d4"/><text x="550" y="100" font-size="13" fill="#ffffff" text-anchor="middle">解释内容 we won</text><text x="340" y="180" font-size="13" fill="#3a2a4a" text-anchor="middle">The news [that we won] surprised us.</text><text x="340" y="262" font-size="13" fill="#3a2a4a" text-anchor="middle">方括号里整句解释 news 的内容，that 只牵线不占位</text></svg>', caption: '图3 同位语从句：名词 + that + 解释内容' }
      ],
      exercises: [
        { type: 'choice', question: '下面哪一句包含主语从句？', options: [
          'A. I know that he is honest.',
          'B. What he said is true.',
          'C. The news that we won surprised us.',
          'D. The truth is that he lied.'
        ], answer: 'B. What he said is true.', explanation: '主语从句是拿一整句话当主语放在句首。B 中 "What he said" 整句作主语，后面接谓语 is true，属于主语从句。A 是宾语从句（that 从句作 know 的宾语），C 是同位语从句（解释 news），D 是表语从句（that 从句在 be 后作表语）。' },
        { type: 'choice', question: '在 "The news that we won surprised us." 中，that 引导的从句是什么类型？', options: [
          'A. 定语从句',
          'B. 主语从句',
          'C. 同位语从句',
          'D. 状语从句'
        ], answer: 'C. 同位语从句', explanation: '句中 news 是"消息"，后面 that we won 一整句用来解释这个消息的具体内容，且 that 不充当任何成分，只起连接作用，这正是同位语从句的特征。如果是定语从句，that 应在从句里充当成份；这里从句成分完整，故为同位语从句。' },
        { type: 'choice', question: '关于引导词 what 和 that，下列说法正确的是？', options: [
          'A. what 和 that 都不充当成份',
          'B. what 在从句里充当成份，that 不充当',
          'C. that 在从句里充当成份，what 不充当',
          'D. what 和 that 意思完全一样'
        ], answer: 'B. what 在从句里充当成份，that 不充当', explanation: 'what 是一个"实心"引导词，它在名词性从句里既起连接作用，又充当主语或宾语等成分，常译作"……的东西"。that 只是一个"虚线"引导词，只起连接作用，不在从句里担任任何成分，常不翻译。记住这一区别能避免很多填词错误。' },
        { type: 'fill', question: '在名词性从句中，只起连接作用、不充当任何句子成分、常不翻译的引导词是 ______。', answer: 'that| That', explanation: 'that 引导名词性从句时，本身没有任何词义，也不在从句中充当主语、宾语等成分，仅仅起连接主句和从句的作用，口语中甚至常可省略。与它不同，what、who 等引导词会在从句里充当成份，因此这里应填 that。' },
        { type: 'fill', question: '既能连接句子、又能在从句中充当主语或宾语、常译作"……的东西"的引导词是 ______。', answer: 'what| What', explanation: 'what 是名词性从句里最特别的引导词，它一方面把从句和主句连起来，另一方面自己还在从句里充当主语或宾语等成分，意义上相当于"the thing(s) that"，可译作"……的东西/事情"。这与只牵线不干活的 that 完全不同，因此本题应填 what。' }
      ]
    },
    {
      id: `zt1-u5-l2`,
      name: `定语从句与状语从句`,
      chapter: `词汇与语法 · 第5单元 三大从句`,
      difficulty: `基础`,
      content: [
        { type: 'heading', text: '一、定语从句（修饰名词或代词）' },
        { type: 'paragraph', text: '定语从句像一块"形容词"，紧紧贴在一个名词或代词后面，用来说明这个人是谁、这个东西怎么样。引导它的词叫"关系词"，比如 who（指人）、which（指物）、that（人或物都行）、whose（……的）、where（地点）、when（时间）、why（原因）。关系词在从句里是要"干活"的，它充当主语、宾语、定语或状语。' },
        { type: 'list', items: [
          'who：指人，在从句中作主语或宾语',
          'which：指物，在从句中作主语或宾语',
          'that：人或物都可用，作主语或宾语',
          'whose：表示"……的"，作定语',
          'where / when / why：分别表地点、时间、原因，作状语'
        ] },
        { type: 'keypoint', label: '重点·关系词要干活', text: '定语从句的关系词<strong>必须在从句里充当成份</strong>（主语/宾语/定语/状语）。<br>这是它和状语从句最根本的不同。' },
        { type: 'example', label: '例句/例题', text: 'The boy who is standing there is my brother.（站在那儿的<strong>男孩</strong>是我弟弟。）<br>who 指 the boy，在从句里作主语。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3edfa"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">定语从句结构</text><rect x="40" y="70" width="170" height="50" rx="8" fill="#9c56d4"/><text x="125" y="100" font-size="14" fill="#ffffff" text-anchor="middle">先行词 the boy</text><rect x="240" y="70" width="150" height="50" rx="8" fill="#b87fd8"/><text x="315" y="100" font-size="14" fill="#ffffff" text-anchor="middle">关系词 who</text><rect x="420" y="70" width="220" height="50" rx="8" fill="#9c56d4"/><text x="530" y="100" font-size="13" fill="#ffffff" text-anchor="middle">从句(who作主语)</text><text x="340" y="180" font-size="13" fill="#3a2a4a" text-anchor="middle">The boy [who is standing there] is my brother.</text><text x="340" y="262" font-size="13" fill="#3a2a4a" text-anchor="middle">关系词 who 在从句里当主语，修饰前面名词 the boy</text></svg>', caption: '图1 定语从句：先行词 + 关系词 + 从句' },
        { type: 'heading', text: '二、状语从句（修饰整个句子）' },
        { type: 'paragraph', text: '状语从句不像定语从句那样贴着某个名词，它是修饰"整个句子"的，说明动作发生的时间、条件、原因、让步等。它由从属连词引导，比如 when（当……时）、if（如果）、because（因为）、although（虽然）。这些连词本身不在从句里充当主语或宾语，它们只表示逻辑关系。' },
        { type: 'list', items: [
          '时间状语从句：when（当……时）、after（在……之后）',
          '条件状语从句：if（如果）、unless（除非）',
          '原因状语从句：because（因为）、since（既然）',
          '让步状语从句：although（虽然）、though（尽管）'
        ] },
        { type: 'example', label: '例句/例题', text: 'I will go if it does not rain.（如果<strong>不下雨</strong>，我就去。）<br>if 引导条件状语从句，修饰整个主句，if 自己不充当成分。' },
        { type: 'warn', label: '易错', text: '别把 when 搞混！<br>when 引导定语从句时，是<strong>关系副词</strong>，修饰前面的时间名词（如 the day）；when 引导状语从句时，是<strong>从属连词</strong>，修饰整句，前面没有时间名词。看前面有没有名词，就能分清。' },
        { type: 'tip', label: '记忆', text: '定语跟着"名词"跑，状语管着"整句话"。<br>前面有名词 → 定从；前面没名词 → 状从。' },
        { type: 'table', headers: ['对比点', '定语从句', '状语从句'], rows: [
          ['修饰对象', '名词或代词（先行词）', '整个句子'],
          ['引导词是否充当成分', '关系词充当成份', '连词不充当成份'],
          ['常见引导词', 'who/which/that/where', 'when/if/because/although'],
          ['前面是否紧跟名词', '是', '否']
        ] },
        { type: 'heading', text: '三、两者最核心的区别' },
        { type: 'paragraph', text: '判断一个从句是定语还是状语，最靠谱的办法看两点：第一，它前面有没有被修饰的名词；第二，引导词在从句里有没有"干活"（充当主语、宾语等）。定语从句前面必有名词，且关系词必充当成分；状语从句前面没有名词，连词也不充当成分，只表逻辑关系。' },
        { type: 'example', label: '例句/例题', text: '对比：<br>① This is the school where I studied.（定从，where 修饰 school，在从句作地点状语）<br>② I studied hard where it was quiet.（状从，where 修饰整句，无先行词）' },
        { type: 'warn', label: '易错', text: 'that 也能引导定语从句，但<strong>不能</strong>引导状语从句。<br>如果看到 that 引导从句，基本可判定它是定语从句（或名词性从句），不可能是状语从句。' },
        { type: 'tip', label: '记忆', text: '三句话速判：<br>有名词在前 → 定从；<br>连词不干活 → 状从；<br>that 出现 → 不是状从。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3edfa"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">定语从句 vs 状语从句 对比</text><rect x="40" y="60" width="290" height="90" rx="8" fill="#9c56d4"/><text x="185" y="90" font-size="14" fill="#ffffff" text-anchor="middle">定语从句</text><text x="185" y="115" font-size="12" fill="#ffffff" text-anchor="middle">修饰名词 + 关系词干活</text><text x="185" y="138" font-size="12" fill="#ffffff" text-anchor="middle">who/which/that/where</text><rect x="350" y="60" width="290" height="90" rx="8" fill="#b87fd8"/><text x="495" y="90" font-size="14" fill="#ffffff" text-anchor="middle">状语从句</text><text x="495" y="115" font-size="12" fill="#ffffff" text-anchor="middle">修饰整句 + 连词不干活</text><text x="495" y="138" font-size="12" fill="#ffffff" text-anchor="middle">when/if/because/although</text><text x="340" y="200" font-size="13" fill="#3a2a4a" text-anchor="middle">看前有无名词、看引导词是否充当成分，一眼分辨</text><text x="340" y="262" font-size="13" fill="#3a2a4a" text-anchor="middle">图例：紫色=定从特征，浅紫=状从特征</text></svg>', caption: '图2 定语从句与状语从句的核心对比' },
        { type: 'heading', text: '四、常见关系词与连词小结' },
        { type: 'list', items: [
          '定语从句关系词：who、whom、which、that、whose、where、when、why',
          '状语从句连词：when、while、if、unless、because、since、although、though',
          '定语从句缺宾语时，关系词可省略（非正式）；状语从句连词一般不省',
          '定语从句的 where/when 前必有地点/时间名词；状语从句没有'
        ] },
        { type: 'example', label: '例句/例题', text: 'The book which I bought is interesting.（定从，which 指 book，作 bought 的宾语）<br>Because it rained, we stayed home.（状从，because 表原因，不充当成分）' },
        { type: 'tip', label: '记忆', text: '定从找"名词搭档"，状从找"逻辑信号"。<br>背熟两组词，考场上不慌张。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3edfa"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">引导词分组图</text><rect x="40" y="60" width="290" height="120" rx="8" fill="#9c56d4"/><text x="185" y="90" font-size="14" fill="#ffffff" text-anchor="middle">定语从句关系词</text><text x="185" y="118" font-size="12" fill="#ffffff" text-anchor="middle">who whom which that</text><text x="185" y="140" font-size="12" fill="#ffffff" text-anchor="middle">whose where when why</text><text x="185" y="162" font-size="12" fill="#ffffff" text-anchor="middle">（都在从句里充当成分）</text><rect x="350" y="60" width="290" height="120" rx="8" fill="#b87fd8"/><text x="495" y="90" font-size="14" fill="#ffffff" text-anchor="middle">状语从句连词</text><text x="495" y="118" font-size="12" fill="#ffffff" text-anchor="middle">when while if unless</text><text x="495" y="140" font-size="12" fill="#ffffff" text-anchor="middle">because since although</text><text x="495" y="162" font-size="12" fill="#ffffff" text-anchor="middle">（都不充当成分）</text><text x="340" y="265" font-size="13" fill="#3a2a4a" text-anchor="middle">左紫=关系词(干活)，右浅紫=连词(不干活)</text></svg>', caption: '图3 定语从句关系词与状语从句连词分组' }
      ],
      exercises: [
        { type: 'choice', question: '在 "The boy who is standing there is my brother." 中，who 引导的是什么从句？', options: [
          'A. 状语从句',
          'B. 定语从句',
          'C. 主语从句',
          'D. 同位语从句'
        ], answer: 'B. 定语从句', explanation: '句中 who 前面紧跟着名词 the boy，且 who 在后面的从句里充当主语（is standing 的主语），用来修饰说明这个男孩，完全符合定语从句"修饰名词 + 关系词充当成份"的特征。状语从句前面没有名词、连词也不充当成分，因此排除 A；它也不是位于句首的主语从句或解释名词的同位语从句。' },
        { type: 'choice', question: '关于定语从句和状语从句，下列说法正确的是？', options: [
          'A. 两者引导词都在从句里充当成份',
          'B. 状语从句前面一定有被修饰的名词',
          'C. 定语从句的关系词充当成份，状语从句的连词不充当',
          'D. that 既可以引导定语从句也可以引导状语从句'
        ], answer: 'C. 定语从句的关系词充当成份，状语从句的连词不充当', explanation: '这是两者最根本的区别：定语从句由关系词（who、which、that 等）引导，关系词在从句中充当主语、宾语或状语；状语从句由从属连词（when、if、because 等）引导，连词只表示逻辑关系，不在从句里担任成分。A 错在状语连词不充当成分；B 错在状语前面没有名词；D 错在 that 不能引导状语从句。' },
        { type: 'choice', question: '下面哪一句中的 when 引导的是状语从句？', options: [
          'A. I remember the day when we met.',
          'B. This is the year when he was born.',
          'C. We were eating when it started to rain.',
          'D. The school where I study is big.'
        ], answer: 'C. We were eating when it started to rain.', explanation: '状语从句的 when 是连词，前面没有表示时间的名词让它修饰，而是直接修饰整个主句，表示"当……时候"。A 和 B 中 when 前面分别有 the day、the year 这样的时间名词，when 是关系副词，引导定语从句。D 中 where 引导定语从句，与 when 无关。因此只有 C 的 when 引导状语从句。' },
        { type: 'fill', question: '定语从句中，紧跟在名词后面、并在从句里充当成份（如主语、宾语）的引导词叫做 ______。', answer: '关系词|关系代词|关系副词', explanation: '定语从句的引导词统称为"关系词"，包括关系代词（who、whom、which、that、whose）和关系副词（where、when、why）。它们最大的特点是：一定紧跟着被修饰的名词（先行词），并且自身在从句里充当主语、宾语、定语或状语等成分。这与状语从句里只表逻辑关系、不充当成分的连词完全不同。' },
        { type: 'fill', question: '在 "I will go if it does not rain." 中，if 引导的是 ______ 从句，它在从句中 ______（充当 / 不充当）成分。', answer: '状语|不充当', explanation: 'if 表示"如果"，引导条件状语从句，用来修饰整个主句"I will go"，说明去不去的条件。if 作为从属连词，只起连接和表达逻辑关系的作用，它本身不在从句 "it does not rain" 里充当主语或宾语等任何成分，从句成分本身已经完整。这正是状语从句与定语从句的关键区别所在。' }
      ]
    }
  );
})();
