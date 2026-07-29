/* 生物学 · 必修1 分子与细胞 · 第4章 · 课时：第2节 生物膜的流动镶嵌模型 */
(function () {
  var v = gzGetVolume('biology', 'bx1');
  if (!v) return;
  v.points.push({
    id: 'bx1-u12',
    name: '第2节 生物膜的流动镶嵌模型',
    chapter: '必修1 分子与细胞 · 第4章 细胞的物质输入和输出',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、科学家怎么猜出膜是由什么组成的' },
      { type: 'paragraph', text: '细胞膜薄得在光学显微镜下看不清，科学家只能先通过现象推测它的成分，再用化学方法验证。其中最关键的一步，是欧文顿用大量物质做的通透性实验。' },
      { type: 'list', items: ['欧文顿用 500 多种物质实验，发现凡能溶于脂质的物质更容易进入细胞', '由此他提出：膜是由脂质组成的', '后续化学分析确认：膜含约 50% 脂质、约 40% 蛋白质、少量糖类'] },
      { type: 'paragraph', text: '后来科学家用蛋白酶处理细胞膜，发现膜的通透性改变，说明膜中还有蛋白质。用化学方法进一步分离出膜上的糖类和蛋白质结合形成糖蛋白、糖脂，糖类占比很少。' },
      { type: 'keypoint', label: '重点·膜的成分', text: '<strong>细胞膜主要由脂质和蛋白质组成，此外还有少量糖类。</strong>其中脂质约占 50%，蛋白质约占 40%，糖类约占 2%—10%。蛋白质是体现膜功能复杂程度的主要成分，功能越复杂的膜，蛋白质的种类和数量越多。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图1 欧文顿的脂溶性实验</text><rect x="60" y="70" width="240" height="120" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="180" y="112" font-size="14" fill="#2e3a22" text-anchor="middle">脂溶性物质</text><text x="180" y="140" font-size="14" fill="#5aa832" text-anchor="middle" font-weight="bold">容易穿过膜</text><rect x="380" y="70" width="240" height="120" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="500" y="112" font-size="14" fill="#2e3a22" text-anchor="middle">非脂溶性物质</text><text x="500" y="140" font-size="14" fill="#2e3a22" text-anchor="middle">难以穿过膜</text><polygon points="300,132 338,120 338,144" fill="#3f7d1e"/><text x="340" y="205" font-size="13" fill="#2e3a22" text-anchor="middle">欧文顿据此推断：膜主要由脂质组成。</text><text x="340" y="270" font-size="13" fill="#2e3a22" text-anchor="middle">凡可溶于脂质的物质更容易进入细胞，说明膜成分含脂质。</text></svg>', caption: '图1　欧文顿根据脂溶性物质更易透膜，推断膜的主要成分是脂质。' },
      { type: 'heading', text: '二、磷脂双分子层：膜的基本骨架' },
      { type: 'paragraph', text: '构成膜的主要脂质是磷脂。磷脂分子一头是亲水的头部（连着磷酸），两头是疏水的尾部（连着脂肪酸链）。在水环境中，磷脂会自发排成两层：亲水头部朝向膜两侧的水，疏水尾部相对排在内侧。' },
      { type: 'example', label: '例题·磷脂如何排队', text: '把磷脂撒进水中，为什么它们会排成双分子层而不是单层？<br>答：因为磷脂头部亲水、尾部疏水。单层排布时朝内的尾部会与水接触，不稳定；排成双层时，两个疏水尾部相对藏在中间、亲水头部朝外接触水，这样的结构最稳定，于是形成磷脂双分子层。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图2 磷脂双分子层（膜的基本骨架）</text><circle cx="140" cy="80" r="16" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="140" y="84" font-size="12" fill="#2e3a22" text-anchor="middle">头</text><line x1="140" y1="96" x2="140" y2="140" stroke="#3f7d1e" stroke-width="3"/><circle cx="240" cy="80" r="16" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><line x1="240" y1="96" x2="240" y2="140" stroke="#3f7d1e" stroke-width="3"/><circle cx="340" cy="80" r="16" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><line x1="340" y1="96" x2="340" y2="140" stroke="#3f7d1e" stroke-width="3"/><circle cx="440" cy="80" r="16" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><line x1="440" y1="96" x2="440" y2="140" stroke="#3f7d1e" stroke-width="3"/><circle cx="140" cy="240" r="16" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><line x1="140" y1="200" x2="140" y2="224" stroke="#3f7d1e" stroke-width="3"/><circle cx="240" cy="240" r="16" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><line x1="240" y1="200" x2="240" y2="224" stroke="#3f7d1e" stroke-width="3"/><circle cx="340" cy="240" r="16" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><line x1="340" y1="200" x2="340" y2="224" stroke="#3f7d1e" stroke-width="3"/><circle cx="440" cy="240" r="16" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><line x1="440" y1="200" x2="440" y2="224" stroke="#3f7d1e" stroke-width="3"/><text x="340" y="300" font-size="13" fill="#2e3a22" text-anchor="middle">亲水头部朝外、疏水尾部朝内，形成磷脂双分子层。</text></svg>', caption: '图2　磷脂亲水头朝外、疏水尾朝内，自动排列成双分子层。' },
      { type: 'heading', text: '三、流动镶嵌模型的核心内容' },
      { type: 'paragraph', text: '1972 年桑格和尼克森提出流动镶嵌模型，这是目前被广泛接受的生物膜结构模型。其核心是：<strong>磷脂双分子层构成膜的基本支架，蛋白质分子以不同方式分布在脂双层中。</strong>' },
      { type: 'list', items: ['有的蛋白质镶在磷脂双分子层表面', '有的部分或全部嵌入磷脂双分子层中', '有的横跨整个磷脂双分子层（贯穿蛋白）'] },
      { type: 'paragraph', text: '细胞膜表面的糖类常与蛋白质或脂质结合，形成糖蛋白、糖脂，这些糖链大多分布在细胞膜的<strong>外表面</strong>，叫糖被。糖被与细胞识别、信息传递和保护有关。' },
      { type: 'warn', label: '易错·糖被的位置', text: '糖蛋白和糖脂的糖链<strong>主要分布在膜的外侧（外表面）</strong>，这赋予了细胞膜方向性。做题时若问糖被在哪一侧，要答膜外侧；若把膜翻转，糖被就到了内侧，识别功能会紊乱。不要误认为糖链均匀分布在膜两侧。' },
      { type: 'table', headers: ['要点', '内容'], rows: [['基本支架', '磷脂双分子层'], ['蛋白质分布', '镶嵌、嵌入或横跨脂双层'], ['糖类位置', '多在膜外侧形成糖被'], ['结构特点', '具有一定的流动性'], ['功能特点', '具有选择透过性']] },
      { type: 'example', label: '例题·模型判断', text: '下列关于流动镶嵌模型的说法，正确的是？<br>答：磷脂双分子层构成基本支架，蛋白质镶嵌、嵌入或横跨其中，糖类在膜外侧形成糖被。膜的结构特点是流动性，功能特点是选择透过性。若选项说蛋白质均匀固定在表面、糖类在内侧，则是错误的。' },
      { type: 'tip', label: '提示·流动性与选择透过性', text: '<strong>流动性是结构特点，选择透过性是功能特点。</strong>流动性是选择透过性的结构基础：正是因为磷脂和蛋白质可以运动，膜才能通过载体、通道等选择让某些物质通过。高温、运输等过程都会用到膜的流动性。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图3 生物膜的流动镶嵌模型</text><rect x="80" y="150" width="520" height="26" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><rect x="80" y="200" width="520" height="26" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="135" font-size="13" fill="#2e3a22" text-anchor="middle">磷脂双分子层（基本骨架）</text><rect x="180" y="120" width="50" height="36" rx="4" fill="#5aa832" stroke="#3f7d1e" stroke-width="2"/><text x="205" y="143" font-size="12" fill="#ffffff" text-anchor="middle">蛋白</text><rect x="350" y="100" width="46" height="150" rx="4" fill="#5aa832" stroke="#3f7d1e" stroke-width="2"/><text x="373" y="180" font-size="12" fill="#ffffff" text-anchor="middle">贯穿蛋白</text><circle cx="500" cy="150" r="8" fill="#3f7d1e"/><circle cx="514" cy="150" r="8" fill="#3f7d1e"/><circle cx="528" cy="150" r="8" fill="#3f7d1e"/><text x="514" y="135" font-size="12" fill="#2e3a22" text-anchor="middle">糖被</text><text x="340" y="320" font-size="13" fill="#2e3a22" text-anchor="middle">蛋白质镶嵌、贯穿或附着于磷脂双分子层；糖链多在膜外侧形成糖被。</text></svg>', caption: '图3　流动镶嵌模型中磷脂成双分子层骨架，蛋白质以不同方式分布，糖被在膜外。' },
      { type: 'heading', text: '四、流动性与选择透过性' },
      { type: 'paragraph', text: '<strong>流动性</strong>指膜中的磷脂分子大多可侧向自由移动，多数蛋白质也能运动，使膜在结构上不是静止僵硬的。变形虫运动、白细胞吞噬、细胞融合、胞吞胞吐等都依赖流动性。' },
      { type: 'paragraph', text: '<strong>选择透过性</strong>指膜对物质进出具有选择性：水分子自由通过，细胞需要的离子和小分子可选择性通过，大分子、不需要的或有害的物质不易通过。它是膜的功能特点，以流动性为基础，主要由膜上载体蛋白的种类和数量决定。' }
    ],
    exercises: [
      { type: 'choice', question: '欧文顿通过脂溶性实验推断膜的主要成分是？', options: ['脂质', '蛋白质', '糖类', '核酸'], answer: '脂质', explanation: '欧文顿用 500 多种物质做实验，发现凡能溶于脂质的物质比不能溶于脂质的物质更容易穿过细胞膜进入细胞。由此他提出：膜是由脂质组成的。后来的化学分析才进一步确认膜含约 50% 脂质、约 40% 蛋白质以及少量糖类。因此欧文顿最初推断的膜主要成分是脂质。' },
      { type: 'choice', question: '流动镶嵌模型中，构成生物膜基本支架的是？', options: ['蛋白质双分子层', '磷脂双分子层', '糖蛋白', '核酸'], answer: '磷脂双分子层', explanation: '流动镶嵌模型指出，磷脂双分子层构成了膜的基本支架。磷脂分子头部亲水、尾部疏水，在水环境中自动排列成两层，亲水头部朝向膜内外两侧的水，疏水尾部相对排在内侧。蛋白质镶嵌、贯穿或附着在骨架上，糖类在外侧。所以基本骨架是磷脂双分子层。' },
      { type: 'choice', question: '糖被（糖蛋白、糖脂）主要分布在细胞膜的？', options: ['主要在膜内侧', '主要在膜外侧', '均匀分布在膜两侧', '只存在于膜内部'], answer: '主要在膜外侧', explanation: '细胞膜上的糖类常与蛋白质或脂质结合形成糖蛋白、糖脂，这些糖链绝大多数分布在细胞膜的外表面，称为糖被。糖被与细胞识别、信息传递、保护等有关，这也是细胞膜外侧面具有方向性的体现。因此糖被主要在膜的外侧，选该选项。' },
      { type: 'fill', question: '流动镶嵌模型中，构成膜的基本支架是___。', answer: '磷脂双分子层', explanation: '流动镶嵌模型的核心要点之一是：磷脂双分子层构成了生物膜的基本支架，具有流动性；蛋白质分子有的镶在表面，有的部分或全部嵌入，有的横跨整个磷脂双分子层。糖类与蛋白质或脂质结合形成糖被，位于膜外侧。因此构成基本支架的是磷脂双分子层。' },
      { type: 'fill', question: '膜上的磷脂分子和大多数蛋白质分子可以运动，这说明生物膜具有___性（结构特点）。', answer: '流动', explanation: '生物膜的结构特点之一是具有一定的流动性。构成膜的磷脂分子大多可以侧向自由移动，膜中的蛋白质分子多数也能运动，这使得膜在结构上不是静止僵硬的。流动性是选择透过性的结构基础；没有流动性，膜就无法完成变形、融合等生命活动。所以填流动。' }
    ]
  });
})();
