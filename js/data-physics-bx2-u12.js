/* ============================================================
 * 高一物理 · 必修 第二册 · 第七章 万有引力与宇宙航行
 * 课时12：宇宙航行
 * 数据注入：physics.bx2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx2');
  if (!v) return;

  v.points.push({
    id: 'bx2-u12',
    name: '宇宙航行',
    chapter: '必修第二册 · 第七章 万有引力与宇宙航行',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、人类如何飞向太空' },
      { type: 'paragraph', text: '古人仰望星空，梦想飞出地球。但要让一个物体不再落回地面，得让它跑得足够快。牛顿早就设想：如果在高山上水平抛出一块石头，速度越大，它落地前飞得越远；如果速度足够大，它就会绕地球转圈，永远不掉下来。' },
      { type: 'keypoint', label: '重点·三个宇宙速度', text: '<strong>第一宇宙速度约 7.9 km/s（绕地球表面做匀速圆周运动的最小速度）；第二宇宙速度约 11.2 km/s（挣脱地球引力）；第三宇宙速度约 16.7 km/s（挣脱太阳引力，飞出太阳系）。</strong>速度从小到大，分别对应绕地、逃逸地球、逃逸太阳。' },
      { type: 'paragraph', text: '第一宇宙速度也叫环绕速度，是发射人造卫星的最小速度，也是卫星在近地圆轨道运行时的最大环绕速度。' },
      { type: 'list', items: ['第一宇宙速度约 7.9 km/s：绕地球不落回', '第二宇宙速度约 11.2 km/s：逃离地球', '第三宇宙速度约 16.7 km/s：逃离太阳系', '发射速度越大，卫星轨道越高或越能逃逸'] },
      { type: 'heading', text: '二、第一宇宙速度从哪里来' },
      { type: 'paragraph', text: '让卫星贴近地球表面做匀速圆周运动，地球引力正好全部用来提供向心力。把引力公式和向心力公式联立，就能得到第一宇宙速度的大小。' },
      { type: 'keypoint', label: '重点·第一宇宙速度推导', text: '<strong>由 G×M×m/R² = m×v²/R，可得 v = √(G×M/R)。代入地球数据得到约 7.9 km/s。</strong>也可以由 mg = m×v²/R 得到 v = √(g×R)，结果相同。这就是卫星绕地球表面飞行的最小速度。' },
      { type: 'example', label: '例题·近地卫星速度', text: '一颗近地圆轨道卫星，轨道半径近似等于地球半径 R，求它的环绕速度大约是多少？<br><br><strong>解析</strong>：由第一宇宙速度公式 v = √(g×R)。取 g≈9.8、R≈6.4×10⁶ 米，得 v ≈ √(9.8×6.4×10⁶) ≈ 7.9×10³ 米/秒，即约 7.9 km/s。这正是第一宇宙速度。' },
      { type: 'warn', label: '易错·最小与最大', text: '<strong>第一宇宙速度既是发射卫星的最小速度，又是卫星在近地圆轨道上的最大环绕速度。</strong>很多同学只记住最小发射速度，却忽略最大环绕速度。轨道越高，环绕速度反而越小，但发射时需要的速度越大。' },
      { type: 'table', headers: ['宇宙速度', '数值', '意义'], rows: [['第一宇宙速度', '约 7.9 km/s', '绕地球表面圆周运动'], ['第二宇宙速度', '约 11.2 km/s', '挣脱地球引力'], ['第三宇宙速度', '约 16.7 km/s', '挣脱太阳引力飞出太阳系']] },
      { type: 'heading', text: '三、卫星的运行规律' },
      { type: 'paragraph', text: '卫星绕地球做圆周运动时，轨道半径越大，环绕速度越小，周期越长。也就是说，高轨道上的卫星跑得慢、转一圈更久。但要把卫星送到高轨道，发射时需要更大的初速度，消耗更多能量。' },
      { type: 'tip', label: '提示·高度与速度', text: '<strong>卫星轨道越高，环绕速度越小、周期越大，但发射速度要求越大。</strong>不要误以为飞得高的卫星速度更快，实际正好相反：近地卫星速度最大。' },
      { type: 'list', items: ['轨道半径越大，环绕速度越小', '轨道半径越大，公转周期越大', '同步卫星轨道很高，周期等于地球自转周期', '所有卫星运动都由地球引力提供向心力'] },
      { type: 'heading', text: '四、同步卫星与航天成就' },
      { type: 'paragraph', text: '同步卫星停在赤道上空某固定高度，它绕地球一圈的时间恰好等于地球自转一圈的时间（约 24 小时），所以从地面看它始终悬在同一地点上空，常用来转播电视和通信信号。' },
      { type: 'keypoint', label: '重点·同步卫星特点', text: '<strong>同步卫星必须位于赤道正上方、轨道固定、周期约 24 小时，相对地面静止。</strong>因为它要和地球一起转动，所以轨道平面、周期都有严格限制，不是随便放哪儿都行。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">三个宇宙速度：绕地、逃逸地球、逃逸太阳</text><rect x="40" y="58" width="600" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><circle cx="180" cy="158" r="22" fill="#4fb3a5"/><text x="180" y="162" font-size="11" fill="#234b45" text-anchor="middle">地球</text><circle cx="180" cy="158" r="50" fill="none" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><text x="180" y="110" font-size="11" fill="#234b45" text-anchor="middle">7.9</text><circle cx="180" cy="158" r="86" fill="none" stroke="#4fb3a5" stroke-width="2" stroke-dasharray="3,3"/><text x="270" y="120" font-size="11" fill="#234b45">11.2</text><circle cx="180" cy="158" r="120" fill="none" stroke="#234b45" stroke-width="2" stroke-dasharray="2,3"/><text x="300" y="92" font-size="11" fill="#234b45">16.7</text></svg>', caption: '图1　三个宇宙速度由小到大：7.9 km/s 绕地，11.2 km/s 逃逸地球，16.7 km/s 逃逸太阳。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">第一宇宙速度：引力全部提供向心力，近地圆轨道</text><rect x="40" y="58" width="600" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><circle cx="340" cy="158" r="40" fill="#4fb3a5"/><text x="340" y="162" font-size="12" fill="#234b45" text-anchor="middle">地球</text><circle cx="340" cy="158" r="90" fill="none" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><circle cx="430" cy="158" r="9" fill="#234b45"/><text x="430" y="142" font-size="11" fill="#234b45" text-anchor="middle">卫星</text><text x="500" y="200" font-size="13" fill="#234b45">v ≈ 7.9 km/s</text></svg>', caption: '图2　当卫星贴近地面做圆周运动时，地球引力全部充当向心力，对应第一宇宙速度约 7.9 km/s。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">同步卫星：赤道上空，周期约24小时，相对地面静止</text><rect x="40" y="58" width="600" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><circle cx="340" cy="158" r="30" fill="#4fb3a5"/><text x="340" y="162" font-size="11" fill="#234b45" text-anchor="middle">地球</text><circle cx="340" cy="158" r="110" fill="none" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><circle cx="450" cy="158" r="9" fill="#234b45"/><text x="450" y="142" font-size="11" fill="#234b45" text-anchor="middle">同步卫星</text><line x1="340" y1="128" x2="450" y2="128" stroke="#234b45" stroke-width="1" stroke-dasharray="3,3"/></svg>', caption: '图3　同步卫星固定在赤道上空，绕地周期约 24 小时，从地面看始终悬在同一地点。' }
    ],
    exercises: [
      { type: 'choice', question: '第一宇宙速度的大小约为？', options: ['7.9 km/s', '11.2 km/s', '16.7 km/s', '3.0 km/s'], answer: '7.9 km/s', explanation: '第一宇宙速度约 7.9 km/s，是卫星贴近地球表面做匀速圆周运动的速度，也是发射卫星的最小速度。11.2 km/s 是第二宇宙速度（逃逸地球），16.7 km/s 是第三宇宙速度（逃逸太阳），3.0 km/s 没有对应意义。' },
      { type: 'choice', question: '关于卫星轨道高度与环绕速度的关系，正确的是？', options: ['轨道越高，环绕速度越大', '轨道越高，环绕速度越小', '环绕速度与高度无关', '所有卫星环绕速度都相同'], answer: '轨道越高，环绕速度越小', explanation: '卫星绕地球运动时，地球引力提供向心力，由 G×M×m/r² = m×v²/r 可得 v = √(GM/r)。轨道半径 r 越大，环绕速度 v 越小。所以高轨道卫星反而跑得慢，但发射到高轨道需要更大的初速度。' },
      { type: 'choice', question: '同步卫星相对于地面静止，是因为它的？', options: ['质量特别大', '周期等于地球自转周期且位于赤道上空', '不受地球引力', '速度等于光速'], answer: '周期等于地球自转周期且位于赤道上空', explanation: '同步卫星要与地球保持相对静止，必须满足两个条件：轨道在赤道正上方，且绕地球一圈的周期恰好等于地球自转周期（约 24 小时）。这样它才能始终悬在地面同一地点的上空，用于通信和广播。' },
      { type: 'fill', question: '第二宇宙速度约为 11.2 km/s，它的意义是让物体挣脱___的引力束缚。', answer: '地球', explanation: '第二宇宙速度约 11.2 km/s，当物体的速度达到这个值时，就能克服地球引力的束缚，飞离地球成为绕太阳运动的人造行星。它是从地球逃逸所需的最小速度，因此也叫逃逸速度。' },
      { type: 'fill', question: '第一宇宙速度既是发射卫星的最小速度，又是近地圆轨道上的最___（填“大”或“小”）环绕速度。', answer: '大', explanation: '第一宇宙速度具有双重身份：它既是把卫星送上近地圆轨道所需的最小发射速度，又是卫星在近地圆轨道上运行时的最大环绕速度。轨道越高，环绕速度越小，所以近地轨道速度最大。' }
    ]
  });
})();
