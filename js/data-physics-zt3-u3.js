/* ============================================================
 * 高三复习 · 热学与近代物理 · 专题一 分子动理论
 * 课时3：分子力、分子势能与物体的内能
 * 数据注入：physics.zt3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt3');
  if (!v) return;

  v.points.push({
    id: 'zt3-u3',
    name: '分子力、分子势能与物体的内能',
    chapter: '热学与近代物理 · 专题一 分子动理论',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、分子间存在空隙与相互作用力' },
      { type: 'paragraph', text: '把 50 mL 水和 50 mL 酒精混合，总体积小于 100 mL，说明分子之间是有空隙的。同时，分子间既有引力又有斥力：两块干净的铅块压紧后能吊起重物，说明分子间有引力；固体、液体很难被压缩，说明分子间有斥力。这两种力都随距离增大而减小，但斥力减小得更快。' },
      { type: 'list', items: ['分子间同时存在着引力和斥力', '引力和斥力都随距离 r 增大而减小', '斥力随距离变化比引力更敏感（r 变小时斥力增长更快）'] },
      { type: 'keypoint', label: '重点·分子力', text: '<strong>分子间同时存在着引力和斥力，实际表现的分子力是二者的合力。</strong>r 很小时合力表现为斥力，r 很大时合力近似为零，我们平时说的"分子力"指这个合力。' },
      { type: 'heading', text: '二、分子力随距离的变化' },
      { type: 'paragraph', text: '存在一个特殊距离 r₀（约 10⁻¹⁰ m，与分子直径同数量级）。当 r = r₀ 时，引力刚好等于斥力，合力为零；当 r < r₀ 时，斥力大于引力，合力表现为斥力；当 r > r₀ 时，引力大于斥力，合力表现为引力；当 r > 10 r₀ 时，分子力已经小到可以忽略。' },
      { type: 'keypoint', label: '重点·平衡距离', text: '<strong>在平衡距离 r₀ 处分子力为零；r 小于 r₀ 时表现为斥力，r 大于 r₀ 时表现为引力（到约 10 r₀ 后基本消失）。</strong>r₀ 是判断分子力性质的分界点。' },
      { type: 'example', label: '例题·现象辨析', text: '例：把两块平整的铅柱端面削平、压紧后，居然能吊起下面的重物；而固体却很难被压缩。<br><strong>解析</strong>：铅柱压紧后分子距离接近 r₀ 以内，分子间引力起作用，所以能吊起重物；固体被压缩时分子距离小于 r₀，斥力急剧增大，所以很难压缩。这两个现象分别体现了分子间的引力和斥力。' },
      { type: 'warn', label: '易错', text: '<strong>分子力是引力和斥力的合力，不能说"距离小只有引力"。</strong>在 r = r₀ 处，合力虽然为零，但引力和斥力都仍然存在、并且大小相等。很多同学误以为"平衡点就是没有力"，这是错的。' },
      { type: 'heading', text: '三、分子势能与分子间距离' },
      { type: 'paragraph', text: '分子势能由分子的相对位置决定，类似于被拉伸或压缩的弹簧具有弹性势能。在 r = r₀ 处分子势能最小；如果把分子拉开（r 增大），分子力表现为引力，需要克服引力做功，势能增大；如果把分子压近（r 减小），分子力表现为斥力，需要克服斥力做功，势能也增大。' },
      { type: 'keypoint', label: '重点·分子势能', text: '<strong>分子势能在平衡距离 r₀ 处最小；无论把分子拉开还是压近，分子势能都会增大。</strong>判断势能变化，看分子力做正功还是克服分子力做功。' },
      { type: 'table', headers: ['距离 r', '分子力', '分子势能'], rows: [['r < r₀', '斥力', '随 r 减小而增大'], ['r = r₀', '零', '最小'], ['r₀ < r < 10 r₀', '引力', '随 r 增大而增大'], ['r > 10 r₀', '近似为零', '近似不变']] },
      { type: 'tip', label: '提示', text: '<strong>判断分子势能变化看做功：分子力做正功，势能减小；克服分子力做功，势能增大。</strong>这和重力势能、弹性势能的判断方法完全一致。' },
      { type: 'heading', text: '四、物体的内能' },
      { type: 'paragraph', text: '物体内部分子既在运动（有动能），又相互拉扯（有势能）。物体内部所有分子的热运动动能与分子势能的总和，就叫做物体的内能。通俗地说：内能就是物体内部分子"又动又拉扯"所包含的全部能量。' },
      { type: 'keypoint', label: '重点·内能', text: '<strong>内能 = 所有分子的动能之和 + 所有分子的势能之和。</strong>内能由物体的温度、体积和物质的量（质量）共同决定，与物体整体是否运动、是否在高处无关。' },
      { type: 'list', items: ['温度越高，分子平均动能越大', '体积变化会改变分子势能', '质量（物质的量）越大，分子总数越多，内能一般越大', '内能与机械能是两套不同的概念：静止在地面上的物体机械能可为零，但内能不为零'] },
      { type: 'warn', label: '易错', text: '<strong>内能是"所有分子"的总能量，不是单个分子的能量；温度只决定分子平均动能，不能单独决定内能。</strong>一个物体温度升高，内能一定增大；但温度高的物体内能不一定比温度低的物体大，还要看体积和质量。' },
      { type: 'example', label: '例题·内能辨析', text: '下列说法正确的是？<br>A 0 ℃ 的冰没有内能<br>B 温度高的物体内能一定大<br>C 同一物体温度升高，内能增大<br>D 机械能为零，内能必为零<br><strong>解析</strong>：A 错（任何物体都有内能）；B 错（还要看质量、体积）；C 正确（同物体温度升高，分子平均动能增大，内能增大）；D 错（内能和机械能无关）。答案选 C。' },
      { type: 'heading', text: '五、一轮复习方法归纳' },
      { type: 'paragraph', text: '分子力、分子势能、内能是层层递进的概念：先有分子力，再看分子力做功得到分子势能，最后所有分子的动能加势能构成内能。复习时画好 r 图像，抓住 r₀ 这个关键距离。' },
      { type: 'list', items: ['先判断 r 与 r₀ 的大小，确定分子力是引力还是斥力', '再看分子力做功，确定势能是增还是减', '内能看"总动能 + 总势能"，受温度、体积、质量影响', '内能与机械能是两套不同的能量概念，不要混淆'] },
      { type: 'tip', label: '提示', text: '<strong>考试常考"体积变大内能怎么变"：对气体，若温度不变而体积变大，分子势能一般增大；但内能还受温度影响，不能脱离温度单独下结论。</strong>固体液体体积变化很小，内能主要随温度变化。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">分子力 F 随距离 r 的变化</text><line x1="80" y1="240" x2="620" y2="240" stroke="#234b45" stroke-width="2"/><line x1="80" y1="240" x2="80" y2="70" stroke="#234b45" stroke-width="2"/><polyline points="100,90 140,150 200,200 260,228 300,240 360,255 420,265 500,272 600,276" fill="none" stroke="#2e9e8f" stroke-width="3"/><line x1="300" y1="60" x2="300" y2="280" stroke="#4fb3a5" stroke-width="2" stroke-dasharray="5,4"/><text x="300" y="56" font-size="13" fill="#1f7a6e" text-anchor="middle" font-weight="bold">r₀</text><text x="140" y="105" font-size="13" fill="#234b45">斥力</text><text x="510" y="290" font-size="13" fill="#234b45">引力</text><text x="350" y="160" font-size="13" fill="#234b45">r 增大 →</text></svg>', caption: '图1　分子力随距离变化：r < r₀ 为斥力，r > r₀ 为引力，r = r₀ 处合力为零。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">分子势能 E_p 随距离 r 的变化</text><line x1="80" y1="240" x2="620" y2="240" stroke="#234b45" stroke-width="2"/><line x1="80" y1="240" x2="80" y2="70" stroke="#234b45" stroke-width="2"/><polyline points="100,120 180,170 260,200 300,210 360,200 460,185 560,180 620,179" fill="none" stroke="#2e9e8f" stroke-width="3"/><circle cx="300" cy="210" r="5" fill="#4fb3a5"/><line x1="300" y1="60" x2="300" y2="280" stroke="#4fb3a5" stroke-width="2" stroke-dasharray="5,4"/><text x="300" y="232" font-size="13" fill="#234b45" text-anchor="middle">r₀ 处最小</text><text x="350" y="160" font-size="13" fill="#234b45">r 增大 →</text></svg>', caption: '图2　分子势能：在 r = r₀ 处最小，无论拉远或压近都增大。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">内能 = 分子动能 + 分子势能</text><rect x="60" y="120" width="160" height="80" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="140" y="150" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">分子动能</text><text x="140" y="172" font-size="12" fill="#234b45" text-anchor="middle">由温度决定</text><text x="238" y="165" font-size="24" fill="#234b45" text-anchor="middle">+</text><rect x="260" y="120" width="160" height="80" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="150" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">分子势能</text><text x="340" y="172" font-size="12" fill="#234b45" text-anchor="middle">由体积决定</text><text x="448" y="165" font-size="24" fill="#234b45" text-anchor="middle">=</text><rect x="470" y="120" width="160" height="80" rx="8" fill="#4fb3a5" stroke="#2e9e8f" stroke-width="2"/><text x="550" y="150" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">内能</text><text x="550" y="172" font-size="12" fill="#234b45" text-anchor="middle">温度+体积+质量</text><text x="340" y="288" font-size="13" fill="#234b45" text-anchor="middle">物体内所有分子的动能与势能之和</text></svg>', caption: '图3　内能由所有分子的动能和分子势能共同构成。' }
    ],
    exercises: [
      { type: 'choice', question: '当分子间距离 r 等于平衡距离 r₀ 时，分子力的情况是？', options: ['表现为引力', '表现为斥力', '为零（引力与斥力大小相等）', '只有引力没有斥力'], answer: '为零（引力与斥力大小相等）', explanation: '在平衡距离 r₀ 处，分子间的引力与斥力大小相等、方向相反，合力为零。但要注意，此时引力和斥力都仍然存在，并非"没有力"；当 r 小于 r₀ 时斥力占上风表现为斥力，r 大于 r₀ 时引力占上风表现为引力。' },
      { type: 'choice', question: '关于分子势能，下列说法正确的是？', options: ['r 越大分子势能越大', '在 r = r₀ 处分子势能最小', 'r 越小分子势能越小', '分子势能始终为零'], answer: '在 r = r₀ 处分子势能最小', explanation: '分子势能在平衡距离 r₀ 处最小。当 r 小于 r₀ 时表现为斥力，压近分子需克服斥力做功，势能增大；当 r 大于 r₀ 时表现为引力，拉开分子需克服引力做功，势能也增大。所以无论拉远还是压近，分子势能都增大，r₀ 处最小。' },
      { type: 'choice', question: '关于物体的内能，下列说法正确的是？', options: ['0 ℃ 的冰没有内能', '温度高的物体内能一定大', '内能是所有分子动能与分子势能的总和', '内能与机械能一定相等'], answer: '内能是所有分子动能与分子势能的总和', explanation: '内能是物体内所有分子的热运动动能与分子势能的总和，任何温度的物体都有内能，故 0 ℃ 的冰也有内能。内能由温度、体积、质量共同决定，温度高不代表内能一定大。内能与机械能是两套不同概念，一般并不相等。' },
      { type: 'fill', question: '分子间同时存在着引力和______（填"斥力"或"磁力"）。', answer: '斥力', explanation: '分子间同时存在引力和斥力，两者都随距离增大而减小，但斥力随距离变化更敏感。实际表现的分子力是引力和斥力的合力：r < r₀ 时斥力占上风，r > r₀ 时引力占上风，r = r₀ 时合力为零。' },
      { type: 'fill', question: '同一物体温度升高时，分子的平均______增大，因而内能增大。', answer: '动能', explanation: '温度是分子平均动能的标志。同一物体温度升高，分子平均动能增大；在质量、体积不变时，内能（所有分子动能与势能之和）随之增大。注意温度只决定平均动能，内能还受体积和质量影响。' }
    ]
  });
})();
