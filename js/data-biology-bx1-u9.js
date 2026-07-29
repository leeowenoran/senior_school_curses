/* 生物学 · 必修1 分子与细胞 · 第3章 · 课时：第2节 细胞器——系统内的分工合作 */
(function () {
  var v = gzGetVolume('biology', 'bx1');
  if (!v) return;
  v.points.push({
    id: 'bx1-u9',
    name: '第2节 细胞器——系统内的分工合作',
    chapter: '必修1 分子与细胞 · 第3章 细胞的基本结构',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、细胞质与细胞质基质' },
      { type: 'paragraph', text: '细胞质是指细胞膜以内、细胞核以外的全部物质，包括呈胶质状态的<strong>细胞质基质</strong>和悬浮在其中的各种细胞器。细胞质基质是活细胞进行新陈代谢的主要场所，为细胞器提供所需要的原料和环境。' },
      { type: 'list', items: ['细胞质基质：胶质状态，是代谢的主要场所', '细胞器：具有特定形态和功能的小结构', '细胞器在基质中分工合作，像工厂里的不同车间'] },
      { type: 'keypoint', label: '重点·细胞质基质的作用', text: '<strong>细胞质基质是活细胞进行新陈代谢的主要场所，为细胞器的生命活动提供物质和环境条件。</strong>许多化学反应在基质中进行，水、无机盐、糖类、氨基酸等也溶解其中，是细胞器之间物质交换的媒介。' },
      { type: 'heading', text: '二、主要的细胞器及其功能' },
      { type: 'paragraph', text: '细胞里有多种细胞器，各有专长：线粒体是有氧呼吸的主要场所；叶绿体是光合作用的场所；内质网是蛋白质加工和脂质合成车间；高尔基体负责加工、分类和包装；核糖体是蛋白质合成场所；溶酶体分解衰老损伤结构；液泡储存物质；中心体与有丝分裂有关。' },
      { type: 'table', headers: ['细胞器', '结构特点', '主要功能'], rows: [['线粒体', '双层膜，有嵴', '有氧呼吸的主要场所'], ['叶绿体', '双层膜，有类囊体', '光合作用的场所'], ['核糖体', '无膜，含RNA', '蛋白质合成场所'], ['内质网', '单层膜网状', '蛋白质加工、脂质合成'], ['高尔基体', '单层膜囊状', '加工、分类、包装'], ['溶酶体', '单层膜', '分解衰老损伤的细胞结构'], ['液泡', '单层膜', '储存物质、维持形态'], ['中心体', '无膜，两个垂直中心粒', '与有丝分裂有关']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图1 几种重要细胞器</text><ellipse cx="150" cy="130" rx="80" ry="45" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="150" y="135" font-size="14" fill="#2e3a22" text-anchor="middle">线粒体</text><ellipse cx="430" cy="130" rx="80" ry="45" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="430" y="135" font-size="14" fill="#2e3a22" text-anchor="middle">叶绿体</text><circle cx="270" cy="220" r="30" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="270" y="225" font-size="13" fill="#2e3a22" text-anchor="middle">核糖体</text><rect x="340" y="200" width="150" height="44" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="415" y="227" font-size="13" fill="#2e3a22" text-anchor="middle">高尔基体</text><path d="M100 280 q60 -30 140 0 q60 30 120 0" fill="none" stroke="#3f7d1e" stroke-width="2"/><text x="200" y="320" font-size="13" fill="#2e3a22" text-anchor="middle">内质网（网状膜）</text><text x="540" y="280" font-size="13" fill="#5aa832" text-anchor="middle" font-weight="bold">分工合作</text></svg>', caption: '图1 细胞器形态各异，分别承担不同功能。' },
      { type: 'list', items: ['双层膜细胞器：线粒体、叶绿体', '单层膜细胞器：内质网、高尔基体、溶酶体、液泡', '无膜细胞器：核糖体、中心体'] },
      { type: 'example', label: '例题·细胞器分类', text: '下列细胞器中，具有双层膜结构的是哪两个？<br>解：细胞中具有双层膜的结构是线粒体和叶绿体；内质网、高尔基体等是单层膜；核糖体、中心体无膜。<br>答：线粒体和叶绿体具有双层膜。' },
      { type: 'warn', label: '易错·三个区分点', text: '① 光学显微镜（显微）能看到叶绿体、线粒体、液泡等较大结构，更细微的结构需电子显微镜（亚显微）；② 核糖体、中心体没有膜结构，不要误以为所有细胞器都有膜；③ 中心体存在于动物细胞和低等植物细胞中，与有丝分裂有关，高等植物没有中心体。' },
      { type: 'tip', label: '提示·巧记膜结构', text: '双层膜记两个：线（线粒体）叶（叶绿体）；无膜记两个：核（核糖体）中（中心体）。其余常见的内质网、高尔基体、溶酶体、液泡都是单层膜。这样分类记忆，做题不容易混。' },
      { type: 'heading', text: '三、分泌蛋白的合成与运输' },
      { type: 'paragraph', text: '有些蛋白质在细胞内合成后要分泌到细胞外起作用，如消化酶、抗体、部分激素，这类叫<strong>分泌蛋白</strong>。它的合成和运输像一条流水线：在核糖体上合成，进入内质网加工，再运到高尔基体进一步加工和包装，最后通过细胞膜分泌出去，整个过程由线粒体提供能量。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图2 分泌蛋白的合成与运输路径</text><circle cx="90" cy="170" r="34" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="90" y="175" font-size="13" fill="#2e3a22" text-anchor="middle">核糖体</text><polygon points="124,170 168,158 168,182" fill="#3f7d1e"/><rect x="170" y="142" width="130" height="56" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="235" y="175" font-size="13" fill="#2e3a22" text-anchor="middle">内质网</text><polygon points="300,170 344,158 344,182" fill="#3f7d1e"/><rect x="346" y="142" width="130" height="56" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="411" y="175" font-size="13" fill="#2e3a22" text-anchor="middle">高尔基体</text><polygon points="476,170 520,158 520,182" fill="#3f7d1e"/><rect x="522" y="142" width="120" height="56" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="582" y="175" font-size="13" fill="#2e3a22" text-anchor="middle">细胞膜</text><text x="340" y="290" font-size="13" fill="#5aa832" text-anchor="middle" font-weight="bold">线粒体全程供能</text></svg>', caption: '图2 分泌蛋白经核糖体→内质网→高尔基体→细胞膜，线粒体供能。' },
      { type: 'example', label: '例题·放射性追踪', text: '科学家用放射性标记的氨基酸培养细胞，发现放射性先出现在核糖体，后到内质网、高尔基体，最后到细胞外。这说明了什么？<br>解：放射性标记的氨基酸是合成蛋白质的原料，它依次经过核糖体、内质网、高尔基体、细胞膜，说明分泌蛋白在这些结构中依次加工并运输出细胞。<br>答：说明分泌蛋白在核糖体合成后，经内质网和高尔基体加工，由细胞膜分泌出去。' },
      { type: 'heading', text: '四、细胞的生物膜系统' },
      { type: 'paragraph', text: '细胞中的<strong>细胞膜、细胞器膜和核膜</strong>等结构，在组成成分和结构上很相似，在结构和功能上紧密联系，共同构成细胞的生物膜系统。内质网膜向内连核膜、向外连细胞膜，像一张大网把各种膜联系起来。生物膜系统保证了细胞内生命活动高效、有序地进行。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图3 细胞的生物膜系统</text><circle cx="340" cy="170" r="50" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="175" font-size="14" fill="#2e3a22" text-anchor="middle">内质网</text><rect x="120" y="140" width="120" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="180" y="175" font-size="13" fill="#2e3a22" text-anchor="middle">核膜</text><polygon points="240,170 290,158 290,182" fill="#3f7d1e"/><rect x="480" y="140" width="120" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="540" y="175" font-size="13" fill="#2e3a22" text-anchor="middle">细胞膜</text><polygon points="390,170 478,158 478,182" fill="#3f7d1e"/><text x="340" y="290" font-size="13" fill="#2e3a22" text-anchor="middle">内质网把核膜、细胞膜和多种细胞器膜连成统一整体。</text></svg>', caption: '图3 生物膜系统由细胞膜、细胞器膜和核膜共同构成。' },
      { type: 'keypoint', label: '重点·生物膜系统的意义', text: '<strong>生物膜系统由细胞膜、细胞器膜和核膜等构成，在结构和功能上紧密联系。</strong>它使细胞内部区域化，保证多种化学反应同时进行又互不干扰；广阔的膜面积为酶提供附着点；核膜、内质网、细胞膜之间的直接或间接联系，使物质运输和信息传递更高效有序。' }
    ],
    exercises: [
      { type: 'choice', question: '下列细胞器中，没有膜结构的是？', options: ['线粒体和叶绿体', '内质网和高尔基体', '核糖体和中心体', '溶酶体和液泡'], answer: '核糖体和中心体', explanation: '细胞器按膜结构可分为三类：双层膜的线粒体和叶绿体；单层膜的内质网、高尔基体、溶酶体、液泡；无膜的核糖体和中心体。核糖体由RNA和蛋白质组成，中心体由两个垂直的中心粒构成，二者都没有膜结构。因此选核糖体和中心体。' },
      { type: 'choice', question: '分泌蛋白合成和分泌的路径，正确的顺序是？', options: ['核糖体→高尔基体→内质网→细胞膜', '核糖体→内质网→高尔基体→细胞膜', '内质网→核糖体→高尔基体→细胞膜', '高尔基体→核糖体→内质网→细胞膜'], answer: '核糖体→内质网→高尔基体→细胞膜', explanation: '分泌蛋白在游离或附着核糖体上合成肽链，进入内质网进行初步加工，形成囊泡运到高尔基体进一步加工、分类和包装，再以囊泡与细胞膜融合分泌到细胞外，整个过程由线粒体供能。因此正确顺序是核糖体→内质网→高尔基体→细胞膜。' },
      { type: 'choice', question: '细胞的生物膜系统不包括下列哪一项？', options: ['细胞膜', '细胞器膜', '核膜', '细胞壁'], answer: '细胞壁', explanation: '生物膜系统由细胞内的膜结构共同构成，包括细胞膜、细胞器膜和核膜。这些膜在组成成分和结构上相似，在结构和功能上紧密联系。细胞壁位于植物细胞最外层，主要成分为纤维素和果胶，不是膜结构，因此不属于生物膜系统。' },
      { type: 'fill', question: '有氧呼吸的主要场所是___，它具双层膜结构。', answer: '线粒体', explanation: '线粒体是细胞进行有氧呼吸的主要场所，被称为细胞的动力车间。它具有双层膜，内膜向内折叠形成嵴，扩大了酶附着面积。生命活动所需能量大约95%来自线粒体，因此线粒体是细胞能量供应的中心。' },
      { type: 'fill', question: '蛋白质的合成场所是___，它不含膜结构。', answer: '核糖体', explanation: '核糖体是由RNA和蛋白质组成的无膜细胞器，是细胞内合成蛋白质的车间。它有的附着在内质网上，有的游离在细胞质基质中。分泌蛋白和胞内蛋白都在核糖体上以氨基酸为原料合成肽链，再进入相应结构进一步加工。' }
    ]
  });
})();
