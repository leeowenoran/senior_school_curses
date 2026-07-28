/* ============================================================
 * 高一物理 · 必修 第二册 · 第七章 万有引力与宇宙航行
 * 课时10：万有引力定律
 * 数据注入：physics.bx2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx2');
  if (!v) return;

  v.points.push({
    id: 'bx2-u10',
    name: '万有引力定律',
    chapter: '必修第二册 · 第七章 万有引力与宇宙航行',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、从苹果到月亮：同一种力？' },
      { type: 'paragraph', text: '牛顿在思考：让苹果落地的力，和让月亮绕地球转的力，会不会是同一种力？如果地球对苹果有吸引力，那这种吸引力会不会一直延伸到月亮，把月亮拉在轨道上不掉下来？' },
      { type: 'keypoint', label: '重点·万有引力猜想', text: '<strong>牛顿猜想：地面物体受到的重力，和天体之间的引力，本质上是同一种力，都来自物体的相互吸引。</strong>这种想法把天上和地上的运动统一了起来。' },
      { type: 'paragraph', text: '为了验证这个猜想，牛顿做了著名的月—地检验。他比较月亮绕地球运动的向心加速度，和地面物体自由下落的加速度，看它们是否都符合平方反比的规律。' },
      { type: 'list', items: ['苹果落地和月亮绕地球，可能源于同一种吸引力', '这种力应当能延伸到很远的地方', '需要用观测数据来检验这个大胆猜想'] },
      { type: 'heading', text: '二、月—地检验' },
      { type: 'paragraph', text: '牛顿算出：如果地球引力真按距离平方反比减弱，那么月亮处的引力加速度，应该等于地面重力加速度乘以（地球半径除以月地距离）的平方。计算结果与月亮实际的运动情况高度吻合。' },
      { type: 'tip', label: '提示·检验的思想', text: '<strong>月—地检验的核心是比较两个加速度是否符合同一个平方反比规律。</strong>只要月亮的向心加速度与地面重力缩水到相同比例，就说明天上地上是同一种力。' },
      { type: 'example', label: '例题·平方反比', text: '假设地球对物体的引力随距离平方反比变化。地面重力加速度约为月地处的多少？已知月地距离约为地球半径的 60 倍。<br><br><strong>解析</strong>：引力加速度与距离平方成反比。月地距离是地球半径的 60 倍，所以月处加速度约为地面的 1/(60×60) = 1/3600。计算与观测一致，证实了同一种引力的猜想。' },
      { type: 'warn', label: '易错·不要混淆半径与距离', text: '<strong>平方反比中的距离 r 是两个质点（或球心）之间的距离，不是表面到表面的距离。</strong>计算月—地检验时要用地心到月心的距离，也就是地球半径加上高度，不能直接拿表面间距去算。' },
      { type: 'table', headers: ['对象', '受地球引力', '加速度来源'], rows: [['地面苹果', '有', '重力加速度 g'], ['月亮', '有，按平方反比减弱', '绕地向心加速度'], ['检验结论', '天上地上同一种力', '符合平方反比']] },
      { type: 'heading', text: '三、万有引力定律' },
      { type: 'paragraph', text: '牛顿在前人工作和自己研究的基础上，正式提出了万有引力定律：任何两个物体之间都存在相互吸引的力，这个力的大小与两个物体质量的乘积成正比，与它们距离的平方成反比。' },
      { type: 'keypoint', label: '重点·万有引力定律', text: '<strong>万有引力大小 F = G × m₁ × m₂ / r²。</strong>其中 m₁、m₂ 是两个物体的质量，r 是它们质心之间的距离，G 是万有引力常量。两个物体间的引力方向沿着它们的连线，彼此大小相等、方向相反。' },
      { type: 'paragraph', text: '万有引力常量 G 的数值很小，说明一般物体之间的引力微弱得难以察觉。但在天体尺度上，因为质量巨大，引力就成了一切天体运动的主宰。' },
      { type: 'heading', text: '四、万有引力常量 G 与适用条件' },
      { type: 'list', items: ['G 由卡文迪许用扭秤实验测出，约为 6.67×10⁻¹¹', '公式适用于两个质点，或质量分布均匀的球体（r 取球心距）', '天体之间距离远大于自身大小时，可近似看作质点', '一般物体间引力太小，通常可以忽略'] },
      { type: 'tip', label: '提示·单位', text: '<strong>使用 F = G × m₁ × m₂ / r² 时，质量用千克、距离用米、力用牛顿，G 的单位要随之配套。</strong>代入前先把所有量统一成国际单位，计算才不会出错。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">苹果落地与月亮绕地，源于同一种引力</text><rect x="40" y="58" width="280" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="84" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">地面：苹果下落</text><circle cx="180" cy="200" r="20" fill="#4fb3a5"/><text x="180" y="192" font-size="12" fill="#234b45" text-anchor="middle">苹果</text><line x1="180" y1="178" x2="180" y2="120" stroke="#234b45" stroke-width="2"/><text x="180" y="112" font-size="11" fill="#234b45">地球引力</text><rect x="360" y="58" width="280" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="84" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">天上：月亮绕地</text><circle cx="500" cy="158" r="16" fill="#4fb3a5"/><text x="500" y="146" font-size="11" fill="#234b45" text-anchor="middle">地球</text><circle cx="500" cy="158" r="70" fill="none" stroke="#2e9e8f" stroke-width="2" stroke-dasharray="5,4"/><circle cx="570" cy="158" r="8" fill="#234b45"/><text x="570" y="142" font-size="11" fill="#234b45" text-anchor="middle">月亮</text></svg>', caption: '图1　牛顿猜想：让苹果落地的力和让月亮绕地的力是同一种万有引力。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">月—地检验：比较地面与月处的引力加速度</text><rect x="40" y="58" width="280" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="84" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">地面 g</text><circle cx="180" cy="158" r="18" fill="#4fb3a5"/><text x="180" y="200" font-size="12" fill="#234b45" text-anchor="middle">加速度 = g</text><rect x="360" y="58" width="280" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="84" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">月处加速度</text><circle cx="500" cy="158" r="18" fill="#4fb3a5"/><text x="500" y="200" font-size="12" fill="#234b45" text-anchor="middle">≈ g / 3600</text></svg>', caption: '图2　月—地检验比较地面重力加速度 g 与月处的引力加速度，二者符合同一平方反比规律。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">万有引力：正比于质量乘积，反比于距离平方</text><rect x="40" y="58" width="600" height="200" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><circle cx="200" cy="158" r="26" fill="#4fb3a5"/><text x="200" y="162" font-size="12" fill="#234b45" text-anchor="middle">m₁</text><circle cx="480" cy="158" r="26" fill="#4fb3a5"/><text x="480" y="162" font-size="12" fill="#234b45" text-anchor="middle">m₂</text><line x1="226" y1="158" x2="454" y2="158" stroke="#234b45" stroke-width="3"/><text x="340" y="148" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">F</text><text x="340" y="186" font-size="13" fill="#234b45" text-anchor="middle">F = G × m₁ × m₂ / r²</text></svg>', caption: '图3　两物体间的万有引力与质量乘积成正比，与距离平方成反比。' }
    ],
    exercises: [
      { type: 'choice', question: '牛顿的月—地检验是为了验证什么？', options: ['月亮绕地球做圆周运动', '地面物体重力与天体引力是同一种力', '地球自转的存在', '万有引力常量 G 的数值'], answer: '地面物体重力与天体引力是同一种力', explanation: '牛顿提出猜想：地面苹果受到的重力，与天体之间的引力本质上是同一种力。月—地检验通过比较月亮处的引力加速度与地面重力加速度是否符合同一平方反比规律，证实了这一猜想。它与地球自转或 G 的数值测定不是同一件事。' },
      { type: 'choice', question: '关于万有引力定律 F = G × m₁ × m₂ / r²，下列说法正确的是？', options: ['G 的数值很大', '引力与两物体质量乘积成反比', '引力与两物体距离的平方成反比', '只适用于天体之间'], answer: '引力与两物体距离的平方成反比', explanation: '万有引力定律指出 F = G × m₁ × m₂ / r²，力与两物体质量乘积成正比，与距离平方成反比。G 是很小的常量（约 6.67×10⁻¹¹），并非很大；该公式对质点及均匀球体普遍适用，不限于天体之间。' },
      { type: 'choice', question: '万有引力定律公式中的 r 指的是？', options: ['两物体表面之间的距离', '两物体质心（球心）之间的距离', '其中一个物体的半径', '地球半径'], answer: '两物体质心（球心）之间的距离', explanation: '公式中 r 是两个质点（或质量分布均匀球体）的质心之间的距离，也就是球心到球心的距离。对于天体，需用球心间距，而不是表面间距或单个半径，这一点在计算中极易出错。' },
      { type: 'fill', question: '万有引力常量 G 最早由英国科学家___通过扭秤实验精确测出。', answer: '卡文迪许', explanation: '1798 年，英国科学家卡文迪许利用扭秤实验第一次在实验室里比较精确地测出了万有引力常量 G。这使得万有引力定律可以定量计算，卡文迪许因此被称为第一个称量地球的人。' },
      { type: 'fill', question: '两个物体间的万有引力大小与它们质量的乘积成___（填“正比”或“反比”），与距离的平方成___（填“正比”或“反比”）。', answer: '正比|反比', explanation: '根据万有引力定律 F = G × m₁ × m₂ / r²，引力大小与两物体质量的乘积成正比，与它们之间距离的平方成反比。记住正比于质量乘积、反比于距离平方，是掌握这一定律的关键。' }
    ]
  });
})();
