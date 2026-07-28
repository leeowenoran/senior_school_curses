/* ============================================================
 * 高二英语 · 选择性必修 第二册 · Unit 3 Food and Culture
 * 第1课时：核心词汇与过去完成时（上）
 * 第2课时：重点句型与过去完成时被动语态
 * 数据注入：english.xb2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('english', 'xb2');
  if (!v) return;

  v.points.push(

    /* ---------------- 第1课时 核心词汇与过去完成时（上） ---------------- */
    {
      id: 'xb2-u3-l1',
      name: 'Unit 3 核心词汇与过去完成时（上）',
      chapter: 'Unit 3 Food and Culture',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、Unit 3 核心词汇：先认识这些"吃"的单词' },
        { type: 'paragraph', text: '我们这一单元聊的是"食物与文化"。先把本单元最常出现的单词记下来，后面读文章、写作文都会用到。记单词不要死背，先看中文意思，再放进句子里感受它的用法。' },
        { type: 'keypoint', label: '重点·词汇', text: '下面这些词都和"吃"有关：<strong>cuisine</strong> 意思是烹饪或菜肴；<strong>ingredient</strong> 意思是原料或成分，比如做蛋糕需要的鸡蛋、面粉；<strong>flavor</strong> 意思是味道或风味。把它们放进生活场景就很好记：妈妈做的菜 cuisine 很好吃，ingredient 越新鲜 flavor 越香。' },
        { type: 'table', headers: ['单词', '词性', '中文释义'], rows: [
          ['cuisine', '名词', '烹饪 / 菜肴'],
          ['ingredient', '名词', '原料 / 成分'],
          ['flavor', '名词', '味道 / 风味'],
          ['spicy', '形容词', '辛辣的'],
          ['sour', '形容词', '酸的'],
          ['bitter', '形容词', '苦的'],
          ['sweet', '形容词', '甜的'],
          ['salty', '形容词', '咸的'],
          ['recipe', '名词', '食谱'],
          ['appetite', '名词', '食欲 / 胃口'],
          ['nutrition', '名词', '营养'],
          ['diet', '名词', '日常饮食'],
          ['custom', '名词', '风俗 / 习俗'],
          ['banquet', '名词', '宴会'],
          ['consume', '动词', '消耗 / 消费']
        ] },
        { type: 'heading', text: '二、常用短语：把词连成句' },
        { type: 'paragraph', text: '单词单独记还不够，考试常考"短语搭配"。下面这些短语在课文里反复出现，建议整组背下来，写作文时也能直接套用。' },
        { type: 'keypoint', label: '重点·短语', text: '<strong>be related to</strong> 意思是"与……有关"，比如颜色和心情有关：Color is related to mood.<br><strong>be full of</strong> 意思是"充满"，这碗汤充满了香味：The soup is full of flavor.<br><strong>play a part in</strong> 意思是"在……中起作用"，比如风俗在饮食里起作用。' },
        { type: 'example', label: '例句', text: '用刚学的短语造句：<br>The food we eat is <strong>related to</strong> our health.（我们吃的食物和我们的健康有关。）<br>This banquet was <strong>full of</strong> delicious cuisine.（这场宴会充满了美味的菜肴。）<br>Customs <strong>play a part in</strong> what we eat.（风俗在我们吃什么这件事上起作用。）' },
        { type: 'list', items: [
          'be related to：和……有关，to 后面接名词或动名词',
          'be full of：充满，of 后面接名词',
          'play a part in：在……中起作用，in 后面接名词',
          'in common：共同的，have something in common 表示有共同点'
        ] },
        { type: 'table', headers: ['短语', '汉语意思'], rows: [
          ['be related to', '与……相关'],
          ['be full of', '充满'],
          ['play a part in', '在……中起作用'],
          ['in common', '共同（的）'],
          ['a series of', '一系列'],
          ['as well as', '也 / 和'],
          ['associate with', '与……联系起来'],
          ['vary from...to...', '因……而异']
        ] },
        { type: 'warn', label: '易错', text: '短语 <strong>as well as</strong> 意思是"也、和"，但它和 and 不一样。看主语时：小明 as well as 小红 likes 苹果。这里真正的主语是"小明"（单数），所以动词用 likes，不是 like。考试常在这里挖坑，千万别顺着两个人都用复数。' },
        { type: 'tip', label: '记忆', text: '<strong>vary from...to...</strong> 表示"因……而异、从……到……变化"。比如口味因地区而异：Tastes vary from region to region. 记法：vary 是"变化"，from 到 to 是一头一尾，合起来就是"从一头变到另一头"。' },
        { type: 'heading', text: '三、过去完成时（主动）：讲"过去的过去"' },
        { type: 'paragraph', text: '我们来学一个很有用的时态——过去完成时。名字里有"完成"二字，意思是动作"已经做完了"。那"过去"又是什么意思呢？它就是用来讲"在过去某个时间点之前，事情就已经发生了"。' },
        { type: 'keypoint', label: '重点·结构', text: '过去完成时的主动结构是：<strong>主语 + had + 过去分词</strong>。其中的 had 不论主语是谁（我、你、他）都不变。比如：I had eaten. 我已经吃了。He had gone. 他已经走了。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg">
<rect width="680" height="220" fill="#f3edfa"/>
<text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图3　过去完成时主动结构</text>
<rect x="120" y="80" width="100" height="52" rx="8" fill="#e9d8f5" stroke="#7a3fb0" stroke-width="2"/>
<text x="170" y="112" font-size="16" fill="#7a3fb0" text-anchor="middle" font-weight="bold">had</text>
<rect x="260" y="80" width="180" height="52" rx="8" fill="#e9d8f5" stroke="#7a3fb0" stroke-width="2"/>
<text x="350" y="112" font-size="16" fill="#7a3fb0" text-anchor="middle" font-weight="bold">过去分词(done)</text>
<text x="500" y="113" font-size="40" fill="#b87fd8" text-anchor="middle">+</text>
<text x="340" y="178" font-size="15" fill="#3a2a4a" text-anchor="middle">主语 + had + 过去分词，表示"过去的过去"已经做完</text>
</svg>`, caption: '图3　过去完成时主动语态的结构：不管主语是谁，一律用 had 加上过去分词。' },
        { type: 'example', label: '例句1', text: 'By 9 last night, we <strong>had got</strong> 200 pictures.（昨晚9点之前，我们已经拍了200张照片。）<br><br>分析：昨晚9点是一个"过去的时间点"，而拍照这件事在这个时间点<strong>之前</strong>就已经完成，所以要用过去完成时 had got。' },
        { type: 'list', items: [
          'had 永远不变形，不随主语 he / she / I 改变',
          '过去分词要写对，比如 get 的过去分词是 got',
          '过去完成时必须有一个"过去的参考点"作对比',
          '常用标志词：by + 过去时间、before、when 等'
        ] },
        { type: 'keypoint', label: '重点·特殊句型', text: '有两个句型表示"一……就……"：<br><strong>hardly...when...</strong>：Hardly had he eaten when he went out. 他刚吃完就出去了。<br><strong>no sooner...than...</strong>：No sooner had she arrived than it rained. 她刚到就下雨了。<br>注意：hardly / no sooner 提到句首时，后面要用 <strong>had 提前</strong> 的倒装语序。' },
        { type: 'example', label: '例句2', text: 'Hardly <strong>had</strong> the boy <strong>finished</strong> his meal when his friend called.（男孩刚吃完饭，朋友就打来电话。）<br><br>分析：finish（吃完）发生在 call（打电话）之前，是两个过去动作，先发生的用过去完成时 had finished。' },
        { type: 'warn', label: '易错', text: '过去完成时<strong>不能单独使用</strong>，必须有"对比的过去点"。比如只说 "I had eaten." 而不说明在什么时候之前，别人会听不懂。一定要搭配 by 昨晚、before 他来、when 我到 这类过去参照，时态才成立。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg">
<rect width="680" height="240" fill="#f3edfa"/>
<text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图1　过去完成时时间轴</text>
<line x1="70" y1="120" x2="630" y2="120" stroke="#7a3fb0" stroke-width="2.5"/>
<circle cx="220" cy="120" r="9" fill="#b87fd8" stroke="#7a3fb0" stroke-width="2"/>
<circle cx="430" cy="120" r="9" fill="#9c56d4" stroke="#7a3fb0" stroke-width="2"/>
<circle cx="580" cy="120" r="9" fill="#c0392b" stroke="#7a3fb0" stroke-width="2"/>
<text x="220" y="98" font-size="14" fill="#7a3fb0" text-anchor="middle">had done 已发生</text>
<text x="430" y="98" font-size="14" fill="#7a3fb0" text-anchor="middle">过去参考点</text>
<text x="580" y="98" font-size="14" fill="#c0392b" text-anchor="middle">现在</text>
<text x="325" y="150" font-size="13" fill="#5a7a2a" text-anchor="middle">← 先发生，属于"过去的过去"</text>
<text x="325" y="182" font-size="14" fill="#3a2a4a" text-anchor="middle">By 9 last night，we had got 200 pictures（昨晚9点前已拍好）</text>
</svg>`, caption: '图1　过去完成时时间轴：在"昨晚9点"这个过去参考点之前，拍照这件事已经做完了。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg">
<rect width="680" height="280" fill="#f3edfa"/>
<text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图2　各国美食与代表食材</text>
<circle cx="75" cy="135" r="42" fill="#f6dcf3" stroke="#9c56d4" stroke-width="2"/>
<text x="75" y="129" font-size="14" fill="#7a3fb0" text-anchor="middle" font-weight="bold">中国菜</text>
<text x="75" y="149" font-size="12" fill="#3a2a4a" text-anchor="middle">米饭·蔬菜</text>
<circle cx="215" cy="135" r="42" fill="#f6dcf3" stroke="#9c56d4" stroke-width="2"/>
<text x="215" y="129" font-size="14" fill="#7a3fb0" text-anchor="middle" font-weight="bold">日本料理</text>
<text x="215" y="149" font-size="12" fill="#3a2a4a" text-anchor="middle">生鱼·米饭</text>
<circle cx="355" cy="135" r="42" fill="#f6dcf3" stroke="#9c56d4" stroke-width="2"/>
<text x="355" y="129" font-size="14" fill="#7a3fb0" text-anchor="middle" font-weight="bold">意大利菜</text>
<text x="355" y="149" font-size="12" fill="#3a2a4a" text-anchor="middle">面条·番茄</text>
<circle cx="495" cy="135" r="42" fill="#f6dcf3" stroke="#9c56d4" stroke-width="2"/>
<text x="495" y="129" font-size="14" fill="#7a3fb0" text-anchor="middle" font-weight="bold">墨西哥菜</text>
<text x="495" y="149" font-size="12" fill="#3a2a4a" text-anchor="middle">玉米·辣椒</text>
<circle cx="635" cy="135" r="42" fill="#f6dcf3" stroke="#9c56d4" stroke-width="2"/>
<text x="635" y="129" font-size="14" fill="#7a3fb0" text-anchor="middle" font-weight="bold">法国菜</text>
<text x="635" y="149" font-size="12" fill="#3a2a4a" text-anchor="middle">奶酪·面包</text>
<text x="340" y="245" font-size="14" fill="#3a2a4a" text-anchor="middle">不同国家的 cuisine（菜肴）由不同的 ingredient（原料）组成，这就是"饮食文化"</text>
</svg>`, caption: '图2　各国美食与代表食材：不同文化用的原料不同，做出的菜肴风味也不同。' },
        { type: 'tip', label: '提示', text: '判断用不用过去完成时，问自己一句话：<strong>这件事是不是在另一个过去动作或过去时间之前就做完了？</strong>是，就用 had + 过去分词；不是，就用普通过去时。' },
        { type: 'heading', text: '四、本课小结' },
        { type: 'list', items: [
          '核心词汇：cuisine 菜肴、ingredient 原料、flavor 味道、spicy 辣的、sour 酸的等',
          '常用短语：be related to 与…相关、be full of 充满、play a part in 起作用',
          '过去完成时主动结构：主语 + had + 过去分词',
          '含义：在"过去的某时 / 某动作"之前已经做完',
          '特殊句型：hardly...when...、no sooner...than... 都表"一…就…"'
        ] }
      ],
      exercises: [
        { type: 'choice', question: '单词 cuisine 的中文意思是？', options: ['营养', '烹饪 / 菜肴', '风俗', '食欲'], answer: '烹饪 / 菜肴', explanation: 'cuisine 来自法语，指一个地方或民族的"烹饪方式"或"菜肴"，比如 Chinese cuisine 表示中国菜。nutrition 是营养，custom 是风俗，appetite 是食欲，都不符合题意。' },
        { type: 'choice', question: '短语 be full of 的意思是？', options: ['与…相关', '充满', '起作用', '消耗'], answer: '充满', explanation: 'be full of 表示"充满、装满"，后面接被充满的东西，如 The room is full of people（房间里挤满了人）。be related to 是与…相关，play a part in 是在…中起作用，均不合。' },
        { type: 'choice', question: '过去完成时主动语态的结构是？', options: ['have + 过去分词', 'has + 过去分词', 'had + 过去分词', 'will + 过去分词'], answer: 'had + 过去分词', explanation: '过去完成时的主动结构是"had + 过去分词"，had 不随主语变化。have/has + 过去分词是现在完成时，will + 过去分词这种写法不存在。因此选 had + 过去分词。' },
        { type: 'fill', question: 'By 9 last night, we ____ (get) 200 pictures.（用过去完成时填空）', answer: 'had got|had gotten', explanation: '句首 By 9 last night（昨晚9点前）是典型的过去时间参照，说明"拍照"在这之前已经完成，要用过去完成时 had got（英式写法）或 had gotten（美式写法）。' },
        { type: 'fill', question: 'Hardly ____ he eaten when he went out.（填 had 或 has）', answer: 'had', explanation: '在 hardly...when... 句型中，hardly 所在的句子用过去完成时（had + 过去分词），when 后面接另一个一般过去时动作。这里主语是 he，所以填 had：Hardly had he eaten when he went out.' }
      ]
    },

    /* ---------------- 第2课时 重点句型与过去完成时被动语态 ---------------- */
    {
      id: 'xb2-u3-l2',
      name: 'Unit 3 重点句型与过去完成时被动语态',
      chapter: 'Unit 3 Food and Culture',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、重点句型：more than 的多种含义' },
        { type: 'paragraph', text: '课文里有几个句子读起来不难，但藏着很有用的句型。第一个是 more than，它不只是"多于"的意思，放在不同地方含义会变，我们先把它搞清楚。' },
        { type: 'keypoint', label: '重点·more than', text: '单词 <strong>more than</strong> 字面是"多于"，但在课文里常表示"不仅仅是、不止"。例句：Food is more than just nutrition; it is also a part of our culture.（食物不仅仅是营养，它也是我们文化的一部分。）它还可以在数字前表示"多于"，如 more than ten people（十多个人）。' },
        { type: 'example', label: '例句', text: 'Food is <strong>more than</strong> just nutrition; it is also a part of our culture.<br><br>翻译：食物<strong>不仅仅是</strong>营养，它也是我们文化的一部分。<br>分析：这里的 more than = 不仅仅是，把食物从"填饱肚子"提升到了"文化"的层面。' },
        { type: 'list', items: [
          'more than + 名词：不仅仅是（某事物）',
          'more than + 数字：多于、超过（某数量）',
          'more than + 形容词：非常、十分（表程度）',
          '读句子时先看 more than 后面接的是什么词，再判断意思'
        ] },
        { type: 'heading', text: '二、重点句型：Just as...，so... 类比' },
        { type: 'paragraph', text: '第二个句型用来"打比方"，把食物和别的事物放在一起比较，让说明更有说服力。' },
        { type: 'keypoint', label: '重点·Just as', text: '<strong>Just as...，so...</strong> 是一个类比句型，意思是"正如……，……也……"。例句：Just as language varies by region, so does food.（正如语言因地区而异，食物也是如此。）注意 so 后面要用"倒装"的助动词，这里用 does 代替 varies。' },
        { type: 'example', label: '例句', text: 'Just as language varies by region, <strong>so does</strong> food.<br><br>翻译：正如语言因地区而异，食物<strong>也是如此</strong>。<br>分析：前面说 language（语言）会变，后面用 so does food 表示 food（食物）也会变，前后形成类比。' },
        { type: 'tip', label: '提示', text: 'Just as A, so B 这个结构里，so 后面的 B 要用"助动词提前"的倒装：主语是 food（单数），动词 varies 用 does 代替，写成 so does food，不要写成 so food does。' },
        { type: 'warn', label: '易错', text: 'Just as...，so... 是<strong>固定搭配</strong>，so 不能换成 and、but 或 or。很多同学看到前后两个句子就随手写 and，这是错的。记住：要表达"正如 A，B 也……"这个类比意思，中间必须用 so。' },
        { type: 'heading', text: '三、过去完成时被动语态' },
        { type: 'paragraph', text: '上节课学了过去完成时的主动语态（had + 过去分词）。这节我们学它的"被动态"：当主语是"被怎样"的时候，就要在中间加一个 been。' },
        { type: 'keypoint', label: '重点·结构', text: '过去完成时被动语态的结构是：<strong>主语 + had been + 过去分词</strong>。had 表示"过去完成"，been 表示"被动"，过去分词表示动作。意思是：到过去某时之前，这个动作已经被做完了。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg">
<rect width="680" height="220" fill="#f3edfa"/>
<text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图1　过去完成时被动结构</text>
<rect x="90" y="80" width="100" height="52" rx="8" fill="#e9d8f5" stroke="#7a3fb0" stroke-width="2"/>
<text x="140" y="112" font-size="16" fill="#7a3fb0" text-anchor="middle" font-weight="bold">had</text>
<rect x="215" y="80" width="120" height="52" rx="8" fill="#e9d8f5" stroke="#7a3fb0" stroke-width="2"/>
<text x="275" y="112" font-size="16" fill="#7a3fb0" text-anchor="middle" font-weight="bold">been</text>
<rect x="360" y="80" width="180" height="52" rx="8" fill="#e9d8f5" stroke="#7a3fb0" stroke-width="2"/>
<text x="450" y="112" font-size="16" fill="#7a3fb0" text-anchor="middle" font-weight="bold">过去分词(done)</text>
<text x="340" y="178" font-size="15" fill="#3a2a4a" text-anchor="middle">主语 + had been + 过去分词，表示"到过去某时之前已被做完"</text>
</svg>`, caption: '图1　过去完成时被动语态结构：had（过去完成）+ been（被动）+ 过去分词。' },
        { type: 'example', label: '例句', text: 'The dish <strong>had been eaten</strong> before I arrived.（我到达之前，那道菜已经被吃掉了。）<br><br>分析：主语 the dish（那道菜）是"被吃"的，所以用被动 been eaten；"被吃"发生在 I arrived（我到达）之前，是过去的过去，所以用 had been eaten。' },
        { type: 'list', items: [
          'had been + 过去分词，had 不随主语变化',
          'been 是被动标志，不能漏掉',
          '时间参照必须是"过去的某时或某动作"',
          '常见标志词：before + 过去动作、by the time 等'
        ] },
        { type: 'heading', text: '四、现在完成时被动 vs 过去完成时被动' },
        { type: 'paragraph', text: '被动语态有两个"完成"版本，同学们最容易混。关键区别只有一个：它们各自对照的时间点不同——一个是"现在"，一个是"过去的某时"。' },
        { type: 'table', headers: ['对比项', '现在完成时被动', '过去完成时被动'], rows: [
          ['结构', 'have / has been + 过去分词', 'had been + 过去分词'],
          ['时间参照', '到现在之前', '到过去某时之前'],
          ['强调重点', '和现在有联系', '和过去某点对照'],
          ['例句', 'The window has been cleaned.（窗已擦好）', 'The window had been cleaned before I came.（我来前窗已擦好）']
        ] },
        { type: 'svg', svg: `<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg">
<rect width="680" height="260" fill="#f3edfa"/>
<text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图2　过去完成时被动 vs 现在完成时被动</text>
<line x1="70" y1="110" x2="630" y2="110" stroke="#9c56d4" stroke-width="2.5"/>
<circle cx="400" cy="110" r="9" fill="#9c56d4" stroke="#7a3fb0" stroke-width="2"/>
<text x="400" y="135" font-size="13" fill="#7a3fb0" text-anchor="middle">have / has been done</text>
<text x="250" y="92" font-size="13" fill="#5a7a2a" text-anchor="middle">↑ 到现在之前完成</text>
<text x="600" y="100" font-size="14" fill="#c0392b" text-anchor="middle">现在</text>
<line x1="70" y1="200" x2="630" y2="200" stroke="#b87fd8" stroke-width="2.5"/>
<circle cx="250" cy="200" r="9" fill="#b87fd8" stroke="#7a3fb0" stroke-width="2"/>
<circle cx="430" cy="200" r="9" fill="#9c56d4" stroke="#7a3fb0" stroke-width="2"/>
<text x="250" y="225" font-size="13" fill="#7a3fb0" text-anchor="middle">had been done 已发生</text>
<text x="430" y="225" font-size="13" fill="#7a3fb0" text-anchor="middle">过去参考点</text>
<text x="340" y="248" font-size="13" fill="#5a7a2a" text-anchor="middle">↑ 到过去某时之前完成</text>
</svg>`, caption: '图2　两种被动语态对比：上面一条对照"现在"，下面一条对照"过去的某时"。' },
        { type: 'keypoint', label: '重点·区分', text: '记一个口诀：<strong>现在完成被动看"现在"，过去完成被动看"过去某时"</strong>。只要句里有 by the time、before + 过去动作 这类过去参照，就用 had been done；否则若强调和现在有关的完成，用 have / has been done。' },
        { type: 'warn', label: '易错', text: '很多同学把 <strong>had been done</strong> 和 <strong>has been done</strong> 搞混。记住：只要参照点是"过去"（比如 yesterday、when he came、last night），就用 had；参照点是"现在"（比如 already、just、so far），就用 has / have。看参照点，不看主语。' },
        { type: 'tip', label: '提示', text: '做选择题时，先圈出句子里的"时间词"：有过去时间参照 → 过去完成被动（had been done）；有现在时间参照 → 现在完成被动（have / has been done）。时间词是判断时态的第一把钥匙。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg">
<rect width="680" height="220" fill="#f3edfa"/>
<text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">图3　两大重点句型结构</text>
<rect x="60" y="75" width="260" height="60" rx="8" fill="#e9d8f5" stroke="#7a3fb0" stroke-width="2"/>
<text x="190" y="100" font-size="15" fill="#7a3fb0" text-anchor="middle" font-weight="bold">more than = 不仅仅是</text>
<text x="190" y="122" font-size="13" fill="#3a2a4a" text-anchor="middle">Food is more than nutrition.</text>
<rect x="360" y="75" width="260" height="60" rx="8" fill="#e9d8f5" stroke="#7a3fb0" stroke-width="2"/>
<text x="490" y="100" font-size="15" fill="#7a3fb0" text-anchor="middle" font-weight="bold">Just as A, so B</text>
<text x="490" y="122" font-size="13" fill="#3a2a4a" text-anchor="middle">正如 A，B 也如此</text>
<text x="340" y="178" font-size="14" fill="#3a2a4a" text-anchor="middle">两个句型都用来把"食物"和"文化 / 其他事物"联系起来</text>
</svg>`, caption: '图3　两大重点句型：more than 表示"不仅仅是"，Just as A, so B 表示"正如 A，B 也……"。' },
        { type: 'example', label: '综合例句', text: 'Just as food <strong>had been</strong> prepared before the guests came, so <strong>had</strong> the custom been kept.（正如食物在客人到来前已经备好，这个风俗也已经被保留下来。）<br><br>分析：before the guests came 是过去参照，prepare 和 keep 都用过去完成被动 had been done，前后两个动作都在"客人来"之前完成。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: [
          'more than：不仅仅是 / 多于 / 非常，看后面接什么词',
          'Just as A, so B：正如 A，B 也如此（so 后倒装）',
          '过去完成时被动：主语 + had been + 过去分词',
          '现在完成被动看"现在"，过去完成被动看"过去某时"',
          '判断时态先找时间参照词，再看主语是否被动作影响'
        ] }
      ],
      exercises: [
        { type: 'choice', question: 'Food is more than just nutrition 中 more than 的意思是？', options: ['少于', '不仅仅是', '和…一样', '大约'], answer: '不仅仅是', explanation: 'more than 在本句是"不仅仅、不止"的意思，整句指食物不仅仅是营养，也是文化的一部分。它还可以表示数量"多于"，如 more than 10 people（十多个人），要根据语境判断。' },
        { type: 'choice', question: '过去完成时被动语态的结构是？', options: ['have been + 过去分词', 'had been + 过去分词', 'had + 过去分词', 'has been + 过去分词'], answer: 'had been + 过去分词', explanation: '过去完成时被动语态 = had（过去完成标志）+ been（被动标志）+ 过去分词。had + 过去分词只是主动语态；have/has been + 过去分词是现在完成时被动，时间参照是现在。' },
        { type: 'choice', question: 'Just as language varies, ____ does food. 空格应填？', options: ['so', 'and', 'but', 'or'], answer: 'so', explanation: 'Just as...，so... 是固定类比结构，意思是"正如……，……也……"。前面说语言因地区而异，后面用 so does food 表示食物也是如此。空格必须填 so，不能填 and / but / or。' },
        { type: 'fill', question: 'The dish ____ (eat) before I arrived.（用过去完成时被动填空）', answer: 'had been eaten', explanation: 'before I arrived（我到达之前）是过去时间参照，菜"被吃"这个被动动作在到达之前已经完成，因此用过去完成时被动 had been eaten。' },
        { type: 'fill', question: '现在完成时被动强调"到现在之前完成"，过去完成时被动强调"到____之前完成"。（填"过去某时"或"将来"）', answer: '过去某时', explanation: '两种被动语态的区别在于时间参照：现在完成时被动（have/has been done）参照"现在"，强调到现在之前完成；过去完成时被动（had been done）参照"过去的某时"，强调到那个过去点之前完成。' }
      ]
    }

  );
})();
