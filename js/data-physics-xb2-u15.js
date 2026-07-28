/* ============================================================
 * 高二物理 · 选择性必修第二册 · 第四章 电磁振荡与电磁波
 * 课时15：电磁波的发射和接收
 * 数据注入：physics.xb2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb2');
  if (!v) return;

  v.points.push({
    id: 'xb2-u15',
    name: '电磁波的发射和接收',
    chapter: '选择性必修第二册 · 第四章 电磁振荡与电磁波',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、怎样把电磁波发射出去' },
      { type: 'paragraph', text: '要让电磁波飞向远方，先得有个能不断"抖动"电磁场的振荡电路。但普通的闭合电路（比如一个圆环）里，电磁场大多被关在电路附近，跑不出去。想发射，就得改造电路，让电磁场能伸到空间中。' },
      { type: 'keypoint', label: '重点·开放电路', text: '<strong>采用开放电路（带天线的电路）有利于发射电磁波。</strong>把电容器的极板拉开、变成一根高高的天线，电磁场就能向周围空间扩散，而不是被闷在闭合回路里。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">开放电路（带天线）比闭合电路更容易发射电磁波</text><rect x="40" y="70" width="260" height="160" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="170" y="100" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">闭合电路</text><circle cx="170" cy="160" r="30" fill="none" stroke="#234b45" stroke-width="3"/><text x="170" y="230" font-size="13" fill="#234b45" text-anchor="middle">磁场被关在里面，难发射</text><rect x="380" y="70" width="260" height="160" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="510" y="100" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">开放电路+天线</text><line x1="510" y1="160" x2="510" y2="70" stroke="#234b45" stroke-width="3"/><polygon points="510,60 504,78 516,78" fill="#234b45"/><path d="M 540 120 q 20 -30 40 0 q 20 30 40 0 q 20 -30 40 0" fill="none" stroke="#4fb3a5" stroke-width="3"/><text x="510" y="230" font-size="13" fill="#234b45" text-anchor="middle">电磁场向空间扩散，可发射</text></svg>', caption: '图1　闭合电路难发射，带天线的开放电路才能把电磁场送向空间。' },
      { type: 'list', items: ['使用开放电路（带天线），让电磁场能扩散到空间中，而不是被关在闭合回路里', '用较高频率的振荡电流，频率越高越容易发射出去', '通过调制把要传递的信息"搭载"到高频载波上再发射'] },
      { type: 'paragraph', text: '光有振荡电路还不够。高频电磁波本身只是个"空车"，如果不装东西，对方收到也听不到声音、看不到图像。所以发射前还要把声音、图像等信息"装"到电磁波上，这一步叫调制。' },
      { type: 'keypoint', label: '重点·调制', text: '<strong>调制是把要传递的信号"装"到高频载波上的过程。</strong>调幅（AM）改变载波的振幅，调频（FM）改变载波的频率。经过调制，电磁波才携带了信息。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">调制：把信号"装"到载波上（调幅改振幅，调频改频率）</text><text x="170" y="80" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">调幅 AM</text><path d="M 40 150 q 20 -70 40 0 q 20 70 40 0 q 20 -40 40 0 q 20 40 40 0 q 20 -70 40 0 q 20 70 40 0" fill="none" stroke="#2e9e8f" stroke-width="3"/><text x="510" y="80" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">调频 FM</text><path d="M 380 150 q 10 -50 20 0 q 10 50 20 0 q 20 -50 40 0 q 20 50 40 0 q 35 -50 70 0 q 35 50 70 0" fill="none" stroke="#4fb3a5" stroke-width="3"/><text x="340" y="270" font-size="13" fill="#234b45" text-anchor="middle">左：振幅被信号改变；右：疏密被信号改变，振幅基本不变</text></svg>', caption: '图2　调幅 AM 改变载波振幅，调频 FM 改变载波频率（疏密）。' },
      { type: 'heading', text: '二、接收：选台与检波' },
      { type: 'paragraph', text: '空中同时飘着无数电台的电磁波，接收天线会把它们一股脑全收进来。这么多信号挤在一起，怎么只听想听的那一个？这就需要两步关键操作：先选台，再把信号取出来。' },
      { type: 'keypoint', label: '重点·调谐选台', text: '<strong>调谐是调节接收电路，让它和某个电台的频率相同，从而只"响应"该电台的现象（电谐振）。</strong>转动收音机选台旋钮，干的就是调谐这件事。' },
      { type: 'list', items: ['天线接收：空中各种频率的电磁波都被接收天线收到', '调谐选台：调节接收电路，让它只"响应"想听的那个频率（电谐振）', '检波：把选出的已调波里的声音或图像信号取出来', '还原：信号送到喇叭或屏幕，变成我们能听能看的内容'] },
      { type: 'warn', label: '易错', text: '很多同学把"调谐"和"检波"搞混。<strong>调谐是选台（决定接收哪一个频率），检波是把选出来的信号里原来的声音取出来。</strong>顺序上先调谐再检波，两者作用完全不同，不能颠倒理解。' },
      { type: 'table', headers: ['环节', '所在位置', '作用'], rows: [['调制', '发射端', '把要传递的声音/图像信号"装"到高频载波上'], ['调谐', '接收端', '调节电路使其与某电台频率相同，选出该台'], ['检波（解调）', '接收端', '从已调波里把原来的声音/图像信号取出来']] },
      { type: 'keypoint', label: '重点·检波', text: '<strong>检波（也叫解调）是从已调波中把原来携带的声音或图像信号取出来的过程。</strong>没有检波，收到的只是载着信息的"空车"，听不到具体内容。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">接收电磁波：天线接收 → 调谐选台 → 检波 → 还原声音</text><rect x="40" y="120" width="120" height="60" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="100" y="155" font-size="13" fill="#234b45" text-anchor="middle">天线接收</text><rect x="200" y="120" width="120" height="60" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="260" y="155" font-size="13" fill="#234b45" text-anchor="middle">调谐选台</text><rect x="360" y="120" width="120" height="60" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="420" y="155" font-size="13" fill="#234b45" text-anchor="middle">检波取出</text><rect x="520" y="120" width="120" height="60" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="580" y="155" font-size="13" fill="#234b45" text-anchor="middle">喇叭发声</text><line x1="160" y1="150" x2="198" y2="150" stroke="#4fb3a5" stroke-width="3"/><polygon points="200,150 188,144 188,156" fill="#4fb3a5"/><line x1="320" y1="150" x2="358" y2="150" stroke="#4fb3a5" stroke-width="3"/><polygon points="360,150 348,144 348,156" fill="#4fb3a5"/><line x1="480" y1="150" x2="518" y2="150" stroke="#4fb3a5" stroke-width="3"/><polygon points="520,150 508,144 508,156" fill="#4fb3a5"/><text x="340" y="230" font-size="13" fill="#234b45" text-anchor="middle">调谐=选台，检波=从已调波里取出原来的信号</text></svg>', caption: '图3　接收流程：天线接收、调谐选台、检波取出、最后还原成声音。' },
      { type: 'example', label: '例题·对应环节', text: '小明用收音机听广播，他转动选台旋钮直到出现想听的电台。这一步对应的是发射还是接收中的哪个环节？<br><br><strong>解析</strong>：<br>转动选台旋钮是在接收端改变接收电路的固有频率，使它和某个电台的频率一致，从而把该电台"挑"出来，这就是<strong>调谐（选台）</strong>。它属于接收端的操作，不是发射端的调制，也不是取出信号的检波。' },
      { type: 'tip', label: '提示', text: '<strong>调幅 AM 抗干扰较弱、传播距离远、覆盖范围大；调频 FM 音质更好、抗干扰强，但传播距离较短。</strong>了解这一点有助于理解不同广播的特点，也解释为什么本地清晰台多是 FM。' },
      { type: 'tip', label: '提示', text: '不只是收音机，<strong>手机、Wi-Fi、蓝牙、卫星电话都是靠发射和接收电磁波来工作的</strong>。它们本质上和收音机的收发原理一样，只是频率、调制方式和携带的信息不同。' },
      { type: 'warn', label: '易错', text: '<strong>调制发生在发射端，检波发生在接收端。</strong>调制负责"把信号装上车"，检波负责"把信号卸下车"。如果记反了，就会以为收音机在发射信号，这是错误的。' }
    ],
    exercises: [
      { type: 'choice', question: '为了有效地把电磁波发射到空间中，通常采用？', options: ['带天线的开放电路', '完全闭合的电路', '一节干电池', '一段直导线'], answer: '带天线的开放电路', explanation: '闭合电路里的电磁场基本被限制在电路附近，很难扩散到空间，不便于发射。采用带天线的开放电路，电磁场能延伸到周围空间并向外传播，同时配合较高频率的振荡电流，才能有效地把电磁波发射出去。干电池、直导线本身不能完成发射任务。' },
      { type: 'choice', question: '在发射端，把要传递的声音信号"装"到高频载波上的过程叫？', options: ['调制', '调谐', '检波', '放大'], answer: '调制', explanation: '调制是发射端的关键步骤，作用是把缓慢变化的声音、图像等信号"加载"到高频载波上，便于发射和远距离传播。调谐和检波都属于接收端，放大只是增强信号幅度，都不是"装载信号"这一步。' },
      { type: 'choice', question: '用收音机收听广播时，转动选台旋钮选出想听的电台，这对应？', options: ['调制（发射端装信号）', '调谐（选台）', '检波（取出信号）', '发射（向外发波）'], answer: '调谐（选台）', explanation: '转动选台旋钮改变的是接收电路的固有频率，使它和某个电台的频率相同，从而只接收该电台，这就是调谐（选台）。它发生在接收端，既不是发射端的调制，也不是取出声音信号的检波。' },
      { type: 'fill', question: '收音机收到已调波后，从中取出原来声音信号的过程叫___（填"检波"或"调谐"）。', answer: '检波', explanation: '检波又称解调，作用是把经过调制、携带信息的已调波还原，从中取出原来的声音或图像信号。调谐只是先"选"出某个频率的电台，真正把信号拿出来的步骤是检波。' },
      { type: 'fill', question: '调制中，若改变的是载波的振幅，这种方式叫___（填"调幅"或"调频"）。', answer: '调幅', explanation: '调制有两大基本方式：调幅（AM）改变载波的振幅大小来代表信号；调频（FM）改变载波的频率高低来代表信号。题目说改变的是振幅，因此对应的就是调幅。' }
    ]
  });
})();
