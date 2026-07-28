/* ============================================================
 * 高一物理 · 必修 第二册 · 第八章 机械能守恒定律
 * 课时18：实验：验证机械能守恒定律
 * 数据注入：physics.bx2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx2');
  if (!v) return;

  v.points.push({
    id: 'bx2-u18',
    name: '实验：验证机械能守恒定律',
    chapter: '必修第二册 · 第八章 机械能守恒定律',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、实验想验证什么' },
      { type: 'paragraph', text: '前面我们学到：物体自由下落时，若只有重力做功，机械能应该守恒——减少的重力势能会全部变成增加的动能。这个实验就用打点计时器和纸带，让重物自由下落，测量它各点的高度和速度，看看"减少的势能"是不是真的等于"增加的动能"。' },
      { type: 'keypoint', label: '重点·实验原理', text: '<strong>自由下落中 m g h = ½ m v²（在误差范围内成立）。</strong>即某段下落中减少的重力势能 m g h，应等于对应增加的动能 ½ m v²。两边都有质量 m，可约去，所以不必测重物质量也能验证。' },
      { type: 'paragraph', text: '实验巧妙之处在于：质量 m 同时出现在等式两边并被约掉，因此我们无需精确称量重物的质量，只要测准下落高度 h 和对应瞬时速度 v，比较 g h 与 ½ v² 是否相等即可。这大大降低了实验难度。' },
      { type: 'list', items: ['验证对象：自由下落的重物（近似只受重力）', '核心关系：减少的势能 m g h = 增加的动能 ½ m v²', '质量 m 可约去，不必测质量', '通过比较 g h 与 ½ v² 判断是否守恒'] },
      { type: 'heading', text: '二、实验器材与装置' },
      { type: 'paragraph', text: '需要：打点计时器（电磁或电火花）、学生电源、纸带、带夹子的重物、铁架台、刻度尺。把打点计时器固定在铁架台上，纸带穿过计时器，下端挂重物。接通电源后释放重物，它自由下落，计时器在纸带上打出一排小点，记录下运动信息。' },
      { type: 'keypoint', label: '重点·装置要点', text: '<strong>打点计时器应竖直固定，纸带竖直穿过限位孔，重物靠近计时器下端；先接通电源，再释放纸带，打完点后立即切断电源。</strong>这样能保证打点清晰、计时准确。' },
      { type: 'example', label: '例题·测某点速度', text: '纸带上相邻计数点时间间隔 T = 0.02 秒，测得某点前后两段距离 x₁ = 3.20 厘米、x₂ = 3.60 厘米，求该点瞬时速度。<br><br><strong>解析</strong>：<br>用"中间时刻速度等于平均速度"：<br>v = (x₁ + x₂) / (2 T) = (0.032 + 0.036) / (2 × 0.02) = 0.068 / 0.04 = 1.70（米/秒）。' },
      { type: 'warn', label: '易错', text: '测某点速度时，不能用 v = g t 去算！因为那样等于"默认已经守恒"，属于循环论证，验证就失去意义了。正确做法是用纸带上的相邻位移、由平均速度法 v_n = (x_{n-1} + x_n) / (2T) 求出真实速度。另外选计数点要选点迹清晰、第一、二点间距接近 2 毫米的纸带，说明初速近似为零。' },
      { type: 'table', headers: ['物理量', '怎么得到', '说明'], rows: [['下落高度 h', '刻度尺量某点到起始点的距离', '即重物下落的位移'], ['瞬时速度 v', 'v_n = (x_{n-1} + x_n) / (2T)', '用相邻位移的平均速度法'], ['g', '取 9.8 牛/千克', '当地重力加速度'], ['比较', '算 g h 与 ½ v²', '两者近似相等即守恒']] },
      { type: 'heading', text: '三、数据处理与结论' },
      { type: 'paragraph', text: '从纸带选一个起始点 O 和后面若干计数点 1、2、3。对第 n 点：量出它相对 O 的下落高度 h_n，用平均速度法算出 v_n。分别计算 g × h_n 和 ½ × v_n²。如果每一组里两者在实验误差范围内相等，就说明减少的势能等于增加的动能，机械能守恒。' },
      { type: 'keypoint', label: '重点·数据处理', text: '<strong>对多个计数点分别计算 g h_n 与 ½ v_n²，若二者数值接近（相对误差很小），则验证机械能守恒。</strong>也可画 ½ v² 随 h 变化的图线，应近似过原点的一条直线，斜率接近 g。' },
      { type: 'list', items: ['选点迹清晰、第一二点间距约 2 毫米的纸带', '用刻度尺量各计数点到 O 的距离得 h_n', '用 v_n = (x_{n-1} + x_n)/(2T) 求各点速度', '逐点比较 g h_n 与 ½ v_n²，看是否相等'] },
      { type: 'tip', label: '提示', text: '<strong>为了减小误差：①纸带要保持竖直，减少摩擦；②重物选密度大、体积小的，减小空气阻力影响；③计数点间距适当大些，减小读数相对误差；④多取几个点分别计算，避免偶然误差。</strong>' },
      { type: 'paragraph', text: '实验中通常会发现：½ v² 略小于 g h，而不是完全相等。这是因为纸带与计时器间有摩擦、空气有阻力，它们做负功使一部分机械能变成了内能。所以真实实验里机械能略有损失，这正是"有阻力则不守恒"的生动体现；若损失很小，仍可认为在误差范围内守恒。' },
      { type: 'keypoint', label: '重点·误差分析', text: '<strong>实验值常出现 ½ v² 略小于 g h，原因是纸带摩擦和空气阻力做负功，使部分机械能转化为内能。</strong>阻力越小、装置越顺滑，两者越接近，验证越成功。' },
      { type: 'heading', text: '四、实验的意义' },
      { type: 'paragraph', text: '这个实验把"机械能守恒"从一条公式变成了看得见、测得到的事实。它教给我们的不只是结论，更是物理研究的方法：提出规律 → 设计可测量的方案 → 处理数据 → 在误差范围内检验。这种"用实验说话"的思路，是学习物理最宝贵的能力。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">实验装置：打点计时器 + 自由下落重物</text><rect x="40" y="70" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="96" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">装置</text><rect x="150" y="90" width="60" height="20" fill="#4fb3a5"/><line x1="180" y1="110" x2="180" y2="220" stroke="#234b45" stroke-width="2"/><circle cx="180" cy="232" r="12" fill="#234b45"/><text x="180" y="262" font-size="11" fill="#234b45" text-anchor="middle">重物</text><rect x="360" y="70" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="96" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">纸带打点</text><line x1="420" y1="120" x2="580" y2="120" stroke="#234b45" stroke-width="2"/><circle cx="430" cy="120" r="4" fill="#234b45"/><circle cx="460" cy="120" r="4" fill="#234b45"/><circle cx="495" cy="120" r="4" fill="#234b45"/><circle cx="535" cy="120" r="4" fill="#234b45"/><circle cx="575" cy="120" r="4" fill="#234b45"/><text x="500" y="160" font-size="11" fill="#234b45" text-anchor="middle">记录下落信息</text></svg>', caption: '图1　打点计时器固定在铁架台上，重物自由下落拖动纸带打出点迹，记录运动。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">用相邻位移求瞬时速度 v_n = (x₁+x₂)/(2T)</text><rect x="40" y="70" width="600" height="180" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><line x1="80" y1="160" x2="600" y2="160" stroke="#234b45" stroke-width="2"/><circle cx="130" cy="160" r="6" fill="#4fb3a5"/><circle cx="300" cy="160" r="6" fill="#234b45"/><circle cx="470" cy="160" r="6" fill="#4fb3a5"/><text x="215" y="150" font-size="12" fill="#234b45" text-anchor="middle">x₁</text><text x="385" y="150" font-size="12" fill="#234b45" text-anchor="middle">x₂</text><text x="300" y="200" font-size="12" fill="#234b45" text-anchor="middle">v_n 用前后两段平均速度</text></svg>', caption: '图2　某点 n 的瞬时速度用其前后相邻位移 x₁、x₂ 和时间 2T 求平均速度得到。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">比较 g·h 与 ½·v²：近似相等即守恒</text><rect x="40" y="70" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="96" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">减少的势能</text><text x="180" y="160" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">g·h</text><rect x="360" y="70" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="96" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">增加的动能</text><text x="500" y="160" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">½·v²</text><text x="340" y="282" font-size="12" fill="#234b45" text-anchor="middle">两者近似相等 → 机械能守恒</text></svg>', caption: '图3　逐点计算并比较 g·h 与 ½·v²，若数值接近即验证机械能守恒。' }
    ],
    exercises: [
      { type: 'choice', question: '验证机械能守恒定律的实验中，为什么不需要测重物质量？', options: ['质量对机械能无影响', '等式两边都有 m 可约去', '打点计时器会自动测质量', '重物质量必须等于 1 千克'], answer: '等式两边都有 m 可约去', explanation: '实验验证的关系是减少的重力势能 m g h 等于增加的动能 ½ m v²，等式左右两边都有质量 m，可以约掉，因此只需测下落高度 h 和对应速度 v，比较 g h 与 ½ v² 是否相等即可，不必测量重物质量。所以正确原因是质量在等式两边可约去。' },
      { type: 'choice', question: '实验中求某点瞬时速度，应该采用的方法是？', options: ['用 v = g t 计算', '用 v = (x_{n-1} + x_n) / (2T) 由纸带求', '直接读打点计时器显示', '用 v = 2 g h 计算'], answer: '用 v = (x_{n-1} + x_n) / (2T) 由纸带求', explanation: '验证实验不能用 v = g t 或 v = √(2gh) 算速度，否则就默认了机械能守恒，属于循环论证。正确做法是用纸带上该点前后相邻两段位移 x_{n-1}、x_n，由中间时刻平均速度等于瞬时速度，得 v_n = (x_{n-1} + x_n)/(2T)。这样得到的速度才来自实测数据。' },
      { type: 'choice', question: '实验数据常出现 ½ v² 略小于 g h，主要原因是？', options: ['打点计时器计时偏快', '纸带摩擦和空气阻力做负功', '重物质量测错了', '重力加速度取大了'], answer: '纸带摩擦和空气阻力做负功', explanation: '实验中纸带与计时器限位孔之间有摩擦，且重物受空气阻力，这些阻力做负功，使一部分机械能转化为内能，导致增加的动能 ½ v² 略小于减少的势能 g h。这不是计时或质量误差，而是阻力耗能。所以选"纸带摩擦和空气阻力做负功"。' },
      { type: 'fill', question: '实验中某点 n 的瞬时速度由前后相邻位移求出，公式为 v_n = ___（用 x_{n-1}、x_n、T 表示）。', answer: '(x_{n-1} + x_n) / (2T)', explanation: '根据"某段时间内的平均速度等于中间时刻的瞬时速度"，点 n 位于前后两段位移 x_{n-1} 与 x_n 的中间时刻，总位移为 x_{n-1} + x_n，总时间为 2T，故 v_n = (x_{n-1} + x_n) / (2T)。用此法求速度来自纸带实测，避免了循环论证。' },
      { type: 'fill', question: '验证实验中应比较的两项是减少的势能 ___ 与增加的动能 ½ v²（填表达式，用 g 和 h 表示）。', answer: 'g × h', explanation: '自由下落中减少的重力势能为 m g h，增加的动能为 ½ m v²，约去 m 后只需比较 g h 与 ½ v²。若对同一计数点算出的 g h 与 ½ v² 在误差范围内相等，就说明机械能守恒。因此要比较的两项是 g × h 和 ½ × v²。' }
    ]
  });
})();
