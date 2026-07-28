/* ============================================================
 * 高二物理 · 必修 第三册 · 第九章 静电场及其应用
 * 课时2：库仑定律
 * 数据注入：physics.bx3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx3');
  if (!v) return;

  v.points.push({
    id: 'bx3-u2',
    name: '库仑定律',
    chapter: '必修第三册 · 第九章 静电场及其应用',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、点电荷模型' },
      { type: 'paragraph', text: '真实带电体有大小和形状，计算它们之间作用力很麻烦。和"质点"的思路一样，如果带电体之间的距离比它们自身的大小大得多，它们的大小和形状对结果影响极小，就可以把带电体看成一个"带电的点"，这就是点电荷。点电荷也是一种理想化模型，现实中并不存在，但非常有用。' },
      { type: 'keypoint', label: '重点·点电荷', text: '<strong>点电荷是忽略大小和形状、只保留电荷量的带电模型。</strong>当带电体间的距离远大于它们自身尺寸时，可视为点电荷。它和"质点"一样是理想化模型，不等于"很小的带电体"才叫点电荷。' },
      { type: 'paragraph', text: '注意：点电荷和质点并不冲突。一个带电小球，研究它平动时可看作质点；研究它与其他电荷的作用、且距离远大于球半径时，又可看作点电荷。判断标准是"在所研究的问题里，大小和形状能否忽略"。' },
      { type: 'list', items: ['点电荷是理想化模型，只保留电荷量，忽略大小和形状', '可视为点电荷的条件：带电体间距远大于自身尺寸', '点电荷不等于"体积小的电荷"，大物体在某些问题中也能当作点电荷', '与质点类比：都是抓主要因素、忽略次要因素的建模思想'] },
      { type: 'heading', text: '二、库仑定律' },
      { type: 'paragraph', text: '法国物理学家库仑通过扭秤实验总结出：真空中两个静止点电荷之间的相互作用力，跟它们电荷量的乘积成正比，跟它们距离的平方成反比，作用力的方向沿两点电荷的连线。这个规律叫库仑定律。' },
      { type: 'keypoint', label: '重点·库仑定律公式', text: '<strong>库仑力 F = k × q₁ × q₂ / r²</strong>。其中 q₁、q₂ 是两个点电荷的电荷量，r 是它们之间的距离。力的方向：同种电荷相斥，异种电荷相吸，沿两电荷连线。' },
      { type: 'example', label: '例题·计算库仑力大小', text: '真空中两个相同的正点电荷，电荷量都是 1.0×10⁻⁶ C，相距 0.10 m，它们之间的库仑力多大？<br><br><strong>解析</strong>：<br>代入 F = k × q₁ × q₂ / r² = 9.0×10⁹ × (1.0×10⁻⁶) × (1.0×10⁻⁶) / (0.10)²。<br>先算分子：9.0×10⁹ × 10⁻¹² = 9.0×10⁻³；分母 (0.10)² = 0.010。<br>所以 F = 9.0×10⁻³ / 0.010 = 0.90 N。两电荷同为正电，相互排斥。' },
      { type: 'warn', label: '易错', text: '<strong>① 公式里的 r 指两电荷球心（或等效点）之间的距离，不是表面距离；② 代入 q₁、q₂ 时用电荷量的绝对值，不要带正负号；③ 力的方向由"同种相斥、异种相吸"单独判断，不能用正负号直接算出方向。</strong>把三个要点记牢，就不会算错。' },
      { type: 'tip', label: '提示', text: '<strong>计算时全部用国际单位：电荷量用库仑(C)、距离用米(m)、力用牛顿(N)。</strong>只要单位统一成国际单位，常量 k 直接取 9.0×10⁹，公式不必再换算。' },
      { type: 'list', items: ['真空中、静止的点电荷（近似条件）', '电荷量代入绝对值，方向由电性判断', 'r 为两电荷间的距离，两球时为球心距', '只适用于点电荷之间的相互作用'] },
      { type: 'heading', text: '三、静电力常量 k' },
      { type: 'paragraph', text: '公式中的 k 叫静电力常量，由实验测定。在国际单位制中，它的值约为 9.0×10⁹ N·m²/C²。这个数值很大，说明在通常尺度下，电荷之间的作用力往往相当强，所以摩擦起电后能明显吸引纸屑。' },
      { type: 'keypoint', label: '重点·静电力常量', text: '<strong>k = 9.0×10⁹ N·m²/C²</strong>（国际单位制）。它把电荷量、距离和力的单位联系在一起，是库仑定律中不可缺少的比例系数。' },
      { type: 'heading', text: '四、多个电荷间的库仑力叠加' },
      { type: 'paragraph', text: '当空间中有三个或更多点电荷时，某个电荷受到的力，等于其他每个电荷单独对它作用力的矢量和。也就是说，先两两算出库仑力，再按"平行四边形定则"把这些力合成，这叫库仑力的叠加。' },
      { type: 'list', items: ['先求每个源电荷对目标电荷的库仑力（大小用公式、方向沿连线）', '再把所有分力按矢量合成（平行四边形定则）', '库仑力遵守力的合成与分解的一切规则', '叠加时依然用电荷量绝对值算大小，方向靠电性判断'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 330" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="330" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">点电荷：把带电体简化为一个带点的电荷</text><rect x="40" y="80" width="270" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="175" y="108" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">真实带电小球</text><circle cx="175" cy="180" r="40" fill="#4fb3a5"/><text x="175" y="190" font-size="26" fill="#234b45" text-anchor="middle">+</text><rect x="370" y="80" width="270" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="505" y="108" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">点电荷模型</text><circle cx="505" cy="180" r="22" fill="#4fb3a5"/><text x="505" y="190" font-size="20" fill="#234b45" text-anchor="middle">+</text><text x="505" y="248" font-size="12" fill="#234b45" text-anchor="middle">忽略大小形状</text></svg>', caption: '图1　当距离远大于球半径时，带电小球可简化为一个带点的点电荷。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 330" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="330" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">两同种电荷相斥，异种电荷相吸</text><circle cx="200" cy="175" r="30" fill="#4fb3a5"/><text x="200" y="185" font-size="26" fill="#234b45" text-anchor="middle">+</text><circle cx="480" cy="175" r="30" fill="#4fb3a5"/><text x="480" y="185" font-size="26" fill="#234b45" text-anchor="middle">+</text><polygon points="250,175 222,162 222,188" fill="#234b45"/><polygon points="430,175 458,162 458,188" fill="#234b45"/><text x="340" y="150" font-size="13" fill="#234b45" text-anchor="middle">同种相斥</text><circle cx="200" cy="270" r="22" fill="#4fb3a5"/><text x="200" y="280" font-size="22" fill="#234b45" text-anchor="middle">+</text><circle cx="480" cy="270" r="22" fill="#e6f4f1" stroke="#2e9e8f" stroke-width="2"/><text x="480" y="280" font-size="22" fill="#234b45" text-anchor="middle">−</text><polygon points="250,270 278,257 278,283" fill="#234b45"/><polygon points="430,270 402,257 402,283" fill="#234b45"/><text x="340" y="245" font-size="13" fill="#234b45" text-anchor="middle">异种相吸</text></svg>', caption: '图2　两个同种电荷互相推开，两个异种电荷互相吸引，力都沿连线方向。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 330" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="330" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">多个电荷：目标电荷受各分力的矢量和</text><circle cx="200" cy="165" r="24" fill="#4fb3a5"/><text x="200" y="174" font-size="20" fill="#234b45" text-anchor="middle">+</text><circle cx="480" cy="165" r="24" fill="#4fb3a5"/><text x="480" y="174" font-size="20" fill="#234b45" text-anchor="middle">+</text><circle cx="340" cy="250" r="26" fill="#e6f4f1" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="260" font-size="22" fill="#234b45" text-anchor="middle">q</text><polygon points="320,225 300,205 318,208" fill="#234b45"/><polygon points="360,225 380,205 362,208" fill="#234b45"/><line x1="340" y1="225" x2="340" y2="150" stroke="#234b45" stroke-width="2" stroke-dasharray="5,4"/><text x="340" y="300" font-size="13" fill="#234b45" text-anchor="middle">q 受两分力，合力按矢量和求得</text></svg>', caption: '图3　中间电荷 q 同时受到左右两个电荷的力，实际受力是这两个分力的矢量和。' },
      { type: 'table', headers: ['要点', '说明'], rows: [['公式', 'F = k × q₁ × q₂ / r²'], ['常量 k', '9.0×10⁹ N·m²/C²'], ['适用对象', '真空中的静止点电荷'], ['力的方向', '同种相斥、异种相吸，沿连线'], ['多电荷', '各分力矢量和（叠加原理）']] },
      { type: 'tip', label: '提示', text: '<strong>库仑力也叫静电力，它和重力、弹力一样是"力"，遵守一切力的规律。</strong>比较电荷受力时，可先和万有引力对比：两者都跟距离平方成反比，但库仑力可以引也可以斥，而万有引力只有吸引。' }
    ],
    exercises: [
      { type: 'choice', question: '关于点电荷，下列说法中正确的是？', options: ['体积很小的带电体一定是点电荷', '点电荷是理想化模型，当间距远大于尺寸时可近似', '只有带电量极少时才是点电荷', '点电荷就是电子'], answer: '点电荷是理想化模型，当间距远大于尺寸时可近似', explanation: '点电荷和质点一样是理想化模型。判断标准不是物体绝对的体积极小或带电量极少，而是"在所研究的问题中，带电体的大小和形状是否可以忽略"。当两带电体之间的距离远大于它们自身尺寸时，就可近似为点电荷。' },
      { type: 'choice', question: '库仑定律的适用条件是？', options: ['任意带电体之间', '真空中的静止点电荷之间', '只有同种电荷之间', '只有异种电荷之间'], answer: '真空中的静止点电荷之间', explanation: '库仑定律 F = k × q₁ × q₂ / r² 只适用于真空中的静止点电荷之间。对带电体来说，必须能近似看成点电荷（间距远大于尺寸）才能直接使用；若在介质中或电荷高速运动，形式需要修正。定律与电荷是同种还是异种无关。' },
      { type: 'choice', question: '两个完全相同的金属小球，带电量分别为 +3Q 和 −Q，接触后再分开，每个小球带电量变为？', options: ['+Q 和 −Q', '+Q 和 +Q', '+2Q 和 0', '−Q 和 −Q'], answer: '+Q 和 +Q', explanation: '两球完全相同，接触时总电荷先相加：+3Q + (−Q) = +2Q。电荷平均分配，每个球得到 +2Q / 2 = +Q，所以分开后两个球都带 +Q 的正电。注意异号电荷接触会先中和再平分。' },
      { type: 'fill', question: '库仑定律公式 F = k × q₁ × q₂ / r² 中，静电力常量 k = ___ N·m²/C²。', answer: '9.0×10⁹', explanation: '在国际单位制中，静电力常量 k 的实验测定值约为 9.0×10⁹ N·m²/C²。它在库仑定律中把电荷量、距离与力的大小联系起来，是计算静电力不可或缺的比例系数。' },
      { type: 'fill', question: '真空中有两个点电荷，若把它们之间的距离增大为原来的 2 倍，其他条件不变，则它们之间的库仑力变为原来的___倍。', answer: '1/4|四分之一', explanation: '由 F = k × q₁ × q₂ / r² 可知，库仑力与距离的平方成反比。距离变为 2 倍，分母 r² 变为 4 倍，因此力变为原来的 1/4。这体现了库仑定律的"平方反比"特征。' }
    ]
  });
})();
