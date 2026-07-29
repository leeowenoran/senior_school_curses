/* 生物学 · 必修1 分子与细胞 · 第3章 · 课时：第1节 细胞膜——系统的边界 */
(function () {
  var v = gzGetVolume('biology', 'bx1');
  if (!v) return;
  v.points.push({
    id: 'bx1-u8',
    name: '第1节 细胞膜——系统的边界',
    chapter: '必修1 分子与细胞 · 第3章 细胞的基本结构',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、细胞膜的成分' },
      { type: 'paragraph', text: '细胞膜又叫做质膜，是包裹在细胞最外层的边界。它的成分主要有三类：<strong>脂质约占50%、蛋白质约占40%、糖类占少量</strong>。其中脂质以磷脂为主，磷脂双分子层构成了膜的基本支架；蛋白质的种类和数量越多，膜的功能往往越复杂。' },
      { type: 'list', items: ['脂质：约占50%，主要是磷脂，构成膜的基本支架', '蛋白质：约占40%，承担运输、识别等功能', '糖类：少量，与蛋白质或脂质结合形成糖蛋白、糖脂'] },
      { type: 'keypoint', label: '重点·细胞膜的成分比例', text: '<strong>细胞膜主要由脂质和蛋白质组成，此外还有少量糖类。脂质约占50%，蛋白质约占40%。</strong>功能越复杂的细胞膜，其蛋白质的种类和数量越多。糖类常与蛋白质结合成糖蛋白，参与细胞识别。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图1 细胞膜的主要成分比例</text><rect x="80" y="80" width="340" height="34" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="250" y="103" font-size="14" fill="#2e3a22" text-anchor="middle">脂质 约50%</text><rect x="80" y="130" width="272" height="34" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="216" y="153" font-size="14" fill="#2e3a22" text-anchor="middle">蛋白质 约40%</text><rect x="80" y="180" width="68" height="34" rx="6" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="114" y="203" font-size="14" fill="#2e3a22" text-anchor="middle">糖类</text><polygon points="430,97 470,82 470,112" fill="#3f7d1e"/><rect x="480" y="80" width="140" height="140" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="550" y="150" font-size="14" fill="#5aa832" text-anchor="middle" font-weight="bold">膜功能</text><text x="550" y="174" font-size="13" fill="#2e3a22" text-anchor="middle">随蛋白增多</text><text x="340" y="290" font-size="13" fill="#2e3a22" text-anchor="middle">蛋白质种类和数量越多，细胞膜功能越复杂。</text></svg>', caption: '图1 细胞膜成分中脂质约50%、蛋白质约40%、糖类少量。' },
      { type: 'heading', text: '二、细胞膜的功能' },
      { type: 'paragraph', text: '细胞膜虽然很薄，却把细胞和外界环境分隔开，并且掌控着细胞与外界的往来。它的功能可以归纳为三点：将细胞与外界环境分隔开；控制物质进出细胞；进行细胞间的信息交流。' },
      { type: 'list', items: ['分隔作用：细胞膜将细胞与外界分隔开，保障内部环境相对稳定', '控制物质进出：细胞需要的物质可以进入，不需要的或有害物质不易进入', '信息交流：通过信号分子、通道或直接接触实现细胞间沟通'] },
      { type: 'example', label: '例题·信息交流', text: '精子和卵细胞为何能相互识别并结合？<br>解：细胞膜外侧有糖蛋白，糖蛋白像细胞的身份证，能识别信号分子。精子和卵细胞通过细胞膜表面的糖蛋白相互识别，完成信息交流并融合。<br>答：依赖细胞膜表面的糖蛋白进行信息交流。' },
      { type: 'warn', label: '易错·控制是相对的', text: '① 细胞膜控制物质进出是相对的，不是绝对的，某些病毒、病菌也可能侵入细胞；② 信息交流不只有激素一种方式，还有细胞间形成通道（如胞间连丝）、直接接触等方式；③ 不能说细胞膜能控制所有物质，要用相对一词。' },
      { type: 'tip', label: '提示·功能特性', text: '细胞膜的结构特点是有一定的<strong>流动性</strong>，功能特性是<strong>选择透过性</strong>。选择透过性正体现了它控制物质进出的能力：细胞需要的原料能进来，代谢废物能出去，而其他物质被挡在外面。' },
      { type: 'heading', text: '三、细胞壁——植物细胞的外部支撑' },
      { type: 'paragraph', text: '植物细胞在细胞膜外还有一层<strong>细胞壁</strong>，它的主要成分是纤维素和果胶，对细胞起支持和保护作用。与细胞膜不同，细胞壁是全透性的，水分子和溶解在水里的物质都能自由通过，所以它不能控制物质进出。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图2 植物细胞的细胞壁与细胞膜</text><rect x="170" y="80" width="340" height="170" rx="14" fill="#d6eac4" stroke="#3f7d1e" stroke-width="3"/><text x="340" y="108" font-size="14" fill="#2e3a22" text-anchor="middle">细胞壁（纤维素和果胶）</text><rect x="210" y="120" width="260" height="110" rx="10" fill="#eef6e4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="150" font-size="14" fill="#2e3a22" text-anchor="middle">细胞膜（脂质蛋白质）</text><text x="340" y="178" font-size="14" fill="#5aa832" text-anchor="middle" font-weight="bold">细胞质等内部结构</text><polygon points="510,165 548,150 548,180" fill="#3f7d1e"/><rect x="550" y="135" width="110" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="605" y="171" font-size="13" fill="#2e3a22" text-anchor="middle">全透性</text><text x="340" y="295" font-size="13" fill="#2e3a22" text-anchor="middle">细胞壁支持和保护细胞，但不能控制物质进出。</text></svg>', caption: '图2 细胞壁位于细胞膜外侧，主要成分为纤维素和果胶。' },
      { type: 'table', headers: ['比较项目', '细胞膜', '细胞壁'], rows: [['位置', '紧贴细胞质最外层', '植物细胞在细胞膜外侧'], ['主要成分', '脂质、蛋白质、糖类', '纤维素、果胶'], ['特性', '选择透过性', '全透性'], ['功能', '分隔、控制进出、信息交流', '支持、保护']] },
      { type: 'heading', text: '四、体验制备细胞膜' },
      { type: 'paragraph', text: '要研究细胞膜，先要获取纯净的细胞膜。实验常选用<strong>哺乳动物成熟的红细胞</strong>：它没有细胞核，也没有线粒体等具膜细胞器，吸水涨破后得到的膜结构几乎就是细胞膜。把红细胞放在清水里，细胞会大量吸水，最终涨破，内容物流出，留下细胞膜。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图3 红细胞吸水涨破制备细胞膜</text><circle cx="180" cy="170" r="60" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="180" y="175" font-size="14" fill="#2e3a22" text-anchor="middle">红细胞</text><polygon points="240,170 300,158 300,182" fill="#3f7d1e"/><text x="270" y="140" font-size="13" fill="#5aa832" text-anchor="middle" font-weight="bold">清水</text><circle cx="500" cy="170" r="80" fill="none" stroke="#3f7d1e" stroke-width="2"/><text x="500" y="175" font-size="14" fill="#2e3a22" text-anchor="middle">涨破的膜</text><polygon points="380,170 440,158 440,182" fill="#3f7d1e"/><text x="340" y="290" font-size="13" fill="#2e3a22" text-anchor="middle">红细胞无核无细胞器，吸水涨破后留下纯净细胞膜。</text></svg>', caption: '图3 哺乳动物成熟红细胞吸水涨破，可制备纯净细胞膜。' },
      { type: 'keypoint', label: '重点·选材原因', text: '<strong>制备细胞膜常选用哺乳动物成熟的红细胞，因为它没有细胞核和众多具膜细胞器，吸水涨破后所得膜结构几乎只有细胞膜。</strong>若用其他有核细胞，涨破后还会混有核膜和细胞器膜，难以获得纯净细胞膜。' },
      { type: 'example', label: '例题·综合', text: '为什么制备细胞膜不用鸡的红细胞，而用猪的红细胞？<br>解：鸡是鸟类，其红细胞有细胞核和细胞器，涨破后会混入核膜和细胞器膜；猪是哺乳动物，成熟红细胞无核无细胞器，膜更纯净。<br>答：哺乳动物成熟红细胞无核无细胞器，便于获得纯净细胞膜。' }
    ],
    exercises: [
      { type: 'choice', question: '细胞膜的主要成分中，脂质和蛋白质所占比例分别约为？', options: ['脂质约50%，蛋白质约40%', '脂质约40%，蛋白质约50%', '脂质约90%，蛋白质约10%', '脂质约10%，蛋白质约90%'], answer: '脂质约50%，蛋白质约40%', explanation: '细胞膜主要由脂质和蛋白质组成，此外还有少量糖类。其中脂质约占50%，蛋白质约占40%。功能越复杂的细胞膜，蛋白质的种类和数量越多。因此正确比例是脂质约50%、蛋白质约40%。' },
      { type: 'choice', question: '下列关于细胞膜功能的说法，错误的是？', options: ['将细胞与外界环境分隔开', '控制物质进出细胞', '进行细胞间的信息交流', '细胞壁也能控制物质进出细胞'], answer: '细胞壁也能控制物质进出细胞', explanation: '细胞膜的功能包括将细胞与外界分隔开、控制物质进出细胞、进行细胞间信息交流。细胞壁主要由纤维素和果胶组成，是全透性的，水分子和溶解物质都能自由通过，它不能控制物质进出。因此错误说法是细胞壁能控制物质进出。' },
      { type: 'choice', question: '制备纯净细胞膜时，常选用哺乳动物成熟的红细胞，主要原因是？', options: ['它体积大，容易观察', '它没有细胞核和具膜细胞器', '它含有大量细胞壁', '它的膜最厚'], answer: '它没有细胞核和具膜细胞器', explanation: '哺乳动物成熟的红细胞在发育过程中丢失了细胞核，也没有线粒体等具膜细胞器。将其放入清水中吸水涨破，流出的内容物不含核膜和细胞器膜，得到的膜结构几乎是纯净的细胞膜。若用有核细胞则会混入其他膜结构。因此选它没有细胞核和具膜细胞器。' },
      { type: 'fill', question: '植物细胞壁的主要成分是纤维素和___。', answer: '果胶', explanation: '植物细胞的最外层是细胞壁，位于细胞膜外侧。它的主要成分是纤维素和果胶，对细胞起支持和保护作用。细胞壁是全透性的，水和溶解在水中的物质都能自由通过，因此不具备控制物质进出的能力。' },
      { type: 'fill', question: '细胞膜的功能特性是___（能选择性地让物质通过）。', answer: '选择透过性', explanation: '细胞膜的结构特点是有一定的流动性，其功能特性是选择透过性。选择透过性指细胞膜能根据细胞需要，让需要的物质进入、不需要的或有害物质不易进入，从而控制物质进出细胞并维持细胞内环境稳定。' }
    ]
  });
})();
