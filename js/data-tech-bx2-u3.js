/* 通用技术 · 必修 技术与设计2 · 第一章 结构及其设计 · 第三节 结构功能的实现 */
(function () {
  var v = gzGetVolume('tech', 'bx2');
  if (!v) return;
  v.points.push({
    id: 'bx2-u3',
    name: '第三节 结构功能的实现',
    chapter: '第一章 结构及其设计',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、从一把折叠伞说起' },
      { type: 'paragraph', text: '下雨天带伞出门，你可能没想过这么一个问题：为什么伞能撑开、能收起，还能挡雨？换个说法就是，伞的这些“本事”是从哪儿来的？答案就藏在它的结构里。伞面是一块防水的布，伞骨是一根根可以转动的细杆，中间有滑动的伞巢把伞骨撑开。正因为伞骨与伞杆之间是能转动的连接，伞才能开合；正因为伞面是不透水的曲面，雨水才能顺着往下淌。' },
      { type: 'paragraph', text: '如果把伞骨的活动连接改成焊死的固定连接，伞就再也收不起来了；如果把伞面换成一张普通纸，它就挡不住雨了。这说明一件事：结构一变，功能跟着变。这一节要讲的，就是结构和功能之间这层紧密的关系。' },
      { type: 'heading', text: '二、结构与功能的基本关系' },
      { type: 'paragraph', text: '通用技术教材里有一句很关键的话：结构决定着事物的性质，也直接影响着事物的功能。这句话可以分成两层来理解。' },
      { type: 'paragraph', text: '第一层，结构决定性质。同样是碳原子，排成一层层的平面结构就是石墨，又软又黑，能当铅笔芯；排成立体的网状结构就是金刚石，硬得能划玻璃。组成成分完全一样，只因为搭配和排列的方式不同，性质就天差地别。' },
      { type: 'paragraph', text: '第二层，结构影响功能。桥梁的结构决定了它能承多重的车；房子的结构决定了它能抗几级地震；书包的肩带和背板结构决定了背起来累不累。要想让一个物件具备某项功能，就得先给它设计出合适的结构。' },
      { type: 'keypoint', label: '重点·一句话记住核心结论', text: '<strong>结构决定着事物的性质，也直接影响着事物的功能；结构的变化可能导致功能的变化。</strong>这是本节最核心的一句话，考试无论怎么绕，最后都要落回到这里。记的时候可以简化成八个字：<strong>结构定性质，结构定功能。</strong>' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#e8f3ee"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2f6b4f" text-anchor="middle">结构与功能的关系链</text><text x="340" y="56" font-size="12" fill="#1e3a2b" text-anchor="middle">从材料的搭配排列，一路影响到最终能干什么</text><rect x="26" y="82" width="132" height="86" rx="10" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="92" y="118" font-size="15" font-weight="bold" fill="#2f6b4f" text-anchor="middle">结构</text><text x="92" y="144" font-size="11" fill="#1e3a2b" text-anchor="middle">各部分的有序搭配</text><line x1="158" y1="125" x2="184" y2="125" stroke="#2f6b4f" stroke-width="2"/><polygon points="194,125 182,119 182,131" fill="#2f6b4f"/><rect x="198" y="82" width="132" height="86" rx="10" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="264" y="118" font-size="15" font-weight="bold" fill="#2f6b4f" text-anchor="middle">性质</text><text x="264" y="144" font-size="11" fill="#1e3a2b" text-anchor="middle">软硬、强弱、能否弯折</text><line x1="330" y1="125" x2="356" y2="125" stroke="#2f6b4f" stroke-width="2"/><polygon points="366,125 354,119 354,131" fill="#2f6b4f"/><rect x="370" y="82" width="132" height="86" rx="10" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="436" y="118" font-size="15" font-weight="bold" fill="#2f6b4f" text-anchor="middle">功能</text><text x="436" y="144" font-size="11" fill="#1e3a2b" text-anchor="middle">能挡雨、能承重、能开合</text><line x1="502" y1="125" x2="528" y2="125" stroke="#2f6b4f" stroke-width="2"/><polygon points="538,125 526,119 526,131" fill="#2f6b4f"/><rect x="542" y="82" width="112" height="86" rx="10" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="598" y="118" font-size="15" font-weight="bold" fill="#2f6b4f" text-anchor="middle">用途</text><text x="598" y="144" font-size="11" fill="#1e3a2b" text-anchor="middle">拿来干什么</text><path d="M92 178 Q340 234 598 178" fill="none" stroke="#2f9e6b" stroke-width="2" stroke-dasharray="6 4"/><text x="340" y="228" font-size="12" fill="#2f6b4f" text-anchor="middle">想要什么功能，就要倒过来设计什么结构</text></svg>', caption: '图1　结构决定性质、性质影响功能，设计时则从功能倒推结构。' },
      { type: 'heading', text: '三、身边的例子：结构变了，功能就变了' },
      { type: 'paragraph', text: '道理讲完了，最好的巩固方式是多看例子。下面这些例子都来自日常生活，看完你会发现这条规律真的到处都在。' },
      { type: 'table', headers: ['物品', '关键结构', '带来的功能'], rows: [
        ['折叠伞', '伞骨与伞杆之间用可转动的连接，伞面是防水曲面', '能撑开合拢，能挡雨，收起后便于携带'],
        ['拱桥', '桥身做成拱形，把压力沿拱线传到两边桥墩', '同样的材料能承受更重的车辆通过'],
        ['暖水瓶', '内胆做成双层玻璃，中间抽成真空', '热量不易散失，水能保温很久'],
        ['雨衣的帽檐', '帽檐向前伸出并做成弧形', '雨水被引到前方落下，不会流到脸上'],
        ['鞋底花纹', '底面刻出凹凸沟槽', '增大摩擦，走路不打滑，还能排水'],
        ['蜂窝纸板', '中间夹一层六边形蜂窝芯', '又轻又硬，能当包装箱和轻质隔板']
      ] },
      { type: 'example', label: '例题·分析桥梁结构与承重功能', text: '题目：同样长度、同样用料的两座小桥，一座做成平直的梁桥，一座做成向上凸起的拱桥，为什么拱桥能承受更重的荷载？<br>解析：<strong>梁桥的桥面主要承受弯曲力</strong>，车压在中间时，桥面下部被拉、上部被压，材料的抗拉能力有限，很快就到极限了。<strong>拱桥把桥面做成拱形之后，车的重量顺着拱线被转化成沿拱身的压力，并传递到两侧的桥墩上</strong>，构件主要受压而不是受弯，而砖石、混凝土这类材料恰恰是抗压能力强。结构一改，受力方式就变了，承重功能自然提升——这正是“结构的变化导致功能的变化”的典型例子。' },
      { type: 'heading', text: '四、同一功能，可以有不同结构' },
      { type: 'paragraph', text: '还有一个角度也要想到：要实现同一个功能，往往可以有好几种不同的结构方案。就说“把两张纸固定在一起”这件事，可以用订书钉（刚性连接），可以用回形针（夹持），可以用胶水（胶接），还可以打孔穿绳。它们的结构完全不同，却都能完成同一个功能。' },
      { type: 'paragraph', text: '再比如“让人坐下来休息”，可以是四条腿的凳子，可以是三条腿的圆凳，可以是可折叠的马扎，也可以是充气的懒人沙发。设计师最后选哪一种，要看使用场合、成本高低、携带是否方便等条件。这也说明：结构服务于功能，但功能不会只对应一种结构。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e8f3ee"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2f6b4f" text-anchor="middle">同一个功能，可以有不同的结构</text><text x="340" y="52" font-size="12" fill="#1e3a2b" text-anchor="middle">功能都是“把两张纸固定在一起”，结构却各不相同</text><rect x="20" y="70" width="152" height="200" rx="10" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="96" y="98" font-size="14" font-weight="bold" fill="#2f6b4f" text-anchor="middle">订书钉</text><rect x="58" y="116" width="76" height="58" fill="#ffffff" stroke="#2f6b4f" stroke-width="1.5"/><path d="M72 132 L72 122 L96 122 L96 132" fill="none" stroke="#2f6b4f" stroke-width="3"/><text x="96" y="204" font-size="11" fill="#1e3a2b" text-anchor="middle">钢钉穿透后折弯</text><text x="96" y="226" font-size="11" fill="#1e3a2b" text-anchor="middle">属于刚性固定</text><text x="96" y="252" font-size="11" fill="#2f6b4f" text-anchor="middle">牢固但会留孔</text><rect x="188" y="70" width="152" height="200" rx="10" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="264" y="98" font-size="14" font-weight="bold" fill="#2f6b4f" text-anchor="middle">回形针</text><rect x="226" y="116" width="76" height="58" fill="#ffffff" stroke="#2f6b4f" stroke-width="1.5"/><path d="M244 112 L244 152 Q244 160 252 160 Q260 160 260 152 L260 120" fill="none" stroke="#2f6b4f" stroke-width="2.5"/><text x="264" y="204" font-size="11" fill="#1e3a2b" text-anchor="middle">靠弹性夹紧纸边</text><text x="264" y="226" font-size="11" fill="#1e3a2b" text-anchor="middle">属于夹持连接</text><text x="264" y="252" font-size="11" fill="#2f6b4f" text-anchor="middle">可反复取下</text><rect x="356" y="70" width="152" height="200" rx="10" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="432" y="98" font-size="14" font-weight="bold" fill="#2f6b4f" text-anchor="middle">胶水粘贴</text><rect x="394" y="116" width="76" height="58" fill="#ffffff" stroke="#2f6b4f" stroke-width="1.5"/><line x1="394" y1="145" x2="470" y2="145" stroke="#2f9e6b" stroke-width="5"/><text x="432" y="204" font-size="11" fill="#1e3a2b" text-anchor="middle">整面粘合在一起</text><text x="432" y="226" font-size="11" fill="#1e3a2b" text-anchor="middle">属于胶接、刚连接</text><text x="432" y="252" font-size="11" fill="#2f6b4f" text-anchor="middle">平整但拆不开</text><rect x="524" y="70" width="136" height="200" rx="10" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="592" y="98" font-size="14" font-weight="bold" fill="#2f6b4f" text-anchor="middle">打孔穿绳</text><rect x="554" y="116" width="76" height="58" fill="#ffffff" stroke="#2f6b4f" stroke-width="1.5"/><circle cx="570" cy="132" r="4" fill="none" stroke="#2f6b4f" stroke-width="1.5"/><circle cx="570" cy="158" r="4" fill="none" stroke="#2f6b4f" stroke-width="1.5"/><path d="M570 132 Q556 145 570 158" fill="none" stroke="#2f6b4f" stroke-width="2"/><text x="592" y="204" font-size="11" fill="#1e3a2b" text-anchor="middle">绳子穿孔后系紧</text><text x="592" y="226" font-size="11" fill="#1e3a2b" text-anchor="middle">纸张还能翻动</text><text x="592" y="252" font-size="11" fill="#2f6b4f" text-anchor="middle">适合装订成册</text></svg>', caption: '图2　四种结构都能完成“固定两张纸”这一功能，各有各的长处和短处。' },
      { type: 'list', items: [
        '实现同一功能可以有多种结构，设计时要在几个方案中比较取舍',
        '结构不同，往往在成本、重量、寿命、外观、使用方便程度上各有长短',
        '选方案不是选“最复杂的”，而是选“最合适的”'
      ] },
      { type: 'tip', label: '提示·怎样分析一个物品的结构与功能', text: '遇到分析题，按三步走就不会乱：<strong>第一步，先说清它有什么功能（能干什么）；第二步，找出实现这个功能的关键结构（哪个部分、怎么搭配连接的）；第三步，说明这个结构是如何保证功能实现的（受力怎么传递、部件怎么运动）。</strong>三步答完，得分点基本齐了。' },
      { type: 'warn', label: '易错·别把“结构”和“材料”混起来说', text: '有同学一分析就只说材料，比如“因为用了不锈钢所以结实”。<strong>材料只是影响因素之一，结构说的是各部分之间的搭配和排列关系。</strong>回答“结构如何实现功能”时，一定要说到形状、连接方式、部件之间的位置关系这些内容，只谈材料是答不到点子上的。' }
    ],
    exercises: [
      { type: 'choice', question: '关于结构与功能的关系，下列说法正确的是？', options: ['结构与功能之间没有必然联系', '结构决定着事物的性质，也直接影响事物的功能', '只要材料好，结构怎么设计都不影响功能', '功能一旦确定，能实现它的结构就只有一种'], answer: '结构决定着事物的性质，也直接影响事物的功能', explanation: '结构决定着事物的性质，也直接影响着事物的功能，结构的变化可能导致功能的变化，这是本节的核心结论。石墨与金刚石成分相同而结构不同，性质与用途截然不同，正说明结构与功能联系紧密。材料只是影响因素之一，不能替代结构的作用；同一功能往往可以由多种不同结构来实现，所以其余三项都错。' },
      { type: 'choice', question: '把折叠伞伞骨与伞杆之间原本可以转动的连接改成焊死的固定连接，最直接的后果是？', options: ['伞面更防水了', '伞不能再开合，失去了便于携带的功能', '伞变得更轻便了', '伞的颜色会改变'], answer: '伞不能再开合，失去了便于携带的功能', explanation: '伞能够撑开和收拢，靠的是伞骨与伞杆之间可以相对转动的连接结构。把它改成焊死的固定连接后，伞骨无法转动，伞就再也收不起来，随身携带的便利功能随之丧失。这正体现了结构的变化会导致功能的变化。防水性由伞面材料决定，与连接方式无关。' },
      { type: 'choice', question: '暖水瓶的内胆做成双层玻璃并把中间抽成真空，这样设计的直接目的是？', options: ['让瓶子看起来更漂亮', '减少热量散失，实现保温功能', '增加瓶子的承重能力', '方便清洗内胆'], answer: '减少热量散失，实现保温功能', explanation: '双层玻璃中间抽成真空的结构，切断了热量通过空气传导和对流散失的通道，因而瓶内的热水能长时间保持温度。这是通过特定的结构设计来实现保温功能的典型例子，与美观、承重、清洗都无关。' },
      { type: 'fill', question: '结构决定着事物的___，也直接影响着事物的___；结构的变化可能导致___的变化。', answer: '性质；功能；功能', explanation: '这是本节需要完整背下来的核心结论：结构决定着事物的性质，也直接影响着事物的功能，结构的变化可能导致功能的变化。石墨与金刚石、平桥与拱桥、能转动与焊死的伞骨，都是这一结论的具体例证。' },
      { type: 'fill', question: '要把两张纸固定在一起，可以用订书钉、回形针、胶水或打孔穿绳等多种办法。这说明实现同一个___，往往可以采用多种不同的___。', answer: '功能；结构', explanation: '订书钉、回形针、胶水、穿绳这几种做法的结构原理各不相同，却都能完成“固定两张纸”这一功能，说明实现同一功能往往可以采用多种不同的结构。设计时需要综合考虑成本、方便程度、使用场合等条件，从多个方案中选出最合适的一种。' }
    ]
  });
})();
