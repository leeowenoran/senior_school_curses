/* 生物学 · 高三复习 · 分子与细胞 · 第5章 · 课时：第2节 细胞的能量"货币"ATP */
(function () {
  var v = gzGetVolume('biology', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u14',
    name: '第2节 细胞的能量"货币"ATP',
    chapter: '分子与细胞 · 第5章 细胞的能量供应和利用',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '第2节 细胞的能量"货币"ATP' },
      { type: 'paragraph', text: '细胞干任何活都要花钱，这"钱"就是 ATP。它像随身零钱包，虽然带的不多，但随用随换、周转极快，是细胞可直接使用的能量货币。糖类、脂肪里的能量必须先换成 ATP 才能被细胞利用。' },
      { type: 'keypoint', text: 'ATP 的中文名称是三磷酸腺苷。它是细胞生命活动的直接能源物质，细胞中绝大多数需要能量的生命活动都由 ATP 直接供能。' },
      { type: 'list', items: [
        'A：腺苷，由腺嘌呤和核糖组成。',
        'P：磷酸基团。',
        '—：普通磷酸键。',
        '~：高能磷酸键（储存大量能量）。'
      ] },
      { type: 'svg', caption: 'ATP 结构简式为 A—P~P~P，含两个高能磷酸键，远离 A 的键易水解。', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg">\n<rect width="680" height="300" fill="#eef6e4"/>\n<text x="340" y="32" text-anchor="middle" font-size="19" fill="#3f7d1e" font-weight="bold">图1：ATP 结构简式</text>\n<rect x="120" y="120" width="70" height="50" fill="#d6eac4" stroke="#3f7d1e"/>\n<rect x="220" y="120" width="70" height="50" fill="#d6eac4" stroke="#3f7d1e"/>\n<rect x="320" y="120" width="70" height="50" fill="#d6eac4" stroke="#3f7d1e"/>\n<rect x="420" y="120" width="70" height="50" fill="#d6eac4" stroke="#3f7d1e"/>\n<text x="155" y="150" text-anchor="middle" font-size="14" fill="#2e3a22">A</text>\n<text x="255" y="150" text-anchor="middle" font-size="14" fill="#2e3a22">P</text>\n<text x="355" y="150" text-anchor="middle" font-size="14" fill="#2e3a22">P</text>\n<text x="455" y="150" text-anchor="middle" font-size="14" fill="#2e3a22">P</text>\n<text x="190" y="100" text-anchor="middle" font-size="14" fill="#5aa832">—</text>\n<text x="290" y="100" text-anchor="middle" font-size="14" fill="#5aa832">~</text>\n<text x="390" y="100" text-anchor="middle" font-size="14" fill="#5aa832">~</text>\n<text x="390" y="210" text-anchor="middle" font-size="12" fill="#2e3a22">远离 A 的高能磷酸键易断裂</text>\n</svg>' },
      { type: 'paragraph', text: 'ATP 的结构简式写作 A—P~P~P，其中 A 是腺苷，P 是磷酸基团，— 是普通磷酸键，~ 代表高能磷酸键。ATP 分子中含有两个高能磷酸键，远离腺苷的那个最不稳定，容易水解断裂并释放大量能量。' },
      { type: 'keypoint', text: 'ATP 与 ADP 可以相互转化，关系表示为：ATP ⇌ ADP + Pi + 能量。这一转化在活细胞中时刻不停地发生，保证了能量的持续供应。' },
      { type: 'svg', caption: 'ATP 水解与合成双向进行：物质可逆，能量不可逆（来源与去路不同）。', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg">\n<rect width="680" height="300" fill="#eef6e4"/>\n<text x="340" y="32" text-anchor="middle" font-size="19" fill="#3f7d1e" font-weight="bold">图2：ATP 与 ADP 的相互转化</text>\n<rect x="230" y="120" width="220" height="60" fill="#d6eac4" stroke="#3f7d1e"/>\n<text x="340" y="158" text-anchor="middle" font-size="15" fill="#2e3a22">ATP ⇌ ADP + Pi + 能量</text>\n<polygon points="450,150 540,140 540,160" fill="#3f7d1e"/>\n<polygon points="230,150 140,140 140,160" fill="#3f7d1e"/>\n<text x="500" y="110" text-anchor="middle" font-size="12" fill="#5aa832">水解（放能）</text>\n<text x="180" y="110" text-anchor="middle" font-size="12" fill="#5aa832">合成（储能）</text>\n</svg>' },
      { type: 'paragraph', text: 'ATP 水解时，远离腺苷的高能磷酸键断裂，生成 ADP 和 Pi 并释放能量，用于各项生命活动；ADP 和 Pi 在另一种酶催化下吸收能量重新形成 ATP。两者的转化由不同酶催化，反应条件不同。' },
      { type: 'list', items: [
        '物质可逆：ATP 与 ADP 这两种物质可以反复循环利用。',
        '能量不可逆：ATP 水解释放的能量来自高能磷酸键，用于生命活动；合成 ATP 的能量来自呼吸作用或光合作用，二者来源与去路不同。',
        '酶不同：水解与合成由不同的酶催化。'
      ] },
      { type: 'warn', text: '易错辨析：ATP 与 ADP 的相互转化不是化学意义上的可逆反应，因为催化水解和合成的酶不同、能量的来源与去向也不同，只是物质可循环。另外，ATP 不是能量本身，而是能量的"携带者"；糖类是主要能源物质，ATP 是直接能源物质，二者不能等同。' },
      { type: 'heading', text: 'ATP 的供能特点' },
      { type: 'list', items: [
        '直接供能：细胞中绝大多数需能过程都由 ATP 直接供能。',
        '含量少：细胞内 ATP 含量很少，但足够应急。',
        '转化快：ATP 与 ADP 转化十分迅速，时刻维持动态平衡。',
        '分布广：在所有活细胞中普遍存在。'
      ] },
      { type: 'example', text: '典型例题：下列关于 ATP 的叙述，正确的是（ ）。A ATP 是主要能源物质 B ATP 含量多且稳定 C ATP 是直接能源物质 D ATP 结构简式为 A—P—P—P。思路点拨：糖类才是主要能源物质，ATP 含量少但转化快，结构简式含两个高能磷酸键写作 A—P~P~P，因此选 C。' },
      { type: 'tip', text: '高频考点：常考能源物质归类——直接能源是 ATP，主要能源是糖类，储能物质是脂肪，最终能源是太阳能，动植物共有的储能多糖分别是糖原和淀粉。结构简式 A—P~P~P 中远离 A 的 ~ 易水解放能。' },
      { type: 'table', headers: ['类别', '物质', '说明'], rows: [
        ['直接能源物质', 'ATP', '细胞可直接利用的能量货币'],
        ['主要能源物质', '糖类', '生命活动的主要能量来源'],
        ['储能物质', '脂肪', '动植物体内良好的储能物质'],
        ['最终能源', '太阳能', '几乎一切生命能量的最终来源']
      ] },
      { type: 'svg', caption: 'ATP 水解释放的能量直接用于肌肉收缩、物质合成、主动运输等生命活动。', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg">\n<rect width="680" height="280" fill="#eef6e4"/>\n<text x="340" y="30" text-anchor="middle" font-size="19" fill="#3f7d1e" font-weight="bold">图3：ATP 供能示意</text>\n<rect x="60" y="110" width="160" height="70" fill="#d6eac4" stroke="#3f7d1e"/>\n<rect x="520" y="80" width="110" height="40" fill="#d6eac4" stroke="#3f7d1e"/>\n<rect x="520" y="130" width="110" height="40" fill="#d6eac4" stroke="#3f7d1e"/>\n<rect x="520" y="180" width="110" height="40" fill="#d6eac4" stroke="#3f7d1e"/>\n<text x="140" y="150" text-anchor="middle" font-size="13" fill="#2e3a22">ATP 水解</text>\n<text x="575" y="105" text-anchor="middle" font-size="12" fill="#2e3a22">肌肉收缩</text>\n<text x="575" y="155" text-anchor="middle" font-size="12" fill="#2e3a22">物质合成</text>\n<text x="575" y="205" text-anchor="middle" font-size="12" fill="#2e3a22">主动运输</text>\n<polygon points="225,145 515,100 515,120" fill="#3f7d1e"/>\n<polygon points="225,145 515,150 515,170" fill="#3f7d1e"/>\n<polygon points="225,145 515,200 515,220" fill="#3f7d1e"/>\n</svg>' },
      { type: 'keypoint', text: '本节核心：ATP 是三磷酸腺苷、直接能源物质，结构简式 A—P~P~P；ATP ⇌ ADP + Pi + 能量，物质可逆、能量不可逆；ATP 含量少、转化快，与 ADP 动态平衡以满足供能。' },
      { type: 'paragraph', text: '小结：ATP 把糖类、脂肪中稳定的化学能转化为细胞随手可用的能量，是连接能量代谢与生命活动的桥梁。理解 ATP 的结构与转化，就掌握了细胞能量通货的运行规律。' }
    ],
    exercises: [
      { type: 'choice', question: 'ATP 的结构简式是（ ）。', options: ['A—P~P~P', 'A—P—P—P', 'A~P~P~P', 'A-P-P-P'], answer: 'A—P~P~P', explanation: 'ATP 是三磷酸腺苷，结构简式为 A—P~P~P，其中 A 是腺苷，P 是磷酸基团，— 是普通磷酸键，~ 代表高能磷酸键。ATP 含有两个高能磷酸键，而不是三个普通磷酸键，因此选 A—P~P~P。' },
      { type: 'choice', question: '关于 ATP 与 ADP 的相互转化，正确的说法是（ ）。', options: ['物质可逆、能量不可逆', '物质不可逆、能量可逆', '完全可逆反应', '两者都不可逆'], answer: '物质可逆、能量不可逆', explanation: 'ATP 与 ADP 的转化中，物质可以反复循环利用（物质可逆）；但水解释放的能量用于生命活动，合成 ATP 的能量来自呼吸或光合，来源与去向不同，且催化酶也不同，所以能量不可逆，整体不是化学可逆反应。' },
      { type: 'choice', question: '细胞生命活动的直接能源物质是（ ）。', options: ['ATP', '葡萄糖', '脂肪', '蛋白质'], answer: 'ATP', explanation: 'ATP 是细胞可直接利用的能源物质，绝大多数需能的生命活动都由 ATP 直接供能。葡萄糖是主要能源物质，需先分解产生 ATP 才能被利用；脂肪是储能物质，因此选 ATP。' },
      { type: 'fill', question: '在 ATP 的结构简式 A—P~P~P 中，字母 A 代表______。', answer: '腺苷', explanation: 'ATP 中 A 是腺苷，由腺嘌呤和核糖结合而成；P 代表磷酸基团，~ 代表高能磷酸键。腺苷与三个磷酸基团共同构成三磷酸腺苷，因此 A 的含义是腺苷。' },
      { type: 'fill', question: 'ATP 水解时，远离腺苷的高能磷酸键断裂，释放能量并生成 ADP 和______。', answer: 'Pi（磷酸）', explanation: 'ATP 水解时远离腺苷的那个高能磷酸键断裂，脱去一个磷酸基团（Pi），生成 ADP（二磷酸腺苷）并释放大量能量，这些能量直接用于细胞的各项生命活动。' }
    ]
  });
})();
