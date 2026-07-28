/* ============================================================
 * 高一物理 · 必修 第二册 · 第七章 万有引力与宇宙航行
 * 课时13：相对论时空观与牛顿力学的局限
 * 数据注入：physics.bx2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx2');
  if (!v) return;

  v.points.push({
    id: 'bx2-u13',
    name: '相对论时空观与牛顿力学的局限',
    chapter: '必修第二册 · 第七章 万有引力与宇宙航行',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、牛顿力学管用，但有边界' },
      { type: 'paragraph', text: '从苹果落地到行星公转，牛顿力学解释了大量现象，工程上也极其成功。但随着科学的发展，人们发现它并不是万能的：在速度极快（接近光速）或物体极小时，牛顿力学的预言会和实际不符。' },
      { type: 'keypoint', label: '重点·牛顿力学的适用范围', text: '<strong>牛顿力学适用于宏观、低速（远小于光速）的物体运动；当速度接近光速，或研究原子等微观粒子时，它不再准确，需要相对论和量子力学。</strong>记住：牛顿力学不是错了，而是有适用范围。' },
      { type: 'paragraph', text: '我们先看经典时空观。在牛顿体系里，时间和空间被认为是不依赖于观察者而独立存在的：时间均匀流逝，空间像大盒子，所有人测得的时间、长度都一样。' },
      { type: 'list', items: ['牛顿力学适用于宏观、低速运动', '接近光速时牛顿力学需要修正', '微观粒子运动要用量子力学', '牛顿力学在适用范围内依然高度准确'] },
      { type: 'heading', text: '二、经典时空观与相对论时空观' },
      { type: 'paragraph', text: '经典（绝对）时空观认为时间和空间彼此独立、绝对不变。但爱因斯坦的相对论指出，时间和空间会随观察者的运动状态而改变，这就是相对时空观。' },
      { type: 'keypoint', label: '重点·相对论的几个结论', text: '<strong>相对论的重要结论：真空光速对所有观察者都相同；同时是相对的（不同观察者可能认为两件事发生的先后不同）；运动的尺会变短、运动的钟会变慢。</strong>这些在低速下几乎看不出来，但在接近光速时非常明显。' },
      { type: 'example', label: '例题·理解尺缩钟慢', text: '一列高速列车以接近光速行驶，地面观察者看车上的钟和车本身，会看到什么现象？<br><br><strong>解析</strong>：根据相对论，地面观察者会看到车上的钟比地面钟走得慢（钟慢），也会看到列车沿运动方向的长度比静止时缩短（尺缩）。这些效应只有当速度接近光速时才显著，平时生活中完全察觉不到。' },
      { type: 'warn', label: '易错·不要否定牛顿力学', text: '<strong>相对论并没有推翻牛顿力学，只是在更大范围内把它包含进去了。</strong>当速度远小于光速时，相对论的修正极小，结果就退化为牛顿力学。所以宏观低速的工程计算仍放心用牛顿力学。' },
      { type: 'table', headers: ['方面', '经典时空观', '相对论时空观'], rows: [['时间', '绝对、均匀流逝', '随运动状态变化（钟慢）'], ['空间', '绝对不变', '随运动状态变化（尺缩）'], ['同时性', '绝对同时', '相对同时'], ['光速', '可被超越', '对任何观察者都相同且不可超越']] },
      { type: 'heading', text: '三、质速关系与质能方程' },
      { type: 'paragraph', text: '相对论还告诉我们，物体的质量会随速度增大而增大（质速关系），并且质量和能量可以互相转化。最著名的式子就是质能方程。' },
      { type: 'keypoint', label: '重点·质能方程', text: '<strong>爱因斯坦质能方程为 E = m × c²，其中 c 是真空光速。</strong>它说明质量和能量是同一事物的两种表现，少量的质量也对应着巨大的能量，是原子核能的理论基础。' },
      { type: 'tip', label: '提示·低速下质量几乎不变', text: '<strong>在日常速度下，物体的质量随速度的变化微乎其微，可近似看作不变。</strong>只有速度接近光速时，质量明显增加，这时牛顿力学中质量恒定的假设才不再成立。' },
      { type: 'list', items: ['速度接近光速时，物体质量会增大', '质能方程 E = m×c² 揭示质量与能量等价', '质量可转化为巨大能量（核能）', '低速时质量近似不变，牛顿力学仍适用'] },
      { type: 'heading', text: '四、微观世界与量子力学' },
      { type: 'paragraph', text: '在原子和更小的尺度上，粒子的行为不像小球那样有确定轨道，而是用概率描述。这种规律由量子力学研究。它和相对论一起，构成了现代物理的两大支柱。' },
      { type: 'keypoint', label: '重点·现代物理两大支柱', text: '<strong>相对论和量子力学是现代物理的两大支柱：相对论描述高速（接近光速）和宇观尺度的规律，量子力学描述微观粒子的规律。</strong>在它们各自的适用范围内，牛顿力学都是很好的近似。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">经典绝对时空观 与 相对论相对时空观</text><rect x="40" y="58" width="280" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="84" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">经典时空观</text><text x="180" y="130" font-size="12" fill="#234b45" text-anchor="middle">时间绝对均匀</text><text x="180" y="160" font-size="12" fill="#234b45" text-anchor="middle">空间绝对不变</text><text x="180" y="190" font-size="12" fill="#234b45" text-anchor="middle">同时绝对</text><rect x="360" y="58" width="280" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="84" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">相对论时空观</text><text x="500" y="130" font-size="12" fill="#234b45" text-anchor="middle">钟慢(时间变慢)</text><text x="500" y="160" font-size="12" fill="#234b45" text-anchor="middle">尺缩(长度变短)</text><text x="500" y="190" font-size="12" fill="#234b45" text-anchor="middle">同时相对</text></svg>', caption: '图1　经典时空观认为时空绝对不变，相对论时空观认为时间和空间会随运动而变化。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">高速运动时：运动的尺变短、运动的钟变慢</text><rect x="40" y="58" width="280" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="84" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">尺缩</text><rect x="80" y="140" width="200" height="24" rx="4" fill="#4fb3a5"/><text x="180" y="200" font-size="12" fill="#234b45" text-anchor="middle">静止长 L₀</text><rect x="360" y="58" width="280" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="84" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">钟慢</text><circle cx="500" cy="150" r="34" fill="none" stroke="#2e9e8f" stroke-width="3"/><line x1="500" y1="150" x2="500" y2="120" stroke="#234b45" stroke-width="3"/><text x="500" y="210" font-size="12" fill="#234b45" text-anchor="middle">高速钟走得更慢</text></svg>', caption: '图2　当速度接近光速时，地面观察者会看到运动物体沿运动方向缩短（尺缩）、运动时钟变慢（钟慢）。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">物理理论适用范围：宏观低速 / 高速 / 微观</text><rect x="40" y="58" width="180" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="130" y="100" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">牛顿力学</text><text x="130" y="140" font-size="12" fill="#234b45" text-anchor="middle">宏观</text><text x="130" y="166" font-size="12" fill="#234b45" text-anchor="middle">低速</text><rect x="250" y="58" width="180" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="100" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">相对论</text><text x="340" y="140" font-size="12" fill="#234b45" text-anchor="middle">高速</text><text x="340" y="166" font-size="12" fill="#234b45" text-anchor="middle">近光速</text><rect x="460" y="58" width="180" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="550" y="100" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">量子力学</text><text x="550" y="140" font-size="12" fill="#234b45" text-anchor="middle">微观</text><text x="550" y="166" font-size="12" fill="#234b45" text-anchor="middle">原子尺度</text></svg>', caption: '图3　不同物理理论各有适用范围：宏观低速用牛顿力学，高速用相对论，微观粒子用量子力学。' }
    ],
    exercises: [
      { type: 'choice', question: '牛顿力学适用于研究下列哪类物体的运动？', options: ['接近光速的粒子', '宏观、低速的物体', '原子核内的粒子', '所有情况都适用'], answer: '宏观、低速的物体', explanation: '牛顿力学在宏观、低速（远小于光速）的范围内非常准确，日常工程和天体运动都靠它。当速度接近光速，或研究原子等微观粒子时，牛顿力学失效，需要相对论和量子力学。因此它并非在所有情况下都适用。' },
      { type: 'choice', question: '关于相对论，下列说法正确的是？', options: ['相对论推翻了牛顿力学', '真空光速对不同观察者可能不同', '运动的钟会变慢、运动的尺会变短', '同时性是绝对的'], answer: '运动的钟会变慢、运动的尺会变短', explanation: '相对论的重要结论包括：真空光速对所有观察者都相同且不可超越；运动的钟变慢、运动的尺变短；同时是相对的。相对论并不是推翻牛顿力学，而是在更广阔范围内把它包含进去，低速时结果回到牛顿力学。' },
      { type: 'choice', question: '爱因斯坦质能方程的表达式是？', options: ['E = m×c²', 'F = G×m₁×m₂/r²', 'E = m×v²/2', 'F = m×a'], answer: 'E = m×c²', explanation: '爱因斯坦质能方程为 E = m×c²，其中 c 是真空光速。它表明质量和能量可以相互转化，少量质量对应巨大能量，是核能的理论基础。另外两个式子分别是万有引力定律和牛顿第二定律、动能公式。' },
      { type: 'fill', question: '当物体的运动速度接近___时，牛顿力学不再准确，需要用到相对论。', answer: '光速', explanation: '牛顿力学建立在速度远小于光速的假设上。当物体运动速度接近光速时，时间、空间和质量都会发生明显变化，牛顿力学的预言与实际不符，必须改用相对论来描述。这是牛顿力学的重要局限之一。' },
      { type: 'fill', question: '相对论指出“同时”是___（填“绝对”或“相对”）的，不同观察者可能看到两件事发生的先后顺序不同。', answer: '相对', explanation: '在经典时空观中同时是绝对的，但相对论指出同时是相对的：两个事件是否同时发生，取决于观察者的运动状态。高速运动的观察者可能认为 A 先于 B，而另一个观察者认为 B 先于 A，二者都正确。' }
    ]
  });
})();
