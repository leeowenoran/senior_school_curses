/* 生物学 · 高三复习 · 稳态与调节 · 第3章 · 课时：第3节 神经调节与体液调节的关系（一） */
(function () {
  var v = gzGetVolume('biology', 'zt3');
  if (!v) return;
  v.points.push({
    id: 'zt3-u12',
    name: '第3节 神经调节与体液调节的关系（一）',
    chapter: '稳态与调节 · 第3章 体液调节',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、神经调节与体液调节的比较' },
      { type: 'paragraph', text: '神经调节和体液调节是机体维持稳态的两大调节方式。神经调节靠<strong>反射弧</strong>传递信号，体液调节靠<strong>体液运输</strong>把激素等化学物质送到全身。二者在作用途径、反应速度、作用范围、作用时间上有明显不同，下面用表格对比。' },
      { type: 'table', headers: ['比较项目', '神经调节', '体液调节'], rows: [
        ['作用途径', '反射弧', '体液运输'],
        ['反应速度', '迅速、准确', '较缓慢'],
        ['作用范围', '准确、比较局限', '较广泛'],
        ['作用时间', '短暂', '比较长']
      ] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="320" fill="#eef6e4"/><text x="24" y="44" fill="#3f7d1e" font-size="20" font-family="sans-serif">图1 神经调节与体液调节的特点对比</text><rect x="40" y="90" width="280" height="190" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="120" y="120" fill="#3f7d1e" font-size="18" font-family="sans-serif">神经调节</text><text x="60" y="155" fill="#2e3a22" font-size="15" font-family="sans-serif">途径：反射弧</text><text x="60" y="185" fill="#2e3a22" font-size="15" font-family="sans-serif">速度：迅速准确</text><text x="60" y="215" fill="#2e3a22" font-size="15" font-family="sans-serif">范围：局限</text><text x="60" y="245" fill="#2e3a22" font-size="15" font-family="sans-serif">时间：短暂</text><rect x="360" y="90" width="280" height="190" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="440" y="120" fill="#3f7d1e" font-size="18" font-family="sans-serif">体液调节</text><text x="380" y="155" fill="#2e3a22" font-size="15" font-family="sans-serif">途径：体液运输</text><text x="380" y="185" fill="#2e3a22" font-size="15" font-family="sans-serif">速度：较缓</text><text x="380" y="215" fill="#2e3a22" font-size="15" font-family="sans-serif">范围：较广</text><text x="380" y="245" fill="#2e3a22" font-size="15" font-family="sans-serif">时间：较长</text></svg>', caption: '神经调节经反射弧、迅速局限而短暂；体液调节经体液运输、较缓广泛而持久。' },
      { type: 'keypoint', text: '核心概念：四大比较维度。作用途径（反射弧／体液运输）、反应速度（迅速／较缓）、作用范围（准确局限／较广）、作用时间（短暂／较长）。这是高考常考的填空与选择题素材，建议直接背下这四组对应词。' },
      { type: 'paragraph', text: '举例理解：手碰到烫的东西立刻缩回，这是神经调节，经反射弧在毫秒级完成，只涉及相关肌肉，范围局限；而甲状腺激素随血液流遍全身、持续几小时提高代谢，这就是体液调节，范围广、时间长。' },
      { type: 'list', items: [
        '神经调节像「专线电话」：沿固定反射弧点对点快速传达。',
        '体液调节像「广播喇叭」：激素入血后广播到全身，慢但覆盖面大。',
        '二者不是对立的，多数生理活动由它们配合完成。'
      ] },
      { type: 'heading', text: '二、神经调节与体液调节的协调' },
      { type: 'paragraph', text: '不少内分泌腺本身直接或间接地受<strong>中枢神经系统</strong>的调节。比如体温、血糖、水盐调节的中枢都在下丘脑，下丘脑既是神经中枢，又能分泌激素，是两套系统的「交汇点」。另一方面，激素也会影响神经系统的发育和功能。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="300" fill="#eef6e4"/><text x="24" y="44" fill="#3f7d1e" font-size="20" font-family="sans-serif">图2 神经调节与体液调节的协调</text><rect x="60" y="110" width="180" height="64" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="80" y="148" fill="#2e3a22" font-size="16" font-family="sans-serif">中枢神经系统</text><rect x="440" y="110" width="180" height="64" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="470" y="148" fill="#2e3a22" font-size="16" font-family="sans-serif">内分泌腺</text><line x1="240" y1="142" x2="432" y2="142" stroke="#3f7d1e" stroke-width="3"/><polygon points="424,134 444,142 424,150" fill="#3f7d1e"/><text x="270" y="128" fill="#5aa832" font-size="14" font-family="sans-serif">调控</text><rect x="250" y="220" width="180" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="278" y="254" fill="#2e3a22" font-size="15" font-family="sans-serif">神经系统发育</text><line x1="530" y1="174" x2="340" y2="220" stroke="#3f7d1e" stroke-width="2" stroke-dasharray="6 5"/><text x="380" y="200" fill="#5aa832" font-size="14" font-family="sans-serif">激素影响神经</text></svg>', caption: '中枢神经调内分泌腺，激素也反过来影响神经发育与功能，二者相互协调。' },
      { type: 'tip', text: '高频考点：甲状腺激素对中枢神经发育的作用。婴幼儿甲状腺激素不足会患呆小症（智力和身体都受影响），区别于缺生长激素只身材矮小。记住「甲状腺激素既促代谢又促中枢发育」，常结合实例考查。' },
      { type: 'warn', text: '易错辨析：激素 ≠ 酶。激素是调节物质，量少作用大，经体液运输作用于靶细胞，发挥作用后一般被灭活；酶是催化物质，在细胞内或外界起催化作用、不因人而异。二者的化学本质、作用方式和去向都不同，不能混为一谈。' },
      { type: 'heading', text: '三、体温调节（神经调节＋体液调节）' },
      { type: 'paragraph', text: '人体体温相对稳定约37℃，产热和散热动态平衡。寒冷时，皮肤冷觉感受器把信号传给下丘脑体温调节中枢，中枢一方面通过<strong>神经调节</strong>让皮肤血管收缩（减少散热）、骨骼肌不自主战栗（增加产热）；另一方面通过<strong>体液调节</strong>促进甲状腺激素、肾上腺素分泌，提高细胞代谢产热。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="320" fill="#eef6e4"/><text x="24" y="44" fill="#3f7d1e" font-size="20" font-family="sans-serif">图3 寒冷环境下的体温调节</text><rect x="40" y="100" width="160" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="58" y="134" fill="#2e3a22" font-size="15" font-family="sans-serif">皮肤冷觉感受器</text><rect x="260" y="100" width="170" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="272" y="134" fill="#2e3a22" font-size="15" font-family="sans-serif">下丘脑体温中枢</text><line x1="200" y1="128" x2="256" y2="128" stroke="#3f7d1e" stroke-width="3"/><polygon points="248,120 268,128 248,136" fill="#3f7d1e"/><rect x="480" y="80" width="160" height="50" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="498" y="112" fill="#2e3a22" font-size="14" font-family="sans-serif">神经：血管收缩战栗</text><rect x="480" y="160" width="160" height="50" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="498" y="192" fill="#2e3a22" font-size="14" font-family="sans-serif">体液：甲状腺肾上腺激素</text><line x1="430" y1="120" x2="476" y2="105" stroke="#3f7d1e" stroke-width="2"/><line x1="430" y1="135" x2="476" y2="185" stroke="#3f7d1e" stroke-width="2"/></svg>', caption: '寒冷时下丘脑通过神经（血管收缩、战栗）和体液（甲状腺激素、肾上腺素）两条途径维持体温。' },
      { type: 'list', items: [
        '产热：安静时主要是肝脏，运动时主要是骨骼肌；寒冷时战栗迅速产热。',
        '散热：主要靠皮肤汗液蒸发和血管舒张，炎热时血管舒张、出汗增多。',
        '调节方式：以神经调节为主，体液调节（甲状腺激素、肾上腺素）辅助增加产热。'
      ] },
      { type: 'example', text: '例题（高考风格）：人在寒冷环境中，机体不会出现的反应是？选项有皮肤血管收缩、骨骼肌战栗、甲状腺激素分泌增加、汗腺分泌增加。思路：寒冷时要减少散热、增加产热，所以血管收缩、战栗、甲状腺激素增加都会出现；而汗腺分泌增加会散更多热，是炎热时的反应。故「汗腺分泌增加」不会出现。本题考查体温调节的方向性。' },
      { type: 'warn', text: '易错：体温调节的中枢在下丘脑，但产生「冷觉」「热觉」的部位是大脑皮层。下丘脑负责调节，大脑皮层负责感觉，二者职能不同，考题常在此设陷阱。' },
      { type: 'tip', text: '解题提醒：看到「战栗、血管收缩、肾上腺素」优先想神经调节（战栗）与体液调节（激素）的并列；看到「炎热时出汗多、尿少」则对应散热增加、水分经汗液丢失。区分产热与散热两条线索再下结论。' },
      { type: 'paragraph', text: '小结：神经调节与体液调节既有区别又相互协调。体温调节是二者配合的典型——神经调节快速启动效应器，体液调节通过激素延长并放大产热效应，共同把体温稳定在狭小范围内。' }
    ],
    exercises: [
      { type: 'choice', question: '神经调节的作用途径是？', options: ['反射弧', '体液运输', '血液', '神经末梢'], answer: '反射弧', explanation: '神经调节依靠反射弧完成，信号沿感受器、传入神经、神经中枢、传出神经、效应器依次传递；体液调节才依靠体液运输。二者作用途径是常见考点，必须区分清楚。' },
      { type: 'choice', question: '寒冷环境中，骨骼肌发生不自主战栗以增加产热，这一过程属于？', options: ['神经调节', '体液调节', '免疫调节', '激素调节'], answer: '神经调节', explanation: '骨骼肌战栗是下丘脑体温中枢通过传出神经直接支配骨骼肌收缩产生的，属于神经调节；而甲状腺激素、肾上腺素促进代谢产热才属于体液调节。注意区分「战栗」与「激素产热」。' },
      { type: 'choice', question: '下列关于神经调节与体液调节协调的叙述，错误的是？', options: ['内分泌腺受中枢神经系统调节', '甲状腺激素影响中枢神经发育', '神经调节和体液调节互不影响', '激素可影响神经系统功能'], answer: '神经调节和体液调节互不影响', explanation: '实际上二者相互协调：中枢神经系统可调节内分泌腺，激素也会影响神经发育和功能，例如甲状腺激素促进中枢神经发育。说「互不影响」明显错误，正是本题要选的答案。' },
      { type: 'fill', question: '寒冷时，除甲状腺激素外，能促进细胞代谢产热的另一种激素是______。', answer: '肾上腺素', explanation: '寒冷环境中，下丘脑通过体液调节促使肾上腺分泌肾上腺素，与甲状腺激素协同提高细胞代谢速率、增加产热。肾上腺素与甲状腺激素都属于参与体温调节的激素。' },
      { type: 'fill', question: '与体液调节相比，神经调节作用范围的特点是______、比较局限。', answer: '准确', explanation: '神经调节沿固定反射弧进行，作用部位精准，因此作用范围准确而局限；体液调节的激素随血液到达全身，作用范围较广。这是二者四大比较维度之一。' }
    ]
  });
})();
