/* ============================================================
 * 高二物理 · 选择性必修第一册 · 第三章 机械波
 * 课时16：波的干涉
 * 数据注入：physics.xb1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb1');
  if (!v) return;

  v.points.push({
    id: 'xb1-u16',
    name: '波的干涉',
    chapter: '选择性必修第一册 · 第三章 机械波',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、相干波源：两列"合得来"的波' },
      { type: 'paragraph', text: '两列波相遇，要产生稳定、好看的花样，得满足一个前提：它们的频率相同、振动步调固定（也就是相位差不变）。这样一对波源，叫相干波源。只有相干波源发出的波叠加，才能形成长期稳定不乱的图案。' },
      { type: 'keypoint', label: '重点·相干波源', text: '<strong>频率相同、振动步调固定（相位差恒定）的两个波源，叫相干波源。</strong>相干波源发出的两列波相遇后，某些地方永远在"加强"、某些地方永远在"减弱"，图案稳定不变，这才能叫干涉。频率不同的两列波叠在一起只会乱糟糟，不叫干涉。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">两个频率相同的波源，各自发出一圈圈波纹</text><circle cx="200" cy="170" r="9" fill="#4fb3a5"/><text x="200" y="196" font-size="13" fill="#234b45" text-anchor="middle">S1</text><circle cx="480" cy="170" r="9" fill="#4fb3a5"/><text x="480" y="196" font-size="13" fill="#234b45" text-anchor="middle">S2</text><g fill="none" stroke="#2e9e8f" stroke-width="2"><circle cx="200" cy="170" r="45"/><circle cx="200" cy="170" r="90"/><circle cx="200" cy="170" r="135"/><circle cx="200" cy="170" r="175"/></g><g fill="none" stroke="#4fb3a5" stroke-width="2"><circle cx="480" cy="170" r="45"/><circle cx="480" cy="170" r="90"/><circle cx="480" cy="170" r="135"/><circle cx="480" cy="170" r="175"/></g><text x="340" y="300" font-size="12" fill="#234b45" text-anchor="middle">两列频率相同的波相遇时，会叠出稳定的强弱分布</text></svg>', caption: '图1　两个频率相同的相干波源 S1、S2，各自向外发出一圈圈波纹，相遇后叠加。' },
      { type: 'heading', text: '二、加强和减弱：看"波程差"' },
      { type: 'paragraph', text: '两列波到达同一点时，如果步调一致地"同时往上、同时往下"，就会叠得更高、更低，这叫加强；如果一列波正往上、另一列却正往下，就互相抵消一部分，这叫减弱。关键要看这一点离两个波源差了多远——也就是"波程差"。' },
      { type: 'keypoint', label: '重点·波程差', text: '<strong>波程差是指空间中某一点到两个波源的距离之差，常记作 Δr。</strong>比较两列波的波程差，就能判断这一点是加强还是减弱：它是整个干涉判断的"尺子"。' },
      { type: 'keypoint', label: '重点·加强条件', text: '<strong>当波程差 Δr 等于波长的整数倍（Δr = 0、λ、2λ、3λ……）时，两列波在该点步调一致、叠加后振幅最大，叫加强点。</strong>这些点振动始终很剧烈，水面总是起伏得厉害。' },
      { type: 'keypoint', label: '重点·减弱条件', text: '<strong>当波程差 Δr 等于半波长的奇数倍（Δr = λ/2、3λ/2、5λ/2……）时，两列波在该点步调相反、叠加后振幅最小，叫减弱点。</strong>这些点振动很弱，甚至几乎不动。' },
      { type: 'example', label: '例题·判断加强还是减弱', text: '两个相干波源 S1、S2，波长 λ = 2 米。空间中一点 P 到 S1 距离 9 米，到 S2 距离 7 米。P 点是加强点还是减弱点？<br><br><strong>解析</strong>：<br>波程差 Δr = 9 米 − 7 米 = 2 米。<br>因为 λ = 2 米，所以 Δr = 2 米 = 1 × λ，是波长的整数倍。<br>满足加强条件，因此 P 点是加强点，该处振动最强。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">干涉图样：加强区（实线）与减弱区（虚线）相间</text><g stroke="#234b45" stroke-width="3"><line x1="120" y1="60" x2="120" y2="240"/><line x1="220" y1="60" x2="220" y2="240"/><line x1="320" y1="60" x2="320" y2="240"/><line x1="420" y1="60" x2="420" y2="240"/><line x1="520" y1="60" x2="520" y2="240"/></g><g stroke="#4fb3a5" stroke-width="2" stroke-dasharray="6,5"><line x1="170" y1="60" x2="170" y2="240"/><line x1="270" y1="60" x2="270" y2="240"/><line x1="370" y1="60" x2="370" y2="240"/><line x1="470" y1="60" x2="470" y2="240"/><line x1="570" y1="60" x2="570" y2="240"/></g><text x="120" y="55" font-size="12" fill="#234b45" text-anchor="middle">加强</text><text x="170" y="55" font-size="12" fill="#4fb3a5" text-anchor="middle">减弱</text><text x="220" y="55" font-size="12" fill="#234b45" text-anchor="middle">加强</text><text x="320" y="262" font-size="12" fill="#234b45" text-anchor="middle">加强区与减弱区一条条相间排列，形成稳定图样</text></svg>', caption: '图2　干涉图样里，加强区（实线）和减弱区（虚线）一条条稳定相间排列。' },
      { type: 'warn', label: '易错·加强点不是"永远在波峰"', text: '加强点的意思是<strong>振幅最大、振动最剧烈</strong>，但它仍在上下往复振动，并非一直停在最上方。减弱点则是振幅最小，甚至可能几乎不动，但也不是"永远在零点"。判断只看波程差，不看某一瞬间的位置。' },
      { type: 'heading', text: '三、干涉图样' },
      { type: 'paragraph', text: '在两列相干波叠加的区域里，加强点和减弱点各自连成一条条稳定的"带"，加强带和减弱带相间排列，远看就像一道道条纹。这种稳定分布的图案，就叫作干涉图样。只要波源保持相干，图样就一直不变。' },
      { type: 'list', items: ['干涉图样是加强区与减弱区稳定相间排列的图案', '图样中每一条加强带、减弱带的位置由波程差固定', '只要两波源保持频率相同、步调固定，图样就长期稳定不变'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">波程差决定加强还是减弱</text><circle cx="120" cy="130" r="10" fill="#4fb3a5"/><text x="120" y="112" font-size="13" fill="#234b45" text-anchor="middle">S1</text><circle cx="560" cy="130" r="10" fill="#4fb3a5"/><text x="560" y="112" font-size="13" fill="#234b45" text-anchor="middle">S2</text><circle cx="340" cy="235" r="9" fill="#234b45"/><text x="340" y="258" font-size="13" fill="#234b45" text-anchor="middle">P 点</text><line x1="120" y1="130" x2="340" y2="235" stroke="#2e9e8f" stroke-width="2"/><line x1="560" y1="130" x2="340" y2="235" stroke="#4fb3a5" stroke-width="2"/><line x1="230" y1="182" x2="240" y2="178" stroke="#234b45" stroke-width="2"/><text x="200" y="170" font-size="12" fill="#234b45" text-anchor="middle">r1</text><text x="470" y="170" font-size="12" fill="#234b45" text-anchor="middle">r2</text><text x="340" y="285" font-size="12" fill="#234b45" text-anchor="middle">比较 |r1 − r2|（波程差）与 λ 的关系，判断加强或减弱</text></svg>', caption: '图3　比较 P 到两波源的距离差（波程差）与波长 λ 的关系，即可判断 P 是加强还是减弱。' },
      { type: 'table', headers: ['判断依据', '加强点', '减弱点'], rows: [['波程差 Δr', '整数倍波长（0、λ、2λ…）', '半波长奇数倍（λ/2、3λ/2…）'], ['两列波步调', '一致，同时上同时下', '相反，一个上一个下'], ['叠加结果', '振幅最大、振动最剧烈', '振幅最小、振动最弱'], ['空间分布', '连成稳定的加强带', '连成稳定的减弱带']] },
      { type: 'tip', label: '提示·生活里的干涉', text: '<strong>干涉不只是课本画面。</strong>两个频率相同的音叉同时响，某些位置声音特别响、某些位置几乎听不到，就是声波干涉；油膜在阳光下呈现彩色条纹，也是光波干涉的结果。会判断"波程差是不是整数个波长"，这类现象就都能解释。' },
      { type: 'list', items: ['先确认两波源频率相同、步调固定（相干）', '再算某点到两波源的波程差 Δr = |r1 − r2|', 'Δr 为整数倍 λ → 加强；为半波长奇数倍 → 减弱'] }
    ],
    exercises: [
      { type: 'choice', question: '关于相干波源，下列说法正确的是？', options: ['任意两个波源都能产生干涉', '相干波源是指频率相同、振动步调固定的两个波源', '相干波源的频率可以不同', '只有声波才有相干波源'], answer: '相干波源是指频率相同、振动步调固定的两个波源', explanation: '要形成稳定的干涉图样，两个波源必须满足频率相同、振动步调固定（相位差恒定），这样的波源叫相干波源。若频率不同，两列波叠加只会杂乱变化，无法形成长期稳定的加强、减弱分布。干涉不局限于声波，水波、光波等都可以有相干波源。' },
      { type: 'choice', question: '两个相干波源发出的波叠加，某点波程差 Δr 满足什么条件时是加强点？', options: ['Δr 为半波长的奇数倍', 'Δr 为波长的整数倍', 'Δr 越小越减弱', 'Δr 与波长无关'], answer: 'Δr 为波长的整数倍', explanation: '当空间某点到两个相干波源的波程差 Δr 等于波长的整数倍（0、λ、2λ、3λ……）时，两列波在该点步调一致、同相叠加，振幅达到最大，该点就是加强点。波程差为半波长奇数倍（λ/2、3λ/2……）时才是减弱点。' },
      { type: 'choice', question: '关于干涉图样中的"减弱点"，下列说法正确的是？', options: ['减弱点永远停在波峰不动', '减弱点振幅最小，甚至可能几乎不动', '减弱点比加强点振动更剧烈', '减弱点会不停改变位置'], answer: '减弱点振幅最小，甚至可能几乎不动', explanation: '减弱点是指两列波反相叠加、振幅最小的位置，它仍在进行振动，只是起伏很小，极端情况下可能几乎不动。它与加强点的区别在于振幅大小，而非"永远停在某一位置"。稳定的干涉图样中，减弱点的位置也是固定的。' },
      { type: 'fill', question: '两个相干波源 S1、S2 波长均为 4 米，空间一点到 S1 距离 10 米、到 S2 距离 6 米，则波程差 Δr = ___ 米。', answer: '4', explanation: '波程差是该点到两个波源的距离之差，Δr = |r1 − r2| = |10 米 − 6 米| = 4 米。再与波长 λ = 4 米比较，Δr = 4 米 = 1 × λ，是波长的整数倍，所以该点应为加强点。本题只要求算出波程差，结果为 4 米。' },
      { type: 'fill', question: '两列相干波叠加时，若某点波程差为半波长的奇数倍（如 λ/2、3λ/2），该点振幅最小，称为___点。', answer: '减弱', explanation: '在波的干涉中，波程差 Δr 为整数倍波长时两波同相叠加、振幅最大，是加强点；波程差为半波长的奇数倍时两波反相叠加、振幅最小，是减弱点。因此题干描述的情形对应的是减弱点，其振动最弱。' }
    ]
  });
})();
