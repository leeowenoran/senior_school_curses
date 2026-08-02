/* 生物学 · 高三复习 · 稳态与调节 · 第4章 · 课时：第3节 免疫失调 */
(function () {
  var v = gzGetVolume('biology', 'zt3');
  if (!v) return;
  v.points.push({
    id: 'zt3-u17',
    name: '第3节 免疫失调',
    chapter: '稳态与调节 · 第4章 免疫调节',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、免疫失调的三类问题' },
      { type: 'paragraph', text: '正常的免疫功能是「保护神」，但免疫也有「发脾气」或「罢工」的时候。当免疫系统反应过强、认错对象或能力不足，就会出现<strong>免疫失调</strong>。高中重点掌握三类：过敏反应、自身免疫病、免疫缺陷病。可以打个比方：过敏是「草木皆兵」，自身免疫病是「误伤自己人」，免疫缺陷病是「兵力不足」。' },
      { type: 'list', items: ['过敏反应：免疫系统对无害抗原反应过强', '自身免疫病：把自身物质当成外来敌人攻击', '免疫缺陷病：免疫功能不足或先天缺乏'] },
      { type: 'table', headers: ['类型', '本质', '典型例子', '关键特征'], rows: [['过敏反应', '免疫过强（对无害原）', '花粉、海鲜、青霉素过敏', '再接触发作、不伤细胞、有遗传倾向'], ['自身免疫病', '误攻自身组织', '类风湿关节炎、系统性红斑狼疮', '攻击自身正常物质'], ['免疫缺陷病', '功能不足或缺失', '艾滋病、先天性胸腺发育不良', '易感染、HIV攻辅助性T细胞']] },
      { type: 'heading', text: '二、过敏反应' },
      { type: 'paragraph', text: '<strong>过敏反应</strong>是指已免疫的机体，在再次接受相同抗原（叫过敏原，如花粉、某些食物、药物）时所发生的组织损伤或功能紊乱。注意必须是「再次」接触才会发作——第一次接触往往只是让身体「记下」了过敏原，并不发病。常见例子有花粉过敏打喷嚏、吃海鲜起疹子、青霉素过敏休克等。' },
      { type: 'list', items: ['发作迅速、反应强烈、消退也快', '一般不会破坏组织细胞，也不会引起组织严重损伤', '有明显的遗传倾向和个体差异', '常见过敏原：花粉、海鲜、芒果、青霉素等药物'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图1 过敏反应发生的两个条件</text><rect x="60" y="100" width="240" height="80" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="180" y="130" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">初次接触过敏原</text><text x="180" y="156" font-size="12" fill="#5aa832" text-anchor="middle">机体产生抗体致敏</text><polygon points="302,140 328,133 328,147" fill="#3f7d1e"/><rect x="340" y="100" width="280" height="80" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="480" y="130" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">再次接触相同过敏原</text><text x="480" y="156" font-size="12" fill="#5aa832" text-anchor="middle">释放组织胺引发症状</text><text x="340" y="240" font-size="13" fill="#2e3a22" text-anchor="middle">只有已致敏的机体再次遇到相同过敏原，才会发生过敏反应。</text></svg>', caption: '图1　过敏反应需初次致敏、再次接触相同过敏原才会发作。' },
      { type: 'warn', label: '易错·过敏反应不破坏组织细胞', text: '过敏反应和体液免疫都用抗体，但过敏的抗体（主要是IgE）吸附在皮肤、呼吸道或消化道黏膜的某个细胞表面。过敏反应一般发作快、消退也快，通常不破坏组织细胞，也不会造成严重损伤（除非过敏性休克抢救不及）。这和「自身免疫病会攻击并破坏自身组织」不同，二者别混。' },
      { type: 'keypoint', label: '重点·过敏反应的要点', text: '<strong>过敏反应要点：</strong>①必须是已免疫（致敏）机体；②必须是再次接受相同过敏原；③特点是发作迅速、反应强烈、消退较快；④一般不破坏组织细胞；⑤有遗传倾向和个体差异。一句话记：已致敏、再接触、同过敏原、来得快去得也快。' },
      { type: 'heading', text: '三、自身免疫病' },
      { type: 'paragraph', text: '<strong>自身免疫病</strong>是免疫系统「认友为敌」，把自身的正常物质当成外来抗原进行攻击，结果误伤了自己。比如类风湿关节炎是攻击关节组织，系统性红斑狼疮会攻击全身多种器官。本质是免疫自稳功能异常——正常时免疫系统该清除衰老损伤细胞，出错时却把健康细胞当靶子。' },
      { type: 'list', items: ['类风湿关节炎：攻击关节滑膜，导致关节畸形', '系统性红斑狼疮：攻击多器官，出现红斑等症状', '常见还有风湿性心脏病、重症肌无力等', '治疗思路多为抑制过度活跃的免疫'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图2 自身免疫病：免疫系统误攻自身</text><rect x="80" y="100" width="200" height="80" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="180" y="130" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">自身正常组织</text><text x="180" y="156" font-size="12" fill="#5aa832" text-anchor="middle">如关节、器官</text><polygon points="282,140 308,133 308,147" fill="#3f7d1e"/><rect x="320" y="100" width="280" height="80" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="460" y="130" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">免疫系统误判为敌人</text><text x="460" y="156" font-size="12" fill="#5aa832" text-anchor="middle">发起攻击致损伤</text><text x="340" y="240" font-size="13" fill="#2e3a22" text-anchor="middle">自身免疫病是免疫自稳异常，把自身物质当外来抗原攻击。</text></svg>', caption: '图2　自身免疫病因免疫自稳紊乱，攻击自身正常组织而致病。' },
      { type: 'heading', text: '四、免疫缺陷病' },
      { type: 'paragraph', text: '<strong>免疫缺陷病</strong>是免疫功能天生不足或后天受损，导致机体易反复感染。分两类：一类是先天性的（如先天性胸腺发育不全），另一类是获得性的，最典型的是<strong>艾滋病（AIDS）</strong>。艾滋病的病原体HIV专门攻击人体的辅助性T细胞，而辅助性T细胞是体液免疫和细胞免疫的「总指挥」，它被摧毁后，整个免疫系统全面崩溃。' },
      { type: 'list', items: ['先天性免疫缺陷：与生俱来，如胸腺发育不良', '获得性免疫缺陷：后天因素造成，如HIV感染', 'HIV主要攻击辅助性T细胞，使其数量锐减', '辅助性T细胞受损后体液和细胞免疫都衰退'] },
      { type: 'keypoint', label: '重点·HIV与艾滋病', text: '<strong>艾滋病核心：</strong>HIV侵入人体后主要攻击辅助性T细胞，使其大量死亡。辅助性T细胞既激活B细胞（体液免疫）又激活细胞毒性T细胞（细胞免疫），所以它一垮，两类特异性免疫都失灵，患者几乎失去一切抵抗力，最终常因严重感染或恶性肿瘤死亡。传播途径为血液、性接触和母婴传播。' },
      { type: 'example', label: '例题·免疫失调辨析', text: '题目：下列属于自身免疫病的是？<br>A. 花粉过敏　B. 系统性红斑狼疮　C. 艾滋病　D. 荨麻疹<br>解析：自身免疫病是免疫系统把自身物质当外来抗原攻击所致，系统性红斑狼疮正是免疫系统攻击自身多器官造成的，属于自身免疫病。花粉过敏和荨麻疹属于过敏反应，艾滋病属于免疫缺陷病。因此答案选系统性红斑狼疮。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">图3 三类免疫失调对比</text><rect x="40" y="90" width="180" height="80" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="130" y="120" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">过敏反应</text><text x="130" y="146" font-size="11" fill="#5aa832" text-anchor="middle">反应过强</text><rect x="250" y="90" width="180" height="80" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="120" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">自身免疫病</text><text x="340" y="146" font-size="11" fill="#5aa832" text-anchor="middle">误攻自身</text><rect x="460" y="90" width="180" height="80" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="550" y="120" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">免疫缺陷病</text><text x="550" y="146" font-size="11" fill="#5aa832" text-anchor="middle">功能不足</text><polygon points="220,130 244,123 244,137" fill="#3f7d1e"/><polygon points="430,130 454,123 454,137" fill="#3f7d1e"/><text x="340" y="240" font-size="13" fill="#2e3a22" text-anchor="middle">三类免疫失调：过强、认错对象、能力不足，原因各不相同。</text></svg>', caption: '图3　过敏反应、自身免疫病、免疫缺陷病的本质区别一目了然。' },
      { type: 'tip', label: '提示·高考辨析三句话', text: '考场上用三句话快速区分：①「再接触才发病、不伤细胞」→过敏；②「攻击自身组织」→自身免疫病；③「易感染、HIV攻辅助性T细胞」→免疫缺陷病。三者都和免疫功能异常有关，但方向完全不同：过敏和自身免疫是「太强或认错」，缺陷是「太弱」。' },
      { type: 'warn', label: '易错·过敏不是免疫缺陷', text: '过敏是免疫反应过强（对无害过敏原反应过度），免疫缺陷是免疫反应过弱或缺失，二者正好相反，不能因为都叫「免疫病」就混为一谈。另外，过敏反应有遗传倾向，但「有家族史」不代表一定发病，还和接触过敏原有关。' }
    ],
    exercises: [
      { type: 'choice', question: '关于过敏反应，下列叙述正确的是？', options: ['首次接触过敏原即发病', '一般不破坏组织细胞', '无遗传倾向', '属于免疫缺陷病'], answer: '一般不破坏组织细胞', explanation: '过敏反应是已致敏机体再次接触相同过敏原时发生的，首次接触只致敏不发病，因此首次接触即发病错误。过敏反应发作迅速、消退快，一般不破坏组织细胞，也不引起严重损伤，这是它与自身免疫病的重要区别。此外过敏反应有明显的遗传倾向和个体差异，也不属于免疫缺陷病。故正确选项是一般不破坏组织细胞。' },
      { type: 'choice', question: '下列疾病中，属于自身免疫病的是？', options: ['花粉过敏', '系统性红斑狼疮', '艾滋病', '先天性胸腺发育不良'], answer: '系统性红斑狼疮', explanation: '自身免疫病是免疫系统将自身物质当作外来抗原攻击而引起的疾病，系统性红斑狼疮是免疫系统攻击自身多种器官所致，属典型自身免疫病。花粉过敏属于过敏反应，艾滋病属于获得性免疫缺陷病，先天性胸腺发育不良属于先天性免疫缺陷病。因此答案是系统性红斑狼疮。' },
      { type: 'choice', question: 'HIV感染人体后主要攻击的细胞是？', options: ['浆细胞', '红细胞', '辅助性T细胞', '神经细胞'], answer: '辅助性T细胞', explanation: 'HIV主要侵入并破坏辅助性T细胞。辅助性T细胞在特异性免疫中处于核心地位，既能分泌细胞因子激活B细胞（体液免疫），又能激活细胞毒性T细胞（细胞免疫）。它大量死亡会导致两类免疫同时衰退，患者丧失抵抗力。浆细胞、红细胞、神经细胞都不是HIV的主要靶细胞。因此答案是辅助性T细胞。' },
      { type: 'fill', question: '免疫系统把自身物质当作外来抗原进行攻击而引起的疾病称为___病；这类疾病中攻击关节的常见例子是___。', answer: '自身免疫；类风湿关节炎', explanation: '当免疫自稳功能异常，免疫系统分不清「自己人」和「敌人」，把自身正常物质当成外来抗原攻击，就会引发自身免疫病。类风湿关节炎就是免疫系统攻击关节滑膜等组织，导致关节肿胀、畸形和疼痛；类似的还有系统性红斑狼疮、风湿性心脏病等。它们与过敏、免疫缺陷并列为三大类免疫失调疾病。' },
      { type: 'fill', question: '过敏反应必须由已免疫机体___接受相同过敏原才会发生；HIV主要破坏___细胞，使特异性免疫全面衰退。', answer: '再次；辅助性T', explanation: '过敏反应的关键前提是机体先前已对该过敏原致敏，只有再次接触同种过敏原时才会触发，首次接触通常不发病。艾滋病病原体HIV专门攻击辅助性T细胞，而辅助性T细胞是体液免疫和细胞免疫的共同枢纽，其被破坏后两类特异性免疫都严重受损，患者极易感染和患肿瘤。两者分别是过敏和免疫缺陷的核心知识点。' }
    ]
  });
})();
