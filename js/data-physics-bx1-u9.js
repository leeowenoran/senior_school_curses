/* ============================================================
 * 高一物理 · 必修 第一册 · 第二章 匀变速直线运动
 * 第9课时：匀变速直线运动的位移与时间关系
 * 数据注入：physics.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx1');
  if (!v) return;

  v.points.push({
    id: 'bx1-u9',
    name: '匀变速直线运动的位移与时间关系',
    chapter: '必修第一册 · 第二章 匀变速直线运动',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、位移公式 x = v₀ t + ½ a t²' },
      { type: 'paragraph', text: '匀变速直线运动的位移，可以从 v-t 图像的面积来求。在 v-t 图中，图线与横轴所围成的面积就等于这段时间内的位移。对于一条斜直线，这块面积可以分成两部分：一个矩形和一个三角形。' },
      { type: 'paragraph', text: '矩形的高是初速度 v₀，宽是时间 t，面积是 v₀ t；三角形的底是 t，高是速度的增加量 a t，面积是 ½ × t × a t = ½ a t²。两部分相加，就得到位移公式：x = v₀ t + ½ a t²。它告诉我们位移与时间 t 的二次关系。' },
      { type: 'keypoint', label: '重点·位移公式', text: '<strong>x = v₀ t + ½ a t²</strong><br>由 v-t 图面积推导：矩形面积 v₀ t 加上三角形面积 ½ · (a t) · t。<br>当 v₀ = 0（从静止开始）时，简化为 <strong>x = ½ a t²</strong>。' },
      { type: 'list', items: [
        '位移公式：x = v₀ t + ½ a t²',
        'v-t 图线与横轴围成的面积 = 位移 x',
        '矩形部分 v₀ t 代表初速度贡献的位移',
        '三角形部分 ½ a t² 代表加速带来的额外位移'
      ] },
      { type: 'table', headers: ['情形', '位移公式'], rows: [
        ['一般匀变速', 'x = v₀ t + ½ a t²'],
        ['初速为零', 'x = ½ a t²'],
        ['匀速 (a=0)', 'x = v₀ t']
      ] },
      { type: 'heading', text: '二、重要推论 v² - v₀² = 2 a x' },
      { type: 'paragraph', text: '有时题目不给你时间 t，只给初速度、末速度和位移，这时用位移公式还要先求 t，比较麻烦。我们可以把速度公式 v = v₀ + a t 中的 t 消去，得到不含量 t 的推论：v² - v₀² = 2 a x。' },
      { type: 'paragraph', text: '这个推论特别适合“已知初末速度求位移”或者“已知位移求末速度”的问题。比如子弹穿过木板、物体从某速度滑行到停止，直接用 v² - v₀² = 2 a x 一步到位，不必先算时间。' },
      { type: 'keypoint', label: '重点·速度位移关系', text: '推论：<strong>v² - v₀² = 2 a x</strong><br>由 v = v₀ + a t 与 x = v₀ t + ½ a t² 消去 t 得到。<br>特点：<strong>不含时间 t</strong>，适合已知初末速度和位移的情形。当 v₀ = 0 时变为 <strong>v² = 2 a x</strong>。' },
      { type: 'example', label: '例题', text: '一小球以 v₀ = 4 米/秒沿斜面匀加速下滑，加速度 a = 1 米/秒²，求下滑 10 米时的速度。<br><br><strong>解析</strong>：用推论 v² - v₀² = 2 a x，代入 v² = 4² + 2 × 1 × 10 = 16 + 20 = 36，所以 v = 6 米/秒。这里不需先求时间，直接用不含 t 的推论更简洁。注意结果取正根，因为沿原方向运动。' },
      { type: 'tip', label: '提示', text: '做题时先看题目给了什么、求什么：<strong>给了时间 t 用位移公式 x = v₀ t + ½ a t²；没给时间 t 却给了初末速度，就用推论 v² - v₀² = 2 a x</strong>。选对公式能少走很多弯路。' },
      { type: 'heading', text: '三、刹车问题——先判断停下时刻' },
      { type: 'paragraph', text: '刹车是匀减速运动的典型例子，但有一个大坑：车停下后不会自己倒退。如果盲目把很大的 t 代入公式 x = v₀ t + ½ a t²，会算出车“穿过马路又倒回来”的荒谬结果。正确做法是先算车停下需要多长时间。' },
      { type: 'paragraph', text: '设初速度 v₀，刹车加速度 a（取负），车停下时末速度 v = 0。由 v = v₀ + a t 得停下时间 t停 = -v₀ / a（取正值）。若题目给的时间 t 大于 t停，说明车早已停下，实际运动时间只能取 t停，位移按 t停 计算。' },
      { type: 'warn', label: '易错', text: '刹车问题中<strong>车停下后不再倒退</strong>！若题目时间 t 大于实际停下时间 t停，必须把运动时间改成 t停 再代入公式，而不能用原 t。盲目代入大 t 会得到负位移或“倒退”的错误结果，这是考试最常丢分的地方。' },
      { type: 'keypoint', label: '重点·刹车三步法', text: '① 求停下时间 <strong>t停 = -v₀ / a</strong>（a 取负，结果取正）<br>② 比较题目给的 t 与 t停<br>③ 若 t > t停，实际位移按 t停 计算；否则按原 t 计算。' },
      { type: 'heading', text: '四、逆向思维与小结' },
      { type: 'paragraph', text: '末速度为零的匀减速运动，可以反过来看成“初速度为零、加速度大小相同的匀加速运动”。这种逆向思维常能简化计算。例如物体滑上斜面到最高点停下，反过来看就是从最高点自由下滑的匀加速过程，用 x = ½ a t² 直接处理。' },
      { type: 'list', items: [
        '位移公式 x = v₀ t + ½ a t² 来自 v-t 图面积',
        '推论 v² - v₀² = 2 a x 不含时间，适合求位移或末速',
        '刹车先求 t停，停下后不再倒退',
        '末速为 0 的匀减速可逆向看成初速为 0 的匀加速'
      ] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">图1　v-t 图面积 = 位移</text><line x1="90" y1="290" x2="90" y2="60" stroke="#234b45" stroke-width="2"/><line x1="90" y1="290" x2="610" y2="290" stroke="#234b45" stroke-width="2"/><text x="70" y="65" font-size="14" fill="#234b45">v</text><text x="610" y="312" font-size="14" fill="#234b45">t</text><line x1="90" y1="200" x2="540" y2="120" stroke="#2e9e8f" stroke-width="3"/><rect x="90" y="200" width="450" height="90" fill="#d6ece8" stroke="#2e9e8f" stroke-width="1"/><polygon points="540,200 540,120 90,200" fill="#4fb3a5" opacity="0.4"/><text x="200" y="250" font-size="12" fill="#234b45">矩形 v₀ t</text><text x="430" y="170" font-size="12" fill="#234b45">三角形 ½ a t²</text><text x="320" y="330" font-size="13" fill="#1f7a6e" text-anchor="middle">总面积 x = v₀ t + ½ a t²</text></svg>', caption: '图1　v-t 图线与横轴围成面积等于位移，分为矩形 v₀t 与三角形 ½at²。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">图2　刹车问题：停下后不再倒退</text><line x1="90" y1="270" x2="90" y2="60" stroke="#234b45" stroke-width="2"/><line x1="90" y1="270" x2="610" y2="270" stroke="#234b45" stroke-width="2"/><text x="70" y="65" font-size="14" fill="#234b45">v</text><text x="610" y="292" font-size="14" fill="#234b45">t</text><line x1="90" y1="240" x2="300" y2="120" stroke="#2e9e8f" stroke-width="3"/><circle cx="300" cy="120" r="5" fill="#4fb3a5"/><text x="300" y="105" font-size="12" fill="#1f7a6e">到 0 停下</text><line x1="300" y1="120" x2="560" y2="120" stroke="#4fb3a5" stroke-width="3" stroke-dasharray="5 4"/><text x="430" y="110" font-size="12" fill="#234b45">此后保持静止</text><text x="320" y="300" font-size="13" fill="#1f7a6e" text-anchor="middle">车到 t停 时 v=0，之后不再倒退</text></svg>', caption: '图2　刹车时速度降到 0 即停下，v-t 图此后为水平线，不能继续向下算倒退。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">图3　逆向思维：匀减速反看为匀加速</text><rect x="80" y="90" width="240" height="60" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="200" y="118" font-size="13" fill="#234b45" text-anchor="middle">原过程：匀减速到 0</text><text x="340" y="125" font-size="20" fill="#1f7a6e" text-anchor="middle">→</text><rect x="360" y="90" width="240" height="60" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="480" y="118" font-size="13" fill="#234b45" text-anchor="middle">反看：初速 0 匀加速</text><text x="340" y="210" font-size="14" fill="#234b45" text-anchor="middle">末速为 0 的匀减速 = 反向的初速 0 匀加速</text><text x="340" y="250" font-size="13" fill="#1f7a6e" text-anchor="middle">用 x = ½ a t² 简化计算</text></svg>', caption: '图3　末速为 0 的匀减速运动，逆向看成初速为 0 的匀加速，便于用 x = ½at² 求解。' }
    ],
    exercises: [
      { type: 'choice', question: '匀变速直线运动的位移公式 x = v₀ t + ½ a t² 可以由什么推导出来？', options: ['力的合成', 'v-t 图像图线与横轴围成的面积', '牛顿第二定律', '能量守恒'], answer: 'v-t 图像图线与横轴围成的面积', explanation: '在 v-t 图像中，图线与横轴围成的面积等于位移。匀变速直线的 v-t 图是斜直线，面积由矩形 v₀t 与三角形 ½at² 组成，相加即得 x = v₀t + ½at²。这是从图像面积角度最直观的推导。' },
      { type: 'choice', question: '汽车以 v₀ = 20 米/秒刹车，加速度 a = -5 米/秒²，从刹车到停下的时间约为？', options: ['2 秒', '4 秒', '5 秒', '10 秒'], answer: '4 秒', explanation: '由 v = v₀ + a t，停下时 v = 0，代入 0 = 20 + (-5) t，解得 t = 20 / 5 = 4 秒。这就是实际停下时间 t停。若题目给的时间大于 4 秒，位移只能按 4 秒算，因为车停下后不再倒退。' },
      { type: 'choice', question: '当题目未给出时间 t，但已知初速度、末速度和位移时，应选用哪个公式？', options: ['x = v₀ t + ½ a t²', 'v = v₀ + a t', 'v² - v₀² = 2 a x', 'x = v₀ t'], answer: 'v² - v₀² = 2 a x', explanation: '推论 v² - v₀² = 2 a x 中不含时间 t，正是为“已知初末速度和位移、缺时间”的情形准备的。直接代入即可求位移或末速度，不必先求 t。其余公式都含有 t，在此不便使用。' },
      { type: 'fill', question: '匀变速直线运动中，不含时间 t 的速度与位移关系推论为 ____（即 v² - v₀² = 2 a x）。', answer: 'v² - v₀² = 2 a x|v²-v₀²=2ax', explanation: '将速度公式 v = v₀ + a t 与位移公式 x = v₀ t + ½ a t² 联立消去 t，可得推论 v² - v₀² = 2 a x。它不含时间，适合已知初末速度求位移或已知位移求末速度的情形，是本章重要推论。' },
      { type: 'fill', question: '刹车问题中，若题目给出的时间 t 大于实际停下时间 t停，计算位移时应取的时间 t实 = ____（填写 t停 或 t）。', answer: 't停|停下时间|t停（实际停下时间）', explanation: '汽车刹车停下后不会倒退，因此运动时间不能超过实际停下时间 t停。当题目给的 t 大于 t停 时，车早已停止，真实运动时间应取 t停，位移按 t停 代入公式计算，而不能用原 t 盲目代入。' }
    ]
  });
})();
