/* ============================================================
 * 高三复习 · 实验专题 · 专题一 力学实验
 * 课时4：探究加速度与力、质量的关系（验证牛顿第二定律）
 * 数据注入：physics.zt4.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt4');
  if (!v) return;

  v.points.push({
    id: 'zt4-u4',
    name: '探究加速度与力、质量的关系（验证牛顿第二定律）',
    chapter: '实验专题 · 专题一 力学实验',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、实验想弄清三个量的关系' },
      { type: 'paragraph', text: '物体的加速度 a 和什么有关？日常经验告诉我们：推得越用力，车跑得越快（加速度越大）；同样用力，空车比满载车容易加速。这一课用控制变量法，分别研究"力一定时 a 与质量 m 的关系"和"质量一定时 a 与力 F 的关系"。' },
      { type: 'list', items: ['带滑轮的长木板、小车、打点计时器、纸带、刻度尺', '托盘和砝码（提供拉力）、砝码（改变小车质量）', '天平（测小车和砝码质量）'] },
      { type: 'heading', text: '二、控制变量法' },
      { type: 'paragraph', text: '三个量 a、F、m 搅在一起不好研究，所以一次只让一个量变：先保持小车质量 m 不变，改变拉力 F，看 a 怎么变；再保持拉力 F 不变，往小车上加砝码改变质量 m，看 a 怎么变。这种"每次只动一个因素"的方法叫控制变量法。' },
      { type: 'keypoint', label: '重点·控制变量', text: '<strong>研究多因素关系要用控制变量法：质量一定看 a 与 F，力一定看 a 与 m。</strong>绝不能三个量同时乱变，否则分不清谁在起作用。这是整个实验的设计灵魂。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">实验装置：小车受托盘拉力而加速</text><line x1="60" y1="220" x2="620" y2="190" stroke="#2e9e8f" stroke-width="4"/><rect x="240" y="150" width="90" height="36" rx="5" fill="#4fb3a5"/><text x="285" y="173" font-size="13" fill="#234b45" text-anchor="middle">小车</text><rect x="90" y="120" width="70" height="44" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="125" y="147" font-size="12" fill="#234b45" text-anchor="middle">计时器</text><line x1="160" y1="168" x2="340" y2="186" stroke="#234b45" stroke-width="2"/><line x1="500" y1="160" x2="500" y2="220" stroke="#234b45" stroke-width="2"/><rect x="486" y="200" width="28" height="20" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="245" font-size="12" fill="#234b45" text-anchor="middle">托盘+砝码</text><text x="430" y="150" font-size="13" fill="#234b45">拉力 F</text></svg>', caption: '图1　小车在托盘拉力 F 作用下加速，用打点计时器测加速度 a。' },
      { type: 'heading', text: '三、怎么测加速度 a' },
      { type: 'paragraph', text: '让小车拖着纸带过打点计时器，打下点后，用上一课学的方法（逐差法或 v-t 图像斜率）算出加速度 a。注意木板要略倾斜一点来平衡摩擦力，否则小车还受摩擦力，拉力就不等于合外力了。' },
      { type: 'list', items: ['先不挂托盘，把木板尾部垫高一点，让小车能匀速下滑（纸带点距均匀）', '这样重力沿斜面的分力抵消摩擦，小车受的合外力就是托盘拉力', '挂上托盘，打点求 a', '改变托盘砝码质量改变 F，或往车上加砝码改变 m'] },
      { type: 'example', label: '例题·质量一定看 a 与 F', text: '例：保持小车质量不变，两次托盘砝码使拉力分别为 F₁、F₂，测得的加速度 a₁ = 1.0 m/s²、a₂ = 2.0 m/s²，且 F₂ = 2 F₁。说明什么？<br><strong>解析</strong>：质量相同时，拉力变成 2 倍，加速度也变成 2 倍，即 a 与 F 成正比。这正是牛顿第二定律 a ∝ F（m 一定）的体现。' },
      { type: 'warn', label: '易错', text: '<strong>必须平衡摩擦力，否则 a 与 F 不是正比关系。</strong>若木板水平不放斜，小车还受摩擦阻力，合外力 = F − f，图像会不过原点而向右平移。垫斜程度以"不挂托盘时小车能匀速运动"为准，且之后每次改变质量都要重新确认。' },
      { type: 'heading', text: '四、质量一定：a 与 F 成正比' },
      { type: 'paragraph', text: '固定小车质量，改变拉力 F，得到多组 (F, a)。在 a-F 坐标上描点，若连成一条过原点的直线，就说明质量一定时 a 与 F 成正比。直线的斜率等于 1/m。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">质量一定：a-F 图线过原点直线</text><line x1="90" y1="250" x2="630" y2="250" stroke="#234b45" stroke-width="2"/><line x1="90" y1="250" x2="90" y2="60" stroke="#234b45" stroke-width="2"/><text x="78" y="55" font-size="13" fill="#234b45">a</text><text x="618" y="270" font-size="13" fill="#234b45">F</text><line x1="90" y1="250" x2="580" y2="90" stroke="#2e9e8f" stroke-width="3"/><circle cx="220" y="200" r="4" fill="#4fb3a5"/><circle cx="350" y="150" r="4" fill="#4fb3a5"/><circle cx="480" y="100" r="4" fill="#4fb3a5"/><text x="340" y="285" font-size="12" fill="#234b45" text-anchor="middle">斜率 = 1 / m，说明 a 与 F 成正比</text></svg>', caption: '图2　质量一定时 a-F 图像过原点成直线，证明 a ∝ F。' },
      { type: 'keypoint', label: '重点·a ∝ F', text: '<strong>质量一定时，加速度 a 与合外力 F 成正比（a ∝ F）。</strong>图像斜率等于 1/m，所以质量越大斜率越小、直线越平缓。' },
      { type: 'heading', text: '五、力一定：a 与 m 成反比' },
      { type: 'paragraph', text: '固定拉力 F，往小车上加砝码使总质量 m 变大，测 a。若画 a-m 图是向下弯的曲线，不好判断；改画 a 与 1/m 的图，若成过原点直线，就说明 a 与 m 成反比，即 a ∝ 1/m。' },
      { type: 'table', headers: ['总质量 m / kg', '1/m / (kg⁻¹)', '加速度 a / (m·s⁻²)'], rows: [['0.50', '2.00', '1.00'], ['0.67', '1.50', '0.75'], ['1.00', '1.00', '0.50'], ['2.00', '0.50', '0.25']] },
      { type: 'tip', label: '提示', text: '<strong>研究 a 与 m 关系时，画 a − 1/m 图比画 a − m 图更清楚。</strong>因为 a 与 m 成反比，a-m 是曲线，而 a 与 1/m 成正比，图像是直线，便于用"过原点直线"来验证反比关系。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">力一定：a 与 1/m 成正比</text><line x1="90" y1="250" x2="630" y2="250" stroke="#234b45" stroke-width="2"/><line x1="90" y1="250" x2="90" y2="60" stroke="#234b45" stroke-width="2"/><text x="60" y="55" font-size="13" fill="#234b45">a</text><text x="600" y="270" font-size="13" fill="#234b45">1/m</text><line x1="90" y1="250" x2="570" y2="80" stroke="#2e9e8f" stroke-width="3"/><circle cx="210" y="190" r="4" fill="#4fb3a5"/><circle cx="330" y="150" r="4" fill="#4fb3a5"/><circle cx="450" y="110" r="4" fill="#4fb3a5"/><text x="340" y="285" font-size="12" fill="#234b45" text-anchor="middle">过原点直线说明 a ∝ 1/m，即 a 与 m 成反比</text></svg>', caption: '图3　力一定时 a 与 1/m 成正比（即 a 与 m 成反比），验证牛顿第二定律。' },
      { type: 'paragraph', text: '小结：把两条结论合起来，就是牛顿第二定律 a = F / m，也可写成 F = m a。实验用控制变量法，分别得到 a ∝ F（m 一定）和 a ∝ 1/m（F 一定），图像法让关系一目了然。' },
      { type: 'warn', label: '易错', text: '<strong>托盘和砝码的总重力并不严格等于小车受的拉力。</strong>严格说小车和托盘是整体加速，拉力略小于托盘重力。中学实验近似认为拉力等于托盘重力；若要求更准，可用力传感器直接测拉力。不要误以为 F 就是随便一个数。' }
    ],
    exercises: [
      { type: 'choice', question: '探究 a 与 F、m 的关系时，采用的实验方法是？', options: ['等效替代法', '控制变量法', '放大法', '类比法'], answer: '控制变量法', explanation: 'a 同时受 F 和 m 影响，实验先保持 m 不变研究 a 与 F，再保持 F 不变研究 a 与 m，这种每次只改变一个因素的方法叫控制变量法，是本节课的设计核心。' },
      { type: 'choice', question: '在验证牛顿第二定律实验中，平衡摩擦力是为了？', options: ['让小车跑得更快', '使小车所受合外力等于托盘拉力', '减小纸带摩擦', '让加速度变大'], answer: '使小车所受合外力等于托盘拉力', explanation: '把木板垫斜，让重力沿斜面的分力抵消摩擦力，小车运动时水平方向只受托盘拉力，合外力就等于拉力 F，这样 a-F 图才过原点、满足正比关系。' },
      { type: 'choice', question: '力 F 一定时，加速度 a 与质量 m 的关系是？', options: ['a 与 m 成正比', 'a 与 m 成反比，即 a ∝ 1/m', 'a 与 m 无关', 'a 等于 m'], answer: 'a 与 m 成反比，即 a ∝ 1/m', explanation: '由牛顿第二定律 a = F / m，当 F 一定时 a 与 m 成反比。为便于作图验证，常画 a − 1/m 图像，得到过原点的直线。' },
      { type: 'fill', question: '牛顿第二定律的数学表达式是 ___（用 a、F、m 表示），也可写为 F = ___。', answer: 'a = F / m', explanation: '牛顿第二定律：物体加速度 a 与合外力 F 成正比，与质量 m 成反比，表达式为 a = F / m，或写成 F = m a。注意 F 是合外力，单位 N，m 单位 kg，a 单位 m/s²。' },
      { type: 'fill', question: '研究 a 与 m 的关系时，为了直观验证反比关系，应画 ___ 图像（横轴填 1/m 或 m）。', answer: 'a − 1/m|a 与 1/m', explanation: 'a 与 m 成反比，a-m 图是曲线不好判断；改画 a 随 1/m 变化的图像，二者成正比，得到过原点直线，便于用图像验证 a ∝ 1/m。' }
    ]
  });
})();
