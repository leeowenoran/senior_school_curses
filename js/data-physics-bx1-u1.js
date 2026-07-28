/* ============================================================
 * 高一物理 · 必修 第一册 · 第一章 运动的描述
 * 课时1：质点 参考系
 * 数据注入：physics.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx1');
  if (!v) return;

  v.points.push({
    id: 'bx1-u1',
    name: '质点 参考系',
    chapter: '必修第一册 · 第一章 运动的描述',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、为什么要建立"质点"模型' },
      { type: 'paragraph', text: '研究物体的运动时，真实物体既有大小又有形状，运动往往很复杂。比如研究一列火车从北京到上海，我们更关心它开了多久、走了多远，并不关心车轮怎么转、车厢怎么晃。这时可以把整列火车当成一个"点"，只研究这个点的位置变化。这种"抓主要因素、忽略次要因素"的办法，就是物理学里建立模型的思想。' },
      { type: 'keypoint', label: '重点·什么是质点', text: '<strong>质点是用来代替物体的有质量的点。</strong>它忽略了物体的大小和形状，只保留"质量"这一最根本的性质，从而把复杂的真实运动简化为一个点的位置变化。' },
      { type: 'paragraph', text: '建模的目的是"简化"。现实世界太复杂，直接研究往往无从下手。物理学家先抓住对问题最关键的因素，把次要因素暂时丢开，用简单的模型去代替真实物体，再用数学工具描述它。等掌握了规律，再逐步把忽略的因素加回来。' },
      { type: 'list', items: ['抓主要因素：只研究物体整体的位置变化，忽略它的大小和形状', '忽略次要因素：暂时不研究物体自身的转动、形变等细节', '建立模型：把真实物体简化为一个质点，方便用位置和数学描述运动'] },
      { type: 'heading', text: '二、什么情况下可以把物体看作质点' },
      { type: 'paragraph', text: '一个物体能不能看成质点，不取决于它本身的绝对大小，而取决于"在你要研究的问题里，它的大小和形状是否可以忽略"。大如地球、小如原子，都可能被看作质点，关键看你研究的是什么。' },
      { type: 'keypoint', label: '重点·看作质点的条件', text: '当<strong>物体的大小和形状对所研究的问题影响很小、可以忽略</strong>时，就可以把物体看作质点。反之，若大小形状会影响结论，就不能看作质点。' },
      { type: 'example', label: '例题·判断能否看作质点', text: '下列说法正确吗？请说明理由。<br>① 研究地球绕太阳公转时，可以把地球看作质点。<br>② 研究地球自转时，可以把地球看作质点。<br><br><strong>解析</strong>：<br>① 正确。地球直径远小于公转轨道半径，地球大小对公转问题影响极小，可忽略，所以能看作质点。<br>② 错误。研究自转时要看地球各点的转动情况，必须考虑大小和形状，不能看作质点。' },
      { type: 'warn', label: '易错', text: '不能认为"小的物体就能看作质点，大的就不能"。<strong>原子很小，但研究原子内部电子的运动时，原子不能看作质点；地球很大，研究公转时却能看作质点。</strong>判断标准是"大小形状是否影响所研究的问题"，而不是物体的绝对大小。' },
      { type: 'table', headers: ['研究问题', '能否看作质点', '原因'], rows: [['地球绕太阳公转', '能', '地球直径远小于轨道半径，大小可忽略'], ['地球自转', '不能', '各点转动情况不同，必须考虑大小形状'], ['火车从北京到上海', '能', '关心路程和时间，车身长度可忽略'], ['火车通过一座桥的时间', '不能', '车身长度影响通过时间，不可忽略']] },
      { type: 'heading', text: '三、参考系' },
      { type: 'paragraph', text: '要描述一个物体是运动还是静止，必须先选一个"作为标准的物体"来对照。这个被选作标准的物体，就叫作参考系。说某个物体在运动，其实是说它相对于参考系的位置发生了变化。' },
      { type: 'keypoint', label: '重点·参考系', text: '<strong>参考系是假定不动、用来判断其他物体运动的标准物体。</strong>同一个运动，选不同的参考系，描述可能完全不同。因此描述任何运动都必须先说明"以什么为参考系"。' },
      { type: 'paragraph', text: '例如你坐在行驶的汽车里：以汽车为参考系，你觉得自己是静止的；以地面为参考系，你正随车向前运动。再看车外的树：以汽车为参考系，树在向后退；以地面为参考系，树是静止的。可见"运动还是静止"是相对于参考系而言的，没有参考系就无法谈运动。' },
      { type: 'tip', label: '提示', text: '<strong>通常选地面为参考系。</strong>在没有特别说明的情况下，一般默认以地面或地面上静止不动的物体作为参考系。这样大家描述运动时有共同标准，便于交流和理解。' },
      { type: 'list', items: ['参考系是被假定不动的标准物体，用来判断其他物体的运动', '同一个运动选不同的参考系，描述可能不同', '没有特别说明时，通常取地面或地面上静止的物体为参考系', '研究任何运动，都必须先明确所选的参考系'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">真实物体可简化为一个有质量的点——质点</text><rect x="40" y="60" width="280" height="180" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">真实物体（如小车）</text><rect x="80" y="142" width="160" height="50" rx="6" fill="#4fb3a5"/><circle cx="110" cy="202" r="14" fill="#234b45"/><circle cx="210" cy="202" r="14" fill="#234b45"/><rect x="360" y="60" width="280" height="180" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">质点模型</text><circle cx="500" cy="158" r="22" fill="#4fb3a5"/><text x="500" y="210" font-size="13" fill="#234b45" text-anchor="middle">忽略大小形状，只留质量</text><text x="340" y="282" font-size="13" fill="#234b45" text-anchor="middle">建模思想：抓主要因素，忽略次要因素</text></svg>', caption: '图1　把有大小形状的真实物体（左）简化为一个有质量的点（右），这就是质点模型。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">研究公转可看作质点，研究自转不能</text><rect x="40" y="60" width="280" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">地球绕太阳公转</text><circle cx="180" cy="172" r="10" fill="#4fb3a5"/><text x="180" y="200" font-size="12" fill="#234b45" text-anchor="middle">太阳</text><circle cx="180" cy="125" r="58" fill="none" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><circle cx="238" cy="125" r="7" fill="#234b45"/><text x="238" y="108" font-size="12" fill="#234b45" text-anchor="middle">地球(点)</text><rect x="360" y="60" width="280" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">地球自转</text><circle cx="500" cy="160" r="42" fill="#4fb3a5"/><path d="M 500 118 A 42 42 0 0 1 542 160" fill="none" stroke="#234b45" stroke-width="3"/><text x="556" y="150" font-size="18" fill="#234b45">↻</text><text x="500" y="232" font-size="12" fill="#234b45" text-anchor="middle">需考虑大小形状，不能看作质点</text></svg>', caption: '图2　研究地球公转（左）时地球可看作质点，研究地球自转（右）时必须考虑大小形状。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">同一棵树，选不同参考系描述不同</text><rect x="40" y="60" width="280" height="180" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">以地面为参考系</text><rect x="173" y="150" width="14" height="62" fill="#234b45"/><circle cx="180" cy="140" r="18" fill="#4fb3a5"/><text x="180" y="234" font-size="13" fill="#234b45" text-anchor="middle">树静止不动</text><rect x="360" y="60" width="280" height="180" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">以行驶的汽车为参考系</text><rect x="493" y="150" width="14" height="62" fill="#234b45"/><circle cx="500" cy="140" r="18" fill="#4fb3a5"/><text x="500" y="234" font-size="13" fill="#234b45" text-anchor="middle">树向后退（相对车运动）</text></svg>', caption: '图3　同一棵路边树，以地面为参考系是静止的，以行驶的汽车为参考系却在向后退。' }
    ],
    exercises: [
      { type: 'choice', question: '下列关于质点的说法，正确的是？', options: ['体积很小的物体一定能看作质点', '质量很小的物体一定能看作质点', '研究地球公转时地球可看作质点', '研究任何物体运动时都要把它看作质点'], answer: '研究地球公转时地球可看作质点', explanation: '物体能否看作质点，取决于在所研究的问题中其大小和形状是否可以忽略，与物体本身的绝对大小、质量无关。研究地球公转时，地球直径远小于轨道半径，大小可忽略，故可看作质点；而体积、质量小的物体在某些问题中（如原子内部电子运动）也不能看作质点。' },
      { type: 'choice', question: '关于参考系，下列说法正确的是？', options: ['参考系必须选地面', '参考系是假定不动、用来判断其他物体运动的标准物体', '同一运动选不同参考系，结论一定相同', '没有参考系也能描述物体的运动'], answer: '参考系是假定不动、用来判断其他物体运动的标准物体', explanation: '参考系是人们假定不动、用来作为标准来判断其他物体是否运动的物体。参考系可以任意选择，不一定选地面；同一运动选不同参考系，描述常常不同；描述运动必须先选定参考系，否则"运动还是静止"无从谈起。' },
      { type: 'choice', question: '坐在行驶的汽车里，乘客看到路旁的树木向后退去，他选用的参考系是？', options: ['地面', '树木', '汽车', '太阳'], answer: '汽车', explanation: '乘客以自己乘坐的汽车为参考系时，认为自己（和车）是静止的，而路旁的树木相对于车在不断向后移动，所以看到树"向后退"。若以地面为参考系，树是静止的、车在向前运动。这里描述树的运动所选的标准物体是汽车。' },
      { type: 'fill', question: '研究一列火车从北京到上海的运行时间，因为车身长度对问题影响很小，可以把火车看作___（填"质点"或"不能看作质点"）。', answer: '质点', explanation: '研究火车从北京到上海的运行时间，关心的是整段路程和总时间，车身长度相比上千公里的路程可以忽略不计，因此可以把火车看作质点。若研究火车通过某座短桥的时间，则车身长度不能忽略，那时就不能看作质点。' },
      { type: 'fill', question: '要描述一个物体是运动还是静止，必须先选定一个作为标准的物体，这个标准物体叫作___。', answer: '参考系', explanation: '参考系是假定不动、用来判断其他物体运动的标准物体。描述任何运动都必须先明确参考系，因为同一物体相对于不同参考系，可能表现为运动，也可能表现为静止，运动具有相对性。' }
    ]
  });
})();
