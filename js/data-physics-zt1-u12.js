/* ============================================================
 * 高三复习 · 力学综合 · 专题三 牛顿运动定律
 * 课时12：两类动力学问题
 * 数据注入：physics.zt1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt1');
  if (!v) return;

  v.points.push({
    id: 'zt1-u12',
    name: '两类动力学问题',
    chapter: '力学综合 · 专题三 牛顿运动定律',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、两类问题总览' },
      { type: 'paragraph', text: '牛顿第二定律 F合 = m × a 把“受力”和“运动”连成一条线。已知一边就能求另一边，于是有两类基本问题：一类是已知受力求运动，另一类是已知运动求受力。' },
      { type: 'keypoint', label: '重点·第一类', text: '<strong>第一类（知力求运动）：受力分析 → 求合力 F合 → 由 a = F合 / m 得加速度 → 用运动学公式求 v、x、t。</strong>' },
      { type: 'keypoint', label: '重点·第二类', text: '<strong>第二类（知运动求力）：由运动学（x、v、t）求加速度 a → 由 F合 = m × a 求合力 → 再分解出未知力。</strong>' },
      { type: 'list', items: ['第一类：力 → 加速度 → 运动（v、x、t）', '第二类：运动 → 加速度 → 力', '两类都以“加速度 a”为桥梁'] },
      { type: 'heading', text: '二、第一类：已知受力求运动' },
      { type: 'paragraph', text: '步骤：先对物体受力分析，把力沿运动方向和垂直方向分解，求沿运动方向的合力；再用 a = F合 / m；最后代入 v = v₀ + a × t、x = v₀ × t + 0.5 × a × t² 等运动学公式。' },
      { type: 'example', label: '例题·知力求运动', text: '质量 2 kg 的物块在水平面上受 10 N 水平拉力，摩擦力 2 N，求 3 s 内的位移。<br><br><strong>解析</strong>：合力 F合 = 10 − 2 = 8 N，加速度 a = 8 / 2 = 4 m/s²；位移 x = 0 + 0.5 × 4 × 3² = 18 m。所以 3 秒内的位移是 18 米。' },
      { type: 'tip', label: '提示', text: '第一类问题如果物体还受重力，记得重力只在竖直方向。若物体在水平面运动，竖直方向合力为零，重力不与水平方向的合力混在一起算，应分方向独立处理。' },
      { type: 'heading', text: '三、第二类：已知运动求受力' },
      { type: 'paragraph', text: '先用运动学公式求出加速度。例如已知初速、末速、时间，用 a = (v − v₀) / t；或已知位移和时间用 x = v₀ × t + 0.5 × a × t² 反推出 a。再回到受力分析求未知力。' },
      { type: 'example', label: '例题·知运动求力', text: '质量 1 kg 的小球从静止沿光滑斜面 2 s 下滑 4 m，求合力。<br><br><strong>解析</strong>：由 x = 0.5 × a × t² 得 4 = 0.5 × a × 4，解得 a = 2 m/s²；合力 F合 = m × a = 1 × 2 = 2 N，方向沿斜面向下。' },
      { type: 'warn', label: '易错', text: '第二类问题常漏掉重力或支持力的分量。F合 = m × a 中的 F合 是“沿加速度方向”的合力，垂直加速度方向合力为零，别把两个方向混在一起。求未知力要沿加速度方向列方程。' },
      { type: 'list', items: ['知运动求 a：用 v = v₀ + a × t 或 x = v₀ × t + 0.5 × a × t²', '知 a 求力：用 F合 = m × a 沿加速度方向列方程', '未知力往往通过“合力 = 各力分量代数和”解出'] },
      { type: 'table', headers: ['类型', '已知', '求', '桥梁'], rows: [['第一类', '受力', '运动（v、x、t）', 'a = F合 / m'], ['第二类', '运动', '受力', 'F合 = m × a']] },
      { type: 'heading', text: '四、解题通法' },
      { type: 'paragraph', text: '不论哪类，都先画受力图、标正方向。加速度 a 是连接“力”和“运动”的唯一桥梁，找到 a，问题就解了一半。' },
      { type: 'keypoint', label: '重点·抓住 a', text: '<strong>抓住 a：由力得 a，再由 a 得运动；或由运动得 a，再由 a 得力。a 是动力学问题的核心中转站。</strong>' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">加速度 a 是力与运动之间的桥梁</text><rect x="60" y="120" width="150" height="70" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="135" y="158" font-size="13" fill="#234b45" text-anchor="middle">受力</text><rect x="265" y="120" width="150" height="70" rx="8" fill="#4fb3a5"/><text x="340" y="158" font-size="13" fill="#234b45" text-anchor="middle">加速度 a</text><rect x="470" y="120" width="150" height="70" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="545" y="158" font-size="13" fill="#234b45" text-anchor="middle">运动</text><line x1="210" y1="155" x2="262" y2="155" stroke="#234b45" stroke-width="3"/><polygon points="262,155 250,149 250,161" fill="#234b45"/><line x1="415" y1="155" x2="468" y2="155" stroke="#234b45" stroke-width="3"/><polygon points="468,155 456,149 456,161" fill="#234b45"/><text x="340" y="270" font-size="13" fill="#234b45" text-anchor="middle">左：力→a→运动（第一类）；右：运动→a→力（第二类）</text></svg>', caption: '图1　不管哪类问题，都以加速度 a 为桥梁连接“受力”与“运动”。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">第一类：水平拉力拉物块</text><rect x="120" y="180" width="180" height="60" rx="6" fill="#4fb3a5"/><text x="210" y="214" font-size="13" fill="#234b45" text-anchor="middle">m</text><line x1="300" y1="210" x2="420" y2="210" stroke="#234b45" stroke-width="3"/><polygon points="420,210 408,204 408,216" fill="#234b45"/><text x="360" y="198" font-size="12" fill="#234b45" text-anchor="middle">F拉</text><line x1="300" y1="240" x2="200" y2="240" stroke="#234b45" stroke-width="2"/><polygon points="200,240 212,234 212,246" fill="#234b45"/><text x="250" y="258" font-size="12" fill="#234b45" text-anchor="middle">f</text><text x="340" y="290" font-size="12" fill="#234b45" text-anchor="middle">合力 F合 = F拉 − f，再求 a 与位移</text></svg>', caption: '图2　第一类问题：先求水平合力，再由 a = F合 / m 得加速度，进而求运动。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">第二类：斜面下滑求合力</text><line x1="120" y1="230" x2="400" y2="120" stroke="#2e9e8f" stroke-width="3"/><circle cx="320" cy="153" r="20" fill="#4fb3a5"/><text x="320" y="157" font-size="12" fill="#234b45" text-anchor="middle">m</text><line x1="320" y1="173" x2="320" y2="210" stroke="#234b45" stroke-width="2"/><polygon points="320,210 314,198 326,198" fill="#234b45"/><text x="335" y="200" font-size="12" fill="#234b45" text-anchor="middle">mg</text><text x="340" y="280" font-size="12" fill="#234b45" text-anchor="middle">由 x、t 求 a，再由 F合 = m × a 求沿斜面合力</text></svg>', caption: '图3　第二类问题：先由位移时间求加速度 a，再由 F合 = m × a 反推受力。' }
    ],
    exercises: [
      { type: 'choice', question: '已知物体受力求运动，两类动力学问题的桥梁是？', options: ['位移', '加速度 a', '时间', '质量'], answer: '加速度 a', explanation: '两类动力学问题都围绕牛顿第二定律 F合 = m × a。已知受力时由合力求加速度 a，再由运动学求位移速度；已知运动时先由运动学求 a，再由合力求力。因此加速度 a 是连接受力与运动的核心桥梁。' },
      { type: 'choice', question: '质量 2 kg 的物体受到 6 N 的合力，其加速度为？', options: ['2 m/s²', '3 m/s²', '12 m/s²', '0.33 m/s²'], answer: '3 m/s²', explanation: '由牛顿第二定律 a = F合 / m，代入 F合 = 6 N、m = 2 kg，得 a = 6 / 2 = 3 m/s²。求加速度前必须先确认 6 N 是该物体所受的合力，方向即加速度方向。' },
      { type: 'choice', question: '第二类问题“知运动求力”的第一步通常是？', options: ['直接受力分析', '先由运动学求加速度 a', '先猜力的大小', '不用管加速度'], answer: '先由运动学求加速度 a', explanation: '第二类动力学问题是已知物体的运动情况求受力。思路是先利用运动学公式（如 v = v₀ + a t 或 x = v₀ t + 0.5 a t²）求出加速度 a，再用 F合 = m × a 求合力，进而分解出未知力。' },
      { type: 'fill', question: '第一类动力学问题的思路是：受力 → 合力 → ___ → 运动学求 v、x。', answer: '加速度', explanation: '第一类问题是已知受力求运动。先受力分析得到合力 F合，再用 a = F合 / m 算出加速度，最后把 a 代入运动学公式求速度 v 和位移 x。加速度 a 是关键的过渡量。' },
      { type: 'fill', question: '质量 5 kg 的物体加速度为 2 m/s²，则它所受合力大小为___ N。', answer: '10', explanation: '由牛顿第二定律 F合 = m × a，代入 m = 5 kg、a = 2 m/s²，得 F合 = 5 × 2 = 10 N。这里的合力是物体所受各个力的矢量和，方向与该加速度方向相同。' }
    ]
  });
})();
