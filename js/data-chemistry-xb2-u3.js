/* ============================================================
 * 化学 · 选择性必修2 物质结构与性质 · 第一章 原子结构与性质
 * 课时3：电子云与原子轨道
 * 数据注入：chemistry.xb2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'xb2');
  if (!v) return;

  v.points.push({
    id: 'xb2-u3',
    name: '电子云与原子轨道',
    chapter: '选择性必修2 物质结构与性质 · 第一章 原子结构与性质',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、电子云：给电子拍“概率照片”' },
      { type: 'paragraph', text: '前面说过，电子在核外不是沿固定轨道跑，而是“出现在某些地方机会大、某些地方机会小”。把电子在核外空间里出现机会大的地方多画点、机会小的地方少画点，得到的一团“点云”就叫电子云。它其实是一张“概率照片”——黑点越密，说明电子在那里现身的几率越高。' },
      { type: 'keypoint', label: '重点·电子云的本质', text: '<strong>电子云是电子在原子核外空间出现概率（概率密度）的形象化图示，不是真有一团实体的云。</strong>小点密集处电子出现概率大，稀疏处概率小；它不表示电子某一刻的准确位置。' },
      { type: 'list', items: ['电子云小点越密 → 电子在该区域出现概率越大', '电子云小点越疏 → 电子在该区域出现概率越小', '电子云不表示电子运动轨迹，只表示出现的可能性'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">电子云：黑点越密，电子在该处出现概率越大</text><text x="120" y="270" font-size="13" fill="#d98e3a" text-anchor="middle">原子核</text><circle cx="120" cy="170" r="8" fill="#b5651d"/><circle cx="170" cy="150" r="3" fill="#4a3724"/><circle cx="185" cy="180" r="3" fill="#4a3724"/><circle cx="160" cy="200" r="3" fill="#4a3724"/><circle cx="200" cy="160" r="2.5" fill="#4a3724"/><circle cx="210" cy="190" r="2.5" fill="#4a3724"/><circle cx="150" cy="170" r="2.5" fill="#4a3724"/><circle cx="230" cy="150" r="2" fill="#4a3724"/><circle cx="240" cy="200" r="2" fill="#4a3724"/><circle cx="250" cy="175" r="1.8" fill="#4a3724"/><circle cx="270" cy="160" r="1.5" fill="#4a3724"/><circle cx="280" cy="195" r="1.5" fill="#4a3724"/><circle cx="300" cy="175" r="1.2" fill="#4a3724"/><text x="470" y="170" font-size="13" fill="#4a3724" text-anchor="middle">中间密、外圈疏</text><text x="470" y="200" font-size="13" fill="#4a3724" text-anchor="middle">＝离核近、概率大</text></svg>', caption: '图1　电子云示意：靠近原子核处黑点密集，说明电子在此出现概率最大。' },
      { type: 'heading', text: '二、原子轨道：电子云的“90% 轮廓”' },
      { type: 'paragraph', text: '电子云里黑点密密麻麻，不方便直接使用。化学家就规定：把电子出现概率约为 90% 的那部分空间“圈”出来，画成一个有形状的轮廓，这个轮廓所代表的空间范围就叫一个“原子轨道”。换句话说，原子轨道是电子云的大致外形，是电子“最常待”的那块地盘。' },
      { type: 'keypoint', label: '重点·电子云与原子轨道的关系', text: '<strong>电子云是概率的全部分布图，原子轨道是取“概率约 90%”范围画出的空间轮廓。</strong>一个能级里包含若干个原子轨道，每个轨道最多容纳 2 个自旋相反的电子。' },
      { type: 'list', items: ['s 能级：1 个原子轨道（球形）', 'p 能级：3 个原子轨道（哑铃形，互相垂直）', 'd 能级：5 个原子轨道（花瓣形）', 'f 能级：7 个原子轨道（形状更复杂）'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">s 轨道（球形）与 p 轨道（哑铃形）</text><circle cx="170" cy="180" r="60" fill="#d98e3a" stroke="#b5651d" stroke-width="2"/><text x="170" y="270" font-size="13" fill="#4a3724" text-anchor="middle">s 轨道：球形</text><ellipse cx="430" cy="150" rx="28" ry="55" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><ellipse cx="430" cy="230" rx="28" ry="55" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="430" y="185" font-size="14" fill="#b5651d" text-anchor="middle" font-weight="bold">核</text><text x="430" y="300" font-size="13" fill="#4a3724" text-anchor="middle">p 轨道：哑铃形（沿一个轴伸展）</text></svg>', caption: '图2　s 轨道是球形、从核向四周均匀伸展；p 轨道是哑铃形，两个椭球在核两侧对接。' },
      { type: 'heading', text: '三、四种轨道的形状' },
      { type: 'paragraph', text: '不同能级的原子轨道形状不一样，记住形状对理解后面的共价键很重要。s 轨道是立体的球形，从中心向四周均匀展开；p 轨道是哑铃形（像两个靠在一起的椭球），每个 p 能级有 3 个分别沿 x、y、z 轴伸展的 p 轨道，它们互相垂直；d 轨道是花瓣形（像四瓣花），共 5 个；f 轨道形状更复杂，共 7 个，高中一般只要求知道有这回事。' },
      { type: 'keypoint', label: '重点·轨道形状与数量', text: '<strong>s 球形 1 个；p 哑铃形 3 个（p_x、p_y、p_z 相互垂直）；d 花瓣形 5 个；f 复杂形 7 个。</strong>轨道的“形状加伸展方向”决定了原子怎样成键。' },
      { type: 'paragraph', text: '记住轨道形状有个巧劲：s 像球、p 像哑铃、d 像花瓣。想象这些立体形状，能帮你快速判断后面的共价键是怎样重叠形成的，也能帮你理解为什么有的分子是直线形、有的是 V 形。' },
      { type: 'table', headers: ['能级', '轨道形状', '轨道数', '最多容纳电子数'], rows: [['s', '球形', '1', '2'], ['p', '哑铃形（p_x、p_y、p_z）', '3', '6'], ['d', '花瓣形', '5', '10'], ['f', '复杂形', '7', '14']] },
      { type: 'warn', label: '易错·电子云不是轨迹', text: '常见误解是把电子云当成“电子像云一样飘着”，或者“电子绕核画出的轨迹”。错！电子云只表示“在某处出现的概率大小”，电子并没有固定轨迹；而且电子云里每个小点不代表“一个电子”，只代表一次观测中电子可能出现的位置，点越密概率越大。' },
      { type: 'example', label: '例题·p 轨道描述', text: '题目：关于 p 轨道的描述，正确的是？<br>A. p 轨道是球形，1 个<br>B. p 轨道是哑铃形，3 个且互相垂直<br>C. p 轨道是花瓣形，5 个<br>D. p 轨道是球形，3 个<br><br><strong>解析</strong>：p 能级有 3 个原子轨道，形状为哑铃形（两个椭球对接），分别沿 x、y、z 三个互相垂直的方向伸展，即 p_x、p_y、p_z。球形是 s 轨道，花瓣形是 d 轨道，所以只有 B 正确。' },
      { type: 'tip', label: '提示·先抓 s 和 p', text: '高中化学成键主要用 s 和 p 轨道，d、f 轨道了解形状和数量即可。遇到具体分子（如水、二氧化碳）时，只需看中心原子的 s、p 轨道怎么重叠，暂时不用去画 d、f 的复杂花瓣，能大大减轻记忆负担。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">d 轨道：花瓣形（共 5 个，示意其中 4 个）</text><g fill="#ecd9bf" stroke="#b5651d" stroke-width="2"><ellipse cx="200" cy="170" rx="55" ry="20" transform="rotate(0 200 170)"/><ellipse cx="200" cy="170" rx="55" ry="20" transform="rotate(45 200 170)"/><ellipse cx="200" cy="170" rx="55" ry="20" transform="rotate(90 200 170)"/><ellipse cx="200" cy="170" rx="55" ry="20" transform="rotate(135 200 170)"/></g><text x="200" y="265" font-size="13" fill="#4a3724" text-anchor="middle">d 轨道：四瓣花状</text><rect x="430" y="120" width="150" height="100" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="505" y="160" font-size="14" fill="#4a3724" text-anchor="middle" font-weight="bold">f 轨道</text><text x="505" y="190" font-size="13" fill="#4a3724" text-anchor="middle">7 个，形状最复杂</text></svg>', caption: '图3　d 轨道呈花瓣（四瓣花）形，共 5 个；f 轨道更复杂，共 7 个，高中作一般了解。' }
    ],
    exercises: [
      { type: 'choice', question: '电子云表示的是？', options: ['电子的运动轨迹', '电子在核外空间出现概率的大小', '原子核的真实形状', '电子的准确位置'], answer: '电子在核外空间出现概率的大小', explanation: '电子云是把电子在核外出现机会大小形象化画出的点云图，黑点密处概率大、疏处概率小，它只表示概率分布，不是轨迹也不是电子的准确位置，原子核的真实形状更与电子云无关。' },
      { type: 'choice', question: '原子轨道的轮廓一般取电子出现概率约为多少的范围？', options: ['50%', '70%', '90%', '100%'], answer: '90%', explanation: '为方便使用，把电子出现概率约 90% 的空间范围圈成一个轮廓，这个空间范围就叫做一个原子轨道。取 100% 会把整个无限空间都圈进去、失去轮廓意义，所以约定取约 90%。' },
      { type: 'choice', question: '关于 p 轨道，下列说法正确的是？', options: ['球形，1 个', '哑铃形，3 个且互相垂直', '花瓣形，5 个', '复杂形，7 个'], answer: '哑铃形，3 个且互相垂直', explanation: 'p 能级有 3 个原子轨道，形状为哑铃形，分别沿 x、y、z 轴伸展且两两互相垂直，记作 p_x、p_y、p_z。球形是 s 轨道（1 个），花瓣形是 d 轨道（5 个），复杂形是 f 轨道（7 个）。' },
      { type: 'fill', question: 's 能级只有 1 个原子轨道，它的形状是___。', answer: '球形', explanation: 's 轨道是立体的球形，从原子核向四周均匀伸展，没有方向性。这也是为什么 s 电子云在各个方向上都一样，是后面理解共价键方向的起点。' },
      { type: 'fill', question: 'p 能级包含___个相互垂直的原子轨道（分别记作 p_x、p_y、p_z）。', answer: '3', explanation: 'p 能级共有 3 个原子轨道，它们分别沿空间直角坐标系的 x、y、z 三个轴伸展，彼此互相垂直，因此记作 p_x、p_y、p_z，每个轨道最多容纳 2 个自旋相反的电子。' }
    ]
  });
})();
