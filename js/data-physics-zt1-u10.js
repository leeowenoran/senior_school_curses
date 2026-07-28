/* ============================================================
 * 高三复习 · 力学综合 · 专题三 牛顿运动定律
 * 课时10：牛顿第二定律
 * 数据注入：physics.zt1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt1');
  if (!v) return;

  v.points.push({
    id: 'zt1-u10',
    name: '牛顿第二定律',
    chapter: '力学综合 · 专题三 牛顿运动定律',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、合力与加速度的关系' },
      { type: 'paragraph', text: '大量实验表明：当物体质量一定时，加速度 a 与所受合力 F合 成正比；当合力一定时，加速度 a 与物体质量 m 成反比。把这两点合起来，就得到牛顿第二定律。' },
      { type: 'keypoint', label: '重点·核心方程', text: '<strong>牛顿第二定律核心式：F合 = m × a（矢量式）。</strong>加速度 a 的方向始终与合力 F合 方向相同。单位：F合 用 N，m 用 kg，a 用 m/s²。' },
      { type: 'paragraph', text: '这个式子把“力”“质量”“加速度”三者绑在一起。给一个物体合力，它就有确定的加速度；知道加速度和质量，也能反推出合力大小。它是连接“受力”和“运动”的桥梁。' },
      { type: 'list', items: ['同一物体：合力越大，加速度越大', '相同合力：质量越大，加速度越小', '加速度方向永远和合力方向一致'] },
      { type: 'heading', text: '二、三性（瞬时性·矢量性·同体性）' },
      { type: 'keypoint', label: '重点·瞬时性', text: '<strong>瞬时性：力和加速度同时产生、同时变化、同时消失。</strong>力一变，加速度立刻变，不需要任何“过渡时间”。' },
      { type: 'paragraph', text: '比如绳子突然断了，拉力瞬间变为零，物体的加速度也瞬间由剩余合力决定（如只受重力时立即变为 g 向下）。不要以为“力撤掉后还要滑一会儿才有反应”，加速度是即时的。' },
      { type: 'keypoint', label: '重点·矢量性', text: '<strong>矢量性：F合 = m × a 是矢量式，a 的方向与 F合 方向相同。</strong>求合力时要按平行四边形定则合成，不能直接代数加。' },
      { type: 'paragraph', text: '例如物体受两个力 F₁ 和 F₂，先求合力 F合（矢量相加），再用 a = F合 / m 得到加速度，其方向与合力一致。处理多个力时，常把力分解到坐标轴上再求代数和。' },
      { type: 'keypoint', label: '重点·同体性', text: '<strong>同体性：F合、m、a 必须属于同一个物体（或同一个整体）。</strong>不能把一个物体的力套到另一个物体上去算加速度。' },
      { type: 'example', label: '例题·同体性', text: '一个 2 kg 的盒子放在 4 kg 的小车上，一起以加速度 a = 1 m/s² 向前运动。求盒子受到的摩擦力。<br><br><strong>解析</strong>：盒子的加速度就是整体加速度 1 m/s²，对盒子用同体性，它受到的摩擦力 f = m盒 × a = 2 × 1 = 2 N。注意这里用的是盒子自身质量，不是整车质量。' },
      { type: 'warn', label: '易错', text: '不要把“合力为零”误认为“加速度很大”。合力为零时 a = 0，物体静止或匀速，并非加速。还有同学把 F合 = m × a 写成 a = F合 / m 后，却用单个力去除以总质量，忘了 F合 必须是作用在该物体上的合力（同体性）。' },
      { type: 'list', items: ['瞬时性：力变加速度立即变，无延迟', '矢量性：a 与 F合 同向，按矢量合成', '同体性：F、m、a 必须属于同一物体或同一整体'] },
      { type: 'tip', label: '提示', text: '解题时先规定正方向，把各个力投影到正方向上，与正方向相同的力取正、相反的取负，这样 F合 直接代数相加，再算 a，方向自然由正负体现，不容易乱。' },
      { type: 'heading', text: '三、用牛顿第二定律解题的步骤' },
      { type: 'paragraph', text: '典型流程：① 选研究对象；② 受力分析并画受力图；③ 建立坐标系求合力 F合；④ 列 F合 = m × a；⑤ 结合运动学公式求 v、x、t 等。' },
      { type: 'table', headers: ['性质', '含义', '关键词'], rows: [['瞬时性', '力与加速度同时产生、变化、消失', '立即变'], ['矢量性', 'a 与 F合 方向相同，按矢量合成', '同方向'], ['同体性', 'F、m、a 属于同一物体', '同一对象']] },
      { type: 'example', label: '例题·瞬时性', text: '弹簧一端挂着重物处于平衡，剪断悬线瞬间，重物的加速度约为多少？<br><br><strong>解析</strong>：剪断前重物受重力 mg 和弹簧弹力；剪断瞬间悬线力消失，但弹簧来不及收缩，弹力仍近似等于 mg 向上，于是合力约为 mg 向下，a ≈ g 向下。说明力一撤，加速度立即由剩余合力决定。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">F合 = m × a：a 与 F合 同向</text><rect x="60" y="100" width="160" height="90" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="140" y="148" font-size="14" fill="#234b45" text-anchor="middle">物体 m</text><line x1="220" y1="145" x2="400" y2="145" stroke="#234b45" stroke-width="4"/><polygon points="400,145 386,138 386,152" fill="#234b45"/><text x="310" y="132" font-size="13" fill="#234b45" text-anchor="middle">F合</text><line x1="420" y1="145" x2="600" y2="145" stroke="#4fb3a5" stroke-width="4"/><polygon points="600,145 586,138 586,152" fill="#4fb3a5"/><text x="510" y="132" font-size="13" fill="#234b45" text-anchor="middle">a 同向</text><text x="340" y="270" font-size="13" fill="#234b45" text-anchor="middle">合力向右，加速度也向右，二者始终同向</text></svg>', caption: '图1　合力 F合 与加速度 a 方向始终一致，大小满足 F合 = m × a。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">矢量性：先求合力再得加速度</text><line x1="200" y1="170" x2="320" y2="110" stroke="#234b45" stroke-width="3"/><polygon points="320,110 308,114 314,124" fill="#234b45"/><text x="250" y="100" font-size="13" fill="#234b45" text-anchor="middle">F₁</text><line x1="200" y1="170" x2="320" y2="220" stroke="#234b45" stroke-width="3"/><polygon points="320,220 314,210 308,220" fill="#234b45"/><text x="250" y="240" font-size="13" fill="#234b45" text-anchor="middle">F₂</text><line x1="200" y1="170" x2="380" y2="170" stroke="#4fb3a5" stroke-width="4"/><polygon points="380,170 366,163 366,177" fill="#4fb3a5"/><text x="295" y="160" font-size="13" fill="#234b45" text-anchor="middle">F合</text><text x="340" y="280" font-size="13" fill="#234b45" text-anchor="middle">两个力按平行四边形合成得 F合，a 与 F合 同向</text></svg>', caption: '图2　多个力作用时按矢量合成求合力 F合，再由 F合 = m × a 得加速度方向。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">同体性：用盒子自身质量求内力</text><rect x="80" y="120" width="200" height="90" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="168" font-size="14" fill="#234b45" text-anchor="middle">小车 4 kg</text><rect x="120" y="70" width="120" height="50" rx="6" fill="#4fb3a5"/><text x="180" y="100" font-size="13" fill="#234b45" text-anchor="middle">盒 2 kg</text><line x1="300" y1="95" x2="420" y2="95" stroke="#234b45" stroke-width="3"/><polygon points="420,95 408,89 408,101" fill="#234b45"/><text x="360" y="82" font-size="13" fill="#234b45" text-anchor="middle">f</text><text x="340" y="270" font-size="13" fill="#234b45" text-anchor="middle">求盒子的摩擦力要用盒子质量，不能套整车质量</text></svg>', caption: '图3　同体性提醒：研究盒子受力时，F、m、a 都必须取盒子自身，不能混用小车载质量。' }
    ],
    exercises: [
      { type: 'choice', question: '牛顿第二定律的表达式正确的是？', options: ['F合 = m × a', 'a = F合 × m', 'F合 = a / m', 'm = F合 × a'], answer: 'F合 = m × a', explanation: '牛顿第二定律指出物体的加速度跟所受合力成正比、跟质量成反比，即 F合 = m × a。由此可得 a = F合 / m、m = F合 / a，其余几项把乘除关系写反了，因此只有 F合 = m × a 正确。' },
      { type: 'choice', question: '关于牛顿第二定律的矢量性，下列说法正确的是？', options: ['a 与 F合 反向', 'a 与 F合 同向', 'a 总竖直向下', 'a 与质量同向'], answer: 'a 与 F合 同向', explanation: '牛顿第二定律是矢量式，加速度 a 的方向与合力 F合 的方向始终相同。合力水平则加速度水平，合力竖直则加速度竖直，并不一定竖直向下。质量没有方向，谈不上与加速度同向。' },
      { type: 'choice', question: '一个物体所受合力突然变为零，它的加速度将如何变化？', options: ['立即变为零', '逐渐变为零', '保持不变', '变为无穷大'], answer: '立即变为零', explanation: '根据瞬时性，力和加速度同时变化。合力一旦变为零，由 F合 = m × a 可知加速度立即变为零，不需要缓冲时间。之后物体将保持当时的速度做匀速直线运动或静止。' },
      { type: 'fill', question: '牛顿第二定律中，加速度 a 的方向始终与___的方向相同（填“合力”或“分力”）。', answer: '合力', explanation: 'F合 = m × a 是矢量式，其中 a 的方向由合力 F合 决定，始终与合力方向相同，而不是与某个单独的分力同向。求加速度必须先求出物体所受的合力。' },
      { type: 'fill', question: '质量为 2 kg 的物体受到 6 N 的合力，其加速度大小为___ m/s²。', answer: '3', explanation: '由牛顿第二定律 a = F合 / m，代入 F合 = 6 N、m = 2 kg，得 a = 6 / 2 = 3 m/s²。加速度方向与这 6 N 合力的方向相同。' }
    ]
  });
})();
