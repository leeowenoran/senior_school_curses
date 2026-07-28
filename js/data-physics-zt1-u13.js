/* ============================================================
 * 高三复习 · 力学综合 · 专题三 牛顿运动定律
 * 课时13：超重与失重
 * 数据注入：physics.zt1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt1');
  if (!v) return;

  v.points.push({
    id: 'zt1-u13',
    name: '超重与失重',
    chapter: '力学综合 · 专题三 牛顿运动定律',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、视重与实重' },
      { type: 'paragraph', text: '你站在体重计上，秤的示数其实是地面对你的支持力 FN，叫“视重”；你真实的重力 mg 叫“实重”。平时静止时 FN = mg，示数等于体重。但当你加速上升或下降时，FN 会变大或变小，示数就不再是 mg。' },
      { type: 'keypoint', label: '重点', text: '<strong>实重 G = m × g 永远不变；视重是支持力 FN（或拉力），会随加速度变化。</strong>超重和失重改变的是“视重”，不是“实重”。' },
      { type: 'list', items: ['实重：物体真实重力 m × g，恒定不变', '视重：秤的示数，即支持力 FN 或拉力 T', '比较 FN 与 mg 判断是超重还是失重'] },
      { type: 'heading', text: '二、超重（加速度向上）' },
      { type: 'paragraph', text: '当电梯加速上升或减速下降时，人的加速度方向向上。取向上为正方向，由牛顿第二定律有 FN − mg = m × a，得到 FN = mg + m × a > mg，于是视重大于实重，这就是超重。' },
      { type: 'keypoint', label: '重点·超重', text: '<strong>超重：加速度 a 向上时，FN > mg，视重大于实重。</strong>加速上升、减速下降都会出现超重。' },
      { type: 'example', label: '例题·超重', text: '质量 50 kg 的人乘电梯以 2 m/s² 加速上升，求秤的示数（取 g = 10 m/s²）。<br><br><strong>解析</strong>：取向上为正，FN − mg = m × a，得 FN = 50 × 10 + 50 × 2 = 600 N。示数 600 N 大于实重 500 N，属于超重。' },
      { type: 'heading', text: '三、失重与完全失重（加速度向下）' },
      { type: 'paragraph', text: '当电梯加速下降或减速上升时，加速度向下。仍取向上为正则 a 为负，由 FN − mg = m × a 得 FN = mg + m × a，因 a < 0 故 FN < mg，视重小于实重，叫失重。' },
      { type: 'keypoint', label: '重点·失重', text: '<strong>失重：加速度 a 向下时，FN < mg，视重小于实重。</strong>加速下降、减速上升都会出现失重。' },
      { type: 'paragraph', text: '若电梯自由下落，a = g 向下，则 FN = mg − m × g = 0，秤示数为零，这叫完全失重。此时人和秤之间没有任何相互挤压。' },
      { type: 'keypoint', label: '重点·完全失重', text: '<strong>完全失重：加速度 a = g 向下时，FN = 0，视重为零。</strong>如自由落体、绕地球做圆周运动的飞船里都是完全失重。' },
      { type: 'warn', label: '易错', text: '超重不是“重力变大”，失重也不是“重力变小”。实重 m × g 始终不变，变的只是支持力 FN。而且“超重”看的是加速度方向向上，不是看速度方向——减速下降时速度向下却仍然超重。' },
      { type: 'list', items: ['加速上升：a 向上 → 超重', '减速下降：a 向上 → 超重', '加速下降：a 向下 → 失重', '减速上升：a 向下 → 失重', '自由下落：a = g 向下 → 完全失重'] },
      { type: 'tip', label: '提示', text: '判断超重失重只看加速度方向：向上就超重，向下就失重，与物体当前向哪运动无关。记住“向上超、向下失”四个字，遇到电梯、蹦极、飞船等题目就不会乱。' },
      { type: 'table', headers: ['运动情形', '加速度方向', 'FN 与 mg', '名称'], rows: [['加速上升', '向上', 'FN > mg', '超重'], ['减速下降', '向上', 'FN > mg', '超重'], ['加速下降', '向下', 'FN < mg', '失重'], ['减速上升', '向下', 'FN < mg', '失重'], ['自由下落', '向下（a = g）', 'FN = 0', '完全失重']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">超重：电梯加速上升</text><rect x="250" y="120" width="180" height="110" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><circle cx="340" cy="150" r="16" fill="#234b45"/><rect x="322" y="166" width="36" height="48" fill="#4fb3a5"/><line x1="340" y1="166" x2="340" y2="110" stroke="#234b45" stroke-width="3"/><polygon points="340,110 333,124 347,124" fill="#234b45"/><text x="380" y="120" font-size="12" fill="#234b45" text-anchor="middle">a向上</text><line x1="200" y1="230" x2="200" y2="270" stroke="#234b45" stroke-width="3"/><polygon points="200,270 193,258 207,258" fill="#234b45"/><text x="160" y="252" font-size="12" fill="#234b45" text-anchor="middle">mg</text><text x="430" y="252" font-size="12" fill="#234b45" text-anchor="middle">FN &gt; mg</text></svg>', caption: '图1　电梯加速上升时加速度向上，支持力 FN 大于重力 mg，出现超重。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">失重：电梯加速下降</text><rect x="250" y="120" width="180" height="110" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><circle cx="340" cy="150" r="16" fill="#234b45"/><rect x="322" y="166" width="36" height="48" fill="#4fb3a5"/><line x1="340" y1="214" x2="340" y2="270" stroke="#234b45" stroke-width="3"/><polygon points="340,270 333,256 347,256" fill="#234b45"/><text x="380" y="250" font-size="12" fill="#234b45" text-anchor="middle">a向下</text><line x1="200" y1="170" x2="200" y2="120" stroke="#234b45" stroke-width="3"/><polygon points="200,120 193,132 207,132" fill="#234b45"/><text x="160" y="150" font-size="12" fill="#234b45" text-anchor="middle">mg</text><text x="430" y="200" font-size="12" fill="#234b45" text-anchor="middle">FN &lt; mg</text></svg>', caption: '图2　电梯加速下降时加速度向下，支持力 FN 小于重力 mg，出现失重。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">完全失重：自由下落 FN = 0</text><rect x="250" y="120" width="180" height="110" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><circle cx="340" cy="150" r="16" fill="#234b45"/><rect x="322" y="166" width="36" height="48" fill="#4fb3a5"/><line x1="340" y1="214" x2="340" y2="280" stroke="#234b45" stroke-width="3"/><polygon points="340,280 333,266 347,266" fill="#234b45"/><text x="380" y="258" font-size="12" fill="#234b45" text-anchor="middle">a=g向下</text><text x="340" y="270" font-size="13" fill="#234b45" text-anchor="middle">FN = 0，秤示数为零</text></svg>', caption: '图3　自由下落时 a = g 向下，支持力 FN = 0，视重为零，即完全失重。' }
    ],
    exercises: [
      { type: 'choice', question: '电梯加速上升时，人与秤之间的支持力 FN 和重力的关系是？', options: ['FN < mg 失重', 'FN > mg 超重', 'FN = 0', '实重变小'], answer: 'FN > mg 超重', explanation: '电梯加速上升，加速度方向向上。取向上为正，由牛顿第二定律 FN − mg = m a 得 FN = mg + m a，大于 mg，视重变大，是超重。这里实重 mg 始终不变，只是支持力 FN 变大了。' },
      { type: 'choice', question: '物体处于完全失重状态的条件是？', options: ['a = 0', 'a 向上', 'a = g 向下', '速度为零'], answer: 'a = g 向下', explanation: '完全失重指支持力或拉力为零，即 FN = 0。由 FN − mg = m a（向上为正）可得此时 a = −g，即加速度大小为 g、方向向下。例如自由落体和绕地球做圆周运动的飞船内部都属于完全失重。' },
      { type: 'choice', question: '关于超重和失重，下列说法正确的是？', options: ['超重时重力变大', '失重时重力变小', '变的是视重不是实重', '只有向上运动才超重'], answer: '变的是视重不是实重', explanation: '超重和失重改变的只是支持力 FN（视重），物体的实重 mg = m g 由质量和重力加速度决定，始终不变。超重看加速度向上（如加速上升、减速下降），并非只有向上运动才超重，减速下降时速度向下却仍超重。' },
      { type: 'fill', question: '判断超重还是失重，只看加速度方向：加速度向上时物体处于___状态（填“超重”或“失重”）。', answer: '超重', explanation: '超重与失重的判断标准是加速度方向：加速度向上则支持力大于重力，为超重；加速度向下则支持力小于重力，为失重。与物体运动方向无关，记住“向上超、向下失”。' },
      { type: 'fill', question: '电梯自由下落时，人对体重计的压力为___ N（填“0”或“mg”）。', answer: '0', explanation: '自由下落时加速度 a = g 向下，由牛顿第二定律 FN − mg = m(−g) 得 FN = 0。此时人与秤之间没有相互挤压，秤示数为零，这就是完全失重，但人的实重 mg 并没有消失。' }
    ]
  });
})();
