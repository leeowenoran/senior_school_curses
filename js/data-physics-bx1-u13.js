/* ============================================================
 * 高一物理 · 必修 第一册 · 第三章 相互作用——力
 * 课时13：牛顿第三定律
 * 数据注入：physics.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx1');
  if (!v) return;

  v.points.push({
    id: 'bx1-u13',
    name: '牛顿第三定律',
    chapter: '必修第一册 · 第三章 相互作用——力',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、力的作用总是相互的' },
      { type: 'paragraph', text: '当你用手拍桌子，手会感觉到疼；当你游泳时向后划水，水会把你向前推。这些现象说明：一个物体对另一个物体施加力的同时，也一定会受到另一个物体对它的力。也就是说，力的作用总是相互的，不存在只有施力而没有受力的孤立情况。' },
      { type: 'keypoint', label: '重点·作用力与反作用力', text: '两个物体之间的相互作用力，叫作<strong>作用力与反作用力</strong>。我们可以把其中一个叫作作用力，另一个就叫作反作用力。它们总是成对出现，谁先谁后并无区别。' },
      { type: 'list', items: ['人推墙，墙也推人，二者是相互作用', '鸡蛋碰石头，石头也受鸡蛋的力', '地球吸引苹果，苹果也吸引地球', '划船时船桨推水，水推船桨使船前进'] },
      { type: 'example', label: '例题·分析相互作用', text: '用手提着水桶静止不动，找出一对作用力与反作用力。<br><br><strong>解析</strong>：<br>手对水桶有向上的拉力，同时水桶对手有向下的拉力，这一对手与桶之间的拉力就是作用力与反作用力。注意它和"水桶受重力、手对桶拉力"不是一对，因为重力是地球施加的，与水桶对手的力不是相互作用。' },
      { type: 'heading', text: '二、牛顿第三定律' },
      { type: 'paragraph', text: '牛顿在总结大量实验后发现：两个物体之间的作用力和反作用力，总是大小相等，方向相反，作用在同一条直线上。这就是牛顿第三定律，也常被称为"作用力与反作用力定律"。无论物体是静止还是运动，无论什么性质的力，这条定律都成立。' },
      { type: 'keypoint', label: '重点·牛顿第三定律内容', text: '<strong>作用力和反作用力总是大小相等、方向相反、作用在同一条直线上，且同时产生、同时消失，性质相同。</strong>它们分别作用在两个不同的物体上，因此不能相互抵消。' },
      { type: 'warn', label: '易错', text: '<strong>作用力与反作用力不是一对平衡力。</strong>平衡力作用在同一个物体上，可以相互抵消；而作用力与反作用力分别作用在两个物体上，永远不能合成、不能抵消。比如鸡蛋碰石头，二者受力大小相等，但鸡蛋碎了是因为它承受力的能力弱，并不是因为它受力小。' },
      { type: 'table', headers: ['对比项', '作用力与反作用力', '一对平衡力'], rows: [['作用对象', '作用在两个不同物体上', '作用在同一个物体上'], ['大小方向', '大小相等、方向相反、共线', '大小相等、方向相反、共线'], ['是否抵消', '不能抵消', '可以相互抵消'], ['产生与消失', '同时产生同时消失', '不一定同时']] },
      { type: 'heading', text: '三、怎样判断一对力' },
      { type: 'paragraph', text: '判断两个力是不是作用力与反作用力，最简单的方法是看它们是不是"互为施力物体和受力物体"。如果甲对乙施加力，乙对甲也施加力，且这两个力性质相同（都是弹力、都是引力等），那它们就是一对作用力与反作用力。' },
      { type: 'tip', label: '提示', text: '<strong>找作用力与反作用力的窍门：</strong>先锁定一个力，写出"甲对乙的什么力"，那么它的反作用力就是"乙对甲的同种力"。例如"地球对苹果的引力"的反作用力是"苹果对地球的引力"。' },
      { type: 'list', items: ['两个力必须分属两个物体，互为施力与受力', '两个力性质相同（同为弹力、引力等）', '两个力大小相等、方向相反、作用在同一直线', '两个力同时产生、同时变化、同时消失'] },
      { type: 'heading', text: '四、生活中的例子' },
      { type: 'paragraph', text: '牛顿第三定律在生活中随处可见。人能向前走，是因为脚向后蹬地，地面对脚施加了向前的摩擦力；火箭能升空，是因为燃料向下喷出气体，气体对火箭施加了向上的推力。这些"反推力"正是作用力与反作用力的体现。' },
      { type: 'tip', label: '提示', text: '<strong>马拉车的问题：</strong>马对车的拉力与车对马的拉力大小相等。车之所以能被拉动，不是因为马拉车的力更大，而是因为马受到的地面向前摩擦力大于车对马向后的拉力，马和车作为一个整体向前加速。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">手推墙：手对墙的力与墙对手的力</text><rect x="300" y="70" width="60" height="160" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="330" y="60" font-size="13" fill="#234b45" text-anchor="middle">墙</text><circle cx="190" cy="150" r="26" fill="#4fb3a5"/><text x="190" y="155" font-size="12" fill="#234b45" text-anchor="middle">手</text><line x1="216" y1="150" x2="298" y2="150" stroke="#4fb3a5" stroke-width="3"/><text x="258" y="138" font-size="12" fill="#234b45" text-anchor="middle">手推墙</text><line x1="364" y1="150" x2="446" y2="150" stroke="#4fb3a5" stroke-width="3"/><text x="408" y="138" font-size="12" fill="#234b45" text-anchor="middle">墙推手</text><text x="190" y="210" font-size="12" fill="#234b45" text-anchor="middle">等大反向共线</text></svg>', caption: '图1　手对墙施加力的同时，墙也对手指施加等大反向的力。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">鸡蛋碰石头：二者受力大小相等</text><ellipse cx="250" cy="150" rx="50" ry="64" fill="#4fb3a5"/><text x="250" y="155" font-size="13" fill="#234b45" text-anchor="middle">鸡蛋</text><circle cx="450" cy="150" r="60" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="450" y="155" font-size="13" fill="#234b45" text-anchor="middle">石头</text><line x1="300" y1="150" x2="360" y2="150" stroke="#4fb3a5" stroke-width="3"/><line x1="400" y1="150" x2="460" y2="150" stroke="#4fb3a5" stroke-width="3"/><text x="340" y="200" font-size="12" fill="#234b45" text-anchor="middle">两力等大，鸡蛋易碎所以裂开</text></svg>', caption: '图2　鸡蛋碰石头时两力大小相等，鸡蛋破碎是因为它承受力的能力较弱。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">划船：船桨推水，水推船前进</text><rect x="120" y="170" width="180" height="40" rx="8" fill="#4fb3a5"/><text x="210" y="195" font-size="13" fill="#234b45" text-anchor="middle">小船</text><rect x="430" y="170" width="140" height="40" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="195" font-size="13" fill="#234b45" text-anchor="middle">水</text><line x1="300" y1="150" x2="430" y2="150" stroke="#4fb3a5" stroke-width="3"/><text x="365" y="138" font-size="12" fill="#234b45" text-anchor="middle">桨推水</text><line x1="300" y1="210" x2="210" y2="210" stroke="#4fb3a5" stroke-width="3"/><text x="255" y="232" font-size="12" fill="#234b45" text-anchor="middle">水推船向前</text></svg>', caption: '图3　船桨向后推水，水向前推船，这是反作用力提供动力的例子。' }
    ],
    exercises: [
      { type: 'choice', question: '关于作用力与反作用力，下列说法正确的是？', options: ['作用力先产生，反作用力后产生', '作用力与反作用力大小相等、方向相反、作用在同一条直线上', '作用力与反作用力可以作用在同一个物体上', '马拉车时，马对车的拉力大于车对马的拉力'], answer: '作用力与反作用力大小相等、方向相反、作用在同一条直线上', explanation: '根据牛顿第三定律，两个物体之间的作用力和反作用力总是大小相等、方向相反、作用在同一条直线上，并且同时产生、同时消失。它们分别作用在两个不同的物体上，性质也相同，因此不能相互抵消，更不是谁大谁小的关系。' },
      { type: 'choice', question: '人走路时，使人身体向前运动的力来自于？', options: ['人对地面的推力', '地面对人的摩擦力', '人自身的重力', '空气对人的推力'], answer: '地面对人的摩擦力', explanation: '人走路时脚向后蹬地，相对地面有向后的运动趋势，地面对脚施加一个向前的静摩擦力，正是这个向前的摩擦力充当了人前进的动力。若地面绝对光滑，人将无法向前行走。' },
      { type: 'choice', question: '鸡蛋碰石头，鸡蛋碎了。关于二者受力，下列说法正确的是？', options: ['石头对鸡蛋的力大于鸡蛋对石头的力', '鸡蛋对石头的力大于石头对鸡蛋的力', '二者大小相等，但鸡蛋承受力的能力弱', '石头不受力'], answer: '二者大小相等，但鸡蛋承受力的能力弱', explanation: '根据牛顿第三定律，鸡蛋对石头的力和石头对鸡蛋的力是一对作用力与反作用力，大小必然相等。鸡蛋破碎并不是因为它受力更小，而是因为蛋壳承受力的能力比石头弱得多，在同样大小的力作用下先被破坏。' },
      { type: 'fill', question: '牛顿第三定律指出：两个物体之间的作用力和反作用力总是大小___、方向___、作用在一条直线上。', answer: '相等|相反', explanation: '牛顿第三定律的内容是：两个物体之间的作用力和反作用力总是大小相等，方向相反，作用在同一条直线上。作用力和反作用力同时产生、同时消失，分别作用在两个不同的物体上，力的性质也相同，二者不能相互抵消。' },
      { type: 'fill', question: '作用力与反作用力的一个重要区别是：它们作用在___个物体上（填"同一"或"两"），而一对平衡力作用在___个物体上。', answer: '两|同一', explanation: '作用力和反作用力分别作用在发生相互作用的两个不同物体上，因此不可能相互抵消；而一对平衡力是作用在同一个物体上的两个力，大小相等、方向相反、作用在同一直线，能使物体保持平衡。这是两者最本质的区别。' }
    ]
  });
})();
