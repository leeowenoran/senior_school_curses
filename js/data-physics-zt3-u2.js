/* ============================================================
 * 高三复习 · 热学与近代物理 · 专题一 分子动理论
 * 课时2：分子热运动：扩散、布朗运动与速率分布
 * 数据注入：physics.zt3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt3');
  if (!v) return;

  v.points.push({
    id: 'zt3-u2',
    name: '分子热运动：扩散、布朗运动与速率分布',
    chapter: '热学与近代物理 · 专题一 分子动理论',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、扩散现象——分子自己跑' },
      { type: 'paragraph', text: '把一滴墨水滴进清水，过一会儿整杯水都变淡蓝；在屋里喷一点香水，隔壁房间也能闻到。这种不同物质互相接触时，彼此进入对方的现象，叫做扩散。它说明分子在不停地运动，而且温度越高，扩散进行得越快。' },
      { type: 'list', items: ['扩散是分子无规则运动造成的直接证据', '温度越高，扩散越快', '气体、液体、固体都能发生扩散，只是快慢不同'] },
      { type: 'keypoint', label: '重点·扩散', text: '<strong>扩散现象直接说明分子在永不停息地做无规则运动，温度越高分子运动越剧烈。</strong>扩散是分子本身的运动，肉眼直接看不到分子，但能看到颜色、气味的变化。' },
      { type: 'heading', text: '二、布朗运动——悬浮颗粒被撞得乱跑' },
      { type: 'paragraph', text: '1827 年，科学家布朗在显微镜下看到：悬浮在水中的花粉颗粒，不停地做着无规则、曲折的运动。要注意，布朗运动研究的"主角"是花粉这种比分子大得多的悬浮小颗粒，并不是分子本身。' },
      { type: 'keypoint', label: '重点·布朗运动', text: '<strong>布朗运动是悬浮在液体或气体中的固体小颗粒的运动，它间接反映了液体（或气体）分子的无规则热运动。</strong>颗粒本身不是分子，但它是被四面八方的分子撞击才乱动的。' },
      { type: 'warn', label: '易错', text: '<strong>布朗运动的主体是"悬浮颗粒"（花粉、墨汁微粒等），绝对不是分子。</strong>布朗运动永不停息、毫无规则；颗粒越小、温度越高，布朗运动越明显。考试常把"布朗运动是分子运动"作为错误选项。' },
      { type: 'example', label: '例题·辨析布朗运动', text: '下列说法正确的是？<br>A 布朗运动是液体分子的运动<br>B 悬浮颗粒越大，布朗运动越明显<br>C 布朗运动说明分子在做无规则运动<br>D 温度降低时布朗运动更剧烈<br><strong>解析</strong>：A 错（主体是颗粒）；B 错（颗粒越小越明显）；C 正确（间接反映）；D 错（降温更不剧烈）。答案选 C。' },
      { type: 'heading', text: '三、布朗运动与扩散的区别' },
      { type: 'table', headers: ['比较项', '扩散', '布朗运动'], rows: [['研究对象', '分子本身', '悬浮的小颗粒'], ['能否直接看到', '不能（分子看不见）', '能在显微镜下看到'], ['说明的问题', '分子在运动', '间接反映分子在运动'], ['影响因素', '温度', '温度、颗粒大小']] },
      { type: 'tip', label: '提示', text: '<strong>记忆口诀：扩散是"分子自己跑"，布朗是"大颗粒被分子撞得乱跑"。</strong>布朗运动无规则，是因为液体分子从各个方向对颗粒的撞击不平衡，颗粒越小这种不平衡越明显。' },
      { type: 'heading', text: '四、分子速率分布——大量分子的统计规律' },
      { type: 'paragraph', text: '单个分子的运动杂乱无章、无法预测。但当分子数量极大时，它们的速率却呈现稳定的统计规律：在一定温度下，多数分子的速率集中在某个中等数值附近，速率特别大或特别小的分子都很少，这种分布俗称"中间多、两头少"。' },
      { type: 'keypoint', label: '重点·速率分布', text: '<strong>大量气体分子的速率分布呈"中间多、两头少"的统计分布；温度升高时，分布曲线整体向右移、峰值降低，说明分子平均速率增大。</strong>这是统计规律，只对大量分子成立。' },
      { type: 'list', items: ['温度升高，分子平均速率增大', '速率分布曲线与温度有关，是统计规律', '对单个分子谈"平均速率"没有意义'] },
      { type: 'example', label: '例题·速率分布', text: '关于气体分子速率分布，下列说法正确的是？<br><strong>解析</strong>：温度升高时，曲线向右移、峰值降低，平均速率增大；但并不意味着每个分子的速率都变大，只是"平均"变大、快分子比例上升。故正确表述是：温度升高，分布曲线右移、峰值降低，分子平均速率增大。' },
      { type: 'warn', label: '易错', text: '<strong>速率分布是对"大量分子"的统计结果，对单个分子谈平均速率没有意义。</strong>温度升高不是每个分子速率都变大，而是平均速率变大、分布曲线整体右移。' },
      { type: 'heading', text: '五、一轮复习方法归纳' },
      { type: 'paragraph', text: '一轮复习要抓住"运动是微观的、无规则的、统计的"三条线，重点辨析布朗运动与扩散、分子运动的关系，并会用速率分布曲线判断温度高低。' },
      { type: 'list', items: ['看到"花粉、墨汁颗粒乱动"→ 布朗运动，主体是颗粒', '看到"闻到气味、墨水散开"→ 扩散，主体是分子', '布朗运动和扩散都随温度升高而加剧', '速率分布曲线右移、变平缓 → 温度升高'] },
      { type: 'tip', label: '提示', text: '<strong>考试常考"布朗运动是不是分子运动"，答案是"不是，是颗粒运动、间接反映分子运动"。</strong>把它与扩散区分开：扩散的主体是分子本身，布朗运动的主体是颗粒。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">布朗运动：悬浮颗粒的无规则折线轨迹</text><rect x="40" y="60" width="600" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><polyline points="80,200 130,160 170,190 220,140 260,180 320,120 360,170 420,130 470,190 520,150 580,180" fill="none" stroke="#234b45" stroke-width="2"/><circle cx="80" cy="200" r="4" fill="#4fb3a5"/><circle cx="170" cy="190" r="4" fill="#4fb3a5"/><circle cx="260" cy="180" r="4" fill="#4fb3a5"/><circle cx="360" cy="170" r="4" fill="#4fb3a5"/><circle cx="470" cy="190" r="4" fill="#4fb3a5"/><circle cx="580" cy="180" r="4" fill="#4fb3a5"/><text x="340" y="288" font-size="13" fill="#234b45" text-anchor="middle">轨迹曲折无规则，反映的是液体分子撞击的不平衡</text></svg>', caption: '图1　显微镜下悬浮颗粒的布朗运动轨迹（示意），折线毫无规则。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">扩散：分子从高浓度处自发进入低处</text><rect x="40" y="60" width="280" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">滴入瞬间</text><circle cx="180" cy="155" r="22" fill="#4fb3a5"/><rect x="360" y="60" width="280" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">一段时间后</text><circle cx="420" cy="130" r="8" fill="#4fb3a5"/><circle cx="470" cy="170" r="8" fill="#4fb3a5"/><circle cx="540" cy="140" r="8" fill="#4fb3a5"/><circle cx="500" cy="200" r="8" fill="#4fb3a5"/><circle cx="560" cy="190" r="8" fill="#4fb3a5"/><text x="340" y="288" font-size="13" fill="#234b45" text-anchor="middle">墨水分子自发散开，说明分子在做无规则运动</text></svg>', caption: '图2　扩散现象：墨水分子从集中处自发散布到整杯水中。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">分子速率分布：中间多、两头少</text><line x1="80" y1="240" x2="620" y2="240" stroke="#234b45" stroke-width="2"/><line x1="80" y1="240" x2="80" y2="70" stroke="#234b45" stroke-width="2"/><polyline points="80,240 140,232 200,190 260,130 320,95 360,92 400,115 460,165 520,205 580,230 620,240" fill="none" stroke="#2e9e8f" stroke-width="3"/><text x="330" y="80" font-size="13" fill="#234b45" text-anchor="middle">峰值：最概然速率</text><text x="360" y="262" font-size="13" fill="#234b45" text-anchor="middle">速率 v 增大 →</text><text x="50" y="150" font-size="13" fill="#234b45" text-anchor="middle" transform="rotate(-90 50 150)">分子数</text><text x="340" y="288" font-size="13" fill="#234b45" text-anchor="middle">温度越高曲线越右移、越平缓</text></svg>', caption: '图3　气体分子速率分布曲线，呈"中间多、两头少"的统计分布。' }
    ],
    exercises: [
      { type: 'choice', question: '布朗运动的研究对象是？', options: ['液体分子', '悬浮在液体中的小颗粒', '气体分子', '固体分子'], answer: '悬浮在液体中的小颗粒', explanation: '布朗运动是悬浮在液体或气体中的固体小颗粒的运动，能在显微镜下观察到。它并不是分子本身的运动，而是液体（或气体）分子从各个方向撞击颗粒、使颗粒无规则运动，从而间接反映了分子的无规则热运动。' },
      { type: 'choice', question: '关于扩散和布朗运动，下列说法正确的是？', options: ['扩散的主体是分子，布朗运动的主体是颗粒', '两者都只能在液体中发生', '温度降低时两者都更剧烈', '布朗运动是分子直接的运动'], answer: '扩散的主体是分子，布朗运动的主体是颗粒', explanation: '扩散是分子本身从高浓度处进入低浓度处的运动，主体为分子；布朗运动是悬浮颗粒被分子撞击而产生的运动，主体为颗粒。两者在气体、液体、固体中均可发生（固体扩散很慢），且都随温度升高而加剧，故温度降低时应更不明显。' },
      { type: 'choice', question: '对于一定质量的气体，温度升高时分子速率分布的变化是？', options: ['曲线左移、峰值升高', '曲线整体右移、峰值降低，平均速率增大', '曲线不变', '所有分子速率都减小'], answer: '曲线整体右移、峰值降低，平均速率增大', explanation: '分子速率分布是大量分子的统计规律。温度升高时，分子平均动能增大、平均速率增大，分布曲线整体向右移、峰值降低，快分子的比例上升。但这是"平均"意义上的变化，并不是每一个分子的速率都变大。' },
      { type: 'fill', question: '布朗运动______（填"直接"或"间接"）反映了液体分子的无规则运动。', answer: '间接', explanation: '布朗运动是悬浮颗粒的运动，颗粒本身不是分子。它是由于液体分子从四面八方对颗粒的撞击不平衡，才使颗粒无规则运动，因此布朗运动间接反映了液体分子的无规则热运动，而不是分子本身的运动。' },
      { type: 'fill', question: '扩散现象说明分子在______地做无规则运动（填四个字）。', answer: '永不停息', explanation: '扩散是不同物质互相接触时彼此进入对方的现象，它直接说明分子在永不停息地做无规则运动，且温度越高扩散越快。注意扩散的主体是分子本身，与布朗运动（主体是颗粒）不同。' }
    ]
  });
})();
