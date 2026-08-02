/* 地理 · 选择性必修1 · 第5章 · 课时：自然环境的整体性 */
(function () {
  var v = gzGetVolume('geography', 'xb1');
  if (!v) return;
  v.points.push({
    id: 'xb1-u12',
    name: '第1节 自然环境的整体性',
    chapter: '选择性必修1 · 第5章 自然环境的整体性与差异性',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、自然环境的组成要素' },
      { type: 'paragraph', text: '自然环境由地貌、气候、水文、生物、土壤等要素组成。这些要素不是孤立存在的，而是通过物质循环和能量交换相互联系、相互制约，构成一个有机整体。一个要素的变化，往往会引起其他要素甚至整个环境的变化。' },
      { type: 'list', items: ['五大要素：地貌、气候、水文、生物、土壤', '要素间通过物质循环和能量交换联系', '任一要素变化会牵动其他要素', '自然环境是一个整体系统'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">自然环境的整体性与要素联系</text><circle cx="340" cy="170" r="50" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="175" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">整体</text><circle cx="200" cy="100" r="38" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="200" y="105" font-size="12" fill="#1f3a4d" text-anchor="middle">气候</text><circle cx="480" cy="100" r="38" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="480" y="105" font-size="12" fill="#1f3a4d" text-anchor="middle">地貌</text><circle cx="200" cy="250" r="38" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="200" y="255" font-size="12" fill="#1f3a4d" text-anchor="middle">水文</text><circle cx="480" cy="250" r="38" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="480" y="255" font-size="12" fill="#1f3a4d" text-anchor="middle">生物</text><line x1="290" y1="140" x2="370" y2="155" stroke="#2a6fa8" stroke-width="2"/><line x1="390" y1="140" x2="470" y2="155" stroke="#2a6fa8" stroke-width="2"/><line x1="290" y1="200" x2="370" y2="215" stroke="#2a6fa8" stroke-width="2"/><line x1="390" y1="200" x2="470" y2="215" stroke="#2a6fa8" stroke-width="2"/></svg>', caption: '图1　气候、地貌、水文、生物、土壤等要素相互联系，构成自然环境整体。' },
      { type: 'keypoint', label: '重点·整体性的表现', text: '<strong>整体性有三层含义：</strong>① 各要素与环境总体特征协调一致；② 各要素之间相互制约，牵一发而动全身；③ 不同区域间的环境会相互影响。例如气候干旱→植被稀少→土质疏松→水土流失加剧，就是链式反应。' },
      { type: 'heading', text: '二、要素间的物质循环与能量交换' },
      { type: 'paragraph', text: '各要素通过水循环、生物循环和岩石圈物质循环等进行物质迁移和能量流动。例如植物通过光合作用固定太阳能、吸收二氧化碳释放氧气，同时根系影响土壤和地貌；水循环把大气、地表、地下连成一体。正是这些循环把孤立的要素「缝」成一个整体。' },
      { type: 'list', items: ['水循环：联系大气、水文、地貌、土壤', '生物循环：联系生物、大气、土壤', '岩石圈物质循环：联系地貌、土壤、水文', '循环是整体性的内在机制'] },
      { type: 'table', headers: ['循环类型', '联系的主要要素', '作用'], rows: [['水循环', '大气、水文、地貌、土壤', '输送水热、塑造地貌'], ['生物循环', '生物、大气、土壤、水', '物质能量转换'], ['岩石圈循环', '地貌、土壤、水文', '形成岩石与土壤']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">生物循环连接各要素</text><rect x="80" y="120" width="150" height="80" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="155" y="165" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">大气</text><rect x="460" y="120" width="150" height="80" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="535" y="165" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">土壤</text><circle cx="340" cy="160" r="45" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="165" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">生物</text><line x1="230" y1="150" x2="300" y2="160" stroke="#7fd0d8" stroke-width="2"/><line x1="385" y1="160" x2="455" y2="150" stroke="#7fd0d8" stroke-width="2"/><text x="340" y="265" font-size="12" fill="#1f3a4d" text-anchor="middle">生物通过光合作用和枯落物把大气与土壤联系起来。</text></svg>', caption: '图2　生物循环通过光合作用和枯落物，把大气、土壤、水连成整体。' },
      { type: 'example', label: '例题·整体性的实例', text: '题目：黄土高原水土流失加剧，说明自然环境具有什么特征？<br>A. 差异性　B. 整体性　C. 随机性　D. 独立性<br>解析：黄土高原由于植被破坏，导致降水下渗减少、地表径流增强，进一步加剧土壤侵蚀和沟壑发育，甚至影响局部气候。一个要素（植被）变化引发一连串要素变化，正是自然环境整体性的典型表现。所以选 B。' },
      { type: 'heading', text: '三、自然环境整体性的意义' },
      { type: 'paragraph', text: '认识整体性能帮助我们预测环境变化。人类活动（如毁林、垦荒、建坝）会触发连锁反应，因此开发利用自然资源必须统筹考虑，不能只顾单一要素。例如治理荒漠化，既要种树，也要节水、调整农牧结构。' },
      { type: 'warn', label: '易错·整体性与差异性的区别', text: '整体性强调「各要素相互联系、牵一发动全身」，适用于同一区域内；差异性强调「不同地区环境特征不同」（如从赤道到两极的地域分异），适用于不同区域之间。做题时看语境是「内部联系」还是「区域对比」，就能区分二者。' },
      { type: 'tip', label: '提示·答题套路', text: '遇到「某工程/现象带来哪些环境影响」类题，按要素逐一分析：气候（温湿风）、水文（径流泥沙）、地貌（侵蚀堆积）、生物（植被动物）、土壤（肥力侵蚀），再点出「相互联系、体现整体性」。这是最稳妥的答题框架。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">牵一发而动全身：以植被破坏为例</text><rect x="60" y="100" width="250" height="60" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="185" y="135" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">植被破坏</text><rect x="380" y="100" width="250" height="60" rx="10" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="505" y="130" font-size="12" fill="#1f3a4d" text-anchor="middle">径流增强、侵蚀加剧</text><rect x="380" y="190" width="250" height="60" rx="10" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="505" y="220" font-size="12" fill="#1f3a4d" text-anchor="middle">沟壑发育、局部气候变干</text><line x1="310" y1="130" x2="380" y2="130" stroke="#c1583b" stroke-width="2"/><line x1="505" y1="160" x2="505" y2="190" stroke="#c1583b" stroke-width="2"/></svg>', caption: '图3　植被破坏触发水文、地貌、气候连锁变化，体现牵一发而动全身。' },
      { type: 'heading', text: '四、本章小结' },
      { type: 'paragraph', text: '自然环境是地貌、气候、水文、生物、土壤等要素通过物质循环和能量交换构成的统一整体。各要素协调一致、相互制约，某一要素变化会引发整体响应。下一节将学习地理环境如何在整体基础上表现出地域差异。' },
      { type: 'list', items: ['要素：地、气、水、生、土', '机制：物质循环与能量交换', '表现：协调一致、牵一发动全身', '意义：统筹开发、预测连锁反应'] },
      { type: 'keypoint', label: '重点·本课时核心结论', text: '<strong>自然环境整体性一句话：</strong>各要素通过水循环、生物循环、岩石圈循环相互联系、相互制约，构成统一整体；任一要素变化都会「牵一发而动全身」。认识它是因地制宜、综合开发资源的前提。' }
    ],
    exercises: [
      { type: 'choice', question: '自然环境的组成要素不包括下列哪一项？', options: ['气候', '水文', '土壤', '人口'], answer: '人口', explanation: '自然环境由地貌、气候、水文、生物、土壤等自然要素组成，它们通过物质循环和能量交换相互联系。人口属于人文要素，不属于自然环境的自然组成要素。因此「人口」不在自然环境组成要素之列。' },
      { type: 'choice', question: '黄土高原植被破坏后引起水土流失加剧，体现了自然环境的？', options: ['差异性', '整体性', '随机性', '重复性'], answer: '整体性', explanation: '植被破坏导致下渗减少、地表径流增强，进而加剧土壤侵蚀和沟壑发育，甚至使局部气候变干，一个要素的变化引起其他要素乃至整个环境的改变，这正是自然环境整体性的表现，即「牵一发而动全身」。因此体现整体性。' },
      { type: 'choice', question: '把气候、水文、地貌、土壤等自然要素「缝」成一个整体的内在机制是？', options: ['太阳辐射', '物质循环和能量交换', '板块运动', '人类活动'], answer: '物质循环和能量交换', explanation: '各自然要素之所以能相互联系、构成整体，根本在于它们之间不断进行着水循环、生物循环和岩石圈物质循环，通过这些循环实现物质迁移和能量流动。正是物质循环和能量交换把孤立的要素整合成有机整体。' },
      { type: 'fill', question: '自然环境的五大要素是地貌、气候、水文、生物和___。', answer: '土壤', explanation: '组成自然环境的基本自然要素有五个：地貌（岩石土壤之形）、气候、水文、生物、土壤。它们相互作用、相互制约，通过物质循环和能量交换构成一个统一的整体。答题时这五个要素需完整列出，缺一不可。' },
      { type: 'fill', question: '自然环境整体性表现为：各要素与整体特征___，要素间相互___，牵一发而动全身。', answer: '协调一致；制约', explanation: '整体性的表现包括三点：一是各要素与环境总体特征协调一致；二是各要素之间相互制约，某一要素变化会引起其他要素变化；三是不同区域环境相互影响。因此概括为要素与整体协调一致、要素间相互制约，牵一发而动全身。' }
    ]
  });
})();
