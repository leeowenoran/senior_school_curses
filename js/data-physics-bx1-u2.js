/* ============================================================
 * 高一物理 · 必修 第一册 · 第一章 运动的描述
 * 课时2：时间 位移
 * 数据注入：physics.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx1');
  if (!v) return;

  v.points.push({
    id: 'bx1-u2',
    name: '时间 位移',
    chapter: '必修第一册 · 第一章 运动的描述',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、时刻和时间间隔' },
      { type: 'paragraph', text: '我们平常说"8点上课""一节课45分钟"，这里其实混用了两个不同的概念。时刻指的是时间轴上一个"点"，表示某一瞬间；时间间隔（常简称为"时间"）指的是两个时刻之间的那段间隔，是时间轴上的一条"线段"。' },
      { type: 'keypoint', label: '重点·时刻与时间', text: '<strong>时刻</strong>：时间轴上的一个点，表示某一瞬间，如"第3秒末""8:00"。<br><strong>时间间隔（时间）</strong>：两个时刻之差，表示一段持续过程，如"前3秒""第3秒内"。' },
      { type: 'list', items: ['第3秒末、第5秒初、8:00 都是时刻（某一瞬间）', '前3秒、第3秒内、前5秒到第8秒 都是时间间隔', '第n秒内 = 从第(n-1)秒末到第n秒末，时长1秒', '前n秒 = 从0时刻到第n秒末，时长n秒'] },
      { type: 'paragraph', text: '举几个容易混的例子："第3秒末"是一个时刻；"第3秒内"指的是第2秒末到第3秒末这1秒钟，是时间间隔；"前3秒"指从0到第3秒末共3秒，也是时间间隔。只要看它说的是"一瞬间"还是"一段持续过程"，就不会弄错。' },
      { type: 'heading', text: '二、位移和路程' },
      { type: 'paragraph', text: '物体运动时，从初位置到末位置的位置变化用"位移"表示。位移是从初位置指向末位置的一条有向线段：线段的长度等于初末位置之间的直线距离（即位移的大小），线段的方向就是从初位置指向末位置。位移是矢量，既有大小也有方向。' },
      { type: 'keypoint', label: '重点·位移', text: '<strong>位移是从初位置指向末位置的有向线段。</strong>它的大小等于初末位置的直线距离，方向由初位置指向末位置。位移只与初、末位置有关，与运动经过的路径无关。' },
      { type: 'example', label: '例题·位移与路径', text: '一个人从操场A点出发，沿弯道走到B点，A、B两点直线距离为50米。求他的位移大小和路程。<br><br><strong>解析</strong>：位移大小由初位置A和末位置B决定，等于A、B间直线距离，即50米，方向由A指向B。路程是他实际走过的弯曲轨迹长度，一定大于50米。可见路程大于位移大小。' },
      { type: 'warn', label: '易错', text: '不要以为"位移大小就等于路程"。<strong>只有在物体做单向直线运动时，位移大小才等于路程；其他情况下，位移大小都小于路程。</strong>位移大小永远不会大于路程。另外位移是矢量，路程是标量，二者物理意义不同。' },
      { type: 'table', headers: ['比较项', '位移', '路程'], rows: [['物理意义', '位置的变化', '运动轨迹的实际长度'], ['矢量/标量', '矢量（有大小有方向）', '标量（只有大小）'], ['大小关系', '初末位置直线距离', '实际轨迹长度，≥位移大小'], ['与路径关系', '只由初末位置决定', '与运动路径有关']] },
      { type: 'paragraph', text: '特别地，当物体沿着一条直线朝同一方向运动（单向直线运动）时，它走过的轨迹就是初末位置的连线，这时位移的大小正好等于路程。一旦运动有往返或走曲线，路程就会比位移大小更大。' },
      { type: 'heading', text: '三、矢量和标量' },
      { type: 'paragraph', text: '物理量按有没有方向，分成两大类。一类是矢量：既有大小又有方向，比如位移、速度、力。另一类是标量：只有大小、没有方向，比如质量、时间、温度、路程。' },
      { type: 'keypoint', label: '重点·矢量与标量', text: '<strong>矢量</strong>：既有大小又有方向的物理量，如位移、速度、加速度、力。<br><strong>标量</strong>：只有大小、没有方向的物理量，如质量、时间、温度、路程、速率。' },
      { type: 'tip', label: '提示', text: '<strong>路程一定是标量。</strong>无论物体怎么运动，路程只是轨迹长度的数值，没有方向。而位移是矢量，比较两位移是否相等，不但要比大小，还要比方向。' },
      { type: 'list', items: ['矢量：有大小 + 方向，如位移、速度、力', '标量：只有大小，无方向，如质量、时间、路程', '比较两个矢量要同时比较大小和方向', '位移是矢量，路程是标量，不能直接说"位移等于路程"'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">时刻是时间轴上的点，时间间隔是线段</text><line x1="60" y1="160" x2="620" y2="160" stroke="#2e9e8f" stroke-width="3"/><circle cx="60" cy="160" r="6" fill="#234b45"/><text x="60" y="190" font-size="13" fill="#234b45" text-anchor="middle">0</text><circle cx="240" cy="160" r="6" fill="#234b45"/><text x="240" y="140" font-size="13" fill="#234b45" text-anchor="middle">第2秒末</text><circle cx="420" cy="160" r="6" fill="#234b45"/><text x="420" y="140" font-size="13" fill="#234b45" text-anchor="middle">第4秒末</text><circle cx="600" cy="160" r="6" fill="#234b45"/><text x="600" y="190" font-size="13" fill="#234b45" text-anchor="middle">t</text><line x1="240" y1="118" x2="420" y2="118" stroke="#4fb3a5" stroke-width="4"/><text x="330" y="106" font-size="13" fill="#234b45" text-anchor="middle">时间间隔(第3秒内)</text><text x="340" y="250" font-size="13" fill="#234b45" text-anchor="middle">圆点表示时刻（瞬间），上方线段表示一段时间间隔</text></svg>', caption: '图1　时间轴上的圆点是时刻，两点之间的线段是一段时间间隔。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">位移是初末位置的有向线段，路程是实际轨迹</text><circle cx="120" cy="200" r="8" fill="#234b45"/><text x="120" y="228" font-size="13" fill="#234b45" text-anchor="middle">A(初)</text><circle cx="560" cy="120" r="8" fill="#234b45"/><text x="560" y="148" font-size="13" fill="#234b45" text-anchor="middle">B(末)</text><line x1="120" y1="200" x2="560" y2="120" stroke="#4fb3a5" stroke-width="4"/><path d="M 120 200 Q 300 270 560 120" fill="none" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="6,4"/><text x="320" y="172" font-size="13" fill="#234b45" text-anchor="middle">位移(直线)</text><text x="320" y="245" font-size="13" fill="#234b45" text-anchor="middle">路程(曲线轨迹)</text></svg>', caption: '图2　位移是从A到B的直线有向线段，路程是实际经过的弯曲轨迹，路程更长。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">矢量有大小也有方向，标量只有大小</text><rect x="60" y="60" width="260" height="150" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="190" y="90" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">矢量</text><text x="190" y="120" font-size="13" fill="#234b45" text-anchor="middle">既有大小，又有方向</text><text x="190" y="148" font-size="13" fill="#234b45" text-anchor="middle">如：位移、速度、力</text><line x1="120" y1="182" x2="260" y2="182" stroke="#4fb3a5" stroke-width="3"/><text x="190" y="205" font-size="12" fill="#234b45" text-anchor="middle">↑带箭头线段</text><rect x="360" y="60" width="260" height="150" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="490" y="90" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">标量</text><text x="490" y="120" font-size="13" fill="#234b45" text-anchor="middle">只有大小，没有方向</text><text x="490" y="148" font-size="13" fill="#234b45" text-anchor="middle">如：质量、时间、温度</text><text x="490" y="185" font-size="12" fill="#234b45" text-anchor="middle">只比数值大小</text></svg>', caption: '图3　矢量（左）带方向，标量（右）只有数值大小，二者本质不同。' }
    ],
    exercises: [
      { type: 'choice', question: '关于时刻和时间间隔，下列说法正确的是？', options: ['第3秒末是一段时间间隔', '前3秒是一个时刻', '时刻是时间轴上的一个点，时间间隔是两点间的线段', '时间间隔就是时刻的另一种说法'], answer: '时刻是时间轴上的一个点，时间间隔是两点间的线段', explanation: '时刻对应时间轴上的一个点，表示某一瞬间，如第3秒末；时间间隔对应时间轴上两点间的线段，表示一段持续过程，如前3秒、第3秒内。两者物理意义不同，不能混为一谈。其余选项都把时刻和时间间隔弄反了。' },
      { type: 'choice', question: '关于位移和路程，下列说法正确的是？', options: ['位移是标量，路程是矢量', '位移的大小一定等于路程', '位移是初位置指向末位置的有向线段', '路程可能小于位移的大小'], answer: '位移是初位置指向末位置的有向线段', explanation: '位移是从初位置指向末位置的有向线段，是矢量，其大小等于初末位置的直线距离。路程则是实际轨迹长度，是标量。除单向直线运动外，路程都大于位移大小，路程永远不会小于位移大小，所以"位移大小一定等于路程"和"路程可能小于位移大小"都是错的。' },
      { type: 'choice', question: '下列物理量中，属于矢量的是？', options: ['质量', '时间', '位移', '温度'], answer: '位移', explanation: '矢量是既有大小又有方向的物理量。位移既有大小（初末位置直线距离）又有方向（由初位置指向末位置），是矢量。质量、时间、温度都只有大小没有方向，属于标量。' },
      { type: 'fill', question: '物体沿一条直线朝同一方向运动（单向直线运动）时，位移的大小___路程（填"等于"或"小于"）。', answer: '等于', explanation: '单向直线运动中，物体实际走过的轨迹就是初末位置的连线，因此路程（轨迹长度）恰好等于初末位置的直线距离，即位移大小等于路程。一旦有往返或走曲线，路程就会大于位移大小。' },
      { type: 'fill', question: '位移既有大小又有方向，这样的物理量叫作___（填"矢量"或"标量"）。', answer: '矢量', explanation: '既有大小又有方向的物理量叫矢量，如位移、速度、力都是矢量。只有大小没有方向的物理量叫标量，如质量、时间、路程。位移是矢量，比较两位移是否相等既要比大小也要比方向。' }
    ]
  });
})();
