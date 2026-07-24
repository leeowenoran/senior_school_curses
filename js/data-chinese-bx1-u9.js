/* ============================================================
 * 高一语文 · 必修 上册 · 附录 积累运用（词语积累与词语解释）
 * 2 课时：丰富词语积累 / 把握古今词义的联系与区别
 * 数据注入：chinese.bx1.points
 * 质量标准：每课 ≥22 内容块 / 3 SVG / 类型齐全（example+table+tip+warn+list+keypoint+poem+heading+paragraph）
 * ============================================================ */
(function () {
  var v = gzGetVolume('chinese', 'bx1');
  if (!v) return;

  v.points.push(
    /* ==================== 第1课 丰富词语积累 ==================== */
    {
      id: 'bx1-u9-l1',
      name: '丰富词语积累',
      author: '附录 · 积累运用',
      chapter: '附录 · 积累运用',
      difficulty: '简单',
      content: [
        { type: 'heading', text: '一、为什么要积累词语' },
        { type: 'paragraph', text: '词语是思维与表达的砖石。一个人的词汇越丰富，观察世界、描写事物就越精细，表达也就越准确、越有文采。教材附录「积累运用」引导我们在阅读中主动建库，让词语真正「活」在自己的语言里。' },
        { type: 'paragraph', text: '从本册课文看，荀子的「锲而不舍」、毛泽东的「生动活泼」、鲁迅的「拿来」、黑塞谈的「修养」……这些词语既是思想的单位，也是文化的结晶。积累词语，其实是在积累前人观察世界的方式。' },
        { type: 'keypoint', label: '重点', text: '积累词语要<strong>「音、形、义、用」四位一体</strong>：不仅会认会写，更要懂含义、知用法、辨感情色彩，才能在表达时信手拈来、用得恰当。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4ee"/><g fill="#fff" stroke="#7a9b3e" stroke-width="2"><rect x="80" y="90" width="120" height="120" rx="8"/><rect x="280" y="90" width="120" height="120" rx="8"/><rect x="480" y="90" width="120" height="120" rx="8"/></g><text x="140" y="150" font-size="14" fill="#3e6b2e" text-anchor="middle">音</text><text x="140" y="180" font-size="12" fill="#3e6b2e" text-anchor="middle">读音</text><text x="340" y="150" font-size="14" fill="#3e6b2e" text-anchor="middle">形</text><text x="340" y="180" font-size="12" fill="#3e6b2e" text-anchor="middle">写法</text><text x="540" y="150" font-size="14" fill="#3e6b2e" text-anchor="middle">义·用</text><text x="540" y="180" font-size="12" fill="#3e6b2e" text-anchor="middle">含义用法</text><text x="340" y="285" font-size="13" fill="#3e6b2e" text-anchor="middle">「音形义用」四位一体，词语才算真掌握</text></svg>', caption: '积词不是背字典，而是把词「音形义用」连成一体。' },
        { type: 'heading', text: '二、古诗文里的词语积累' },
        { type: 'poem', text: '读书破万卷，下笔如有神。\n——杜甫《奉赠韦左丞丈二十二韵》\n积善成德，而神明自得，圣心备焉。\n——荀子《劝学》' },
        { type: 'keypoint', label: '重点·诗文积累', text: '古诗文中的<strong>成语与雅词</strong>是词语积累的富矿：杜甫「<strong>下笔如有神</strong>」讲积累之功，荀子「<strong>积善成德</strong>」讲积累之效。把诗文名句连同语境一起记，词语便有了「根」。' },
        { type: 'heading', text: '三、积累的方法' },
        { type: 'list', items: ['建词语卡片：一词一卡，记读音、释义、例句、近反义', '按主题归类：如「四季」「情绪」「学习」词族', '关注词义轻重、范围、感情色彩（褒贬）', '在写作中主动调用，避免「茶壶煮饺子——有货倒不出」', '勤查权威词典，辨析易混词', '从课文中摘抄雅词成语，建立个人词语本'] },
        { type: 'keypoint', label: '方法·卡片', text: '特别要积累<strong>成语与典雅书面语</strong>（如本册学过的「锲而不舍」「风华正茂」「青出于蓝」），它们能显著提升表达的<strong>准确度与文采</strong>。一张好卡片=音+形+义+例句+近反义+色彩。' },
        { type: 'example', label: '分析示范', text: '如何用「词族归类法」积累与「学习」有关的词语？<br><br><strong>解析</strong>：以「学习」为词族中心，可辐射出：<strong>态度类</strong>（锲而不舍、持之以恒、孜孜不倦）、<strong>方法类</strong>（循序渐进、融会贯通、举一反三）、<strong>成果类</strong>（融会贯通、豁然开朗、下笔如有神）、<strong>反义类</strong>（半途而废、浅尝辄止）。归类后，词语不再是孤零零的散点，而是成网成族，提取时彼此呼应、不易混淆。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 210" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="210" fill="#f3f8fb"/><rect x="50" y="40" width="160" height="130" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="130" y="100" font-size="13" fill="#3e6b2e" text-anchor="middle">建卡片</text><text x="130" y="125" font-size="11" fill="#3e6b2e" text-anchor="middle">音形义用</text><rect x="250" y="40" width="160" height="130" rx="8" fill="#7ec8e3" stroke="#2e6fae" stroke-width="2"/><text x="330" y="100" font-size="13" fill="#0f3b5e" text-anchor="middle">分类族</text><text x="330" y="125" font-size="11" fill="#0f3b5e" text-anchor="middle">主题归档</text><rect x="450" y="40" width="180" height="130" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="540" y="100" font-size="13" fill="#5b3b12" text-anchor="middle">勤使用</text><text x="540" y="125" font-size="11" fill="#5b3b12" text-anchor="middle">写作调用</text><text x="340" y="195" font-size="13" fill="#3e5b6b" text-anchor="middle">积累三步：记 → 类 → 用</text></svg>', caption: '光记不用等于没记；在表达中调用才算「自己的词」。' },
        { type: 'heading', text: '四、易混词与感情色彩' },
        { type: 'keypoint', label: '辨析·色彩', text: '积累时要留意<strong>近义词的细微差别</strong>与<strong>感情色彩</strong>：如「果断」（褒义，决断迅速）与「武断」（贬义，主观臆断）；「成果」（褒）「结果」（中）「后果」（贬）。用错色彩，意思可能完全相反。' },
        { type: 'warn', label: '易错·望文生义', text: '避免<strong>望文生义</strong>：如把「不刊之论」误认为「不能刊登的言论」（其实「刊」是删改，指不可更改的至理）；把「万人空巷」误认为「街上没人」（其实指人都出门、巷子空了）。遇到不确定的词务必查权威词典，不可想当然。' },
        { type: 'table', headers: ['词语', '易误读义', '正确含义', '色彩'], rows: [['不刊之论', '不能刊登的言论', '不可删改的正确言论', '褒义'], ['万人空巷', '街上空无一人', '人都出门、巷空，形容盛况', '中性/褒'], ['文不加点', '文章不加标点', '写文章一气呵成、无需修改', '褒义'], ['首当其冲', '首先冲在前面', '最先遭受冲击或灾难', '中性']] },
        { type: 'list', items: ['积累原则：音形义用四位一体', '方法：卡片法、词族归类法、语境记忆法', '重点积累：成语与典雅书面语', '必查维度：词义轻重、范围、感情色彩', '关键动作：在写作中主动调用', '避坑：切忌望文生义，勤查词典'] },
        { type: 'tip', label: '拓展', text: '数字化时代，可借助<strong>电子词典与词云工具</strong>辅助积累：用「现代汉语词典」小程序查义项，用文档「查找」功能统计自己作文里的高频词，发现用词单调处便有意补充。但工具只是辅助，<strong>亲手抄写、用心体味</strong>仍是内化词语最有效的办法。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'keypoint', label: '落点', text: '词语积累要从本册课文中<strong>摘抄雅词与成语</strong>，做成个人「词语积累本」，并每周在随笔中刻意使用若干，让积累落地生根，使表达日渐准确、丰盈、有文采。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 210" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="210" fill="#eef4ee"/><g font-size="14" text-anchor="middle"><rect x="40" y="55" width="180" height="90" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="130" y="95" fill="#3e6b2e">读课文</text><text x="130" y="118" fill="#3e6b2e" font-size="12">摘雅词</text><rect x="250" y="55" width="180" height="90" rx="8" fill="#7ec8e3" stroke="#2e6fae" stroke-width="2"/><text x="340" y="95" fill="#0f3b5e">建词本</text><text x="340" y="118" fill="#0f3b5e" font-size="12">音形义用</text><rect x="460" y="55" width="180" height="90" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="550" y="95" fill="#5b3b12">勤调用</text><text x="550" y="118" fill="#5b3b12" font-size="12">写作落地</text></g><path d="M220 100 h30 M430 100 h30" stroke="#c0392b" stroke-width="2.5" marker-end="url(#u9a)"/><text x="340" y="185" font-size="13" fill="#3e6b2e" text-anchor="middle">读 → 记 → 用：词语积累的小循环</text><defs><marker id="u9a" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs></svg>', caption: '从课文到词本再到笔端，词语才能真正属于你。' },
        { type: 'list', items: ['词语是思维与表达的砖石，积累越丰表达越准', '掌握标准：音、形、义、用四位一体', '方法：卡片法、词族归类、语境记忆', '重点积累成语与典雅书面语', '警惕望文生义，勤查权威词典', '落点：建词本、勤调用，让积累落地'] }
      ],
      exercises: [
        { type: 'choice', question: '积累词语最该做到的是？', options: ['只要会读就行', '音、形、义、用四位一体', '只背成语不用', '越多越乱'], answer: '音、形、义、用四位一体', explanation: '真正掌握一个词，须同时弄清它的读音、写法、含义与用法（搭配、色彩）。只记音形或只背释义都算「半掌握」，遇到表达仍不会用，故要四位一体，缺一不可。' },
        { type: 'choice', question: '下列做法对词语积累最有帮助的是？', options: ['从不查词典', '建词语卡片并分类、在写作中调用', '只抄不用的好词本', '专背网络流行语'], answer: '建词语卡片并分类、在写作中调用', explanation: '有效积累=记录（卡片）+归类（词族）+使用（写作调用）。被动摘抄而不用，词语难以内化；主动在表达中调用，才能把「别人的词」变「自己的词」，这是积累落地的关键。' },
        { type: 'fill', question: '积累时要关注词的感情色彩，即「褒义、贬义、______（中性）」之分。', answer: '中性', explanation: '词语除褒义（如「坚毅」）、贬义（如「顽固」）外，还有中性（如「结果」「表现」）。辨析感情色彩能避免褒贬误用，使表达准确得体，是词语积累的重要维度，读诗文与写作都须留意。' },
        { type: 'choice', question: '「不刊之论」的正确理解是？', options: ['不能刊登的言论', '不可更改的正确言论（刊：删改）', '未发表的稿件', '荒谬的学说'], answer: '不可更改的正确言论（刊：删改）', explanation: '「刊」古义为削删、更改（如「刊误」）。「不刊之论」指不可删改的至理名言，是褒义。把它望文生义成「不能刊登」，正是积累词语不查词典、不求甚解的典型错误，须引以为戒。' },
        { type: 'choice', question: '为什么教材强调从课文中摘抄雅词成语？', options: ['为了应付听写', '雅词成语能提升表达的准确度与文采', '因为古词更高级', '考试只考成语'], answer: '雅词成语能提升表达的准确度与文采', explanation: '本册学过的「锲而不舍」「风华正茂」等成语与书面雅词，表意凝练、底蕴丰厚。主动积累并在写作中运用，可显著增强语言的表现力与典雅度，这正是附录「积累运用」的用意所在。' }
      ]
    },

    /* ==================== 第2课 把握古今词义的联系与区别 ==================== */
    {
      id: 'bx1-u9-l2',
      name: '把握古今词义的联系与区别',
      author: '附录 · 积累运用',
      chapter: '附录 · 积累运用',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、古今词义的「同」与「异」' },
        { type: 'paragraph', text: '汉语词义在几千年中不断演变。读懂古诗文，必须分清哪些词古今同义、哪些已发生变化，否则极易以今律古、误解文意。把握古今词义，是文言文阅读的基本功。' },
        { type: 'paragraph', text: '词义演变并非杂乱无章，而是有规律可循。前人归纳为几大类型，掌握这些类型，我们就能见一隅而知全体，遇到陌生文言词也能顺着线索去推断。' },
        { type: 'keypoint', label: '重点', text: '词义演变四大类：<strong>词义扩大、缩小、转移、感情色彩变化</strong>。掌握这四类，便能系统辨析古今异义，而不必逐词死记。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3eee8"/><circle cx="340" cy="150" r="90" fill="none" stroke="#7a9b3e" stroke-width="3"/><circle cx="340" cy="150" r="45" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="340" y="155" font-size="13" fill="#3e6b2e" text-anchor="middle">古义</text><text x="340" y="285" font-size="13" fill="#5b4636" text-anchor="middle">词义扩大：今义范围＞古义（如「江」原专长江，今泛指大河）</text></svg>', caption: '「江」「河」原专指长江黄河，今泛指，是典型的词义扩大。' },
        { type: 'heading', text: '二、古诗文中的古今异义例' },
        { type: 'poem', text: '率妻子邑人来此绝境。\n——陶渊明《桃花源记》（妻子：古指妻与子；绝境：古指与世隔绝之地）\n行李之往来，共其乏困。\n——左丘明《左传·烛之武退秦师》（行李：古指外交使者）\n烈士暮年，壮心不已。\n——曹操《龟虽寿》（烈士：古指有操守的刚烈之士）' },
        { type: 'keypoint', label: '重点·关键例', text: '文言中<strong>「走」是「跑」</strong>（如「走马观花」「奔走相告」）；<strong>「行李」是「使者」</strong>（如「行李之往来」）；<strong>「妻子」是「妻与子女」</strong>；<strong>「烈士」是「刚烈有节之士」</strong>。绝不可按今义理解。' },
        { type: 'heading', text: '三、四类演变举隅' },
        { type: 'list', items: ['扩大：江、河（专名→通名）；醒（原指酒醒→睡醒）', '缩小：臭（古指气味，今仅指臭味）；金（古指金属→今黄金）', '转移：走（古指跑，今指步行）；行李（古指使者→今指包裹）', '色彩变化：爪牙（古褒义武臣→今贬义帮凶）'] },
        { type: 'keypoint', label: '警示', text: '辨析古今异义要抓两条线索：一是<strong>义域（范围/对象）变没变</strong>，二是<strong>感情色彩变没变</strong>。「江」「河」是义域扩大，「爪牙」是色彩逆转，抓住线索便能举一反三。' },
        { type: 'example', label: '分析示范', text: '分析「率妻子邑人来此绝境」中「妻子」「绝境」的古今异义。<br><br><strong>解析</strong>：这句话出自《桃花源记》。「妻子」古今都含「妻」，但<strong>古义是「妻和子女」</strong>（妻+子），今义仅指「男子的配偶」，属于<strong>词义缩小</strong>；「绝境」古义指<strong>与世隔绝的地方</strong>，今义指「没有出路的困窘境地」，意义发生<strong>转移</strong>。若按今义理解，桃源就变成了「绝路」，与原意天差地别，可见辨析古今异义关乎文意正误。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 210" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="210" fill="#f3f8fb"/><g font-size="13" fill="#7a5a1e" text-anchor="middle"><text x="110" y="50">扩大</text><text x="280" y="50">缩小</text><text x="450" y="50">转移</text><text x="588" y="50">色彩</text></g><g fill="#caa46a"><circle cx="110" cy="110" r="18"/><circle cx="280" cy="110" r="18"/><circle cx="450" cy="110" r="18"/><circle cx="588" cy="110" r="18"/></g><text x="340" y="185" font-size="13" fill="#3e5b6b" text-anchor="middle">四类演变：抓住「范围 / 对象 / 感情」的变化线索</text></svg>', caption: '辨析古今异义，先看「义域」变没变，再看「色彩」变没变。' },
        { type: 'heading', text: '四、系统辨析与策略' },
        { type: 'keypoint', label: '策略', text: '读文言要<strong>勤查古汉语词典</strong>，建立「古今异义本」；遇到似曾相识的词，先<strong>怀疑它可能不是今义</strong>，再求证。把零散异义词按「扩大/缩小/转移/色彩」归类，记忆更高效。' },
        { type: 'warn', label: '易错·以今律古', text: '切勿<strong>以今律古</strong>：如把「妻子」（古指妻与子）当成「男子的配偶」，把「烈士」（古指有操守的刚烈之士）当成「殉职军人」，把「交通」（古指交错相通）当成「运输行业」。这类词古今字面相同而义迥异，最易误读。' },
        { type: 'table', headers: ['类型', '例词', '古义', '今义', '变化'], rows: [['扩大', '江 / 河', '专指长江 / 黄河', '泛指大江大河', '范围变大'], ['缩小', '臭', '气味（统称）', '难闻的气味', '范围变小'], ['缩小', '金', '金属统称', '黄金', '范围变小'], ['转移', '走', '跑', '步行', '对象转移'], ['转移', '行李', '外交使者', '随身包裹', '对象转移'], ['色彩', '爪牙', '勇武之臣（褒）', '坏人党羽（贬）', '色彩逆转']] },
        { type: 'list', items: ['意义：读懂古诗文须分清古今同义与异义', '四类：扩大、缩小、转移、感情色彩变化', '线索：先看义域（范围/对象）变没变', '线索：再看感情色彩变没变', '方法：建古今异义本，按四类归类', '禁忌：切忌以今律古，勤查古汉词典'] },
        { type: 'tip', label: '拓展', text: '古今词义的演变，折射着<strong>社会生活的变迁</strong>：「江」「河」由专名变通名，因后世河流认知扩大；「臭」由「气味统称」缩为「臭味」，因语言分工细化。了解一点文字学（如《说文解字》）与训诂常识，能帮我们更自觉地把握词义脉络，而非死记硬背。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 210" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="210" fill="#f3eee8"/><g font-size="14" text-anchor="middle"><rect x="40" y="55" width="170" height="90" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="125" y="95" fill="#3e6b2e">见古义</text><text x="125" y="118" fill="#3e6b2e" font-size="12">查词典</text><rect x="250" y="55" width="170" height="90" rx="8" fill="#7ec8e3" stroke="#2e6fae" stroke-width="2"/><text x="335" y="95" fill="#0f3b5e">辨类型</text><text x="335" y="118" fill="#0f3b5e" font-size="12">扩缩转色</text><rect x="460" y="55" width="180" height="90" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="550" y="95" fill="#5b3b12">通文意</text><text x="550" y="118" fill="#5b3b12" font-size="12">不误读</text></g><path d="M210 100 h40 M420 100 h40" stroke="#c0392b" stroke-width="2.5" marker-end="url(#u9b)"/><text x="340" y="185" font-size="13" fill="#5b4636" text-anchor="middle">查 → 辨 → 通：古今异义辨析三步</text><defs><marker id="u9b" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#c0392b"/></marker></defs></svg>', caption: '先查古义、再辨类型，方能准确读懂文言。' },
        { type: 'list', items: ['汉语词义会演变，须分清古今同义与异义', '四大类：扩大、缩小、转移、感情色彩变化', '关键例：走=跑、行李=使者、妻子=妻与子、烈士=刚烈士', '辨析线索：义域变没变、色彩变没变', '方法：建古今异义本，按四类归类记忆', '禁忌：以今律古，遇熟词先存疑再查证'] }
      ],
      exercises: [
        { type: 'choice', question: '「江」「河」在古汉语中本指？', options: ['所有河流', '专指长江、黄河', '小溪', '大海'], answer: '专指长江、黄河', explanation: '上古「江」专指长江、「河」专指黄河，后来词义扩大，泛指一切大江大河。这是「词义扩大」的典型例子，读古文时须还原其专名本义，不可按今义泛化理解。' },
        { type: 'choice', question: '文言「走」的意思是？', options: ['步行', '跑', '停留', '跳跃'], answer: '跑', explanation: '古汉语中「走」是「跑」（如「走马观花」「奔走相告」）。「行」才是步行。以今义把「走」当走路，会严重误解文意，属典型的以今律古，读文言时必须特别警惕。' },
        { type: 'fill', question: '「行李之往来」（《烛之武退秦师》）中「行李」古义指______（外交使者 / 随身包裹）。', answer: '外交使者', explanation: '「行李」古义为外交使者或行人（音近「行理」）。句意为「使者往来（于秦晋之间）」。今义「行李=包裹」是词义转移，读古文必须按古义理解，否则整句逻辑都会错位。' },
        { type: 'choice', question: '「爪牙」一词的古今变化属于？', options: ['词义扩大', '感情色彩变化（古褒义武臣→今贬义帮凶）', '词义缩小', '无变化'], answer: '感情色彩变化（古褒义武臣→今贬义帮凶）', explanation: '「爪牙」在古文中常指勇武的辅臣（如「爪牙之臣」），含褒义；现代则指坏人的党羽、打手，含贬义。义域未变而感情色彩逆转，属「色彩变化」类，辨析时看「感情」而非「范围」。' },
        { type: 'choice', question: '面对文言中「似懂」的词，正确做法是？', options: ['直接按今义理解', '先怀疑可能古今异义，再查古汉词典求证', '跳过不管', '凭感觉猜测'], answer: '先怀疑可能古今异义，再查古汉词典求证', explanation: '文言多「旧词新义」，最忌以今律古。读到眼熟词应先存疑（如「妻子」「烈士」「交通」），再用《古汉语常用字字典》等核实古义，方能准确读懂文本，避免望文生训。' }
      ]
    }
  );
})();
