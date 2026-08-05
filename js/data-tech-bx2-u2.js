/* 通用技术 · 必修 技术与设计2 · 第一章 结构及其设计 · 第二节 稳固结构的探析 */
(function () {
  var v = gzGetVolume('tech', 'bx2');
  if (!v) return;
  v.points.push({
    id: 'bx2-u2',
    name: '第二节 稳固结构的探析',
    chapter: '第一章 结构及其设计',
    difficulty: '重点',
    content: [
      { type: 'heading', text: '一、一把椅子引出的两个问题' },
      { type: 'paragraph', text: '教室里有把旧椅子，坐上去晃晃悠悠，稍微往后一仰就要翻，这是稳定性不好；另一把椅子看着挺稳，可是体重大的同学一坐，椅子腿“咔”地断了，这是强度不够。一个是“会不会倒”，一个是“会不会坏”，这就是这一节要解决的两个核心问题。' },
      { type: 'paragraph', text: '一个结构要想真正“稳固”，稳定性和强度缺一不可。稳定性管的是平衡，强度管的是结实。下面分开来讲，讲完再对比着记。' },
      { type: 'heading', text: '二、稳定性：结构会不会倒' },
      { type: 'paragraph', text: '结构的稳定性，是指结构在荷载的作用下维持其原有平衡状态的能力。这句话拆开看：荷载就是压在结构上的各种力，比如人的体重、风吹、雪压；原有平衡状态就是它本来的姿势；维持的能力强，就叫稳定性好。' },
      { type: 'paragraph', text: '怎么判断一个结构稳不稳？有个非常好用的办法：找到结构重心所在的点，从这一点往下画一条垂线，如果这条垂线落在结构的底面范围之内，结构就是稳定的；如果落在底面范围之外，结构就不稳定，会倒。' },
      { type: 'keypoint', label: '重点·稳定性的判断方法', text: '<strong>结构的稳定性是指结构在荷载作用下维持其原有平衡状态的能力。判断方法：重心所在点的垂线落在结构的底面范围内，结构就稳定；落在底面范围外，结构就不稳定。</strong>做题时先找重心，再画垂线，最后看落点在不在底面里，三步搞定。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e8f3ee"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2f6b4f" text-anchor="middle">用重心垂线判断结构稳不稳</text><text x="340" y="52" font-size="12" fill="#1e3a2b" text-anchor="middle">小圆点是重心，虚线是从重心往下画的垂线，粗横线是底面范围</text><rect x="24" y="68" width="300" height="212" rx="12" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="174" y="96" font-size="15" font-weight="bold" fill="#2f6b4f" text-anchor="middle">稳定：垂线落在底面之内</text><polygon points="138,120 210,120 226,220 122,220" fill="#ffffff" stroke="#2f6b4f" stroke-width="2"/><circle cx="174" cy="170" r="6" fill="#2f6b4f"/><line x1="174" y1="176" x2="174" y2="240" stroke="#2f6b4f" stroke-width="2" stroke-dasharray="6 4"/><line x1="106" y1="240" x2="242" y2="240" stroke="#2f6b4f" stroke-width="4"/><text x="174" y="262" font-size="12" fill="#1e3a2b" text-anchor="middle">垂线落点在底面范围内，物体不会倒</text><rect x="356" y="68" width="300" height="212" rx="12" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="506" y="96" font-size="15" font-weight="bold" fill="#2f6b4f" text-anchor="middle">不稳定：垂线落到底面之外</text><polygon points="486,116 552,132 578,222 500,214" fill="#ffffff" stroke="#2f6b4f" stroke-width="2"/><circle cx="530" cy="170" r="6" fill="#2f6b4f"/><line x1="530" y1="176" x2="530" y2="240" stroke="#2f6b4f" stroke-width="2" stroke-dasharray="6 4"/><line x1="416" y1="240" x2="516" y2="240" stroke="#2f6b4f" stroke-width="4"/><text x="530" y="262" font-size="12" fill="#1e3a2b" text-anchor="middle">垂线落点跑到底面外面，物体会翻倒</text></svg>', caption: '图1　重心垂线落在底面范围内外，决定了结构稳定还是倾倒。' },
      { type: 'heading', text: '三、影响稳定性的主要因素' },
      { type: 'paragraph', text: '知道了怎么判断，接下来就要知道怎么改进。影响结构稳定性的因素主要有四个方面。' },
      { type: 'list', items: [
        '重心位置的高低：重心越低，结构越稳定。不倒翁之所以推不倒，就是因为它的重心特别低，底部还是圆的；载货的卡车如果把重物堆得老高，转弯时就容易侧翻，道理也在这里',
        '支撑面的大小：支撑面越大，结构越稳定。人站着累了会不自觉地把两脚分开，就是在扩大支撑面；高压电线塔、电视塔都做成上端小、下端大的形状，同样是为了扩大底部支撑面',
        '结构的形状：不同的形状稳定性差别很大，三角形是最基本、最稳定的形状之一。自行车的车架、屋顶的人字梁、相机三脚架，都用了三角形',
        '其他因素：材料的密度、结构各部分的质量分布等也会影响稳定性。同样形状的两个花瓶，底座用厚重材料的那个明显更稳'
      ] },
      { type: 'tip', label: '提示·“支撑面”不等于“接触面积”', text: '<strong>支撑面指的是物体与支撑物接触的各点所围成的那块区域，而不是接触面积的大小。</strong>比如四条腿的桌子，四只脚与地面的接触面积加起来其实很小，但四只脚围出来的那个大矩形才是它的支撑面，所以桌子很稳。把桌腿往外挪一挪，接触面积没变，支撑面却变大了，稳定性就提高了。' },
      { type: 'example', label: '例题·怎样让摊位遮阳伞更稳', text: '题目：小区门口的水果摊撑着一把大遮阳伞，一起风就被吹倒。请提出三条改进措施，并说明各自的道理。<br>解析：<strong>第一，在伞杆底部加装配重底座</strong>，把重物压在最下面，降低了整体重心的高度，重心越低越稳定。<strong>第二，把伞架的支脚向外张开或改用更大的三脚支架</strong>，扩大了支撑面，重心垂线更不容易跑到底面之外。<strong>第三，在伞杆与地面之间加几根斜拉的绳索，形成三角形</strong>，利用三角形这一最稳定的形状来抵抗风的推力。三条措施分别对应重心高低、支撑面大小和结构形状这三个影响因素。' },
      { type: 'heading', text: '四、强度：结构会不会坏' },
      { type: 'paragraph', text: '结构的强度，是指结构具有的抵抗被外力破坏的能力。稳定性讲的是会不会倒，强度讲的是会不会断、会不会裂、会不会被压扁。一根细铁丝插在地上很难倒，稳定性尚可，但轻轻一掰就弯了，这就是强度太低。' },
      { type: 'paragraph', text: '影响强度的因素比稳定性稍多一些，主要有四个方面：结构的形状、使用的材料、构件的连接方式，以及温度湿度等其他因素。' },
      { type: 'heading', text: '五、影响强度的因素之一：结构的形状' },
      { type: 'paragraph', text: '这里的形状包括两层意思：一是结构的整体形状，二是构件横截面的形状。同样多的材料，做成不同的横截面形状，抗弯抗压的本领可以差出好几倍。常见的横截面形状有工字形、十字形、L形（角形）、圆形、U形（槽形）等。' },
      { type: 'paragraph', text: '拿一张A4纸做实验最直观：平铺的纸连一支笔都托不住，可把它折成瓦楞形或者卷成圆筒竖起来，居然能托住一本书。材料一点没多，只是形状变了，强度就上去了。工地上的钢梁做成工字形，货架的立柱做成方管，道理完全一样。' },
      { type: 'table', headers: ['横截面形状', '特点', '常见用处'], rows: [
        ['工字形', '上下两块翼缘离得远，抗弯能力强，省材料', '厂房钢梁、桥梁主梁'],
        ['圆形（圆管）', '各个方向受力都一样，抗扭转好', '自行车车架、路灯杆'],
        ['L形（角钢）', '两条边互相支撑，便于连接固定', '铁架、货架、门窗边框'],
        ['U形（槽钢）', '开口一侧便于安装，抗弯性能不错', '车厢底架、导轨'],
        ['十字形', '两个方向的抗弯能力都比较均衡', '塔架立柱、支撑件']
      ] },
      { type: 'heading', text: '六、影响强度的因素之二：使用的材料' },
      { type: 'paragraph', text: '不同材料的“脾气”不一样：混凝土抗压力强，压它没问题，可是一拉就裂；钢筋抗拉力强，拉它很难断，可是细长的钢筋一压就弯。聪明的做法是让它们搭伙干活——把钢筋埋进混凝土里，做成钢筋混凝土，受压的部分交给混凝土，受拉的部分交给钢筋，各展所长。现在的楼房、桥梁几乎都用这种材料。' },
      { type: 'warn', label: '易错·别把混凝土和钢筋的本领弄反', text: '<strong>混凝土抗压力强、抗拉力弱；钢筋抗拉力强。</strong>所以钢筋混凝土梁里的钢筋主要布置在梁受拉的那一侧。考试中常出现“混凝土抗拉力强”这样的错误选项，一定要看清楚是“抗压”还是“抗拉”。' },
      { type: 'heading', text: '七、影响强度的因素之三：构件的连接方式' },
      { type: 'paragraph', text: '好材料、好形状，如果连接方式没选对，结构照样不结实。构件之间的连接方式主要分成两大类：铰连接和刚连接。' },
      { type: 'list', items: [
        '铰连接：被连接的构件之间不能相对移动，但可以相对转动。最典型的例子是门与门框，门被合页固定住不会掉下来，但可以自由地开合转动。折叠椅的转轴、剪刀的中间轴、自行车的车把转向部分，都是铰连接',
        '刚连接：被连接的构件之间既不能相对移动，也不能相对转动。木工用的榫接（榫头插进卯眼）、用胶水粘牢的胶接、把钢件熔在一起的焊接，都是刚连接。课桌的桌腿与桌面之间通常就是刚连接，所以桌子不会散架'
      ] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e8f3ee"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2f6b4f" text-anchor="middle">铰连接与刚连接的区别</text><text x="340" y="52" font-size="12" fill="#1e3a2b" text-anchor="middle">都不能相对移动，区别在于能不能相对转动</text><rect x="24" y="68" width="300" height="212" rx="12" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="174" y="96" font-size="15" font-weight="bold" fill="#2f6b4f" text-anchor="middle">铰连接</text><rect x="60" y="120" width="20" height="100" fill="#ffffff" stroke="#2f6b4f" stroke-width="2"/><circle cx="80" cy="140" r="7" fill="#ffffff" stroke="#2f6b4f" stroke-width="2"/><rect x="80" y="132" width="110" height="18" fill="#ffffff" stroke="#2f6b4f" stroke-width="2" transform="rotate(18 80 141)"/><path d="M132 176 A56 56 0 0 0 152 132" fill="none" stroke="#2f6b4f" stroke-width="2" stroke-dasharray="5 3"/><polygon points="154,126 146,136 156,138" fill="#2f6b4f"/><text x="174" y="214" font-size="12" fill="#1e3a2b" text-anchor="middle">不能相对移动，但可以相对转动</text><text x="174" y="238" font-size="12" fill="#2f6b4f" text-anchor="middle">例：门与门框 · 折叠椅转轴</text><text x="174" y="262" font-size="12" fill="#2f6b4f" text-anchor="middle">剪刀的中间轴</text><rect x="356" y="68" width="300" height="212" rx="12" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="506" y="96" font-size="15" font-weight="bold" fill="#2f6b4f" text-anchor="middle">刚连接</text><rect x="392" y="120" width="20" height="100" fill="#ffffff" stroke="#2f6b4f" stroke-width="2"/><rect x="412" y="132" width="110" height="18" fill="#ffffff" stroke="#2f6b4f" stroke-width="2"/><line x1="404" y1="126" x2="426" y2="126" stroke="#2f9e6b" stroke-width="3"/><line x1="404" y1="156" x2="426" y2="156" stroke="#2f9e6b" stroke-width="3"/><line x1="418" y1="120" x2="418" y2="162" stroke="#2f9e6b" stroke-width="3"/><text x="574" y="146" font-size="20" font-weight="bold" fill="#2f6b4f" text-anchor="middle">锁死</text><text x="506" y="214" font-size="12" fill="#1e3a2b" text-anchor="middle">既不能相对移动，也不能相对转动</text><text x="506" y="238" font-size="12" fill="#2f6b4f" text-anchor="middle">例：榫接 · 胶接 · 焊接</text><text x="506" y="262" font-size="12" fill="#2f6b4f" text-anchor="middle">课桌桌腿与桌面</text></svg>', caption: '图2　铰连接可以相对转动，刚连接被完全锁死，两者都不允许相对移动。' },
      { type: 'heading', text: '八、影响强度的因素之四：其他因素' },
      { type: 'paragraph', text: '除了形状、材料、连接方式，还有一些因素也会影响强度：温度的高低（钢材在高温下会变软，冬天有些塑料会变脆）、湿度的大小（木头受潮会发霉腐烂，铁件受潮会生锈）、构件横截面的大小（同样是圆钢，粗的比细的能扛）等等。桥梁上留伸缩缝、木家具要防潮，考虑的就是这些因素。' },
      { type: 'keypoint', label: '重点·稳定性与强度对照记忆', text: '<strong>稳定性是维持原有平衡状态的能力，看的是“会不会倒”，影响因素有重心位置高低、支撑面大小、结构形状、其他因素（如材料密度）。强度是抵抗被外力破坏的能力，看的是“会不会坏”，影响因素有结构形状、使用的材料、构件连接方式、其他因素（如温度湿度）。</strong>两者都受“结构的形状”影响，这是它们唯一重合的因素，也是最容易混淆的地方。' }
    ],
    exercises: [
      { type: 'choice', question: '关于结构稳定性的判断，下列说法正确的是？', options: ['只要物体又重又大，就一定稳定', '重心所在点的垂线落在结构底面范围内，结构就是稳定的', '重心越高，结构越稳定', '支撑面越小，结构越稳定'], answer: '重心所在点的垂线落在结构底面范围内，结构就是稳定的', explanation: '判断稳定性的标准方法是：找到结构重心所在的点，向下画垂线，垂线落在结构底面范围内则稳定，落在范围外则不稳定。稳定与否和物体的重量大小无关；重心越低越稳定，越高越不稳定；支撑面越大越稳定，越小越不稳定，所以其余三项都错。' },
      { type: 'choice', question: '下列做法中，主要目的是提高结构强度而不是提高稳定性的是？', options: ['把货车上的重物尽量往低处堆放', '把落地衣架的三只脚向外张开', '把用来做搁板的纸板折成瓦楞形', '给花瓶底部加装厚重的配重底座'], answer: '把用来做搁板的纸板折成瓦楞形', explanation: '把纸板折成瓦楞形，材料没有增加，改变的是构件的形状，从而提高了抵抗外力破坏的能力，这是提高强度。重物往低处堆放是降低重心，支脚向外张开是扩大支撑面，加配重底座是降低重心，这三项针对的都是稳定性。' },
      { type: 'choice', question: '门与门框之间的连接方式，以及木工的榫接，分别属于？', options: ['都属于铰连接', '都属于刚连接', '门与门框是铰连接，榫接是刚连接', '门与门框是刚连接，榫接是铰连接'], answer: '门与门框是铰连接，榫接是刚连接', explanation: '铰连接的特点是构件之间不能相对移动但可以相对转动，门装在门框上不会移位却能自由开合转动，属于铰连接。刚连接的特点是既不能相对移动也不能相对转动，榫接把榫头插入卯眼后被完全固定，与胶接、焊接一样属于刚连接。' },
      { type: 'fill', question: '影响结构稳定性的主要因素有：___位置的高低、___的大小、结构的___，以及材料密度等其他因素。其中三角形被认为是最基本、最稳定的形状之一。', answer: '重心；支撑面；形状', explanation: '影响结构稳定性的主要因素包括重心位置的高低（越低越稳）、支撑面的大小（越大越稳）、结构的形状（三角形最稳定）以及材料密度等其他因素。高压电线塔做成上端小、下端大的样子，同时利用了降低重心和扩大支撑面两条原理。' },
      { type: 'fill', question: '钢筋混凝土之所以被广泛使用，是因为混凝土的抗___力强，钢筋的抗___力强，两者结合可以取长补短。这体现了影响结构强度的因素中的“使用的___”。', answer: '压；拉；材料', explanation: '混凝土抗压力强但抗拉力弱，钢筋抗拉力强，把钢筋埋入混凝土做成钢筋混凝土，受压部分由混凝土承担，受拉部分由钢筋承担，实现优势互补。这属于影响结构强度的第二个因素——使用的材料。' }
    ]
  });
})();
