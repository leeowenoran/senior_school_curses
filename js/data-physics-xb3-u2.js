/* ============================================================
 * 高二物理 · 选择性必修 第三册 · 第一章 分子动理论
 * 课时2：分子热运动
 * 数据注入：physics.xb3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb3');
  if (!v) return;

  v.points.push({
    id: 'xb3-u2',
    name: '分子热运动',
    chapter: '选择性必修 第三册 · 第一章 分子动理论',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、扩散现象：不同物质互相进入对方' },
      { type: 'paragraph', text: '把一滴蓝墨水滴进清水，过一会儿整杯水都变蓝了；在房间里喷一点香水，远处也能闻到香味。这些现象说明：不同物质在互相接触时，会彼此进入对方，这种现象叫做扩散。' },
      { type: 'keypoint', label: '重点·扩散现象', text: '<strong>扩散是不同物质互相接触时，彼此进入对方的现象。</strong>它直接证明了分子在不停地运动，而且分子之间是有空隙的，否则一种物质无法钻进另一种物质里面。' },
      { type: 'list', items: ['墨水在水里散开，整杯水逐渐变色', '墙角堆煤，久了墙壁深处也发黑', '闻到花香、菜香，是气体分子扩散到鼻子里', '把两块不同的金属紧压在一起，久了交界处互相渗入'] },
      { type: 'paragraph', text: '扩散快慢和温度有关。热水里加糖化得快，冷天花香飘得慢，都说明温度越高，分子运动越剧烈，扩散也就越快。后面我们会专门讲这一点。' },
      { type: 'heading', text: '二、布朗运动：悬浮微粒的无规则运动' },
      { type: 'paragraph', text: '1827 年，植物学家布朗用显微镜观察悬浮在水中的花粉微粒，发现这些比分子大得多的微粒在不停地、无规则地乱动，轨迹弯弯曲曲、毫无规律。这种悬浮在液体或气体中的微粒所做的无规则运动，就叫做布朗运动。' },
      { type: 'keypoint', label: '重点·布朗运动', text: '<strong>布朗运动是悬浮在液体（或气体）中的微小颗粒所做的无规则运动。</strong>颗粒本身不是分子，它比分子大得多；它之所以乱动，是被周围大量液体分子从各个方向不均匀地撞击的结果。' },
      { type: 'example', label: '例题·理解布朗运动', text: '问：布朗运动中的"运动主体"是谁？它直接反映谁的运动？<br><br><strong>解析</strong>：<br>运动主体是<strong>悬浮的微粒</strong>（如花粉颗粒），不是分子。微粒受到周围液体分子四面八方不断撞击，某一瞬间哪边撞得多就往哪边偏，于是轨迹杂乱无章。所以布朗运动<strong>间接反映液体分子在做无规则热运动</strong>，是分子运动的"证据"而不是分子本身在动。' },
      { type: 'warn', label: '易错', text: '<strong>布朗运动不是分子的运动，而是微粒的运动；它反映的是液体（气体）分子的热运动。</strong>很多同学误以为"看到花粉动就是看到分子动"，这是错的——分子小到看不见，我们看到的只是被分子撞得乱跑的较大颗粒。' },
      { type: 'heading', text: '三、温度越高，运动越剧烈' },
      { type: 'paragraph', text: '无论是扩散还是布朗运动，都随温度升高而变得更明显、更剧烈。这说明分子运动的剧烈程度和温度直接相关：温度越高，分子平均运动越剧烈。' },
      { type: 'keypoint', label: '重点·温度与剧烈程度', text: '<strong>温度越高，分子的热运动越剧烈。</strong>所以"温度"本质上标志着分子平均运动的剧烈程度，这也是为什么热粥比凉粥里的分子更"闹腾"。' },
      { type: 'tip', label: '提示', text: '<strong>布朗运动的剧烈程度还和颗粒大小有关。</strong>颗粒越小，来自各方向的撞击越不容易相互抵消，运动越明显；颗粒太大则各个方向撞击近乎平衡，反而不容易看出布朗运动。所以观察时要选足够小的悬浮微粒。' },
      { type: 'table', headers: ['对比项', '扩散现象', '布朗运动'], rows: [['运动主体', '分子本身', '悬浮的较大微粒'], ['能否直接看见', '不能直接看见', '显微镜下可看见颗粒乱动'], ['说明的问题', '分子在运动且有空隙', '间接反映液体分子在热运动'], ['与温度关系', '温度越高扩散越快', '温度越高运动越剧烈']] },
      { type: 'heading', text: '四、热运动：分子永不停息的无规则运动' },
      { type: 'paragraph', text: '无论是扩散还是布朗运动，根源都在于：组成物质的分子在永不停息地做无规则运动。由于这种运动和温度有关，物理学上把分子永不停息的无规则运动叫做热运动。' },
      { type: 'keypoint', label: '重点·热运动', text: '<strong>分子永不停息的无规则运动叫做热运动。</strong>它"永不停息"——哪怕在冰冷的冬天，分子仍在运动，只是比较"温柔"；温度只是改变剧烈程度，不会让分子完全静止。' },
      { type: 'list', items: ['扩散现象：不同物质分子彼此进入对方，直接证明分子在运动且有空隙', '布朗运动：悬浮微粒被液体分子撞击而乱动，间接反映分子热运动', '热运动：分子永不停息的无规则运动，温度越高，运动越剧烈'] },
      { type: 'paragraph', text: '到这里，我们看清了一条主线：温度决定分子热运动的剧烈程度；分子撞击悬浮微粒产生布朗运动；不同物质分子互相乱窜就形成扩散。三者是同一条根上的不同表现。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">扩散现象：两种物质互相进入对方</text><rect x="60" y="70" width="240" height="170" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="100" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">清水</text><circle cx="120" cy="160" r="8" fill="#4fb3a5"/><circle cx="160" cy="190" r="8" fill="#4fb3a5"/><circle cx="210" cy="150" r="8" fill="#4fb3a5"/><rect x="380" y="70" width="240" height="170" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="100" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">混匀后</text><circle cx="420" cy="130" r="6" fill="#4fb3a5"/><circle cx="470" cy="170" r="6" fill="#4fb3a5"/><circle cx="520" cy="140" r="6" fill="#4fb3a5"/><circle cx="560" cy="190" r="6" fill="#4fb3a5"/><circle cx="440" cy="200" r="6" fill="#4fb3a5"/><circle cx="540" cy="120" r="6" fill="#4fb3a5"/><line x1="300" y1="155" x2="370" y2="155" stroke="#234b45" stroke-width="2"/><polygon points="364,149 364,161 376,155" fill="#234b45"/></svg>', caption: '图1　一滴有色物质进入清水，最终均匀混合，这就是扩散——不同物质彼此进入对方。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">布朗运动：悬浮微粒的无规则折线轨迹</text><rect x="60" y="60" width="560" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><polyline points="100,160 150,120 190,190 240,130 290,200 340,140 390,185 440,120 500,175 560,150" fill="none" stroke="#234b45" stroke-width="2.5"/><circle cx="100" cy="160" r="4" fill="#4fb3a5"/><circle cx="560" cy="150" r="4" fill="#4fb3a5"/><text x="340" y="280" font-size="13" fill="#234b45" text-anchor="middle">弯弯曲曲、毫无规律的轨迹，是被液体分子不断撞击的结果</text></svg>', caption: '图2　显微镜下悬浮微粒的运动轨迹是一条弯弯曲曲的折线，这就是布朗运动。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">温度越高，分子热运动越剧烈</text><rect x="50" y="60" width="270" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="185" y="88" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">冷水（低温）</text><circle cx="120" cy="160" r="6" fill="#4fb3a5"/><circle cx="170" cy="140" r="6" fill="#4fb3a5"/><circle cx="200" cy="180" r="6" fill="#4fb3a5"/><circle cx="150" cy="200" r="6" fill="#4fb3a5"/><text x="185" y="240" font-size="12" fill="#234b45" text-anchor="middle">分子慢慢晃</text><rect x="360" y="60" width="270" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="495" y="88" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">热水（高温）</text><circle cx="430" cy="150" r="7" fill="#4fb3a5"/><circle cx="480" cy="190" r="7" fill="#4fb3a5"/><circle cx="520" cy="140" r="7" fill="#4fb3a5"/><circle cx="560" cy="185" r="7" fill="#4fb3a5"/><circle cx="500" cy="210" r="7" fill="#4fb3a5"/><text x="495" y="240" font-size="12" fill="#234b45" text-anchor="middle">分子剧烈乱窜</text></svg>', caption: '图3　同样的物质，低温时分子运动平缓，高温时运动剧烈，说明温度越高热运动越明显。' }
    ],
    exercises: [
      { type: 'choice', question: '下列现象中，属于扩散现象的是？', options: ['扫地时灰尘飞扬', '蓝墨水滴入清水后整杯水变蓝', '雪花飘落', '风吹树叶摇动'], answer: '蓝墨水滴入清水后整杯水变蓝', explanation: '扩散是不同物质互相接触时彼此进入对方的现象，由分子无规则运动引起。蓝墨水滴入清水后整杯水变蓝，是墨水分子与水分子互相进入的结果，属于扩散。灰尘飞扬、雪花飘落、树叶摇动都是宏观物体的机械运动，不是分子层面的扩散。' },
      { type: 'choice', question: '关于布朗运动，下列说法正确的是？', options: ['布朗运动是液体分子的运动', '布朗运动说明分子在静止', '布朗运动间接反映液体分子在做无规则热运动', '只有气体中才有布朗运动'], answer: '布朗运动间接反映液体分子在做无规则热运动', explanation: '布朗运动是悬浮在液体或气体中的微粒（如花粉）所受分子撞击不平衡而产生的无规则运动，微粒本身不是分子，所以不能直接说它是分子运动；它恰恰证明分子在不停地做无规则热运动。液体和气体中都能观察到布朗运动。' },
      { type: 'choice', question: '温度越高，分子热运动越怎样？', options: ['越缓慢', '越剧烈', '完全停止', '没有变化'], answer: '越剧烈', explanation: '分子热运动的剧烈程度由温度决定，温度越高，分子平均运动越剧烈。这也是温度的本质含义之一：温度标志着分子平均热运动的剧烈程度。无论多冷，分子都不会完全静止。' },
      { type: 'fill', question: '物理学上把分子永不停息的无规则运动叫做___。', answer: '热运动', explanation: '由于这种无规则运动与温度有关，温度越高运动越剧烈，所以物理学把分子永不停息的无规则运动称为热运动。扩散现象和布朗运动都是分子热运动的不同表现，其根源都在于此。' },
      { type: 'fill', question: '观察布朗运动时，应选用___（填"较小"或"较大"）的悬浮颗粒，这样来自各方向的撞击越不容易抵消，运动越明显。', answer: '较小', explanation: '悬浮颗粒越小，各个方向受到的分子撞击越不容易恰好相互抵消，合力越明显，布朗运动就越容易观察；颗粒太大时各方向撞击近乎平衡，合力很小，反而不易看出明显运动。因此实验常选极小的花粉或藤黄颗粒。' }
    ]
  });
})();
