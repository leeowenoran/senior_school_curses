(function () {
  var v = gzGetVolume('english', 'zt4');
  if (!v) return;
  v.points.push(
    {
      id: `zt4-u6-l1`,
      name: `续写关键、情节六定法与描写技巧`,
      chapter: `书面表达 · 第6单元 读后续写（下）与综合提升`,
      difficulty: `基础`,
      content: [
        { type: 'heading', text: '一、读后续写四大关键' },
        { type: 'paragraph', text: '读后续写不是天马行空地编故事，而是戴着镣铐跳舞。阅卷老师主要看四件事，我们叫它四大关键。把这四个都照顾到，分数自然不会低。' },
        { type: 'table', headers: ['关键', '具体要求'], rows: [
          ['紧扣伏笔', '续写必须和原文埋下的伏笔、线索呼应，不脱节、不断线'],
          ['逻辑严密', '情节要符合人物性格和故事本身的逻辑，前因后果说得通'],
          ['语言丰富', '词汇句式要多样，描写要生动，别通篇都是简单句'],
          ['书写规范', '卷面整洁、书写工整，这是阅卷老师的第一印象']
        ] },
        { type: 'keypoint', label: '重点·四大关键缺一不可', text: '四大关键里，<strong>紧扣伏笔</strong>是根，<strong>逻辑严密</strong>是骨，<strong>语言丰富</strong>是肉，<strong>书写规范</strong>是脸面。根断了、骨歪了，再漂亮也拿不到高分。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">读后续写四大关键</text><rect x="40" y="70" width="280" height="110" rx="12" fill="#9c56d4"/><text x="180" y="110" font-size="16" fill="#ffffff" text-anchor="middle">① 紧扣伏笔</text><text x="180" y="140" font-size="12" fill="#ffffff" text-anchor="middle">续写呼应原文伏笔线索</text><text x="180" y="162" font-size="12" fill="#ffffff" text-anchor="middle">不脱节、不断线</text><rect x="360" y="70" width="280" height="110" rx="12" fill="#b87fd8"/><text x="500" y="110" font-size="16" fill="#3a2a4a" text-anchor="middle">② 逻辑严密</text><text x="500" y="140" font-size="12" fill="#3a2a4a" text-anchor="middle">情节符合人物与故事逻辑</text><text x="500" y="162" font-size="12" fill="#3a2a4a" text-anchor="middle">因果清楚</text><rect x="40" y="210" width="280" height="110" rx="12" fill="#b87fd8"/><text x="180" y="250" font-size="16" fill="#3a2a4a" text-anchor="middle">③ 语言丰富</text><text x="180" y="280" font-size="12" fill="#3a2a4a" text-anchor="middle">多样词汇句式、描写生动</text><text x="180" y="302" font-size="12" fill="#3a2a4a" text-anchor="middle">句式有变化</text><rect x="360" y="210" width="280" height="110" rx="12" fill="#9c56d4"/><text x="500" y="250" font-size="16" fill="#ffffff" text-anchor="middle">④ 书写规范</text><text x="500" y="280" font-size="12" fill="#ffffff" text-anchor="middle">卷面整洁书写工整</text><text x="500" y="302" font-size="12" fill="#ffffff" text-anchor="middle">阅卷第一印象</text></svg>`, caption: '图1 读后续写四大关键：伏笔、逻辑、语言、书写' },
        { type: 'heading', text: '二、"情节六定"法：给故事搭好骨架' },
        { type: 'paragraph', text: '拿到续写题，最怕脑子一片空白、想到哪写到哪。用"情节六定"法，按顺序想清楚六步，故事骨架就立起来了，下笔不慌。' },
        { type: 'list', items: [
          '定走向：先确定故事整体往哪个方向发展',
          '定冲突：设计一个合理的矛盾或困难',
          '定解决：让矛盾自然地化解掉',
          '定情感：把握好人物情感的变化曲线',
          '定细节：用具体细节描写增强感染力',
          '定主题：确保结尾能升华文章主题'
        ] },
        { type: 'example', label: '举个例子', text: '原文写男孩弄丢了妹妹的生日礼物很内疚。<br>定走向：去找回礼物；定冲突：店已关门；定解决：店主被诚意打动开门；定情感：从焦虑到感动；定细节：他冒雨跑去的动作；定主题：真诚最可贵。' },
        { type: 'warn', label: '易错', text: '六步顺序别乱：先有<strong>走向</strong>才有<strong>冲突</strong>，先有冲突才谈得上<strong>解决</strong>。跳过"定主题"，结尾就容易写成流水账，没有升华。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">情节六定法：六步环环相扣</text><rect x="40" y="100" width="170" height="70" rx="10" fill="#9c56d4"/><text x="125" y="130" font-size="15" fill="#ffffff" text-anchor="middle">① 定走向</text><text x="125" y="152" font-size="11" fill="#ffffff" text-anchor="middle">确定发展方向</text><rect x="255" y="100" width="170" height="70" rx="10" fill="#b87fd8"/><text x="340" y="130" font-size="15" fill="#3a2a4a" text-anchor="middle">② 定冲突</text><text x="340" y="152" font-size="11" fill="#3a2a4a" text-anchor="middle">设计合理矛盾</text><rect x="470" y="100" width="170" height="70" rx="10" fill="#9c56d4"/><text x="555" y="130" font-size="15" fill="#ffffff" text-anchor="middle">③ 定解决</text><text x="555" y="152" font-size="11" fill="#ffffff" text-anchor="middle">矛盾自然化解</text><rect x="470" y="230" width="170" height="70" rx="10" fill="#b87fd8"/><text x="555" y="260" font-size="15" fill="#3a2a4a" text-anchor="middle">④ 定情感</text><text x="555" y="282" font-size="11" fill="#3a2a4a" text-anchor="middle">情感变化曲线</text><rect x="255" y="230" width="170" height="70" rx="10" fill="#9c56d4"/><text x="340" y="260" font-size="15" fill="#ffffff" text-anchor="middle">⑤ 定细节</text><text x="340" y="282" font-size="11" fill="#ffffff" text-anchor="middle">细节增色</text><rect x="40" y="230" width="170" height="70" rx="10" fill="#b87fd8"/><text x="125" y="260" font-size="15" fill="#3a2a4a" text-anchor="middle">⑥ 定主题</text><text x="125" y="282" font-size="11" fill="#3a2a4a" text-anchor="middle">升华结尾</text><line x1="215" y1="135" x2="245" y2="135" stroke="#7a3fb0" stroke-width="3"/><polygon points="244,129 254,135 244,141" fill="#7a3fb0"/><line x1="430" y1="135" x2="460" y2="135" stroke="#7a3fb0" stroke-width="3"/><polygon points="459,129 469,135 459,141" fill="#7a3fb0"/><line x1="555" y1="175" x2="555" y2="223" stroke="#7a3fb0" stroke-width="3"/><polygon points="549,222 561,222 555,232" fill="#7a3fb0"/><line x1="465" y1="265" x2="437" y2="265" stroke="#7a3fb0" stroke-width="3"/><polygon points="442,259 432,265 442,271" fill="#7a3fb0"/><line x1="250" y1="265" x2="222" y2="265" stroke="#7a3fb0" stroke-width="3"/><polygon points="227,259 217,265 227,271" fill="#7a3fb0"/><line x1="125" y1="225" x2="125" y2="177" stroke="#7a3fb0" stroke-width="3"/><polygon points="119,178 131,178 125,168" fill="#7a3fb0"/><text x="340" y="335" font-size="13" fill="#3a2a4a" text-anchor="middle">六步环环相扣，结尾定主题、升华文章</text></svg>`, caption: '图2 情节六定法：走向→冲突→解决→情感→细节→主题' },
        { type: 'heading', text: '三、常用描写技巧：让文章活起来' },
        { type: 'paragraph', text: '同样的情节，有人写得干巴巴，有人写得让人身临其境，差别就在描写。四种描写技巧就像四把刷子，用好了文章立马有画面感。' },
        { type: 'list', items: [
          '心理描写：直接展现人物的内心活动',
          '动作描写：通过人物的动作反映其状态',
          '环境描写：用景物烘托氛围和情绪',
          '对话描写：用人物说话推动情节、塑造性格'
        ] },
        { type: 'example', label: '动作描写示例', text: '普通写：他很着急。<br>升级写：他<strong>不停地看表，抓起书包就往门外冲</strong>。一个动作就把着急写活了。' },
        { type: 'keypoint', label: '重点·描写要具体', text: '别写"她很伤心"，要写"她<strong>低着头，手指绞着衣角，眼泪一颗颗砸在地板上</strong>"。<strong>具体到动作、神态、细节</strong>，才有感染力。' },
        { type: 'tip', label: '记忆窍门', text: '平时读书、看电影时，留意别人怎么写情绪。攒下一句好描写，考试就能化用，比临时硬编强得多。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">四种描写技巧卡</text><rect x="40" y="70" width="280" height="110" rx="12" fill="#9c56d4"/><text x="180" y="110" font-size="16" fill="#ffffff" text-anchor="middle">心理描写</text><text x="180" y="140" font-size="12" fill="#ffffff" text-anchor="middle">展现内心活动</text><text x="180" y="162" font-size="12" fill="#ffffff" text-anchor="middle">写想法、写纠结</text><rect x="360" y="70" width="280" height="110" rx="12" fill="#b87fd8"/><text x="500" y="110" font-size="16" fill="#3a2a4a" text-anchor="middle">动作描写</text><text x="500" y="140" font-size="12" fill="#3a2a4a" text-anchor="middle">通过动作反映状态</text><text x="500" y="162" font-size="12" fill="#3a2a4a" text-anchor="middle">写动作、写神态</text><rect x="40" y="210" width="280" height="110" rx="12" fill="#b87fd8"/><text x="180" y="250" font-size="16" fill="#3a2a4a" text-anchor="middle">环境描写</text><text x="180" y="280" font-size="12" fill="#3a2a4a" text-anchor="middle">烘托氛围情感</text><text x="180" y="302" font-size="12" fill="#3a2a4a" text-anchor="middle">写天色、写景物</text><rect x="360" y="210" width="280" height="110" rx="12" fill="#9c56d4"/><text x="500" y="250" font-size="16" fill="#ffffff" text-anchor="middle">对话描写</text><text x="500" y="280" font-size="12" fill="#ffffff" text-anchor="middle">推动情节塑造人物</text><text x="500" y="302" font-size="12" fill="#ffffff" text-anchor="middle">写说话、写语气</text></svg>`, caption: '图3 四种描写技巧卡：心理、动作、环境、对话' },
        { type: 'paragraph', text: '总结一下：续写先守住四大关键，再用情节六定法搭骨架，最后用四种描写技巧填血肉。三步走，一篇有逻辑、有画面、有温度的续写就成型了。' },
        { type: 'warn', label: '易错', text: '描写不是越多越好。为了华丽堆砌一堆环境描写，反而拖慢情节，这叫<strong>描写过度</strong>。该推进情节时就要推进，描写要为故事服务。' },
        { type: 'tip', label: '备考建议', text: '每天抄一句你喜欢的外刊或课文里的好描写，标上"心理/动作/环境/对话"，一个月就能攒出一套自己的语料库。' }
      ],
      exercises: [
        { type: 'choice', question: '读后续写四大关键中，"紧扣伏笔"主要要求续写内容做到什么？', options: ['与原文伏笔线索呼应，不断线', '完全抛开原文另起一个故事', '整篇只用简单句', '不写任何细节'], answer: '与原文伏笔线索呼应，不断线', explanation: '紧扣伏笔是续写四大关键之一，要求续写内容必须和原文埋下的伏笔、线索相呼应，做到不断线、不脱节。完全另起故事或只写简单句都不符合要求，因此正确答案是与原文伏笔线索呼应。' },
        { type: 'choice', question: '"情节六定"法的第一步是下列哪一步？', options: ['定冲突', '定走向', '定主题', '定细节'], answer: '定走向', explanation: '情节六定法按顺序是先定走向、再定冲突、定解决、定情感、定细节、最后定主题。第一步是确定故事整体的发展方向，也就是定走向，所以选定走向。' },
        { type: 'choice', question: '下列哪种描写主要通过人物的动作来反映其状态？', options: ['心理描写', '环境描写', '动作描写', '对话描写'], answer: '动作描写', explanation: '四种描写里，动作描写通过描写人物的动作、行为来反映其状态和心情；心理描写写内心想法，环境描写写景物，对话描写写人物说话。题干问通过动作反映状态，所以答案是动作描写。' },
        { type: 'fill', question: '情节六定法的六步依次是：定走向、定冲突、定____、定情感、定细节、定主题。', answer: '解决', explanation: '情节六定法的六步是：定走向、定冲突、定解决、定情感、定细节、定主题。第三步是安排矛盾自然解决，即定解决，所以空格填解决。' },
        { type: 'fill', question: '读后续写中常用的四种描写技巧是：心理描写、动作描写、环境描写和____描写。', answer: '对话', explanation: '读后续写常用的四种描写技巧为心理描写、动作描写、环境描写和对话描写。对话描写能推动情节、塑造人物，因此空格应填对话。' }
      ]
    },
    {
      id: `zt4-u6-l2`,
      name: `语言提升、备考规划与失分应对`,
      chapter: `书面表达 · 第6单元 读后续写（下）与综合提升`,
      difficulty: `基础`,
      content: [
        { type: 'heading', text: '一、语言提升策略总览' },
        { type: 'paragraph', text: '想让作文从"能看懂"变成"写得好"，语言提升要分三层下手：词汇换一换、句式变一变、衔接连一连。三层一起抓，文章立马高级起来。' },
        { type: 'list', items: [
          '词汇层面：把普通词换成更高级、更精准的词',
          '句式层面：用多样句式替代清一色的简单句',
          '衔接层面：用连接词把句与句串成整体'
        ] },
        { type: 'heading', text: '二、词汇层面：换词让表达更高级' },
        { type: 'paragraph', text: '同样的意思，用不同的词，档次差别很大。高考阅卷喜欢精准、地道的词，而不是翻来覆去都是 good、bad、very 这类小学词汇。' },
        { type: 'example', label: '换词示例', text: '把 good 换成 <strong>excellent</strong>（极好的）或 <strong>helpful</strong>（有帮助的）；<br>把 bad 换成 <strong>terrible</strong> 或 <strong>harmful</strong>；把 very big 换成 <strong>huge</strong>。' },
        { type: 'keypoint', label: '重点·词汇升级', text: '升级不是越难越好，而是<strong>越准越好</strong>。先保证词用对地方，再追求高级。短语动词和固定搭配（如 make a difference）也很加分。' },
        { type: 'heading', text: '三、句式层面：五种升级武器' },
        { type: 'paragraph', text: '通篇都是"主谓宾"简单句，读起来像小学生作文。学会下面五种句式，文章立刻有层次、有力度。' },
        { type: 'table', headers: ['句式类型', '示例', '功能'], rows: [
          ['非谓语动词', 'Having finished..., he...', '使句子简洁紧凑'],
          ['定语从句', 'The book which...', '丰富修饰信息'],
          ['名词性从句', 'What matters most is...', '突出重点内容'],
          ['倒装句', 'Only by...can we...', '增强表达力度'],
          ['强调句', 'It is...that...', '突出关键信息']
        ] },
        { type: 'svg', svg: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">句式升级地图</text><rect x="40" y="100" width="170" height="80" rx="10" fill="#9c56d4"/><text x="125" y="135" font-size="15" fill="#ffffff" text-anchor="middle">非谓语动词</text><text x="125" y="158" font-size="11" fill="#ffffff" text-anchor="middle">句子更紧凑</text><rect x="255" y="100" width="170" height="80" rx="10" fill="#b87fd8"/><text x="340" y="135" font-size="15" fill="#3a2a4a" text-anchor="middle">定语从句</text><text x="340" y="158" font-size="11" fill="#3a2a4a" text-anchor="middle">丰富修饰</text><rect x="470" y="100" width="170" height="80" rx="10" fill="#9c56d4"/><text x="555" y="135" font-size="15" fill="#ffffff" text-anchor="middle">名词性从句</text><text x="555" y="158" font-size="11" fill="#ffffff" text-anchor="middle">突出重点</text><rect x="147" y="230" width="170" height="80" rx="10" fill="#b87fd8"/><text x="232" y="265" font-size="15" fill="#3a2a4a" text-anchor="middle">倒装句</text><text x="232" y="288" font-size="11" fill="#3a2a4a" text-anchor="middle">增强力度</text><rect x="362" y="230" width="170" height="80" rx="10" fill="#9c56d4"/><text x="447" y="265" font-size="15" fill="#ffffff" text-anchor="middle">强调句</text><text x="447" y="288" font-size="11" fill="#ffffff" text-anchor="middle">突出信息</text><line x1="215" y1="140" x2="245" y2="140" stroke="#7a3fb0" stroke-width="3"/><polygon points="244,134 254,140 244,146" fill="#7a3fb0"/><line x1="430" y1="140" x2="460" y2="140" stroke="#7a3fb0" stroke-width="3"/><polygon points="459,134 469,140 459,146" fill="#7a3fb0"/><line x1="340" y1="180" x2="340" y2="228" stroke="#7a3fb0" stroke-width="3"/><polygon points="334,227 346,227 340,237" fill="#7a3fb0"/><line x1="322" y1="270" x2="345" y2="270" stroke="#7a3fb0" stroke-width="3"/><polygon points="344,264 354,270 344,276" fill="#7a3fb0"/><text x="340" y="335" font-size="13" fill="#3a2a4a" text-anchor="middle">五种句式灵活组合，文章更有层次</text></svg>`, caption: '图1 句式升级地图：非谓语、定语、名词性、倒装、强调' },
        { type: 'heading', text: '四、衔接层面：让句子连成一片' },
        { type: 'paragraph', text: '好文章不是句子的简单堆砌，而是用连接词把意思顺滑地接起来。该转折用转折，该递进用递进，读起来才流畅。' },
        { type: 'list', items: [
          '逻辑连接词：however、therefore、moreover、consequently',
          '时间过渡词：meanwhile、subsequently、eventually',
          '举例说明词：for instance、such as、take...as an example'
        ] },
        { type: 'tip', label: '记忆', text: '写每段前先想"这句和上句什么关系"：是转折、因果还是并列？想清楚再选连接词，文章逻辑自然就顺了。' },
        { type: 'heading', text: '五、备考阶段规划：三轮扎实推进' },
        { type: 'paragraph', text: '书面表达提分靠的是有计划的训练，而不是考前突击。把高三分成三轮，每轮任务分明，稳扎稳打。' },
        { type: 'table', headers: ['阶段', '应用文任务', '读后续写任务'], rows: [
          ['一轮', '分类掌握应用文模板句型', '熟悉题型，积累描写语料'],
          ['二轮', '强化审题，限时写作15分钟/篇', '掌握情节六定法，训练构思'],
          ['三轮', '回归真题，背诵范文', '限时训练25分钟/篇，注重逻辑自洽']
        ] },
        { type: 'svg', svg: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">三轮备考时间轴</text><line x1="80" y1="190" x2="600" y2="190" stroke="#7a3fb0" stroke-width="4"/><polygon points="592,182 608,190 592,198" fill="#7a3fb0"/><circle cx="160" cy="190" r="52" fill="#9c56d4"/><text x="160" y="196" font-size="16" fill="#ffffff" text-anchor="middle">一轮</text><circle cx="340" cy="190" r="52" fill="#b87fd8"/><text x="340" y="196" font-size="16" fill="#3a2a4a" text-anchor="middle">二轮</text><circle cx="520" cy="190" r="52" fill="#7a3fb0"/><text x="520" y="196" font-size="16" fill="#ffffff" text-anchor="middle">三轮</text><text x="160" y="110" font-size="12" fill="#3a2a4a" text-anchor="middle">应用文：模板句型分类</text><text x="340" y="110" font-size="12" fill="#3a2a4a" text-anchor="middle">应用文：限时15分钟/篇</text><text x="520" y="110" font-size="12" fill="#3a2a4a" text-anchor="middle">应用文：背真题范文</text><text x="160" y="280" font-size="12" fill="#3a2a4a" text-anchor="middle">续写：积累描写语料</text><text x="340" y="280" font-size="12" fill="#3a2a4a" text-anchor="middle">续写：六定法构思</text><text x="520" y="280" font-size="12" fill="#3a2a4a" text-anchor="middle">续写：限时25分钟/篇</text><text x="340" y="330" font-size="13" fill="#3a2a4a" text-anchor="middle">一轮打底、二轮突破、三轮冲刺</text></svg>`, caption: '图2 三轮备考时间轴：一轮、二轮、三轮任务分明' },
        { type: 'warn', label: '易错·备考误区', text: '别陷入两个极端：一是只背范文不自己写，上了考场照样卡壳；二是只追求华丽词藻不顾逻辑。<strong>先保证写对、写通，再追求写好。</strong>' },
        { type: 'heading', text: '六、常见失分点与应对' },
        { type: 'paragraph', text: '知道在哪里丢分，才能针对性补救。下面六类失分点最常见，每一类都配上应对策略，复习时对照自查。' },
        { type: 'table', headers: ['失分点', '具体表现', '应对策略'], rows: [
          ['要点遗漏', '未涵盖题目所有要求', '审题时逐条标注要点'],
          ['逻辑混乱', '情节跳跃、因果不明', '动笔前列提纲，确保逻辑链完整'],
          ['语言错误', '语法、拼写错误多', '写完先检查，优先保证准确'],
          ['内容空洞', '缺乏细节，泛泛而谈', '增加具体事例和细节描写'],
          ['衔接不足', '句与句之间缺少过渡', '合理使用连接词'],
          ['偏离原文', '续写情节与原文脱节', '紧扣伏笔，保持与原文一致']
        ] },
        { type: 'svg', svg: `<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#f3edfa"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">常见失分点 → 应对策略</text><rect x="40" y="80" width="250" height="56" rx="8" fill="#9c56d4"/><text x="165" y="113" font-size="14" fill="#ffffff" text-anchor="middle">要点遗漏</text><rect x="40" y="150" width="250" height="56" rx="8" fill="#9c56d4"/><text x="165" y="183" font-size="14" fill="#ffffff" text-anchor="middle">逻辑混乱</text><rect x="40" y="220" width="250" height="56" rx="8" fill="#9c56d4"/><text x="165" y="253" font-size="14" fill="#ffffff" text-anchor="middle">语言错误</text><rect x="390" y="80" width="250" height="56" rx="8" fill="#b87fd8"/><text x="515" y="113" font-size="13" fill="#3a2a4a" text-anchor="middle">审题逐条标注要点</text><rect x="390" y="150" width="250" height="56" rx="8" fill="#b87fd8"/><text x="515" y="183" font-size="13" fill="#3a2a4a" text-anchor="middle">列提纲保逻辑链完整</text><rect x="390" y="220" width="250" height="56" rx="8" fill="#b87fd8"/><text x="515" y="253" font-size="13" fill="#3a2a4a" text-anchor="middle">写完检查保准确</text><line x1="290" y1="108" x2="388" y2="108" stroke="#7a3fb0" stroke-width="3"/><polygon points="388,102 398,108 388,114" fill="#7a3fb0"/><line x1="290" y1="178" x2="388" y2="178" stroke="#7a3fb0" stroke-width="3"/><polygon points="388,172 398,178 388,184" fill="#7a3fb0"/><line x1="290" y1="248" x2="388" y2="248" stroke="#7a3fb0" stroke-width="3"/><polygon points="388,242 398,248 388,254" fill="#7a3fb0"/><rect x="40" y="312" width="600" height="34" rx="8" fill="#9c56d4"/><text x="340" y="334" font-size="13" fill="#ffffff" text-anchor="middle">核心提醒：内容为先、逻辑为要、语言为基</text></svg>`, caption: '图3 常见失分点→应对策略对照图（含核心提醒）' },
        { type: 'keypoint', label: '核心提醒·内容为先', text: '书面表达是高考英语的<strong>区分度高地</strong>。应用文核心是"做有心的沟通者"——在准确完成交际任务基础上展现思维深度；读后续写核心是"做生动的讲故事的人"。' },
        { type: 'tip', label: '核心提醒·两条心法', text: '复习坚持"<strong>内容为先、逻辑为要、语言为基</strong>"原则：先确保要点完整、逻辑清晰，再去追求语言丰富与精准。顺序千万别反。' }
      ],
      exercises: [
        { type: 'choice', question: '把 good 换成 excellent 或 helpful，这属于哪个层面的语言提升？', options: ['句式层面', '词汇层面', '衔接层面', '书写层面'], answer: '词汇层面', explanation: '把普通词 good 换成更精准丰富的 excellent、helpful，是用更好的词替换，属于词汇层面的提升；句式层面是改句子结构，衔接层面是加连接词，所以选词汇层面。' },
        { type: 'choice', question: '下列哪一句使用了强调句（It is...that...）结构？', options: ['Having finished homework, he went out.', 'The book which I bought is interesting.', 'It was his kindness that moved me.', 'Only by working hard can we succeed.'], answer: 'It was his kindness that moved me.', explanation: '强调句的招牌结构是 It is/was ... that ...，用来突出被强调的部分。选项中只有 It was his kindness that moved me 符合这一结构，其余分别是非谓语动词、定语从句和倒装句，故选此项。' },
        { type: 'choice', question: '在三轮备考规划中，二轮的读后续写任务主要是？', options: ['分类掌握应用文模板句型', '强化审题，限时写作15分钟/篇', '回归真题背诵范文', '不安排任何训练'], answer: '强化审题，限时写作15分钟/篇', explanation: '三轮备考里，一轮打基础（分类掌握应用文模板句型），二轮强化（审题并限时写作15分钟/篇），三轮冲刺（回归真题背诵范文）。题干问二轮读后续写任务，故选限时写作15分钟/篇。' },
        { type: 'fill', question: '句式层面常用的五种升级武器是：非谓语动词、定语从句、名词性从句、倒装句和____句。', answer: '强调', explanation: '句式层面常用的五种升级手段是非谓语动词、定语从句、名词性从句、倒装句和强调句。强调句用 It is...that... 突出重点信息，所以空格填强调。' },
        { type: 'fill', question: '常见失分点中，因为"未涵盖所有要求"而造成的失分点名称是____。', answer: '要点遗漏', explanation: '常见失分点包括要点遗漏、逻辑混乱、语言错误等。其中未涵盖所有要求指写作时没有把题目要求的要点都写到，对应的失分点名称就是要点遗漏。' }
      ]
    }
  );
})();
