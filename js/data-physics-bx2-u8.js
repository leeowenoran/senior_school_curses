/* ============================================================
 * 高一物理 · 必修 第二册 · 第六章 圆周运动
 * 课时4：生活中的圆周运动
 * 数据注入：physics.bx2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx2');
  if (!v) return;

  v.points.push({
    id: 'bx2-u8',
    name: '生活中的圆周运动',
    chapter: '必修第二册 · 第六章 圆周运动',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、火车转弯' },
      { type: 'paragraph', text: '火车在平直轨道上靠车轮与铁轨间的弹力拐弯，可到了弯道，如果路面是平的，所需的向心力就全靠外侧车轮与铁轨的挤压来提供，这会加速铁轨磨损，还容易翻车。' },
      { type: 'keypoint', label: '重点·火车转弯的原理', text: '<strong>实际铁路把弯道处外轨垫得比内轨稍高。</strong>这样火车的支持力不再竖直，支持力与重力的合力正好指向圆心，提供转弯所需的向心力，减少轮轨间的挤压。' },
      { type: 'paragraph', text: '当火车以“设计速度”通过弯道时，重力和支持力的合力恰好等于所需向心力，车轮与铁轨之间几乎没有侧向挤压，运行最平稳。速度太快或太慢，合力与所需向心力不相等，车轮就会挤压铁轨。' },
      { type: 'list', items: ['外轨高于内轨，使支持力倾斜', '支持力与重力的合力提供向心力', '设计速度下车轮几乎不挤压铁轨', '速度过快时向外侧挤压外轨，过慢时向内侧挤压内轨'] },
      { type: 'heading', text: '二、汽车过桥' },
      { type: 'paragraph', text: '汽车过桥也可以看成在竖直面内的圆周运动。过凸形桥顶和凹形桥底时，桥面对车的支持力大小是不一样的，这直接关系到行车安不安全。' },
      { type: 'keypoint', label: '重点·过桥时的支持力', text: '<strong>过凸桥顶时，桥面对车的支持力小于车的重力；过凹桥底时，支持力大于车的重力。</strong>凸桥顶越凸、车速越快，支持力越小，容易“飞离”桥面。' },
      { type: 'table', headers: ['位置', '受力关系', '支持力与重力比较'], rows: [['凸桥顶部', '重力 - 支持力 = 向心力', '支持力 < 重力'], ['凹桥底部', '支持力 - 重力 = 向心力', '支持力 > 重力']] },
      { type: 'example', label: '例题·凸桥顶的压力', text: '一辆质量为 m 的汽车以速度 v 通过半径为 r 的凸形桥顶，求桥面对车的支持力大小。<br><br><strong>解析</strong>：在桥顶，重力向下，支持力向上，合力提供向心力：mg - N = m × v² / r，所以 N = mg - m × v² / r。可见速度 v 越大，支持力 N 越小；当 v 足够大时 N 趋近于 0，车将离开桥面。' },
      { type: 'warn', label: '易错', text: '<strong>不要搞反凸桥和凹桥的支持力大小关系。</strong>凸桥顶重力的一部分用来提供向心力，所以支持力比重力小；凹桥底需要额外向上的力提供向心力，所以支持力比重力大。可以用“凸小凹大”来记。' },
      { type: 'tip', label: '提示', text: '<strong>过凸桥要减速。</strong>车速越快，桥顶支持力越小，越容易失重甚至飞出桥面；而凹桥底支持力大于重力，车速越快对桥和车胎的压力越大，也要注意限速。' },
      { type: 'heading', text: '三、离心现象' },
      { type: 'paragraph', text: '做圆周运动的物体，需要向心力把它“拉”在圆周上。如果提供的向心力突然消失或不够大，物体就来不及拐弯，会沿着切线方向或者逐渐远离圆心运动，这就是离心现象。' },
      { type: 'keypoint', label: '重点·离心运动的条件', text: '<strong>当提供的向心力小于物体所需向心力时，物体做离心运动，逐渐远离圆心。</strong>若向心力突然消失，物体将沿切线飞出。' },
      { type: 'list', items: ['洗衣机脱水：水滴所需向心力不足，被甩出衣服', '砂轮、雨伞转动：水滴因离心被甩出', '汽车转弯过快：地面摩擦力不足，车辆侧滑偏离弯道', '离心现象既可利用（脱水）也需防范（翻车）'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">火车转弯：外轨略高，合力提供向心力</text><line x1="80" y1="200" x2="600" y2="200" stroke="#234b45" stroke-width="3"/><line x1="80" y1="200" x2="80" y2="170" stroke="#2e9e8f" stroke-width="4"/><line x1="600" y1="200" x2="600" y2="150" stroke="#2e9e8f" stroke-width="4"/><rect x="320" y="160" width="40" height="40" rx="6" fill="#4fb3a5"/><line x1="340" y1="160" x2="340" y2="110" stroke="#234b45" stroke-width="3"/><text x="348" y="125" font-size="13" fill="#234b45">支持力</text><line x1="340" y1="200" x2="340" y2="240" stroke="#234b45" stroke-width="3"/><text x="348" y="252" font-size="13" fill="#234b45">重力</text><text x="340" y="285" font-size="12" fill="#234b45" text-anchor="middle">外轨高使支持力与重力的合力指向圆心</text></svg>', caption: '图1　火车转弯时，外轨高于内轨，支持力与重力的合力提供向心力。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">汽车过桥：凸桥顶压力小于重力</text><path d="M 120 230 Q 230 110 340 230" fill="none" stroke="#2e9e8f" stroke-width="3"/><rect x="222" y="150" width="28" height="18" rx="4" fill="#4fb3a5"/><text x="185" y="142" font-size="13" fill="#234b45">凸桥顶</text><line x1="236" y1="168" x2="236" y2="210" stroke="#234b45" stroke-width="2"/><text x="244" y="202" font-size="12" fill="#234b45">重力向下</text><text x="340" y="285" font-size="12" fill="#234b45" text-anchor="middle">过凸桥顶时桥面对车的支持力小于车的重力</text></svg>', caption: '图2　汽车过凸形桥顶时，桥面支持力小于重力，车速越快越小。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">向心力不足时物体做离心运动</text><circle cx="340" cy="170" r="100" fill="none" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="6,4"/><circle cx="440" cy="170" r="10" fill="#4fb3a5"/><line x1="440" y1="170" x2="520" y2="170" stroke="#234b45" stroke-width="3"/><text x="528" y="174" font-size="13" fill="#234b45">离圆心而去</text><text x="340" y="290" font-size="12" fill="#234b45" text-anchor="middle">提供的向心力不足，物体逐渐远离圆心</text></svg>', caption: '图3　当向心力不足时，物体偏离圆周，向外做离心运动。' }
    ],
    exercises: [
      { type: 'choice', question: '铁路弯道处外轨比内轨高，主要是为了？', options: ['让火车跑得更快', '使支持力与重力的合力提供向心力', '减小火车的质量', '增加铁轨的重量'], answer: '使支持力与重力的合力提供向心力', explanation: '弯道处外轨垫高后，火车的支持力不再竖直而是向内倾斜，这样支持力与重力的合力恰好指向圆心，提供转弯所需的向心力，从而减少车轮与铁轨之间的侧向挤压，保护铁轨、运行平稳。' },
      { type: 'choice', question: '汽车以相同速度分别通过凸桥顶和凹桥底，下列说法正确的是？', options: ['凸桥顶支持力大于重力', '凹桥底支持力大于重力', '两者支持力都等于重力', '两者支持力都小于重力'], answer: '凹桥底支持力大于重力', explanation: '在凸桥顶，重力减去支持力提供向心力，所以支持力小于重力；在凹桥底，支持力减去重力提供向心力，所以支持力大于重力。即“凸小凹大”，本题正确的说法是凹桥底支持力大于重力。' },
      { type: 'choice', question: '下列现象中，属于利用离心现象的是？', options: ['汽车转弯过快导致侧滑', '洗衣机脱水时水滴被甩出', '火车出轨翻车', '汽车过凸桥飞离桥面'], answer: '洗衣机脱水时水滴被甩出', explanation: '离心现象是提供的向心力不足时物体远离圆心的运动。洗衣机脱水正是利用水滴所需向心力不足被甩出衣服，属于利用；其余三项都是离心现象带来的危险或事故，是需要防范的。' },
      { type: 'fill', question: '当物体所受合力提供的向心力___（填“大于”“等于”或“小于”）物体做圆周运动所需的向心力时，物体将做离心运动，逐渐远离圆心。', answer: '小于', explanation: '做圆周运动需要一定的向心力。若实际提供的向心力小于所需向心力，物体来不及拐弯，就会偏离圆周向外运动，即离心运动；若等于则正常圆周运动，若大于则向圆心靠拢。' },
      { type: 'fill', question: '汽车过凸形桥顶时，重力 mg 与支持力 N 的合力提供向心力，关系式为 mg - N = ___。', answer: 'm × v² / r', explanation: '在凸桥顶，重力向下、支持力向上，合力向下指向圆心，大小为 mg - N，它等于所需向心力 m × v² / r，所以 mg - N = m × v² / r，整理得 N = mg - m × v² / r，速度越大支持力越小。' }
    ]
  });
})();
