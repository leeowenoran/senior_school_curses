/* 生物学 · 选择性必修1 稳态与调节 · 第5章 · 课时：第1节 植物生长素 */
(function () {
  var v = gzGetVolume('biology', 'xb1');
  if (!v) return;
  v.points.push({
    id: 'xb1-u12',
    name: '第1节 植物生长素',
    chapter: '选择性必修1 稳态与调节 · 第5章 植物生命活动的调节',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、生长素的发现过程' },
      { type: 'paragraph', text: '如果你把一盆小麦放在窗台边，过几天会发现它的幼苗朝窗户方向弯过去，这种现象叫做<strong>向光性</strong>。植物为什么会弯向有光的一侧？科学家用了几十年时间，通过一系列巧妙实验才找到答案——这与一种后来被命名为生长素的化学物质有关。本节我们就沿着科学家的足迹，看生长素是怎样被一步步发现的。' },
      { type: 'list', items: ['生活中观察：窗台上的植物幼苗弯向光源生长', '科学问题：植物感受光刺激的部位在哪里，弯曲的部位又在哪里', '四个关键实验：达尔文、鲍森·詹森、拜尔、温特，逐步证明胚芽鞘尖端产生某种化学物质向下传递'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图1 达尔文实验：单侧光引起胚芽鞘向光弯曲</text><text x="170" y="62" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">有尖端 受单侧光</text><rect x="158" y="72" width="24" height="14" fill="#5aa832"/><path d="M170 86 L150 250" stroke="#3f7d1e" stroke-width="4" fill="none"/><polygon points="92,118 138,110 138,126" fill="#3f7d1e"/><text x="170" y="282" font-size="13" fill="#2e3a22" text-anchor="middle">向光弯曲生长</text><text x="510" y="62" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">切除尖端 受单侧光</text><path d="M510 86 L510 250" stroke="#3f7d1e" stroke-width="4" fill="none"/><polygon points="432,118 478,110 478,126" fill="#3f7d1e"/><text x="510" y="282" font-size="13" fill="#2e3a22" text-anchor="middle">不弯曲不生长</text><text x="340" y="338" font-size="13" fill="#2e3a22" text-anchor="middle">达尔文推测：胚芽鞘尖端受光刺激后产生某种影响，向下传递使下部弯曲。</text></svg>', caption: '图1　达尔文用胚芽鞘对照实验，提出尖端能产生某种影响并向下传递。' },
      { type: 'keypoint', label: '重点·达尔文实验结论', text: '<strong>达尔文的推想：</strong>在单侧光照射下，胚芽鞘的尖端会产生某种影响，这种影响向下面的伸长区传递，造成伸长区背光面比向光面生长快，因而使胚芽鞘出现向光性弯曲。也就是说，感受光刺激的是尖端，发生弯曲的是尖端下面的一段。' },
      { type: 'paragraph', text: '达尔文只是提出了推想，但他并没有证明这种影响究竟是什么。接下来几位科学家继续追问：这种影响能不能透过某些物质向下传递？它是不是一种实实在在的化学物质？' },
      { type: 'example', label: '例题·感受光与弯曲的部位', text: '题目：用锡箔罩住胚芽鞘尖端，再给单侧光，结果是？<br>A. 向光弯曲　B. 不弯曲　C. 向下弯曲　D. 随机弯曲<br>解析：感受光刺激的部位是尖端。用锡箔遮住尖端后，尖端感受不到单侧光，就不会产生使下部弯曲的影响，因此胚芽鞘直立生长、不发生弯曲。答案选不弯曲。这正说明感受光的是尖端而不是下部。' },
      { type: 'heading', text: '二、鲍森·詹森与拜尔的实验' },
      { type: 'paragraph', text: '<strong>鲍森·詹森</strong>在达尔文之后做了这样的实验：他在胚芽鞘尖端和下面部分之间，放一片琼脂片（一种多孔、能让物质扩散通过的凝胶），再给单侧光。结果发现胚芽鞘仍然向光弯曲。这说明尖端产生的影响<strong>可以透过琼脂片向下传递</strong>，也就是说这种影响不是靠神经或电流，而是某种能扩散的物质。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图2 鲍森·詹森与拜尔实验</text><rect x="40" y="70" width="280" height="120" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="180" y="104" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">尖端下垫琼脂片</text><text x="180" y="132" font-size="13" fill="#2e3a22" text-anchor="middle">影响可透过琼脂片</text><text x="180" y="156" font-size="13" fill="#5aa832" text-anchor="middle">仍向光弯曲</text><polygon points="321,130 358,118 358,142" fill="#3f7d1e"/><rect x="360" y="70" width="280" height="120" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="500" y="104" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">尖端放一侧 无光</text><text x="500" y="132" font-size="13" fill="#2e3a22" text-anchor="middle">影响分布不均</text><text x="500" y="156" font-size="13" fill="#5aa832" text-anchor="middle">向放置侧弯曲</text><text x="340" y="330" font-size="13" fill="#2e3a22" text-anchor="middle">鲍森·詹森证明可透过琼脂片；拜尔证明影响在尖端下部分布不均匀导致弯曲。</text></svg>', caption: '图2　鲍森·詹森证明影响可透过琼脂片，拜尔证明影响分布不均引起弯曲。' },
      { type: 'paragraph', text: '<strong>拜尔</strong>把胚芽鞘的尖端切下来，移栽到胚芽鞘断面的某一侧，放在黑暗中培养。结果胚芽鞘也弯向尖端放置的那一侧。因为是在黑暗中进行，排除了光的作用，说明弯曲只和尖端放置的位置有关：尖端产生的影响在尖端下面一段<strong>分布不均匀</strong>，多的一侧长得快，少的一侧长得慢，于是向放尖端的那侧弯。' },
      { type: 'warn', label: '易错·尖端与尖端下部', text: '很多同学分不清「尖端」和「尖端下部」。记住两点：① 感受光刺激、产生影响的部位是胚芽鞘尖端；② 发生弯曲生长的部位是尖端下面的伸长区。遮住尖端植物就不弯，切掉尖端植物既不长也不弯，只放尖端在侧边就会朝那侧弯。考试常把这两个部位混在一起考，务必分清。' },
      { type: 'keypoint', label: '重点·拜尔实验结论', text: '<strong>拜尔的结论：</strong>胚芽鞘的弯曲生长，是因为尖端产生的影响在其下部（伸长区）分布不均匀造成的。这第一次把「弯曲」和「影响物质分布不均」直接联系起来，为后来温特证明它是化学物质奠定了基础。' },
      { type: 'heading', text: '三、温特实验——命名生长素' },
      { type: 'paragraph', text: '前面的实验都只说「某种影响」，始终没证明它到底是不是化学物质。<strong>温特</strong>把接触过胚芽鞘尖端的琼脂片，放在切去尖端的胚芽鞘一侧，结果胚芽鞘朝对侧弯曲；而放未接触尖端琼脂片的对照组不弯曲。这说明尖端确实产生了一种能向下传递、促进生长的化学物质，并且这种物质能跑到琼脂片里。温特把这种物质命名为<strong>生长素</strong>。' },
      { type: 'example', label: '例题·温特实验对照', text: '题目：温特实验中，未接触尖端的琼脂片作为对照，结果是？<br>A. 向光弯曲　B. 不弯曲　C. 向对侧弯曲　D. 加速生长<br>解析：对照组的琼脂片没有接触过胚芽鞘尖端，里面不含生长素，放在切去尖端的胚芽鞘一侧时，两侧都没有促进生长的物质，因此胚芽鞘不弯曲也不生长。温特正是用这个对照证明：使胚芽鞘弯曲的物质来自尖端，且能进入琼脂片。答案选不弯曲。' },
      { type: 'list', items: ['达尔文：推测尖端受光产生某种影响向下传递', '鲍森·詹森：证明影响可透过琼脂片向下传递', '拜尔：证明影响在尖端下部分布不均匀造成弯曲', '温特：证明影响是化学物质并命名为生长素'] },
      { type: 'tip', label: '提示·实验逻辑链', text: '四个实验是层层递进的：先提出「有影响」（达尔文），再证明「能传递」（鲍森·詹森），接着证明「分布不均才弯」（拜尔），最后证明「是化学物质」（温特）。做题时用这条逻辑链对照选项，基本不会错。真正被提取出来的生长素后来被证明是吲哚乙酸，简称 IAA。' },
      { type: 'heading', text: '四、生长素的产生、运输和分布' },
      { type: 'paragraph', text: '生长素被发现后，科学家进一步弄清了它在植物体内从哪来、怎么走、去哪里。掌握这部分要抓住三个词：<strong>产生、运输、分布</strong>。它们分别对应来源、方向和去处，是本节最重要的基础知识。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图3 生长素的极性运输（形态学上端→下端）</text><rect x="300" y="60" width="80" height="40" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="85" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">茎尖</text><path d="M340 100 L340 150" stroke="#3f7d1e" stroke-width="3" fill="none"/><polygon points="332,150 348,150 340,164" fill="#3f7d1e"/><rect x="300" y="170" width="80" height="40" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="195" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">茎中</text><path d="M340 210 L340 260" stroke="#3f7d1e" stroke-width="3" fill="none"/><polygon points="332,260 348,260 340,274" fill="#3f7d1e"/><rect x="300" y="280" width="80" height="40" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="305" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">茎基</text><text x="540" y="200" font-size="14" fill="#5aa832" text-anchor="middle" font-weight="bold">极性运输</text><text x="540" y="224" font-size="13" fill="#2e3a22" text-anchor="middle">上端→下端</text><text x="340" y="344" font-size="13" fill="#2e3a22" text-anchor="middle">极性运输只能从形态学上端运向下端，是一种消耗能量的主动运输。</text></svg>', caption: '图3　生长素在胚芽鞘内的极性运输方向，从形态学上端单向运向形态学下端。' },
      { type: 'table', headers: ['项目', '主要内容', '常考点'], rows: [['产生部位', '幼嫩的芽、叶和发育中的种子', '成熟组织产生很少'], ['运输方式', '极性运输（主）+ 非极性运输', '极性运输是主动运输'], ['运输方向', '形态学上端→形态学下端', '与重力无关、可逆不了'], ['分布部位', '生长旺盛处：芽、根尖、形成层', '趋向衰老器官含量少']] },
      { type: 'keypoint', label: '重点·极性运输', text: '<strong>极性运输：</strong>生长素只能从植物的形态学上端（如茎尖、根尖的尖端方向）运往形态学下端，而不能倒过来，这种单方向运输称为极性运输。它是一种需要载体、消耗能量的主动运输，所以即使把茎倒过来放，生长素也还是从上端往下端运。' },
      { type: 'paragraph', text: '要注意「形态学上端」不是「地理学上端」。比如植物的根，根尖是形态学下端，根基部是形态学上端；把根横放，生长素依然按形态学方向运输，而不是按重力上下走。这也是为什么根的向地性不能用简单的极性运输方向来解释。' },
      { type: 'warn', label: '易错·极性运输与横向运输', text: '极性运输是纵向的、单向的、主动的；而单侧光或重力还会引起生长素的横向运输（从向光侧转到背光侧，或从近地侧转到远地侧），横向运输发生在尖端。两者不是一回事：纵向叫极性运输，横向叫横向运输。考题若说「极性运输受重力影响可逆」，那就是错的。' },
      { type: 'heading', text: '五、生长素生理作用的两重性' },
      { type: 'paragraph', text: '生长素最奇妙的地方在于：<strong>低浓度促进生长，高浓度抑制生长</strong>，这就是它的<strong>两重性</strong>。同一浓度的生长素，对不同器官、不同部位，效果可能完全相反。比如既能促进发芽也能抑制发芽，既能防止落花落果也能疏花疏果，关键看浓度和器官敏感度。' },
      { type: 'list', items: ['既能促进生长，也能抑制生长', '既能促进发芽，也能抑制发芽', '既能防止落花落果，也能疏花疏果', '不同器官对生长素敏感度不同：根 > 芽 > 茎'] },
      { type: 'tip', label: '提示·顶端优势', text: '顶端优势是两重性最典型的例子：顶芽产生的生长素向下运输，在侧芽处积累，由于侧芽对生长素更敏感，高浓度抑制了侧芽生长，于是顶芽长得快、侧芽被压住——这就是顶芽优先生长而侧芽受抑制的现象。修剪打顶、棉花摘心就是为了解除顶端优势，让侧枝多长。' },
      { type: 'example', label: '例题·两重性判断', text: '题目：下列现象能体现生长素两重性的是？<br>A. 茎的向光性　B. 根的向地性　C. 无子果实培育　D. 扦插生根<br>解析：两重性要求同一物质既有促进又有抑制。根的向地性中，近地侧生长素浓度高抑制根生长，远地侧浓度低促进根生长，同一器官出现一抑一促，最能体现两重性。茎的向光性两侧都是促进只是程度不同，未体现抑制。答案选根的向地性。' },
      { type: 'keypoint', label: '重点·顶端优势', text: '<strong>顶端优势：</strong>顶芽优先生长而侧芽生长受抑制的现象。原因是顶芽合成的生长素向下运输，在侧芽处积累到较高浓度，侧芽对生长素比顶芽敏感，于是被抑制。生产上摘除顶芽（摘心、打顶）可降低侧芽处生长素浓度，解除抑制，促进侧枝发育，提高棉花、番茄等的产量。' }
    ],
    exercises: [
      { type: 'choice', question: '关于达尔文胚芽鞘向光性实验，下列说法正确的是？', options: ['感受光刺激的部位是尖端下面一段', '弯曲生长的部位是胚芽鞘尖端', '尖端产生的影响可向下面的伸长区传递', '达尔文证明了这种影响是化学物质'], answer: '尖端产生的影响可向下面的伸长区传递', explanation: '达尔文的实验推想：在单侧光下，胚芽鞘尖端产生某种影响并向下传递给伸长区，使背光面比向光面生长快而弯曲。感受光的是尖端，弯曲的是尖端下部，达尔文并未证明它是化学物质（那是温特的工作）。因此正确说法是尖端产生的影响可向下面的伸长区传递。' },
      { type: 'choice', question: '温特实验把接触过尖端的琼脂片放在切去尖端的胚芽鞘一侧，结果会？', options: ['不弯曲不生长', '向放琼脂片对侧弯曲', '向光弯曲', '加速向上生长'], answer: '向放琼脂片对侧弯曲', explanation: '温特实验中，接触过尖端的琼脂片含有生长素，放在切去尖端的胚芽鞘一侧后，该侧生长素多、生长快，胚芽鞘便向对侧（没有生长素的一侧）弯曲，证明促进生长的物质来自尖端且可进入琼脂。未接触尖端的琼脂片对照则不弯曲，从而确认该物质是化学物质。' },
      { type: 'choice', question: '下列关于生长素极性运输的叙述，错误的是？', options: ['方向是从形态学上端到形态学下端', '属于需要能量的主动运输', '只能单向运输不能反向', '极性运输的方向由重力决定可逆转'], answer: '极性运输的方向由重力决定可逆转', explanation: '极性运输是生长素从形态学上端单向运向形态学下端的主动运输，需要载体和能量，与重力无关、不能反向。重力影响的是尖端处的横向运输而非极性运输方向。说极性运输由重力决定且可逆转，违背了极性运输单向、主动的特点，因此是错误的。' },
      { type: 'fill', question: '生长素主要的产生部位是幼嫩的芽、叶和___。', answer: '发育中的种子', explanation: '生长素主要的合成部位是植物体内具有分生能力的幼嫩组织，包括幼嫩的芽、幼叶以及发育中的种子。成熟和衰老的组织产生生长素很少。这些部位细胞分裂旺盛、代谢活跃，是生长素源源不断的来源。' },
      { type: 'fill', question: '顶芽优先生长而侧芽受抑制的现象叫做___；摘除顶芽可___（促进/抑制）侧芽生长。', answer: '顶端优势；促进', explanation: '顶端优势指顶芽优先生长而侧芽生长受抑制的现象，原因是顶芽合成的生长素向下运输并在侧芽积累，高浓度抑制了更敏感侧芽的生长。生产上摘除顶芽（摘心）能降低侧芽处生长素浓度，解除抑制，从而促进侧枝发育，这在棉花、果树修剪中广泛应用。' }
    ]
  });
})();
