/* ============================================================
 * 高二物理 · 选择性必修 第三册 · 第三章 热力学定律
 * 课时11：热力学第二定律
 * 数据注入：physics.xb3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb3');
  if (!v) return;

  v.points.push({
    id: 'xb3-u11',
    name: '热力学第二定律',
    chapter: '选择性必修 第三册 · 第三章 热力学定律',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、宏观自然过程的方向性' },
      { type: 'paragraph', text: '生活中很多过程只能沿着一个方向自发发生，反过来却不会自发发生。比如一杯热水放在桌上，热量会自发地从高温的水传向低温的空气，水温越来越低；你却从没见过热量自发地从冷空气跑回热水、让水自己烧开。' },
      { type: 'keypoint', label: '重点·方向性', text: '<strong>宏观自然过程具有方向性：只能自发地沿某一方向进行，逆向不会自发发生。</strong>这不是因为"不能"，而是因为规律只允许它朝那个方向走。' },
      { type: 'paragraph', text: '再看扩散：往清水里滴一滴墨水，墨水分子会自发散开，最后整杯水颜色均匀。你却绝不会看到一杯均匀的墨水自己重新聚成一滴。这种"散开容易、聚回难"也是方向性的体现。' },
      { type: 'example', label: '例题·散开的火柴', text: '一盒整齐排列的火柴不小心掉在地上，散落得到处都是。这些散开的火柴会不会自己重新排整齐、回到盒里？<br><br><strong>解析</strong>：不会。火柴从"整齐"变"散乱"是可以自发发生的，但从"散乱"自发变回"整齐"违反自然过程的方向性，所以不会自己发生，除非有人去收拾（外加干预）。' },
      { type: 'heading', text: '二、克劳修斯表述（大白话）' },
      { type: 'keypoint', label: '重点·克劳修斯表述', text: '<strong>克劳修斯表述：热量不能自发地从低温物体传到高温物体。</strong>注意"自发"二字——想让热量从冷的地方跑向热的地方，必须额外付出代价，比如冰箱要耗电做功才能把热量从冷的里面搬到热的室外。' },
      { type: 'paragraph', text: '夏天室内比室外凉快，热量不会自发从凉的室内跑回更热的室外；冰箱却能把热量从冷的里面搬到热的室外，但前提是压缩机一直耗电做功。这恰好说明：反向传热不是绝对不可能，只是不能"自发"、必须外加努力。' },
      { type: 'list', items: ['热量自发方向：从高温物体传向低温物体', '反向传热：从低温传向高温必须外加做功（如冰箱耗电）', '关键词："自发"——克劳修斯表述管的是不需要外力的情况'] },
      { type: 'heading', text: '三、开尔文表述（大白话）' },
      { type: 'keypoint', label: '重点·开尔文表述', text: '<strong>开尔文表述：不可能从单一热源吸热，使之完全变为有用功而不产生其他影响。</strong>也就是说，你不能只从一个热源（比如大海）取热，把它全部变成推动轮船的功，而不留下任何别的变化。' },
      { type: 'paragraph', text: '海洋和大气里有巨大的热能，但开尔文表述告诉我们：不能只从海里吸热、全部变成船的推力，同时还"什么都不改变"。如果真能这样，就等于造出了只靠海水就能永远航行的船——这被称为第二类永动机。' },
      { type: 'list', items: ['从单一热源吸热并全部变成功，必定会留下"其他影响"', '这否定了第二类永动机——它不违反能量守恒，却仍不可能', '开尔文表述和克劳修斯表述本质上说的是同一件事'] },
      { type: 'table', headers: ['表述', '一句话大白话', '核心限制'], rows: [['克劳修斯表述', '热量不能自发从低温传向高温', '关键词是"自发"，靠做功可以反向传热（如冰箱）'], ['开尔文表述', '不能只从单一热源吸热全变有用功', '否定了第二类永动机，必留下其他影响']] },
      { type: 'warn', label: '易错', text: '<strong>第二类永动机不违背能量守恒定律，却违背热力学第二定律，所以同样不可能。</strong>不少人误以为"只要不违反能量守恒就能造出来"，其实能量守恒只是必要条件，自然过程的方向性（第二定律）是另一道不可逾越的关卡。' },
      { type: 'example', label: '例题·海水驱动轮船', text: '有人设想：海水量大、热量取之不尽，可否只从海水中吸热，全部转化为轮船的动力，从而不烧燃料永远航行？<br><br><strong>解析</strong>：不可行。这正对应开尔文表述禁止的情况——从单一热源（海水）吸热并完全变成功而不产生其他影响。若真要这么做，必会带来其他变化，因此仅靠海水驱动、不烧燃料永航的轮船造不出来。' },
      { type: 'heading', text: '四、熵增与混乱度' },
      { type: 'paragraph', text: '上面这些现象背后有个统一标准：孤立系统（和外界没有能量、物质交换的系统）总是自发地从有序走向无序，总"混乱度"不会减小。这个混乱度用一个量来度量，叫熵。' },
      { type: 'keypoint', label: '重点·熵增原理', text: '<strong>熵增原理：孤立系统的熵（混乱度）永不减少；自发过程总是朝着熵增大的方向进行。</strong>熵越大，系统越混乱、越无序。' },
      { type: 'tip', label: '提示·生活记忆', text: '<strong>破镜难圆、墨水扩散、房间越住越乱，都是熵增——自然界偏爱"更混乱"的状态。</strong>想让熵减小（变整齐、变有序），必须付出外界的努力，比如打扫房间、重新拼好镜子。' },
      { type: 'list', items: ['整齐的火柴散落一地：熵增大（更乱）', '一滴墨水在水中散开：熵增大（更均匀混乱）', '房间长期不收拾会变乱：熵增大；打扫才能让熵减小'] },
      { type: 'paragraph', text: '热力学第二定律还告诉我们：能量在转化时会发生"品质"退化。虽然总能量守恒，但越来越多能量变成难以利用的低温内能，可用能源会越来越少。这也提醒我们要节约能源。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">热量自发从高温传低温，反向需耗电</text><rect x="60" y="80" width="150" height="80" rx="10" fill="#4fb3a5"/><text x="135" y="125" font-size="14" fill="#ffffff" text-anchor="middle" font-weight="bold">高温物体</text><rect x="470" y="80" width="150" height="80" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="545" y="125" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">低温物体</text><text x="320" y="108" font-size="24" fill="#234b45" text-anchor="middle">→</text><text x="320" y="100" font-size="13" fill="#234b45" text-anchor="middle">自发传热</text><text x="320" y="200" font-size="24" fill="#c0563f" text-anchor="middle">←</text><text x="320" y="225" font-size="12" fill="#c0563f" text-anchor="middle">反向需冰箱耗电做功</text></svg>', caption: '图1　热量自发从高温传向低温（上箭头），反向传热必须外加做功（下箭头）。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">扩散不可逆：墨水散开，不会自发聚回</text><rect x="60" y="80" width="150" height="150" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><circle cx="135" cy="155" r="12" fill="#234b45"/><text x="135" y="250" font-size="12" fill="#234b45" text-anchor="middle">一滴墨水</text><rect x="470" y="80" width="150" height="150" rx="10" fill="#4fb3a5"/><circle cx="510" cy="120" r="4" fill="#234b45"/><circle cx="560" cy="140" r="4" fill="#234b45"/><circle cx="520" cy="170" r="4" fill="#234b45"/><circle cx="575" cy="190" r="4" fill="#234b45"/><circle cx="500" cy="200" r="4" fill="#234b45"/><text x="545" y="250" font-size="12" fill="#234b45" text-anchor="middle">均匀散开</text><text x="340" y="160" font-size="30" fill="#234b45" text-anchor="middle">→</text></svg>', caption: '图2　墨水滴入清水会自发散开（右），但不会自发重新聚成一滴（不可逆）。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">熵增：孤立系统总是从有序走向无序</text><rect x="60" y="80" width="180" height="150" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="150" y="120" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">整齐排列</text><text x="150" y="160" font-size="13" fill="#234b45" text-anchor="middle">有序</text><text x="150" y="195" font-size="13" fill="#234b45" text-anchor="middle">熵较小</text><rect x="440" y="80" width="180" height="150" rx="10" fill="#4fb3a5"/><text x="530" y="120" font-size="14" fill="#ffffff" text-anchor="middle" font-weight="bold">散乱分布</text><text x="530" y="160" font-size="13" fill="#ffffff" text-anchor="middle">无序</text><text x="530" y="195" font-size="13" fill="#ffffff" text-anchor="middle">熵较大</text><text x="340" y="160" font-size="30" fill="#234b45" text-anchor="middle">→</text><text x="340" y="200" font-size="12" fill="#1f7a6e" text-anchor="middle">自发进行，熵增大</text></svg>', caption: '图3　孤立系统自发从整齐有序（左）走向散乱无序（右），总熵只会增大或不变。' }
    ],
    exercises: [
      { type: 'choice', question: '关于宏观自然过程的方向性，下列说法正确的是？', options: ['热量能自发从低温物体传到高温物体', '热量能自发从高温物体传到低温物体', '均匀墨水会自发重新聚成一滴', '散落的火柴会自发重新排整齐'], answer: '热量能自发从高温物体传到低温物体', explanation: '自然过程具有方向性：热量自发地从高温物体传向低温物体，而不会自发反向，所以第一项错、第二项对。扩散和散乱都是熵增过程，均匀墨水不会自发聚回一滴，散落火柴也不会自发排整齐，所以第三、四项都错。' },
      { type: 'choice', question: '热力学第二定律的克劳修斯表述说明？', options: ['热量不能自发地从低温物体传到高温物体', '热量任何情况下都不能从低温物体传到高温物体', '热量总是从低温物体传向高温物体', '热量根本不能在物体之间传递'], answer: '热量不能自发地从低温物体传到高温物体', explanation: '克劳修斯表述的关键是"自发"二字：热量不能自发地从低温传向高温。借着外界做功（如冰箱耗电），热量是可以从低温传到高温的，所以"任何情况都不能"的第二项错误，第三、四项也明显错误。' },
      { type: 'choice', question: '关于熵增原理，下列说法正确的是？', options: ['孤立系统的熵永不减少', '熵越大系统越有序', '房间被收拾整齐是熵增', '墨水扩散使熵减小'], answer: '孤立系统的熵永不减少', explanation: '熵增原理指出：孤立系统的熵（混乱度）永不减少，自发过程朝熵增大的方向进行，所以第一项正确。熵越大代表越混乱、越无序，因此第二项错；收拾房间是从无序变有序，熵减小而非增大，第三项错；墨水扩散是变混乱，熵应增大而非减小，第四项错。' },
      { type: 'fill', question: '热力学第二定律的开尔文表述指出：不可能从单一热源吸热，并使之完全变为有用功而不产生___。', answer: '其他影响', explanation: '开尔文表述说明，从单一热源吸热并完全转化为有用功，必定会留下其他影响，因此不能做到"只吸热、全变功、什么都不改变"。这也否定了第二类永动机——它不违反能量守恒，却仍不可能实现。' },
      { type: 'fill', question: '孤立系统的总混乱度（熵）在自发过程中只会增大或不变，这一规律称为___原理。', answer: '熵增', explanation: '熵用来度量系统的混乱度。熵增原理表明：对于一个和外界没有交换的孤立系统，其总熵永不减少，自发过程总是朝着熵增大的方向进行，即系统自发地从有序走向无序。想让熵减小必须依靠外界干预。' }
    ]
  });
})();
