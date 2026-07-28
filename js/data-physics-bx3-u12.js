/* ============================================================
 * 高二物理 · 必修第三册 · 第十一章 电路及其应用
 * 课时12：导体的电阻率
 * 数据注入：physics.bx3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx3');
  if (!v) return;

  v.points.push({
    id: 'bx3-u12',
    name: '导体的电阻率',
    chapter: '必修第三册 · 第十一章 电路及其应用',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、电阻由什么决定：实验事实' },
      { type: 'paragraph', text: '同样材料做成的导线，长的比短的更难通过电流，细的比粗的更难通过电流。这说明导体的电阻和它的长度、横截面积有关。进一步实验还发现，材料和温度也会影响电阻。把这些关系总结成一个公式，就是电阻定律：R = ρ × l / S。' },
      { type: 'keypoint', label: '重点·电阻定律', text: '<strong>R = ρ × l / S。其中 l 是导体长度，S 是横截面积，ρ 是电阻率，由材料本身和温度决定。长度越长、越细，电阻越大；材料不同（ρ 不同），电阻也不同。</strong>' },
      { type: 'paragraph', text: '电阻率 ρ 是材料的"导电本领"指标。ρ 越小，材料越容易导电，是良导体；ρ 越大，越不容易导电。例如银、铜、铝的 ρ 很小，常用作导线；而橡胶、陶瓷的 ρ 极大，常用作绝缘体。' },
      { type: 'table', headers: ['材料', '电阻率 ρ（约，20℃）', '用途'], rows: [['银', '1.6×10⁻⁸ Ω·m', '最佳导体但太贵'], ['铜', '1.7×10⁻⁸ Ω·m', '电线首选'], ['铝', '2.9×10⁻⁸ Ω·m', '架空导线'], ['铁', '1.0×10⁻⁷ Ω·m', '一般结构件'], ['橡胶', '约 10¹³ Ω·m', '绝缘外皮']] },
      { type: 'heading', text: '二、电阻率与温度的关系' },
      { type: 'paragraph', text: '金属的电阻率一般随温度升高而增大。所以白炽灯灯丝在常温下电阻小，点亮后温度升高、电阻明显变大——这就解释了上一节课伏安特性曲线为什么不是严格直线。相反，有些材料（如碳）电阻率随温度升高而减小；还有超导材料在足够低的温度下 ρ 会降为 0。' },
      { type: 'warn', label: '易错', text: 'ρ 是<strong>材料</strong>的属性，不是某一段导体的属性。说"这段铁丝的电阻率是……"可以，但说"电阻率等于 R×S/l 算出来的是这段材料的 ρ"。同一根铁丝截成两半，每段 R 变一半，但材料没变，ρ 不变。注意区分"导体电阻 R"和"材料电阻率 ρ"。' },
      { type: 'list', items: ['ρ 由材料和温度决定，与导体形状、大小无关', '金属：温度升高，ρ 增大（电阻变大）', 'ρ 的国际单位是欧·米，写作 Ω·m', '超导体：温度足够低时 ρ = 0，电阻消失'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">R = ρ × l / S：长度、粗细、材料决定电阻</text><rect x="70" y="90" width="160" height="40" rx="6" fill="#4fb3a5"/><text x="150" y="116" font-size="13" fill="#234b45" text-anchor="middle">长而细 R 大</text><rect x="260" y="90" width="80" height="80" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="300" y="136" font-size="12" fill="#234b45" text-anchor="middle">短粗</text><rect x="380" y="90" width="40" height="120" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="400" y="156" font-size="11" fill="#234b45" text-anchor="middle">细</text><rect x="470" y="90" width="140" height="60" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="540" y="126" font-size="13" fill="#234b45" text-anchor="middle">ρ 不同</text><text x="118" y="170" font-size="13" fill="#234b45" text-anchor="middle">l 大→R大</text><text x="300" y="200" font-size="13" fill="#234b45" text-anchor="middle">S 大→R小</text><text x="540" y="200" font-size="13" fill="#234b45" text-anchor="middle">材料决定ρ</text><text x="340" y="262" font-size="15" fill="#1f7a6e" text-anchor="middle" font-weight="bold">R = ρ × l / S</text></svg>', caption: '图1　导体越长、越细，电阻越大；材料不同（电阻率 ρ 不同）电阻也不同，这就是电阻定律 R = ρ×l/S。' },
      { type: 'heading', text: '三、实验：测定金属的电阻率' },
      { type: 'paragraph', text: '要测一段金属丝的电阻率 ρ，思路是先用 R = ρ × l / S 变形得到 ρ = R × S / l。所以只要测出这段金属丝的电阻 R、长度 l 和横截面积 S，就能算出 ρ。其中 R 用伏安法（测 U、I 后 R = U/I）得到，l 用米尺量，S 由直径 d 算：S = π × d² / 4。' },
      { type: 'keypoint', label: '重点·实验原理与步骤', text: '<strong>原理：ρ = R × S / l，其中 S = π × d² / 4。<br>步骤：① 用螺旋测微器在金属丝不同位置多次测直径 d 取平均；② 用米尺量接入电路的有效长度 l；③ 用伏安法测 R = U / I；④ 代入公式算 ρ。</strong>' },
      { type: 'example', label: '例题·算电阻率', text: '一段镍铜合金丝，测得直径 d = 0.50 毫米，有效长度 l = 0.80 米，两端电压 U = 1.2 伏时电流 I = 0.50 安。求电阻率 ρ。<br><br><strong>解析</strong>：<br>R = U / I = 1.2 / 0.50 = 2.4 Ω。<br>S = π × d² / 4 = 3.14 × (0.50×10⁻³)² / 4 ≈ 1.96×10⁻⁷ m²。<br>ρ = R × S / l = 2.4 × 1.96×10⁻⁷ / 0.80 ≈ 5.9×10⁻⁷ Ω·m。' },
      { type: 'tip', label: '提示·减小误差', text: '<strong>直径要在金属丝不同位置、不同方向多测几次取平均</strong>，因为金属丝不一定绝对圆；长度只量"接入电路"的那一段，不含接线柱外的部分；电压、电流读数要尽量用表的中间量程，减小读数误差。' },
      { type: 'warn', label: '易错·单位换算', text: '测直径常用螺旋测微器，读数单位是<strong>毫米（mm）</strong>，而公式里长度要用米（m）。经常有人忘记把 0.50 mm 换成 0.50×10⁻³ m，直接导致 S 算错 10⁶ 倍。同理电阻率单位是 Ω·m，不是 Ω·mm。务必统一成国际单位再代入。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">测金属丝电阻率的实验电路（伏安法）</text><rect x="90" y="100" width="180" height="100" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="140" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">金属丝</text><text x="180" y="168" font-size="12" fill="#234b45" text-anchor="middle">测长度 l</text><text x="180" y="188" font-size="12" fill="#234b45" text-anchor="middle">测直径 d</text><rect x="340" y="100" width="120" height="50" rx="8" fill="#4fb3a5"/><text x="400" y="130" font-size="12" fill="#234b45" text-anchor="middle">电压表测 U</text><rect x="340" y="160" width="120" height="50" rx="8" fill="#4fb3a5"/><text x="400" y="190" font-size="12" fill="#234b45" text-anchor="middle">电流表测 I</text><text x="500" y="130" font-size="13" fill="#234b45">R = U / I</text><text x="500" y="160" font-size="13" fill="#234b45">S = π d² / 4</text><text x="500" y="190" font-size="13" fill="#234b45">ρ = R S / l</text></svg>', caption: '图2　用伏安法测金属丝电阻 R = U/I，再量长度 l、测直径 d 算横截面积 S，最后由 ρ = R×S/l 得到电阻率。' },
      { type: 'paragraph', text: '这个实验把"看不见的材料性质 ρ"转化成了可以测量的 R、l、d。它体现了物理学常用的方法：把难直接测的物理量，用公式关系拆成几个容易测量的量。同一根金属丝，不同位置测得的 ρ 应当基本一样，如果差别很大，往往是测量或读数有误差。' },
      { type: 'list', items: ['先由 R = U / I 测电阻（伏安法）', '用螺旋测微器测直径 d，米尺量长度 l', '横截面积 S = π × d² / 4，注意单位换算成米', '最后 ρ = R × S / l，多次测量取平均减小误差'] },
      { type: 'heading', text: '四、电阻率的实际意义' },
      { type: 'paragraph', text: '了解电阻率能帮我们选材：输电要用 ρ 极小的铜或铝以减少损耗；电热器（电炉丝、电熨斗）却要用 ρ 较大、熔点高的合金（如镍铬合金），这样既发热又不易烧断；导线外皮则用 ρ 极大的橡胶、塑料来绝缘，防止触电和短路。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">电阻率决定材料用途</text><rect x="80" y="80" width="160" height="150" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="160" y="120" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">铜/铝导线</text><text x="160" y="156" font-size="13" fill="#234b45" text-anchor="middle">ρ小→输电省电</text><rect x="260" y="80" width="160" height="150" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="120" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">镍铬合金丝</text><text x="340" y="156" font-size="13" fill="#234b45" text-anchor="middle">ρ较大→发热</text><rect x="440" y="80" width="160" height="150" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="520" y="120" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">橡胶外皮</text><text x="520" y="156" font-size="13" fill="#234b45" text-anchor="middle">ρ极大→绝缘</text></svg>', caption: '图3　电阻率小的材料做导线，电阻率大的合金做电热丝，电阻率极大的材料做绝缘外皮。' }
    ],
    exercises: [
      { type: 'choice', question: '根据电阻定律 R = ρ × l / S，下列说法正确的是？', options: ['导体的电阻率 ρ 与其长度 l 成正比', '导体的电阻率 ρ 由其材料和温度决定，与形状无关', '横截面积 S 越大，电阻率 ρ 越小', '长度 l 越长，电阻率 ρ 越大'], answer: '导体的电阻率 ρ 由其材料和温度决定，与形状无关', explanation: '电阻率 ρ 是材料本身的属性，由材料和温度决定，与导体的长度、横截面积、形状都无关。公式 R = ρ×l/S 中的 ρ 是比例系数，反映材料导电难易，不会因为把导体截短、拉长而改变（忽略温度变化）。同一材料的 ρ 是一个定值，所以 A、C、D 把 ρ 和导体几何尺寸挂钩都是错误的。' },
      { type: 'choice', question: '用伏安法测金属丝电阻率实验中，不需要直接测量的物理量是？', options: ['金属丝长度 l', '金属丝直径 d', '金属丝两端电压 U 和电流 I', '金属丝的质量 m'], answer: '金属丝的质量 m', explanation: '实验原理是 ρ = R×S/l，其中 R = U/I 由电压表和电流表测出，S = π×d²/4 由直径 d 算出，l 用米尺量。质量 m 并不出现在公式中，也不需要测量。只要得到 R、S、l 三项就能算出电阻率，因此质量是不需要测的。' },
      { type: 'choice', question: '两段由同种材料制成的导线，温度相同，长度相同，但甲横截面是乙的 2 倍，则甲的电阻是乙的？', options: ['2 倍', '1/2', '4 倍', '1/4'], answer: '1/2', explanation: '由电阻定律 R = ρ×l/S，材料相同则 ρ 相同，长度 l 相同，所以 R 与 S 成反比。甲横截面积 S 是乙的 2 倍，因此甲的电阻是乙的 1/2。注意是反比关系，截面变大电阻变小，不是变大。' },
      { type: 'fill', question: '测定金属丝电阻率的实验中，横截面积 S 与直径 d 的关系是 S = ___；电阻率的计算公式是 ρ = ___（用电表测得的 R、长度 l、面积 S 表示）。', answer: 'π × d² / 4|R × S / l', explanation: '金属丝可看作圆柱，横截面积 S = π × d² / 4，其中 d 是直径。由电阻定律 R = ρ×l/S 变形可得 ρ = R×S/l。实验中先用伏安法由 R = U/I 算电阻，再测直径算 S、米尺量 l，最后代入 ρ = R×S/l 即可求得材料的电阻率。注意单位统一用国际单位。' },
      { type: 'fill', question: '金属的电阻率一般随温度升高而___（填"增大"或"减小"），这就是白炽灯灯丝点亮后电阻比常温下___（填"大"或"小"）的原因。', answer: '增大|大', explanation: '金属的电阻率 ρ 通常随温度升高而增大。白炽灯灯丝在常温下温度低、ρ 小、电阻小；通电点亮后温度升至很高，ρ 明显增大，所以工作时的电阻比常温下的电阻大。这也正是上一节课灯丝的伏安特性曲线不是严格直线、而略向下弯的原因——电阻随电压升高（温度升高）而变大。' }
    ]
  });
})();
