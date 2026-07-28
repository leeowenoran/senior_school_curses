/* ============================================================
 * 高一物理 · 必修 第一册 · 第四章 运动和力的关系
 * 课时19：力学单位制
 * 数据注入：physics.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx1');
  if (!v) return;

  v.points.push({
    id: 'bx1-u19',
    name: '力学单位制',
    chapter: '必修第一册 · 第四章 运动和力的关系',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、为什么要建立单位制' },
      { type: 'paragraph', text: '物理量要表示出来，光说"长度是 5"没有意义，必须说清"5 米"还是"5 厘米"。每一个物理量都需要一个单位。可是物理量大大小小几十种，如果给每个量都随便定一个单位，不同国家、不同书之间就乱套了。于是人们约定：先挑几个最基础的量定好单位，其余量的单位再由它们推导出来，这就形成了单位制。' },
      { type: 'keypoint', label: '重点·基本量与基本单位', text: '<strong>基本量：被选来作为基础的物理量（如长度、质量、时间）。</strong><br><strong>基本单位：基本量的单位（如米、千克、秒）。</strong>由基本量组合推导出来的量和单位，分别叫导出量和导出单位。' },
      { type: 'paragraph', text: '这种"少数基础、多数派生"的办法很聪明：只要统一了少数几个基本单位，所有其他单位就跟着被唯一确定了，全世界交流就有了共同语言。在力学里，我们只要统一三个基本量就够了。' },
      { type: 'list', items: ['先规定少数几个基本量的单位（基本单位）', '其余物理量的单位由基本单位组合推导（导出单位）', '基本单位 + 导出单位 = 一套单位制', '国际通用的叫国际单位制，符号 SI'] },
      { type: 'heading', text: '二、力学中的基本量与导出量' },
      { type: 'paragraph', text: '在力学范围内，只要三个基本量就能推出所有其他力学量：长度、质量、时间。它们对应的国际基本单位分别是米、千克、秒。用这三个单位，就能组合出速度、加速度、力等所有力学量的单位。' },
      { type: 'keypoint', label: '重点·力学的三个基本单位', text: '<strong>长度——米（m）；质量——千克（kg）；时间——秒（s）。</strong>这就是力学国际单位制的三大基本单位。注意质量的基本单位是千克而不是克，时间是秒而不是小时。' },
      { type: 'example', label: '例题·认识导出单位', text: '由公式 F = m × a，已知质量单位千克、加速度单位米每二次方秒，力的单位应怎样表示？<br><br><strong>解析</strong>：<br>把单位当作"量"代入公式：力 F 的单位 = 质量单位 × 加速度单位 = 千克 ×（米每二次方秒）= 千克·米 / 秒²。这个组合单位被专门命名为"牛顿"，符号 N。所以 1 N = 1 kg·m/s²。' },
      { type: 'warn', label: '易错', text: '<strong>第一，计算结果一定要带单位，不能只写数字。</strong><br><strong>第二，代入公式前要把所有量统一成国际单位（如厘米化米、克化千克、小时化秒），否则算出错误结果。</strong><br><strong>第三，质量的基本单位是千克不是克，别弄混。</strong>单位统一是使用公式的前提。' },
      { type: 'table', headers: ['物理量', '类别', '单位名称', '符号'], rows: [['长度', '基本量', '米', 'm'], ['质量', '基本量', '千克', 'kg'], ['时间', '基本量', '秒', 's'], ['速度', '导出量', '米每秒', 'm/s'], ['加速度', '导出量', '米每二次方秒', 'm/s²'], ['力', '导出量', '牛顿', 'N (= kg·m/s²)']] },
      { type: 'tip', label: '提示', text: '<strong>用单位可以帮我们"检查公式对错"。</strong>把每个量的单位代入公式两边，若两边单位一致，公式很可能正确；若单位对不上，公式一定有问题。例如由 a = F / m，右边单位是 N/kg = (kg·m/s²)/kg = m/s²，正好等于左边加速度单位，说明这个公式在单位上是自洽的。' },
      { type: 'list', items: ['力学三基本量：长度、质量、时间', '对应基本单位：米、千克、秒', '速度单位 m/s，加速度单位 m/s²', '力的单位牛顿由 kg、m、s 组合而来'] },
      { type: 'heading', text: '三、国际单位制及其意义' },
      { type: 'paragraph', text: '国际单位制（SI）是目前全世界科技、贸易、教学通用的单位体系，它不只包含力学三个基本单位，还包含电流、温度、物质的量、发光强度等共七个基本单位。我们学力学时，主要用到米、千克、秒这三个。' },
      { type: 'keypoint', label: '重点·国际单位制 SI', text: '<strong>国际单位制（SI）是一套国际通用的单位体系。</strong>在力学中采用米、千克、秒作为基本单位。统一单位制让不同国家、不同领域的科学家能用同一把"尺子"交流，计算时也不必每次另做单位换算。' },
      { type: 'paragraph', text: '做题时养成好习惯：读题先把所有已知量换算成国际单位，代入公式算出结果，最后再写上正确单位。这样既不容易出错，也便于和答案对照。单位制看似简单，却是物理学习里最基础、最不能马虎的一环。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">力学的三个基本单位</text><rect x="60" y="90" width="160" height="130" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="140" y="140" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">米 m</text><text x="140" y="175" font-size="13" fill="#234b45" text-anchor="middle">长度</text><rect x="260" y="90" width="160" height="130" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="140" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">千克 kg</text><text x="340" y="175" font-size="13" fill="#234b45" text-anchor="middle">质量</text><rect x="460" y="90" width="160" height="130" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="540" y="140" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">秒 s</text><text x="540" y="175" font-size="13" fill="#234b45" text-anchor="middle">时间</text><text x="340" y="270" font-size="13" fill="#234b45" text-anchor="middle">三个基本单位确定后，其余力学单位都可导出</text></svg>', caption: '图1　力学国际单位制的三个基本单位：米（长度）、千克（质量）、秒（时间）。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">力的单位"牛顿"由基本单位组合而成</text><rect x="120" y="120" width="100" height="70" rx="8" fill="#4fb3a5"/><text x="170" y="160" font-size="14" fill="#234b45" text-anchor="middle">千克 kg</text><rect x="290" y="120" width="100" height="70" rx="8" fill="#4fb3a5"/><text x="340" y="160" font-size="14" fill="#234b45" text-anchor="middle">米 m</text><rect x="120" y="200" width="100" height="50" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="170" y="230" font-size="12" fill="#234b45" text-anchor="middle">秒² s²</text><text x="450" y="160" font-size="30" fill="#234b45" text-anchor="middle">→ N</text><text x="340" y="280" font-size="13" fill="#234b45" text-anchor="middle">1 牛顿 = 1 kg · m / s²</text></svg>', caption: '图2　力的单位牛顿是导出单位，由千克、米、秒组合：1 N = 1 kg·m/s²。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">用单位检验公式是否正确</text><rect x="80" y="100" width="240" height="100" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="200" y="135" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">a = F / m</text><text x="200" y="170" font-size="13" fill="#234b45" text-anchor="middle">左边单位 m/s²</text><rect x="360" y="100" width="240" height="100" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="480" y="135" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">右边单位 N/kg</text><text x="480" y="170" font-size="13" fill="#234b45" text-anchor="middle">= m/s²</text><text x="340" y="260" font-size="13" fill="#234b45" text-anchor="middle">两边单位相同 → 公式在单位上自洽</text></svg>', caption: '图3　把单位代入公式两边，若一致则公式很可能正确，可用单位检验公式。' }
    ],
    exercises: [
      { type: 'choice', question: '在力学中，被选作基本量的三个物理量是？', options: ['长度、质量、时间', '长度、力、时间', '质量、速度、时间', '力、加速度、质量'], answer: '长度、质量、时间', explanation: '力学范围内，只需要长度、质量、时间这三个基本量，就能由它们推导出速度、加速度、力等所有其他力学量。因此这三个是基本量，其余都是导出量。力、速度、加速度都是由基本量组合得到的导出量，不能作为基本量，所以只有"长度、质量、时间"正确。' },
      { type: 'choice', question: '下列哪个是力学中的基本单位？', options: ['牛顿（N）', '米每秒（m/s）', '千克（kg）', '米每二次方秒（m/s²）'], answer: '千克（kg）', explanation: '力学的基本单位是米（m）、千克（kg）、秒（s）三个。牛顿是力的导出单位，由 kg·m/s² 组合而来；米每秒是速度的导出单位；米每二次方秒是加速度的导出单位。它们都是导出单位，不是基本单位，因此只有千克是基本单位。' },
      { type: 'choice', question: '根据单位换算关系，1 牛顿等于多少基本单位的组合？', options: ['1 kg·m/s', '1 kg·m/s²', '1 g·m/s²', '1 kg·m²/s²'], answer: '1 kg·m/s²', explanation: '由牛顿第二定律 F = m × a，把单位代入：力 F 的单位 = 质量单位 × 加速度单位 = 千克 ×（米每二次方秒）= 千克·米 / 秒²，即 kg·m/s²。这就是 1 牛顿的定义。注意质量要用千克而不是克，加速度是米每二次方秒，因此只有 1 kg·m/s² 正确。' },
      { type: 'fill', question: '国际单位制（SI）中，力学采用的基本单位是米、___和秒。', answer: '千克', explanation: '在力学范围内，国际单位制规定了三个基本单位：长度用米（m）、质量用千克（kg）、时间用秒（s）。其中质量的基本单位是千克而不是克，这是必须记牢的。有了这三个基本单位，速度、加速度、力等所有力学导出单位都能由它们组合得到。' },
      { type: 'fill', question: '把公式中的物理量都代以其单位，若等号两边单位一致，则说明该公式在单位上是___（填"自洽"或"矛盾"）的，可用于初步检验公式。', answer: '自洽', explanation: '单位检验是一种判断公式是否可能正确的简便方法：把每个物理量的单位代入公式两边，如果左右两边单位能够统一、一致，说明公式在单位关系上没有问题，称作"单位自洽"，公式很可能正确；若两边单位对不上，则公式一定有误。但单位自洽只能初步检验，不能代替严格的推导证明。' }
    ]
  });
})();
