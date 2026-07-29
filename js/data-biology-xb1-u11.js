/* 生物学 · 选择性必修1 稳态与调节 · 第4章 · 课时：第3节 免疫失调 */
(function () {
  var v = gzGetVolume('biology', 'xb1');
  if (!v) return;
  v.points.push({
    id: 'xb1-u11',
    name: '第3节 免疫失调',
    chapter: '选择性必修1 稳态与调节 · 第4章 免疫调节',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、免疫失调可以分为哪三类' },
      { type: 'paragraph', text: '正常情况下，免疫系统能准确识别「自己」和「非己」，保护我们不被感染。但有时这套系统会「出错」：要么反应过度，要么认错对象，要么火力不足。这些异常统称为<strong>免疫失调</strong>，主要包括过敏反应、自身免疫病和免疫缺陷病三大类。' },
      { type: 'list', items: ['过敏反应：已免疫的机体再次接触相同抗原引发的组织损伤或功能紊乱', '自身免疫病：免疫系统把自身物质当外来异物攻击', '免疫缺陷病：免疫功能不足或缺乏导致的疾病'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">免疫失调的三大类型</text><rect x="40" y="70" width="190" height="150" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="135" y="108" font-size="15" fill="#2e3a22" text-anchor="middle" font-weight="bold">过敏反应</text><text x="135" y="140" font-size="12" fill="#2e3a22" text-anchor="middle">反应过度</text><text x="135" y="164" font-size="12" fill="#2e3a22" text-anchor="middle">对外来无害物</text><rect x="245" y="70" width="190" height="150" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="108" font-size="15" fill="#2e3a22" text-anchor="middle" font-weight="bold">自身免疫病</text><text x="340" y="140" font-size="12" fill="#2e3a22" text-anchor="middle">敌我不分</text><text x="340" y="164" font-size="12" fill="#2e3a22" text-anchor="middle">攻击自身组织</text><rect x="450" y="70" width="190" height="150" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="545" y="108" font-size="15" fill="#2e3a22" text-anchor="middle" font-weight="bold">免疫缺陷病</text><text x="545" y="140" font-size="12" fill="#2e3a22" text-anchor="middle">火力不足</text><text x="545" y="164" font-size="12" fill="#2e3a22" text-anchor="middle">易受感染</text><text x="340" y="290" font-size="13" fill="#2e3a22" text-anchor="middle">过敏＝过度，自免＝认错，缺陷＝不足，三类病因不同。</text></svg>', caption: '图1　免疫失调分为过敏反应、自身免疫病和免疫缺陷病三类。' },
      { type: 'keypoint', label: '重点·三类核心区别', text: '<strong>三类免疫失调的核心区别：</strong>过敏反应是「反应过度」；自身免疫病是「敌我不分」；免疫缺陷病是「火力不足」。抓住这三个关键词，就能快速判断题目描述的是哪一类。' },
      { type: 'heading', text: '二、过敏反应' },
      { type: 'paragraph', text: '<strong>过敏反应</strong>是指已经产生免疫的机体，在再次接受相同抗原（即过敏原，如花粉、海鲜、青霉素）刺激时，所发生的组织损伤或功能紊乱。第一次接触时身体只是「记下」了过敏原，并不发病；第二次再遇到才会发作。' },
      { type: 'list', items: ['发作迅速、反应强烈、消退较快', '一般不会破坏组织细胞，也不会引起严重的组织损伤', '有明显的遗传倾向和个体差异'] },
      { type: 'table', headers: ['特点', '说明'], rows: [['发作迅速强烈', '接触后很快出现症状'], ['消退较快', '脱离过敏原后症状易缓解'], ['不破坏组织细胞', '通常不造成永久性损伤'], ['遗传倾向', '家族中多人易对同一物质过敏']] },
      { type: 'warn', label: '易错·过敏不破坏组织', text: '易错点：过敏反应发作快、消退也快，而且一般不破坏组织细胞，这与严重的感染不同。有人误以为过敏「很危险所以一定破坏组织」，其实多数过敏只是难受而非破坏。另外，过敏有明显的遗传倾向和个体差异，同样接触花粉，有人没事有人犯病。' },
      { type: 'example', label: '例题·过敏特点', text: '题目：下列属于过敏反应特点的是？<br>A. 发作缓慢　B. 一般破坏组织细胞　C. 消退较慢　D. 有明显遗传倾向<br>解析：过敏反应的特点是发作迅速、反应强烈、消退较快，一般不破坏组织细胞，且有明显遗传倾向和个体差异。A、B、C三项都与之相反，只有D符合，所以选有明显遗传倾向。' },
      { type: 'heading', text: '三、自身免疫病' },
      { type: 'paragraph', text: '<strong>自身免疫病</strong>是免疫系统异常敏感、反应过度，把自身正常的组织器官当成「外来敌人」发动攻击而引起的疾病。正常时免疫系统能区分自己和非己，患病时这道「识别关」出了差错。' },
      { type: 'list', items: ['类风湿关节炎：免疫系统攻击关节组织', '系统性红斑狼疮：攻击全身多器官', '常见共同点是免疫系统敌我不分'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">自身免疫病：免疫系统攻击自身组织</text><rect x="60" y="70" width="200" height="120" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="160" y="108" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">免疫系统</text><text x="160" y="138" font-size="12" fill="#2e3a22" text-anchor="middle">本应识别非己</text><polygon points="261,130 298,118 298,142" fill="#3f7d1e"/><rect x="300" y="70" width="200" height="120" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="400" y="108" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">误判</text><text x="400" y="138" font-size="12" fill="#2e3a22" text-anchor="middle">把自身当敌人</text><polygon points="501,130 538,118 538,142" fill="#3f7d1e"/><rect x="540" y="70" width="140" height="120" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="610" y="108" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">自身组织</text><text x="610" y="138" font-size="12" fill="#2e3a22" text-anchor="middle">被攻击受损</text><text x="340" y="290" font-size="13" fill="#2e3a22" text-anchor="middle">类风湿关节炎、系统性红斑狼疮都是典型例子。</text></svg>', caption: '图2　自身免疫病中，免疫系统敌我不分，攻击自身正常组织。' },
      { type: 'tip', label: '提示·过敏与自免', text: '区分过敏和自身免疫病：过敏是「对无害的外来物反应过度」，过敏原本身是外来的；自身免疫病是「把自己的正常组织当敌人」，攻击对象是自身成分。一个对外、一个对内，这是判断的关键。' },
      { type: 'heading', text: '四、免疫缺陷病' },
      { type: 'paragraph', text: '<strong>免疫缺陷病</strong>是指机体免疫功能不足或缺乏，导致易受感染的一类疾病。免疫功能「火力不足」，病原体就会乘虚而入，患者往往反复发生严重感染。' },
      { type: 'list', items: ['先天性免疫缺陷病：生来就有，与遗传有关', '获得性免疫缺陷病：后天因素导致，如艾滋病'] },
      { type: 'paragraph', text: '典型的获得性免疫缺陷病是<strong>艾滋病</strong>，由<strong>HIV</strong>病毒引起。HIV专门攻击人体的T细胞，使免疫系统逐渐瘫痪，患者最终常因普通感染或肿瘤而死亡。' },
      { type: 'table', headers: ['类型', '病因举例'], rows: [['先天性免疫缺陷病', '遗传导致，生来免疫功能不全'], ['获得性免疫缺陷病', '如艾滋病，由HIV病毒破坏T细胞引起']] },
      { type: 'warn', label: '易错·HIV攻击T细胞', text: '易错点：HIV攻击的是T细胞（尤其是辅助性T细胞），不是B细胞，也不是红细胞。T细胞大量死亡会使体液免疫和细胞免疫都受严重影响。此外，艾滋病属于「获得性」免疫缺陷病，不要和先天性的混淆。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">HIV破坏免疫系统导致免疫缺陷</text><rect x="60" y="70" width="220" height="120" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="170" y="108" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">HIV病毒</text><text x="170" y="138" font-size="12" fill="#2e3a22" text-anchor="middle">专门攻击T细胞</text><polygon points="281,130 318,118 318,142" fill="#3f7d1e"/><rect x="320" y="70" width="220" height="120" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="430" y="108" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">T细胞大量死亡</text><text x="430" y="138" font-size="12" fill="#2e3a22" text-anchor="middle">免疫逐渐瘫痪</text><polygon points="541,130 578,118 578,142" fill="#3f7d1e"/><rect x="580" y="70" width="100" height="120" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="630" y="108" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">易感染</text><text x="630" y="138" font-size="12" fill="#2e3a22" text-anchor="middle">免疫缺陷</text><text x="340" y="290" font-size="13" fill="#2e3a22" text-anchor="middle">艾滋病由HIV引起，属于获得性免疫缺陷病。</text></svg>', caption: '图3　HIV攻击T细胞，导致免疫缺陷，引发艾滋病。' },
      { type: 'tip', label: '提示·预防艾滋病', text: '预防艾滋病的关键：HIV主要通过性接触、血液和母婴三种途径传播。日常生活中与感染者握手、共餐、拥抱不会传染。了解传播途径、避免危险行为、拒绝共用针具，是有效的预防方法。' },
      { type: 'keypoint', label: '重点·三类小结', text: '<strong>三类免疫失调小结：</strong>过敏反应——反应过度（对外来无害物）；自身免疫病——敌我不分（攻自身）；免疫缺陷病——火力不足（易感染）。其中艾滋病是获得性免疫缺陷病的代表，由HIV破坏T细胞所致。' }
    ],
    exercises: [
      { type: 'choice', question: '下列关于过敏反应特点的叙述，正确的是？', options: ['发作缓慢', '一般不破坏组织细胞', '消退很慢', '无遗传倾向'], answer: '一般不破坏组织细胞', explanation: '过敏反应是已免疫机体再次接触相同过敏原时发生的，特点是发作迅速、反应强烈、消退较快，一般不会破坏组织细胞，也不引起严重组织损伤，而且有明显遗传倾向和个体差异。因此发作缓慢、消退很慢、无遗传倾向都不符合，正确的是一般不破坏组织细胞。' },
      { type: 'choice', question: '下列属于自身免疫病的是？', options: ['荨麻疹', '类风湿关节炎', '艾滋病', '过敏性鼻炎'], answer: '类风湿关节炎', explanation: '自身免疫病是免疫系统把自身物质当作外来异物攻击引起的疾病，如类风湿关节炎、系统性红斑狼疮。荨麻疹和过敏性鼻炎属于过敏反应，是对外来无害物质反应过度；艾滋病属于免疫缺陷病。所以只有类风湿关节炎是自身免疫病。' },
      { type: 'choice', question: '引起艾滋病的病原体是？', options: ['流感病毒', 'HIV', '乙肝病毒', '疱疹病毒'], answer: 'HIV', explanation: '艾滋病全称获得性免疫缺陷综合征，是由人类免疫缺陷病毒HIV引起的。HIV专门攻击人体的T细胞，使免疫系统功能逐渐丧失，患者易发严重感染和肿瘤。流感病毒、乙肝病毒、疱疹病毒都不导致艾滋病，因此选HIV。' },
      { type: 'fill', question: '已经产生免疫的机体，在再次接受相同___时发生的组织损伤或功能紊乱，称为过敏反应。', answer: '抗原', explanation: '过敏反应的发生需要两个条件：机体先前已经对该物质产生免疫，并且再次接触相同的抗原（过敏原）。第一次接触只会使身体致敏而不发病，再次接触才会引发症状。所以过敏反应是再次接受相同抗原刺激引起的，空白处填抗原。' },
      { type: 'fill', question: '免疫缺陷病按病因可分为先天性免疫缺陷病和___两大类。', answer: '获得性免疫缺陷病', explanation: '免疫缺陷病是免疫功能不足或缺乏导致的疾病，分为两类：一类是生来就有的先天性免疫缺陷病，与遗传有关；另一类是后天获得的获得性免疫缺陷病，如艾滋病由HIV破坏T细胞引起。因此与先天性相对应的另一类是获得性免疫缺陷病。' }
    ]
  });
})();
