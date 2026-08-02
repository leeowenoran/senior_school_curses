/* 生物学 · 高三复习 · 稳态与调节 · 第5章 · 课时：第1节 植物生长素（二）两重性与应用 */
(function () {
  var v = gzGetVolume('biology', 'zt3');
  if (!v) return;
  v.points.push({
    id: 'zt3-u19',
    name: '第1节 植物生长素（二）两重性与应用',
    chapter: '稳态与调节 · 第5章 植物生命活动的调节',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、生长素作用的两重性' },
      { type: 'paragraph', text: '生长素对植物生长的作用有个很特别的特点：<strong>低浓度促进生长，高浓度抑制生长</strong>，这就是「两重性」。可以把它比作施肥——适量施肥庄稼长得壮（促进），施肥过量反而烧苗（抑制）。所以生长素不是「越多越好」，浓度才是关键。而且不同器官对生长素的敏感度不同：根最敏感，茎最迟钝，芽居中。' },
      { type: 'list', items: ['低浓度促进生长，高浓度抑制生长', '根对生长素最敏感，茎最不敏感，芽居中', '同一浓度对不同器官可能一促一抑', '两重性是解释顶端优势、根的向地性的基础'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图1 生长素作用的两重性曲线</text><line x1="90" y1="270" x2="630" y2="270" stroke="#3f7d1e" stroke-width="2"/><line x1="90" y1="270" x1="90" y2="70" stroke="#3f7d1e" stroke-width="2"/><path d="M90 200 Q200 120 300 200 Q380 265 630 250" stroke="#3f7d1e" stroke-width="3" fill="none"/><polygon points="300,196 318,186 320,206" fill="#3f7d1e"/><text x="300" y="290" font-size="12" fill="#2e3a22" text-anchor="middle">最适浓度</text><text x="180" y="160" font-size="12" fill="#5aa832" text-anchor="middle">低浓度促进</text><text x="470" y="235" font-size="12" fill="#5aa832" text-anchor="middle">高浓度抑制</text><text x="340" y="305" font-size="13" fill="#2e3a22" text-anchor="middle">曲线在横轴之上为促进，之下为抑制，过最适点后随浓度升高转为抑制。</text></svg>', caption: '图1　生长素浓度低促高抑，超过最适浓度后转为抑制。' },
      { type: 'keypoint', label: '重点·两重性的含义', text: '<strong>两重性：</strong>指生长素在低浓度时促进植物生长，浓度过高时反而抑制生长的现象。它取决于浓度和器官种类：根最敏感、芽次之、茎最不敏感。正因如此，同一浓度的生长素对根可能是抑制、对茎却仍是促进。两重性是顶端优势、根的向地性等现象的理论基础。' },
      { type: 'heading', text: '二、典型实例：顶端优势' },
      { type: 'paragraph', text: '<strong>顶端优势</strong>是指顶芽优先生长、侧芽受抑制的现象。原因很巧妙：顶芽产生的生长素向下运输，在侧芽处积累，而侧芽对生长素比顶芽敏感，浓度一高就被抑制，于是「顶芽占着资源、侧芽长不动」。这像单位里「一把手」太强势，把养分都吸走，下属得不到发展。如果摘掉顶芽，侧芽处生长素浓度下降，就解除抑制、开始发育。' },
      { type: 'list', items: ['顶芽产生生长素，向下极性运输', '生长素在侧芽积累，浓度过高抑制侧芽', '侧芽对生长素比顶芽更敏感', '去掉顶芽 → 侧芽浓度下降 → 侧芽发育成枝'] },
      { type: 'warn', label: '易错·去顶芽促进侧芽不是因为没了竞争', text: '顶端优势中侧芽被抑制的直接原因是「侧芽生长素浓度过高」，而不是顶芽和侧芽抢阳光或抢养分那么简单。去掉顶芽后，不再有生长素向下运来，侧芽浓度降低，才恢复生长。考题常问「去掉顶芽侧芽为何发育」，要答「侧芽生长素浓度降低、解除抑制」，而不仅仅是「减少竞争」。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图2 顶端优势：顶芽抑制侧芽</text><rect x="300" y="70" width="80" height="50" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="100" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">顶芽</text><rect x="220" y="150" width="60" height="40" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="250" y="175" font-size="12" fill="#2e3a22" text-anchor="middle">侧芽受抑</text><rect x="400" y="150" width="60" height="40" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="430" y="175" font-size="12" fill="#2e3a22" text-anchor="middle">侧芽受抑</text><polygon points="310,120 305,142 325,142" fill="#3f7d1e"/><polygon points="370,120 375,142 355,142" fill="#3f7d1e"/><text x="340" y="245" font-size="13" fill="#2e3a22" text-anchor="middle">顶芽生长素下运，侧芽浓度过高被抑制；去顶芽后侧芽发育。</text></svg>', caption: '图2　顶芽产生的生长素抑制侧芽，去除顶芽可解除顶端优势。' },
      { type: 'heading', text: '三、生长素类似物的应用' },
      { type: 'paragraph', text: '<strong>生长素类似物</strong>是人造的、作用和天然生长素相似的物质（如萘乙酸、2,4-D）。人们利用两重性和生长素的功能来服务农业园艺：促进扦插枝条生根、防止落花落果（或反之疏花疏果）、培育无子果实。比如用生长素类似物泡枝条基部，它更容易长根；给番茄花喷一定浓度生长素，能结出无籽果实。' },
      { type: 'list', items: ['促进扦插枝条生根：泡基部提高成活率', '防止落花落果：保花保果提高产量', '疏花疏果：高浓度反而疏除过多花果', '培育无子果实：刺激子房发育成果实'] },
      { type: 'table', headers: ['生长素类似物应用', '原理', '浓度特点'], rows: [['促进扦插生根', '刺激枝条基部分化根', '适宜浓度'], ['保花保果', '防止离层形成脱落', '低浓度'], ['疏花疏果', '高浓度诱导器官脱落', '高浓度'], ['培育无子果实', '刺激子房发育成果实', '一定浓度、未受粉']] },
      { type: 'keypoint', label: '重点·生长素类似物应用', text: '<strong>生长素类似物应用：</strong>①促进扦插枝条生根；②防止落花落果（低浓度保果），也可在高浓度时用于疏花疏果；③用一定浓度生长素类似物处理未受粉的雌蕊柱头，刺激子房发育成无子果实（如香蕉、无子番茄）。注意浓度要恰当，过犹不及正是两重性的体现。' },
      { type: 'example', label: '例题·顶端优势与摘心', text: '题目：园艺上给棉花「摘心」是为了？<br>A. 增强顶端优势　B. 解除顶端优势促侧枝<br>C. 减少光合作用　D. 促进顶芽生长<br>解析：摘心即去掉顶芽。顶芽被去除后，不再向下运输过多生长素，侧芽处浓度下降、解除抑制而发育成侧枝，从而多开花结果。这正是解除顶端优势、促进侧枝生长的措施。因此选解除顶端优势促侧枝。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图3 生长素类似物的农业应用</text><rect x="50" y="100" width="170" height="80" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="135" y="130" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">促扦插生根</text><text x="135" y="156" font-size="11" fill="#5aa832" text-anchor="middle">泡基部长根</text><rect x="255" y="100" width="170" height="80" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="130" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">保花保果</text><text x="340" y="156" font-size="11" fill="#5aa832" text-anchor="middle">防落花落果</text><rect x="460" y="100" width="170" height="80" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="545" y="130" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">无子果实</text><text x="545" y="156" font-size="11" fill="#5aa832" text-anchor="middle">刺激子房发育</text><polygon points="220,140 244,133 244,147" fill="#3f7d1e"/><polygon points="425,140 449,133 449,147" fill="#3f7d1e"/><text x="340" y="240" font-size="13" fill="#2e3a22" text-anchor="middle">利用两重性与生长素功能，生长素类似物广泛用于生产和园艺。</text></svg>', caption: '图3　生长素类似物在促生根、保果、培育无子果实等方面的应用。' },
      { type: 'tip', label: '提示·高考考点速记', text: '两重性和顶端优势是植物调节的高频考点。三句话记牢：①「低促高抑」叫两重性；②顶端优势=顶芽运下的生长素抑制侧芽，去顶芽即解除；③应用上「促进生根、保花保果、无子果实」都是生长素类似物的功劳。浓度写「一定浓度」或「适宜浓度」，别写死具体数值。' },
      { type: 'warn', label: '易错·无子果实不等于无子种子', text: '用生长素类似物培育的无子番茄，是子房直接发育成果实，里面没有种子，但果实本身是真正的果实。它和三倍体无子西瓜不同：无子西瓜是染色体变异导致不能形成种子，无子番茄是没受粉、靠外源生长素「骗」子房发育。另外高浓度生长素类似物可疏花疏果，与低浓度保果作用相反，都是两重性。' }
    ],
    exercises: [
      { type: 'choice', question: '生长素作用的两重性是指？', options: ['高浓度促进、低浓度抑制', '低浓度促进、高浓度抑制', '浓度越高促进作用越强', '浓度与效应无关'], answer: '低浓度促进、高浓度抑制', explanation: '生长素作用具有两重性：在低浓度时促进植物生长，浓度过高时反而抑制生长，超过最适浓度后抑制效应随浓度升高而增强。根、芽、茎对生长素敏感度不同，是两重性的具体表现。因此正确说法为低浓度促进、高浓度抑制。' },
      { type: 'choice', question: '植物顶端优势形成的主要原因是？', options: ['顶芽争夺更多阳光', '顶芽产生生长素下运抑制侧芽', '侧芽缺乏叶绿体', '根供给侧芽的水不足'], answer: '顶芽产生生长素下运抑制侧芽', explanation: '顶芽产生的生长素通过极性运输向下积累在侧芽部位，而侧芽对生长素比顶芽敏感，浓度过高时被抑制，从而形成顶芽优先生长、侧芽受抑的顶端优势。去掉顶芽后侧芽浓度下降、解除抑制而发育。因此不是因为争阳光或水分，而是生长素浓度差异造成的。' },
      { type: 'choice', question: '用一定浓度生长素类似物处理未受粉番茄雌蕊，可得到？', options: ['有子果实', '无子果实', '加倍植株', '畸形叶片'], answer: '无子果实', explanation: '生长素类似物能刺激子房直接发育成果实。用一定浓度处理未受粉的番茄雌蕊柱头，子房在没有种子形成的情况下也能发育成果实，从而获得无子番茄。这不是染色体变异，而是外源生长素替代种子提供的生长素促进果实发育。因此答案是无子果实。' },
      { type: 'fill', question: '生长素的两重性表现为低浓度___生长，高浓度___生长；同一浓度对根可能是抑制、对茎仍可能是___。', answer: '促进；抑制；促进', explanation: '生长素作用的两重性指低浓度促进、高浓度抑制生长。由于根、芽、茎对生长素的敏感度不同（根最敏感、茎最不敏感），同一浓度的生长素对根可能已达抑制水平，对茎却仍在促进范围内，所以会出现对同一浓度不同器官一促一抑的现象。这是两重性与器官敏感差异共同决定的。' },
      { type: 'fill', question: '顶端优势中侧芽受抑制是因为生长素浓度过___；农业生产中去掉顶芽（摘心）可___顶端优势，促进侧枝发育。', answer: '高；解除', explanation: '顶芽产生的生长素向下运输并在侧芽积累，侧芽对生长素敏感，浓度过高而被抑制，形成顶端优势。摘除顶芽后，生长素来源减少，侧芽处浓度下降，抑制被解除，侧芽便发育成侧枝。生产中摘心、打顶正是利用这一原理，让棉花、果树多分枝、多开花结果。' }
    ]
  });
})();
