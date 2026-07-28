/* ============================================================
 * 高一物理 · 必修 第二册 · 第八章 机械能守恒定律
 * 课时15：重力势能
 * 数据注入：physics.bx2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx2');
  if (!v) return;

  v.points.push({
    id: 'bx2-u15',
    name: '重力势能',
    chapter: '必修第二册 · 第八章 机械能守恒定律',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、被举高的物体"藏着"能量' },
      { type: 'paragraph', text: '打夯机的重锤高高举起再落下，能把地面砸实；水库里高处的水冲下来，能推动发电机转动。这些物体因为被举高而具有的能量，叫做重力势能。重力势能是"储存在位置里"的能量，高度越高、质量越大，藏着的能力越多。' },
      { type: 'keypoint', label: '重点·重力势能', text: '<strong>物体的重力势能 E_p = m × g × h。</strong>其中 m 是物体质量，g 是重力加速度（约 9.8 牛/千克），h 是物体相对参考平面的高度。质量越大、举得越高，重力势能越大。' },
      { type: 'paragraph', text: '重力势能是标量，单位也是焦耳。它的大小与"参考平面"的选择有关：我们规定某个高度为零的平面（比如地面），物体在这个平面以上 h 处，重力势能就是 m g h；若在平面以下，则 h 取负值，势能也为负。但无论怎么选参考平面，重力势能的变化量是不变的。' },
      { type: 'list', items: ['重力势能由物体质量、重力加速度、所处高度共同决定', 'E_p = m × g × h，单位焦耳', '势能大小与参考平面的选择有关，但势能的变化量与参考平面无关', '重力势能属于"物体和地球"组成的系统，常简称为物体的势能'] },
      { type: 'heading', text: '二、重力做功的特点：与路径无关' },
      { type: 'paragraph', text: '让一个物体从同一高度 h₁ 出发，落到高度 h₂ 的位置，不管是直线下落、沿斜面滑下，还是绕一段弯路落下，重力做的功都是一样的。重力做功只由初末位置的高度差决定，与物体走过的路径无关。这一点和摩擦力很不同——摩擦力做功和路径长短有关。' },
      { type: 'keypoint', label: '重点·重力做功', text: '<strong>重力做功 W_G = m × g × (h₁ − h₂)，只与初末高度差有关，与路径无关。</strong>物体下降时 h₁ > h₂，重力做正功；物体被举高时 h₁ < h₂，重力做负功（即外力克服重力做功）。' },
      { type: 'example', label: '例题·重力做功', text: '一个质量 2 千克的物体，从离地 5 米高处落到离地 1 米高处。g 取 10 牛/千克，求重力做的功。<br><br><strong>解析</strong>：<br>初高度 h₁ = 5 米，末高度 h₂ = 1 米。<br>W_G = m × g × (h₁ − h₂) = 2 × 10 × (5 − 1) = 80（焦耳）。<br>答：重力做了 80 焦耳的正功。' },
      { type: 'warn', label: '易错', text: '别把重力做功和重力势能弄反了符号。重力做正功（物体下落）时，重力势能减少；重力做负功（物体被举高）时，重力势能增加。常见错误是认为"重力做正功势能增加"，恰恰相反：物体下落，高度降低，E_p = mgh 变小才对。' },
      { type: 'table', headers: ['过程', '重力做功 W_G', '重力势能 E_p 变化', '关系'], rows: [['物体自由下落', '正功', '减少', 'W_G = E_p初 − E_p末'], ['物体被竖直上抛上升', '负功', '增加', '克服重力做功 = E_p末 − E_p初'], ['沿斜面下滑', '正功', '减少', '只与高度差有关，与斜面长短无关']] },
      { type: 'heading', text: '三、重力做功与重力势能的关系' },
      { type: 'paragraph', text: '重力做功的过程，其实就是重力势能与其它形式能量相互转化的过程。物体下落，重力做正功，减少的重力势能变成了物体的动能；把物体举高，我们克服重力做功，外界的能量变成了物体的重力势能。一句话记住：重力做了多少功，重力势能就变化多少。' },
      { type: 'keypoint', label: '重点·关系式', text: '<strong>重力做的功等于重力势能的减少量：W_G = E_p1 − E_p2。</strong>若 W_G > 0（下落），则 E_p1 > E_p2，势能减少；若 W_G < 0（上升），则势能增加，增加量等于克服重力做的功。' },
      { type: 'list', items: ['下落：重力做正功，重力势能转化为动能', '上升：克服重力做功，动能（或外力能量）转化为重力势能', 'W_G = E_p1 − E_p2 是联系两者的桥梁', '重力势能的变化只取决于重力做功，与是否有其它力无关'] },
      { type: 'tip', label: '提示', text: '<strong>记关系有个小窍门：物体"往下走"，重力帮它忙（做正功），势能"瘦身"；物体"往上走"，重力拖后腿（做负功），势能"长胖"。</strong>这样就不容易把正负号搞反。' },
      { type: 'paragraph', text: '重力势能的相对性常让同学困惑。其实选哪个平面为零势能面，就像选海拔以海平面为基准一样，是人为约定的。同一块石头，以地面为零势能面时 E_p = mgh；以桌面为零势能面时读数变小，但把它从 A 处移到 B 处，两种算法得到的势能差完全一样。考试若没说，通常取地面或最低点为零势能面。' },
      { type: 'keypoint', label: '重点·参考平面的选择', text: '<strong>零势能面可任意选取，不影响重力势能的变化量。</strong>计算具体数值时要先说明以哪里为零势能面；比较势能大小、研究能量转化时，用变化量即可，不必纠结参考面。' },
      { type: 'heading', text: '四、重力势能就在身边' },
      { type: 'paragraph', text: '水电站把水蓄在高处大坝，存下巨大的重力势能，放水时势能变成水的动能推动涡轮发电；过山车被牵引到最高处积蓄势能，之后俯冲把势能变成刺激的速度。理解重力势能，就理解了大自然和人类如何"存"能量、"取"能量。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">重力势能 E_p = m × g × h 由质量和高度决定</text><rect x="40" y="70" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="96" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">举得高、势能大</text><rect x="150" y="100" width="60" height="50" rx="4" fill="#4fb3a5"/><line x1="100" y1="240" x2="260" y2="240" stroke="#234b45" stroke-width="3"/><text x="180" y="262" font-size="12" fill="#234b45" text-anchor="middle">地面为零势能面 h 大</text><rect x="360" y="70" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="96" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">举得低、势能小</text><rect x="470" y="170" width="60" height="50" rx="4" fill="#4fb3a5"/><line x1="420" y1="240" x2="580" y2="240" stroke="#234b45" stroke-width="3"/><text x="500" y="262" font-size="12" fill="#234b45" text-anchor="middle">同一物体 h 小</text></svg>', caption: '图1　同一物体举得越高，相对零势能面的高度 h 越大，重力势能 E_p = mgh 越大。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">重力做功与路径无关，只取决于高度差</text><rect x="40" y="70" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="96" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">直线下落</text><line x1="120" y1="120" x2="120" y2="230" stroke="#234b45" stroke-width="3"/><circle cx="120" cy="120" r="10" fill="#4fb3a5"/><circle cx="120" cy="230" r="10" fill="#234b45"/><rect x="360" y="70" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="96" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">沿斜槽滑下</text><path d="M 420 120 L 560 230" stroke="#234b45" stroke-width="3" fill="none"/><circle cx="420" cy="120" r="10" fill="#4fb3a5"/><circle cx="560" cy="230" r="10" fill="#234b45"/><text x="340" y="282" font-size="12" fill="#234b45" text-anchor="middle">两种路径，高度差相同，重力做功相同</text></svg>', caption: '图2　从同一高度到同一低处，无论直线下落还是沿斜面滑下，重力做功都等于 mg(h₁−h₂)。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">重力做功等于重力势能的减少量</text><rect x="40" y="70" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="96" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">下落前</text><circle cx="180" cy="130" r="14" fill="#4fb3a5"/><text x="180" y="200" font-size="12" fill="#234b45" text-anchor="middle">势能大</text><text x="180" y="222" font-size="12" fill="#234b45" text-anchor="middle">E_p1 = mgh1</text><rect x="360" y="70" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="96" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">下落后</text><circle cx="500" cy="200" r="14" fill="#4fb3a5"/><text x="500" y="240" font-size="12" fill="#234b45" text-anchor="middle">势能小 E_p2</text><text x="340" y="282" font-size="12" fill="#234b45" text-anchor="middle">重力做功 W_G = E_p1 − E_p2</text></svg>', caption: '图3　物体下落，重力做正功，减少的重力势能等于重力所做的功。' }
    ],
    exercises: [
      { type: 'choice', question: '关于重力势能，下列说法正确的是？', options: ['重力势能的大小与参考平面的选择无关', '物体的重力势能 E_p = m × g × h', '质量大的物体重力势能一定大', '重力势能是矢量，有方向'], answer: '物体的重力势能 E_p = m × g × h', explanation: '重力势能公式为 E_p = m × g × h，由质量、重力加速度和高度共同决定，所以仅质量大并不能说明势能一定大，还要看高度。重力势能是标量，没有方向。它的大小与零势能参考平面的选择有关，但势能的变化量与参考平面无关。因此只有第二个选项正确。' },
      { type: 'choice', question: '物体从同一高度分别沿不同路径落到同一低处，关于重力做功，正确的是？', options: ['直线下落时重力做功多', '沿斜面下滑时重力做功多', '两种路径重力做功一样多', '无法比较'], answer: '两种路径重力做功一样多', explanation: '重力做功的特点是只与初末位置的高度差有关，与物体实际经过的路径无关。无论直线自由下落还是沿弯曲或倾斜路径下滑，只要起点的 h₁ 和终点的 h₂ 相同，重力做功都是 W_G = m g (h₁ − h₂)，所以两种路径重力做功一样多。' },
      { type: 'choice', question: '物体被竖直向上举起的过程中，关于重力做功和重力势能，正确的是？', options: ['重力做正功，势能增加', '重力做负功，势能增加', '重力做正功，势能减少', '重力不做功，势能不变'], answer: '重力做负功，势能增加', explanation: '物体被举高时，重力方向向下、位移向上，两者夹角大于 90°，重力做负功（即外力克服重力做功）。同时高度 h 增大，由 E_p = mgh 知重力势能增加。增加量就等于克服重力所做的功，所以选"重力做负功，势能增加"。' },
      { type: 'fill', question: '重力做功与重力势能变化的关系式为 W_G = ___（用初、末重力势能 E_p1、E_p2 表示）。', answer: 'E_p1 − E_p2', explanation: '重力做的功等于重力势能的减少量，即 W_G = E_p1 − E_p2。当物体下落时 W_G 为正，E_p1 > E_p2，势能减少；当物体上升时 W_G 为负，势能增加，增加量等于克服重力做的功。这个式子是把重力做功和重力势能联系起来的核心关系。' },
      { type: 'fill', question: '一个质量 3 千克的物体，从离地 4 米高处落到离地 1 米高处，g 取 10 牛/千克，重力做的功为___焦耳。', answer: '90', explanation: '由重力做功公式 W_G = m × g × (h₁ − h₂)，代入 m = 3 千克、g = 10 牛/千克、h₁ = 4 米、h₂ = 1 米，得 W_G = 3 × 10 × (4 − 1) = 90 焦耳。物体下降，重力做正功，同时重力势能减少了 90 焦耳。' }
    ]
  });
})();
