/* 生物学 · 选择性必修1 稳态与调节 · 第2章 · 课时：第1节 神经调节的结构基础 */
(function () {
  var v = gzGetVolume('biology', 'xb1');
  if (!v) return;
  v.points.push({
    id: 'xb1-u3',
    name: '第1节 神经调节的结构基础',
    chapter: '选择性必修1 稳态与调节 · 第2章 神经调节',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、神经系统的基本结构' },
      { type: 'paragraph', text: '人和高等动物的生命活动能够协调有序，离不开<strong>神经系统</strong>的统一指挥。神经系统按位置可分为两大部分：<strong>中枢神经系统</strong>和<strong>外周神经系统</strong>。中枢神经系统位于身体中央，负责信息的整合与指令的发出；外周神经系统分布到全身各处，负责把信息传向中枢或把指令传向效应器。' },
      { type: 'list', items: ['中枢神经系统：包括脑和脊髓，位于身体中央', '外周神经系统：包括脑神经（与脑相连）和脊神经（与脊髓相连）'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">神经系统的组成</text><rect x="60" y="80" width="240" height="200" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="180" y="115" font-size="15" fill="#2e3a22" text-anchor="middle" font-weight="bold">中枢神经系统</text><text x="180" y="150" font-size="13" fill="#2e3a22" text-anchor="middle">脑</text><text x="180" y="180" font-size="13" fill="#2e3a22" text-anchor="middle">脊髓</text><text x="180" y="215" font-size="12" fill="#5aa832" text-anchor="middle">信息整合、发指令</text><rect x="380" y="80" width="240" height="200" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="500" y="115" font-size="15" fill="#2e3a22" text-anchor="middle" font-weight="bold">外周神经系统</text><text x="500" y="150" font-size="13" fill="#2e3a22" text-anchor="middle">脑神经（连脑）</text><text x="500" y="180" font-size="13" fill="#2e3a22" text-anchor="middle">脊神经（连脊髓）</text><text x="500" y="215" font-size="12" fill="#5aa832" text-anchor="middle">传递信息往返</text><text x="340" y="310" font-size="13" fill="#2e3a22" text-anchor="middle">中枢神经系统与外周神经系统共同构成完整的神经系统。</text></svg>', caption: '图1　神经系统分为中枢神经系统（脑、脊髓）和外周神经系统。' },
      { type: 'keypoint', label: '重点·中枢与外周', text: '神经系统分为<strong>中枢神经系统（脑和脊髓）</strong>和<strong>外周神经系统（脑神经和脊神经）</strong>。中枢负责信息的接收、整合与指令发出；外周负责在中枢与身体各部位之间传递信息。' },
      { type: 'heading', text: '二、中枢神经系统' },
      { type: 'paragraph', text: '中枢神经系统由<strong>脑</strong>和<strong>脊髓</strong>组成。脑又包括大脑、小脑、脑干和下丘脑等部分。大脑是调节机体活动的最高级中枢，掌管思维、记忆和运动调控；小脑协调运动、维持身体平衡；脑干控制呼吸、心跳等基本生命活动；下丘脑参与体温、水盐平衡等的调节。脊髓是脑与躯干、内脏之间的联系通路，也是一些简单反射的低级中枢。' },
      { type: 'list', items: ['大脑：最高级中枢，调控思维、运动等', '小脑：协调运动、维持平衡', '脑干：控制呼吸、心跳等基本生命活动', '下丘脑：调节体温、水盐平衡等'] },
      { type: 'example', label: '例题·中枢判断', text: '题目：下列结构属于中枢神经系统的是？<br>A. 脑神经　B. 脊神经　C. 脊髓　D. 坐骨神经<br>解析：中枢神经系统包括脑和脊髓；脑神经、脊神经以及坐骨神经都属于外周神经系统。因此属于中枢神经系统的是脊髓，选 C。' },
      { type: 'heading', text: '三、外周神经系统' },
      { type: 'paragraph', text: '外周神经系统包括与脑相连的<strong>脑神经</strong>和与脊髓相连的<strong>脊神经</strong>。按照功能，外周神经又可分为传入神经（感觉神经，把外界或体内的刺激传向中枢）和传出神经（运动神经，把中枢的指令传向效应器）。传出神经进一步分为支配骨骼肌的躯体运动神经和支配内脏的自主神经。' },
      { type: 'table', headers: ['分类依据', '类型', '功能'], rows: [['按连接部位', '脑神经、脊神经', '分别连脑和脊髓'], ['按传导方向', '传入神经（感觉）', '刺激 → 中枢'], ['按传导方向', '传出神经（运动）', '中枢 → 效应器'], ['传出神经细分', '躯体运动神经', '支配骨骼肌'], ['传出神经细分', '内脏运动神经', '支配内脏、血管']] },
      { type: 'warn', label: '易错·传入与传出', text: '易错点：传入神经和传出神经容易记反。<strong>传入神经（感觉神经）是把信息「传进」中枢</strong>，方向是外界或器官 → 神经中枢；<strong>传出神经（运动神经）是把指令「传出」中枢</strong>，方向是神经中枢 → 效应器。记忆口诀：传入是「进」，传出是「出」。考试常给出神经名称让判断方向，看箭头方向即可。' },
      { type: 'heading', text: '四、神经元的结构与功能' },
      { type: 'paragraph', text: '神经系统结构和功能的基本单位是<strong>神经元（神经细胞）</strong>。一个典型的神经元由<strong>细胞体、树突和轴突</strong>三部分组成。细胞体含有细胞核，是代谢和营养的中心；树突短而多分支，像树枝一样，负责接收信息；轴突细长，外面包有髓鞘，负责把兴奋从细胞体传向远处。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">神经元（神经细胞）的结构</text><rect x="60" y="120" width="120" height="90" rx="20" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="120" y="160" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">细胞体</text><text x="120" y="182" font-size="11" fill="#2e3a22" text-anchor="middle">含细胞核</text><text x="40" y="108" font-size="12" fill="#2e3a22" text-anchor="middle">树突</text><polygon points="182,165 219,153 219,177" fill="#3f7d1e"/><rect x="220" y="150" width="240" height="30" rx="15" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="170" font-size="12" fill="#2e3a22" text-anchor="middle">轴突（外有髓鞘）</text><polygon points="461,165 498,153 498,177" fill="#3f7d1e"/><rect x="520" y="120" width="110" height="90" rx="20" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="575" y="160" font-size="12" fill="#2e3a22" text-anchor="middle" font-weight="bold">轴突末梢</text><text x="575" y="182" font-size="11" fill="#2e3a22" text-anchor="middle">传向其他细胞</text><text x="340" y="270" font-size="13" fill="#2e3a22" text-anchor="middle">树突接受信息，轴突传导兴奋，细胞体整合信息。</text></svg>', caption: '图2　神经元由细胞体、树突和轴突组成。' },
      { type: 'keypoint', label: '重点·神经元功能', text: '神经元是神经系统<strong>结构和功能的基本单位</strong>。它能<strong>接受刺激、产生兴奋并传导兴奋</strong>：树突接收信息，细胞体整合，轴突把兴奋传向其他神经元或效应器。神经纤维是指轴突或长树突及其外的髓鞘。' },
      { type: 'list', items: ['树突：短而多分支，负责接收来自其他神经元的信息', '轴突：长而少分支，负责把兴奋传向远处或其他细胞'] },
      { type: 'tip', label: '提示·轴突与神经纤维', text: '神经纤维指的是轴突（或长的树突）以及包裹在外的髓鞘。许多神经纤维集结成束，外面包着结缔组织膜，就构成一条神经。注意：「神经」和「神经纤维」不同，神经是许多纤维的集合，好比电缆里有多根导线。' },
      { type: 'heading', text: '五、神经胶质细胞' },
      { type: 'paragraph', text: '神经系统中除了神经元，还有数量更多的<strong>神经胶质细胞</strong>。它们虽然一般不直接传导兴奋，但对神经元起着重要的支持、保护、营养和修复作用。例如，胶质细胞能形成髓鞘、隔离神经纤维，还能清除代谢废物、为神经元提供营养，并在神经元受损时参与修复。可以说，神经元能正常工作，离不开胶质细胞的「后勤保障」。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">神经胶质细胞对神经元的支持作用</text><rect x="60" y="90" width="110" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="115" y="126" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">支持</text><rect x="60" y="190" width="110" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="115" y="226" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">保护</text><rect x="510" y="90" width="110" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="565" y="126" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">营养</text><rect x="510" y="190" width="110" height="60" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="565" y="226" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">修复</text><rect x="280" y="125" width="120" height="90" rx="20" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="172" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">神经元</text><text x="340" y="300" font-size="13" fill="#2e3a22" text-anchor="middle">胶质细胞数量多于神经元，为神经元提供支持、保护、营养和修复。</text></svg>', caption: '图3　神经胶质细胞对神经元起支持、保护、营养和修复作用。' },
      { type: 'example', label: '例题·胶质细胞', text: '题目：下列关于神经胶质细胞的叙述，正确的是？<br>A. 能直接传导兴奋　B. 数量少于神经元　C. 对神经元起支持营养修复作用　D. 不参与组成神经系统<br>解析：神经胶质细胞虽一般不传导兴奋，但数量多于神经元，并对神经元起支持、保护、营养和修复等作用，是神经系统的重要组成部分。因此正确项是 C。' }
    ],
    exercises: [
      { type: 'choice', question: '下列关于神经系统组成的叙述，正确的是？', options: ['神经系统只包括脑和脊髓', '中枢神经系统由脑和脊髓组成', '外周神经系统只包括脑神经', '脑神经属于中枢神经系统'], answer: '中枢神经系统由脑和脊髓组成', explanation: '神经系统按位置分为中枢神经系统和外周神经系统。中枢神经系统由脑和脊髓组成；外周神经系统包括与脑相连的脑神经和与脊髓相连的脊神经。因此脑神经属于外周神经系统，正确项是中枢神经系统由脑和脊髓组成。' },
      { type: 'choice', question: '神经元结构中，负责把兴奋传向远处的是？', options: ['细胞体', '树突', '轴突', '细胞核'], answer: '轴突', explanation: '神经元由细胞体、树突和轴突组成。细胞体含细胞核，是代谢中心并整合信息；树突短而多分支，负责接收信息；轴突细长且外有髓鞘，专门把兴奋从细胞体传向远处或其他细胞。因此负责传导兴奋到远处的是轴突。' },
      { type: 'choice', question: '神经胶质细胞对神经元不起下列哪种作用？', options: ['支持', '保护', '营养', '直接传导兴奋'], answer: '直接传导兴奋', explanation: '神经胶质细胞数量多于神经元，主要起支持、保护、营养和修复等作用，一般不直接传导兴奋，传导兴奋是神经元的功能。因此胶质细胞不起的作用是直接传导兴奋，选 D。' },
      { type: 'fill', question: '外周神经按传导方向可分为传入神经（感觉神经）和___（运动神经）。', answer: '传出神经', explanation: '外周神经按传导方向分为传入神经和传出神经。传入神经又称感觉神经，把刺激传向中枢；传出神经又称运动神经，把中枢指令传向效应器。两者方向相反，共同完成信息的往返传递。' },
      { type: 'fill', question: '神经系统结构和功能的基本单位是___。', answer: '神经元', explanation: '神经元（神经细胞）是神经系统结构和功能的基本单位，能够接受刺激、产生兴奋并传导兴奋。神经胶质细胞虽数量更多，但主要起辅助支持作用，真正完成信息传递功能的基本单位是神经元。' }
    ]
  });
})();
