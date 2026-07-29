/* 生物学 · 选择性必修2 生物与环境 · 第3章 · 课时：第1节 生态系统的结构 */
(function () {
  var v = gzGetVolume('biology', 'xb2');
  if (!v) return;
  v.points.push({
    id: 'xb2-u7',
    name: '第1节 生态系统的结构',
    chapter: '选择性必修2 生物与环境 · 第3章 生态系统及其稳定性',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是生态系统' },
      { type: 'paragraph', text: '<strong>生态系统</strong>是指在一定的空间内，由生物群落与它的非生物环境相互作用而形成的统一整体。一片森林、一个池塘、一块农田，甚至一个小的鱼缸，只要里面有生物又有阳光、水、空气等非生物部分，并且二者相互依赖，就是一个生态系统。生态系统是生态学研究的中心对象。' },
      { type: 'list', items: ['范围可大可小：小到一个鱼缸，大到一个海洋，地球最大的生态系统是生物圈', '两大组成：生物群落（所有生物）和非生物环境（阳光、水、空气、无机盐等）', '核心是「相互作用」：生物与环境之间不断进行物质、能量和信息交换'] },
      { type: 'keypoint', label: '重点·生态系统概念', text: '<strong>生态系统</strong>是一定空间内生物群落与非生物环境相互作用形成的统一整体。判断一个系统是不是生态系统，要看它是否同时具备生物部分和非生物部分，并且二者能进行物质循环和能量流动。' },
      { type: 'heading', text: '二、非生物的物质和能量' },
      { type: 'paragraph', text: '生态系统的非生物部分包括<strong>阳光、热能、水、空气、无机盐</strong>等。阳光为生产者光合作用提供能量，水和空气是生物生存的介质，无机盐是合成有机物的原料。它们是生物群落的物质和能量来源，没有这一部分，生态系统就无法运转。' },
      { type: 'heading', text: '三、生产者——生态系统的基石' },
      { type: 'paragraph', text: '<strong>生产者</strong>主要是指绿色植物，还包括进行化能合成作用的细菌（如硝化细菌）等自养生物。它们能够利用光能或化学能，把二氧化碳和水等无机物合成有机物，把能量储存在有机物中。生产者是生态系统的基石，因为其他生物都直接或间接地以它们制造的有机物为食。' },
      { type: 'list', items: ['绿色植物：通过光合作用把 CO₂ 和 H₂O 合成有机物', '硝化细菌：通过化能合成作用制造有机物，也属于生产者', '地位：生态系统的基石，为其他生物提供物质和能量'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">生态系统的四大组成成分</text><rect x="40" y="80" width="150" height="80" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="115" y="118" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">非生物部分</text><rect x="40" y="200" width="150" height="80" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="115" y="238" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">生产者</text><rect x="265" y="200" width="150" height="80" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="238" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">消费者</text><rect x="490" y="200" width="150" height="80" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="565" y="238" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">分解者</text><polygon points="191,240 228,228 228,252" fill="#3f7d1e"/><polygon points="416,240 453,228 453,252" fill="#3f7d1e"/><text x="340" y="120" font-size="12" fill="#5aa832" text-anchor="middle">提供物质和能量</text><text x="340" y="300" font-size="13" fill="#2e3a22" text-anchor="middle">生产者、消费者、分解者 + 非生物部分 = 生态系统</text></svg>', caption: '图1　生态系统由非生物部分、生产者、消费者、分解者组成。' },
      { type: 'heading', text: '四、消费者' },
      { type: 'paragraph', text: '<strong>消费者</strong>主要是动物，属于异养生物，它们不能自己制造有机物，只能直接或间接以生产者为食。消费者在生态系统中的作用不可忽视：它们加快生态系统的物质循环，并且对植物的传粉和种子传播有重要作用，比如蜜蜂传粉、鸟类传播果实种子。' },
      { type: 'heading', text: '五、分解者——生态系统的关键成分' },
      { type: 'paragraph', text: '<strong>分解者</strong>主要是细菌和真菌等异养生物，也包括蚯蚓、蜣螂等腐生动物。它们把动植物遗体、排泄物中的有机物分解成无机物，归还到非生物环境中，供生产者重新利用。如果没有分解者，动植物遗体会堆积如山，物质循环就会中断，因此分解者是生态系统的关键成分。' },
      { type: 'warn', label: '易错·分解者范围', text: '易错点：并不是「所有微生物都是分解者」。微生物中，硝化细菌、光合细菌是<strong>生产者</strong>，寄生细菌、寄生真菌是<strong>消费者</strong>，只有营腐生生活的细菌和真菌才是分解者。同样，动物多数是消费者，但蚯蚓、蜣螂、秃鹫等以遗体粪便为食的腐生动物属于分解者，别一概而论。' },
      { type: 'list', items: ['生产者：自养，制造有机物，是基石', '消费者：异养，加快物质循环，帮助传粉和传播种子', '分解者：异养腐生，将有机物分解为无机物，是关键成分'] },
      { type: 'table', headers: ['成分', '生物举例', '营养方式', '作用'], rows: [['非生物部分', '阳光、水、空气、无机盐', '—', '提供物质和能量来源'], ['生产者', '绿色植物、硝化细菌', '自养', '制造有机物，生态系统的基石'], ['消费者', '大多数动物', '异养', '加快物质循环，助传粉传播'], ['分解者', '细菌、真菌、蚯蚓', '异养腐生', '将有机物分解为无机物']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">生产者、消费者、分解者的关系</text><rect x="250" y="70" width="180" height="80" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="108" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">生产者</text><rect x="40" y="220" width="180" height="80" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="130" y="258" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">消费者</text><rect x="460" y="220" width="180" height="80" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="550" y="258" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">分解者</text><polygon points="130,220 250,150 250,150" fill="#3f7d1e"/><polygon points="550,220 430,150 430,150" fill="#3f7d1e"/><polygon points="190,260 460,260 460,260" fill="#3f7d1e"/><text x="340" y="300" font-size="13" fill="#5aa832" text-anchor="middle">物质在三者间循环，能量由生产者流入</text></svg>', caption: '图2　生产者、消费者、分解者通过物质循环紧密联系。' },
      { type: 'tip', label: '提示·记忆四成分', text: '记忆窍门：生态系统成分可记为「非生、产生、消、分」。非生物部分供能，生产者造有机物（基石），消费者传粉提速，分解者清垃圾（关键）。考试常考「基石」是生产者、「关键」是分解者，别混淆。' },
      { type: 'heading', text: '六、生态系统的营养结构' },
      { type: 'paragraph', text: '<strong>食物链</strong>是指在生态系统中，各种生物之间由于捕食关系而形成的一种联系。典型食物链从生产者开始，如草 → 虫 → 蛙 → 蛇 → 鹰。注意食物链不包括分解者和非生物部分，且不写阳光等非生物因素。' },
      { type: 'paragraph', text: '<strong>食物网</strong>是指许多食物链彼此交错连接，形成的复杂营养关系。在一个生态系统中，一种生物往往吃多种食物，也被多种生物所吃，所以食物链相互交织成网。食物链和食物网是生态系统物质循环和能量流动的渠道。' },
      { type: 'list', items: ['食物链起点一定是生产者，终点是最高级消费者', '食物链箭头表示能量和物质的流动方向，由被捕食者指向捕食者', '食物网越复杂，生态系统抵抗外界干扰的能力往往越强'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">食物网示例（多种生物交错连接）</text><rect x="40" y="130" width="120" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="100" y="162" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">草</text><rect x="220" y="60" width="120" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="280" y="92" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">虫</text><rect x="220" y="200" width="120" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="280" y="232" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">鼠</text><rect x="420" y="130" width="120" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="480" y="162" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">蛙/蛇</text><rect x="580" y="130" width="100" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="630" y="162" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">鹰</text><polygon points="161,150 198,138 198,162" fill="#3f7d1e"/><polygon points="161,210 198,222 198,198" fill="#3f7d1e"/><polygon points="341,90 418,140 418,140" fill="#3f7d1e"/><polygon points="341,230 418,180 418,180" fill="#3f7d1e"/><polygon points="541,160 578,148 578,172" fill="#3f7d1e"/><text x="340" y="300" font-size="13" fill="#5aa832" text-anchor="middle">食物链交错成网，是物质循环和能量流动的渠道</text></svg>', caption: '图3　多条食物链交错形成食物网，是能量和物质的流动渠道。' },
      { type: 'example', label: '例题·营养级判断', text: '题目：在「草 → 虫 → 蛙 → 蛇」这条食物链中，蛙属于第几营养级？<br>A. 第二营养级　B. 第三营养级　C. 第四营养级　D. 第五营养级<br>解析：食物链的营养级从生产者开始数。草是生产者，属第一营养级；虫吃草，属第二营养级（初级消费者）；蛙吃虫，属第三营养级（次级消费者）；蛇吃蛙，属第四营养级。因此蛙位于第三营养级，选 B。' },
      { type: 'paragraph', text: '总结：生态系统的结构包括两方面的组成——组成成分（非生物部分、生产者、消费者、分解者）和营养结构（食物链、食物网）。生产者是基石，分解者是关键，二者缺一不可；食物链和食物网把各种生物联系起来，成为生态系统物质循环和能量流动的渠道。' }
    ],
    exercises: [
      { type: 'choice', question: '下列关于生态系统的叙述，正确的是？', options: ['生态系统是一定空间内生物群落与无机环境相互作用的统一整体', '生态系统仅由生产者组成', '生态系统只包括动物和植物', '生态系统只有非生物环境'], answer: '生态系统是一定空间内生物群落与无机环境相互作用的统一整体', explanation: '生态系统的定义强调一定空间内生物群落（全部生物）与非生物环境（无机环境）相互作用形成的统一整体，二者缺一不可并不断进行物质和能量交换。仅由生产者或非生物环境都不能构成完整生态系统。因此正确选项是该定义本身。' },
      { type: 'choice', question: '在生态系统的组成成分中，被称为「基石」的是？', options: ['消费者', '分解者', '生产者', '非生物物质'], answer: '生产者', explanation: '生产者主要是绿色植物等自养生物，能把无机物合成有机物并储存能量，是其他生物物质和能量的根本来源，因此被称为生态系统的基石。消费者加快循环，分解者是关键成分，但基石特指生产者。所以正确选项是生产者。' },
      { type: 'choice', question: '关于食物链和食物网，下列说法正确的是？', options: ['食物链只包含生产者和消费者', '食物链中必须包含分解者', '食物网不是能量流动的渠道', '一条食物链中每种生物只占据一个营养级'], answer: '食物链只包含生产者和消费者', explanation: '食物链反映捕食关系，只由生产者和消费者组成，不包括分解者和非生物部分。食物网正是物质循环和能量流动的渠道；在复杂食物网中，一种生物可能同时占据多个营养级。因此正确的说法是食物链只包含生产者和消费者。' },
      { type: 'fill', question: '生态系统的组成成分包括非生物的物质和能量、生产者、消费者和___。', answer: '分解者', explanation: '一个完整的生态系统由四部分组成：非生物的物质和能量、生产者、消费者、分解者。分解者主要是细菌和真菌等腐生生物，负责把有机物分解为无机物归还环境，是生态系统的关键成分，缺少它物质循环会中断。因此填空应为分解者。' },
      { type: 'fill', question: '食物链和食物网是生态系统___和能量流动的渠道。', answer: '物质循环', explanation: '生态系统中的物质循环和能量流动都要沿着食物链和食物网进行。生产者固定的有机物和能量，通过捕食关系在各级消费者间传递，最终由分解者归还无机环境。所以食物链和食物网既是物质循环的渠道，也是能量流动的渠道，填空应为物质循环。' }
    ]
  });
})();
