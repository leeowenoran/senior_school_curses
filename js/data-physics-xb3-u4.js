/* ============================================================
 * 高二物理 · 选择性必修 第三册 · 第一章 分子动理论
 * 课时4：内能
 * 数据注入：physics.xb3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb3');
  if (!v) return;

  v.points.push({
    id: 'xb3-u4',
    name: '内能',
    chapter: '选择性必修 第三册 · 第一章 分子动理论',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、分子动能：与温度有关' },
      { type: 'paragraph', text: '组成物质的分子永远在运动，运动的物体具有动能，所以每个分子也都具有动能，叫做分子动能。不过同一物体里各个分子运动快慢并不一样，有的快有的慢，因此我们关心的是所有分子动能的平均值，叫分子平均动能。' },
      { type: 'keypoint', label: '重点·分子动能与温度', text: '<strong>分子动能指的是每个分子由于运动而具有的能量；物体的温度越高，分子运动越剧烈，分子平均动能越大。</strong>温度直接反映的是分子平均动能的大小。' },
      { type: 'list', items: ['热水里的分子比冷水里的分子跑得快，平均动能更大', '同一杯水中，各分子动能有大有小，但取平均后由温度决定', '温度升高，分子平均动能一定增大；温度降低则减小'] },
      { type: 'paragraph', text: '要注意：温度是"平均"动能的标志，不是"某一个"分子的动能。哪怕一杯温水，里面也有少数分子跑得极快、少数几乎不动，但整体上平均下来，温度就对应那个平均水平。' },
      { type: 'keypoint', label: '重点·温度是平均动能的标志', text: '<strong>温度是大量分子平均动能的标志。</strong>温度相同，不同物质分子的平均动能就相同（与物质种类无关）；温度越高，平均动能越大。这是温度的微观含义。' },
      { type: 'example', label: '例题·温度与动能', text: '问：为什么说"温度越高，分子越闹腾"？<br><br><strong>解析</strong>：<br>温度越高，分子热运动越剧烈，分子平均<strong>动能越大</strong>。比如同样质量的水，100 ℃ 的开水里分子平均动能明显大于 20 ℃ 的凉水。所以升温本质上是给分子"加油"，让它们整体动得更欢、平均动能更高。' },
      { type: 'heading', text: '二、分子势能：与分子间距离有关' },
      { type: 'paragraph', text: '分子之间像被一根隐形的弹簧连着，既会互相吸引又会互相排斥。要使分子间距离改变（拉开或压近），就得克服分子力做功，这与弹簧形变储存弹性势能类似。这种由分子间相对位置决定的能量，叫做分子势能。' },
      { type: 'keypoint', label: '重点·分子势能', text: '<strong>分子势能是由分子间距离（即分子相对位置）决定的能量。</strong>它和分子力对应：克服分子力做功，势能增加；分子力做正功，势能减少。宏观上它和物体的体积变化密切相关。' },
      { type: 'list', items: ['当 r = r₀ 时分子间作用力为零，分子势能最小', 'r 从 r₀ 增大（被拉开）或减小（被压近），分子势能都会增大', '物体的体积改变时，分子间距随之改变，分子势能一般也会改变'] },
      { type: 'warn', label: '易错', text: '<strong>分子势能由分子间距离决定，不是简单地只由"体积"决定；更不能直接说"体积大势能就一定大"。</strong>因为无论把分子拉远还是压近，势能都可能增大，所以体积变化时势能可能增也可能减，要看具体从什么状态变到什么状态。' },
      { type: 'heading', text: '三、内能 = 所有分子动能之和 + 所有分子势能之和' },
      { type: 'paragraph', text: '物体内部所有分子都在运动、都有相互作用，因此物体内部储存着两笔能量：一笔是所有分子动能的总和，一笔是所有分子势能的总和。把这两笔加起来，就是物体的内能。' },
      { type: 'keypoint', label: '重点·内能的定义', text: '<strong>内能是物体内所有分子的分子动能与分子势能的总和。</strong>它是物体内部微观粒子"集体"具有的能量，只与物体自身状态有关，和物体整体是否在运动、是否被举高无关。' },
      { type: 'example', label: '例题·理想气体的内能', text: '问：为什么常说"理想气体的内能只由温度和物质的量决定"？<br><br><strong>解析</strong>：<br>理想气体模型里，分子间距离很大、<strong>分子力可忽略</strong>，因此分子势能几乎为零。此时内能几乎全等于所有分子动能之和，而分子平均动能只由温度决定，分子总数由物质的量决定。所以理想气体内能只取决于温度和物质的量，与体积无关。' },
      { type: 'tip', label: '提示', text: '<strong>内能不同于机械能。</strong>机械能是物体作为整体因运动或高处位置而具有的能量（动能+重力势能+弹性势能）；内能是内部无数分子微观运动的能量。一个静止在地面上的石头，机械能可能为零，但内部仍有内能。' },
      { type: 'heading', text: '四、内能由温度、体积、物质的量共同决定' },
      { type: 'paragraph', text: '既然内能 = 总分子动能 + 总分子势能，那么：温度决定平均动能，体积影响分子间距从而影响力势能，物质的量决定分子总数（即"分子个数"）。三者一起，就决定了内能的大小。' },
      { type: 'keypoint', label: '重点·内能的决定因素', text: '<strong>物体的内能由温度、体积、物质的量共同决定：</strong>温度升高→平均动能增大→内能增大；体积变化→分子势能变化→内能变化；物质的量越多→分子总数越多→内能越大。' },
      { type: 'table', headers: ['影响因素', '影响的是哪部分', '如何改变内能'], rows: [['温度', '分子平均动能', '升温使总动能增大，内能增大'], ['体积', '分子势能', '体积变化改变分子间距，从而改变势能'], ['物质的量', '分子总数', '分子越多，总动能和总势能之和越大']] },
      { type: 'paragraph', text: '小结：内能是"所有分子动能 + 所有分子势能"的加总。温度是平均动能的标志，体积关联分子势能，物质的量决定分子数目，三者共同刻画了一个物体内部储存了多少微观能量。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">温度越高，分子平均动能越大</text><rect x="50" y="60" width="270" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="185" y="88" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">冷水（低温）</text><circle cx="115" cy="160" r="8" fill="#4fb3a5"/><circle cx="160" cy="140" r="8" fill="#4fb3a5"/><circle cx="200" cy="185" r="8" fill="#4fb3a5"/><circle cx="150" cy="205" r="8" fill="#4fb3a5"/><text x="185" y="240" font-size="12" fill="#234b45" text-anchor="middle">分子慢慢晃，动能小</text><rect x="360" y="60" width="270" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="495" y="88" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">热水（高温）</text><circle cx="425" cy="150" r="9" fill="#4fb3a5"/><circle cx="475" cy="190" r="9" fill="#4fb3a5"/><circle cx="525" cy="145" r="9" fill="#4fb3a5"/><circle cx="560" cy="195" r="9" fill="#4fb3a5"/><circle cx="500" cy="215" r="9" fill="#4fb3a5"/><text x="495" y="240" font-size="12" fill="#234b45" text-anchor="middle">分子剧烈窜，动能大</text></svg>', caption: '图1　同样的物质，温度高时分子运动更剧烈、平均动能更大，这就是温度作为平均动能标志的直观体现。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">分子势能随分子间距离变化（示意）</text><line x1="70" y1="80" x2="70" y2="250" stroke="#234b45" stroke-width="2"/><line x1="70" y1="250" x2="620" y2="250" stroke="#234b45" stroke-width="2"/><line x1="250" y1="80" x2="250" y2="250" stroke="#2e9e8f" stroke-width="1.5" stroke-dasharray="5,4"/><polyline points="90,150 160,195 250,235 340,205 440,170 560,140" fill="none" stroke="#234b45" stroke-width="3"/><text x="250" y="270" font-size="12" fill="#2e9e8f" text-anchor="middle">r₀ 处势能最小</text><text x="160" y="215" font-size="12" fill="#234b45">压近（势能增）</text><text x="470" y="160" font-size="12" fill="#234b45">拉远（势能增）</text></svg>', caption: '图2　分子势能在平衡距离 r₀ 处最小；无论把分子压近还是拉远，势能都会增大，它与分子间距有关。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">内能 = 所有分子动能之和 + 所有分子势能之和</text><rect x="50" y="110" width="200" height="80" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="150" y="140" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">所有分子</text><text x="150" y="162" font-size="13" fill="#234b45" text-anchor="middle">动能之和</text><rect x="50" y="200" width="200" height="60" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="150" y="235" font-size="13" fill="#234b45" text-anchor="middle">所有分子势能之和</text><line x1="260" y1="170" x2="330" y2="170" stroke="#234b45" stroke-width="2"/><polygon points="324,164 324,176 336,170" fill="#234b45"/><rect x="340" y="120" width="220" height="100" rx="10" fill="#4fb3a5" stroke="#2e9e8f" stroke-width="2"/><text x="450" y="158" font-size="16" fill="#234b45" text-anchor="middle" font-weight="bold">内能</text><text x="450" y="185" font-size="12" fill="#234b45" text-anchor="middle">两者相加</text><text x="450" y="262" font-size="13" fill="#234b45" text-anchor="middle">由温度、体积、物质的量共同决定</text></svg>', caption: '图3　物体的内能等于全部分子动能之和加上全部分子势能之和，由温度、体积和物质的量共同决定。' }
    ],
    exercises: [
      { type: 'choice', question: '关于温度与分子动能，下列说法正确的是？', options: ['温度是某一个分子动能的标志', '温度越高，分子平均动能越大', '温度与分子动能无关', '不同温度下分子平均动能总相同'], answer: '温度越高，分子平均动能越大', explanation: '温度是大量分子平均动能的标志，温度越高说明分子热运动越剧烈，分子平均动能越大；温度是"平均"而非"某一个"分子的动能，且不同温度下平均动能一般不同。因此只有"温度越高，分子平均动能越大"正确。' },
      { type: 'choice', question: '物体的内能是指？', options: ['物体整体运动的动能', '物体被举高具有的重力势能', '物体内所有分子动能与分子势能的总和', '物体表面分子具有的能量'], answer: '物体内所有分子动能与分子势能的总和', explanation: '内能是物体内部分子微观能量的总和，等于所有分子的分子动能之和加上所有分子势能之和。它与物体整体机械运动的动能、被举高的重力势能都无关，是另一类能量。' },
      { type: 'choice', question: '分子势能主要由什么决定？', options: ['物体的颜色', '分子间的相对位置（距离）', '物体的速度', '物体的质量'], answer: '分子间的相对位置（距离）', explanation: '分子势能是由分子间距离（相对位置）决定的能量，类似于弹簧形变储存的势能。在平衡距离 r₀ 处势能最小，无论压近还是拉远势能都会增大，因此它与分子间距有关，而不是由颜色、整体速度或质量决定。' },
      { type: 'fill', question: '物体的内能由温度、体积和___（填"物质的量"或"物体的高度"）共同决定。', answer: '物质的量', explanation: '内能等于所有分子动能之和加所有分子势能之和。温度决定分子平均动能，体积影响分子间距从而影响力势能，物质的量决定分子总数，三者共同决定内能大小。物体的高度属于机械能中的重力势能，与内能无关。' },
      { type: 'fill', question: '一个静止放在地面上的铁块，整体机械能可能为零，但内部仍有___（填"内能"或"没有能量"），因为分子仍在运动。', answer: '内能', explanation: '机械能是物体整体因运动或位置而具有的能量，静止在地面的铁块机械能可为零；但内部分子永不停息地做热运动且存在相互作用，所以仍具有内能。内能和机械能是两类不同的能量，不能混为一谈。' }
    ]
  });
})();
