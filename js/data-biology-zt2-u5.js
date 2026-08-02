/* 生物学 · 高三复习 · 遗传与进化 · 第2章 · 课时：第1节 减数分裂和受精作用（二） */
(function () {
  var v = gzGetVolume('biology', 'zt2');
  if (!v) return;
  v.points.push({
    id: 'zt2-u5',
    name: '第1节 减数分裂和受精作用（二）',
    chapter: '遗传与进化 · 第2章 基因和染色体的关系',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、卵细胞的形成' },
      { type: 'paragraph', text: '卵细胞的形成场所是卵巢，过程与精子形成相似，但有两点重要不同：一是细胞质分裂<strong>不均等</strong>，卵原细胞经减数第一次分裂形成一个大的次级卵母细胞和一个小的第一极体；二是最终一个卵原细胞只形成 1 个卵细胞和 3 个极体（第一极体还分裂出两个第二极体，加上次级卵母细胞分裂出的一个极体）。极体体积小、含营养少，最终退化消失，保证卵细胞获得充足的细胞质。' },
      { type: 'list', items: [
        '场所：卵巢；卵原细胞（2n）经减Ⅰ、减Ⅱ形成卵细胞。',
        '细胞质不均等分裂：次级卵母细胞大，极体小且最终退化。',
        '结果：一个卵原细胞→1 个卵细胞 + 3 个极体。'
      ] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="240" fill="#eef6e4"/><text x="340" y="32" font-size="20" text-anchor="middle" fill="#3f7d1e" font-weight="bold">卵细胞的形成过程</text><rect x="40" y="100" width="120" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="100" y="132" font-size="15" text-anchor="middle" fill="#2e3a22">卵原细胞 2n</text><rect x="220" y="100" width="130" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="285" y="132" font-size="15" text-anchor="middle" fill="#2e3a22">初级卵母 2n</text><line x1="160" y1="127" x2="218" y2="127" stroke="#3f7d1e" stroke-width="2"/><polygon points="218,120 234,127 218,134" fill="#3f7d1e"/><rect x="390" y="80" width="130" height="50" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="455" y="110" font-size="14" text-anchor="middle" fill="#2e3a22">次级卵母 n</text><rect x="390" y="140" width="130" height="44" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="455" y="167" font-size="14" text-anchor="middle" fill="#2e3a22">第一极体 n</text><line x1="350" y1="127" x2="388" y2="105" stroke="#3f7d1e" stroke-width="2"/><polygon points="388,98 404,105 388,112" fill="#3f7d1e"/><line x1="350" y1="127" x2="388" y2="158" stroke="#3f7d1e" stroke-width="2"/><polygon points="388,151 404,158 388,165" fill="#3f7d1e"/><text x="560" y="105" font-size="14" fill="#2e3a22">次级卵母→</text><text x="560" y="135" font-size="14" fill="#2e3a22">卵细胞+3极体</text><text x="340" y="215" font-size="14" text-anchor="middle" fill="#5aa832">细胞质不均等分裂，一个卵原细胞最终形成1个卵细胞</text></svg>', caption: '卵细胞形成中细胞质不均等分裂，一个卵原细胞最终产生 1 个卵细胞和 3 个极体。' },
      { type: 'warn', text: '易错辨析：精子和卵细胞形成都经历减Ⅰ和减Ⅱ，但精子形成细胞质均等分裂且四个细胞都变形为有功能的精子；卵细胞形成细胞质不均等分裂，只有最大的那个成为卵细胞，其余为退化的极体。不要误以为卵细胞也产生四个有功能的配子。' },
      { type: 'paragraph', text: '减数分裂与有丝分裂常被混淆，必须抓住本质区别。有丝分裂是体细胞增殖方式，分裂一次，前后染色体数目不变，没有同源染色体的特殊联会分离行为。减数分裂是生殖细胞产生方式，分裂两次，染色体减半，减数第一次分裂有同源染色体联会和分离。' },
      { type: 'table', headers: ['比较项目', '有丝分裂', '减数分裂'], rows: [
        ['分裂次数', '1 次', '2 次'],
        ['同源染色体行为', '无联会、无分离', '减Ⅰ联会、分离'],
        ['子细胞染色体数', '与母细胞相同（2n）', '减半为 n'],
        ['子细胞类型', '体细胞', '精子或卵细胞']
      ] },
      { type: 'keypoint', text: '核心区别：有丝分裂的结果是染色体数目不变，保持遗传稳定；减数分裂的结果是染色体数目减半，为受精后恢复数目恒定做准备。图像上，有丝分裂全过程都有同源染色体但从不联会，减数分裂在减Ⅰ有联会四分体、减Ⅱ无同源染色体。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="200" fill="#eef6e4"/><text x="340" y="32" font-size="20" text-anchor="middle" fill="#3f7d1e" font-weight="bold">减数分裂与有丝分裂对比</text><rect x="50" y="80" width="250" height="80" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="175" y="110" font-size="16" text-anchor="middle" fill="#2e3a22">有丝分裂：分裂1次</text><text x="175" y="138" font-size="15" text-anchor="middle" fill="#2e3a22">染色体数不变，产生体细胞</text><rect x="380" y="80" width="250" height="80" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="505" y="110" font-size="16" text-anchor="middle" fill="#2e3a22">减数分裂：分裂2次</text><text x="505" y="138" font-size="15" text-anchor="middle" fill="#2e3a22">染色体减半，产生生殖细胞</text><line x1="300" y1="120" x2="378" y2="120" stroke="#3f7d1e" stroke-width="2"/><polygon points="378,113 394,120 378,127" fill="#3f7d1e"/></svg>', caption: '有丝分裂分裂一次、染色体不变；减数分裂分裂两次、染色体减半。' },
      { type: 'example', text: '例题：某生物体细胞有 4 对同源染色体，问其精原细胞在减Ⅰ后期和减Ⅱ后期的染色体数分别是多少。思路：体细胞 2n = 8。减Ⅰ后期同源染色体尚未分到两个细胞，染色体数仍是 8；减Ⅱ后期着丝粒分裂，姐妹染色单体分开使染色体暂时加倍为 8，但细胞仍为 n 水平（因为已无同源配对）。答案：减Ⅰ后期 8 条，减Ⅱ后期 8 条。' },
      { type: 'paragraph', text: '减数分裂异常会导致染色体数目变异。常见的有「减数第一次分裂同源染色体未分离」或「减数第二次分裂姐妹染色单体未分开」，使配子多一条或少一条染色体。例如 21 三体综合征（唐氏综合征）就是患者比正常人多了一条 21 号染色体，通常源于减数分裂时 21 号染色体未能正常分离。' },
      { type: 'tip', text: '高频考点：减数分裂异常题常问「异常配子如何产生」。记住：减Ⅰ异常→同源染色体进入同一配子，产生两个都异常的配子；减Ⅱ异常→姐妹染色单体未分开，产生一个异常、一个正常配子。结合亲代基因型可推断子代染色体组成。' },
      { type: 'list', items: [
        '减Ⅰ同源染色体未分离：两个配子均多（或少）一条。',
        '减Ⅱ姐妹染色单体未分开：一个配子异常，一个正常。',
        '21 三体：多一条 21 号染色体，源于减Ⅰ或减Ⅱ异常。'
      ] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="200" fill="#eef6e4"/><text x="340" y="32" font-size="20" text-anchor="middle" fill="#3f7d1e" font-weight="bold">受精作用</text><rect x="70" y="90" width="120" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="130" y="122" font-size="15" text-anchor="middle" fill="#2e3a22">精子 n</text><rect x="250" y="90" width="120" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="310" y="122" font-size="15" text-anchor="middle" fill="#2e3a22">卵细胞 n</text><line x1="190" y1="117" x2="248" y2="117" stroke="#3f7d1e" stroke-width="2"/><polygon points="248,110 264,117 248,124" fill="#3f7d1e"/><line x1="370" y1="117" x2="408" y2="117" stroke="#3f7d1e" stroke-width="2"/><polygon points="408,110 424,117 408,124" fill="#3f7d1e"/><rect x="440" y="90" width="160" height="54" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="520" y="122" font-size="15" text-anchor="middle" fill="#2e3a22">受精卵 2n</text><text x="340" y="180" font-size="14" text-anchor="middle" fill="#5aa832">精子与卵细胞结合，恢复染色体数目恒定</text></svg>', caption: '受精作用是精子（n）与卵细胞（n）结合形成受精卵（2n），使染色体数目恢复。' },
      { type: 'paragraph', text: '受精作用是精子与卵细胞相互识别、融合成为受精卵的过程。受精卵的染色体一半来自父方精子、一半来自母方卵细胞，合在一起恢复为体细胞的染色体数目（2n）。这样，减数分裂使染色体减半、受精作用使染色体恢复，二者配合保证了亲子代染色体数目的恒定。' },
      { type: 'tip', text: '复习提示：减数分裂与受精作用好比「先对半切再合起来」——生殖细胞先减数对半（n），受精时雌雄各出一半拼成整套（2n）。这种机制既维持了染色体数目稳定，又因双亲染色体重新组合带来了后代的多样性。' },
      { type: 'table', headers: ['比较项目', '精子形成', '卵细胞形成'], rows: [
        ['细胞质分裂', '均等分裂', '不均等分裂'],
        ['产生细胞数', '4 个精子', '1 个卵细胞 + 3 个极体'],
        ['是否变形', '需要变形', '不需变形']
      ] },
      { type: 'paragraph', text: '小结：减数分裂和受精作用共同完成了「染色体数目减半—恢复」的循环，是遗传定律的细胞学基础，也是生物有性生殖和遗传多样性的根本保证。掌握分裂图像、异常成因与受精意义，是本章复习的核心落点。' }
    ],
    exercises: [
      { type: 'choice', question: '卵细胞形成过程中细胞质分裂的方式是', options: ['均等分裂', '不均等分裂', '先均等后不均等', '无规律分裂'], answer: '不均等分裂', explanation: '卵细胞形成时细胞质不均等分裂，使一个大的次级卵母细胞保留大量细胞质成为卵细胞，其余小的极体退化，保证卵细胞营养充足。' },
      { type: 'choice', question: '一个卵原细胞经过减数分裂最终形成', options: ['1个卵细胞+3个极体', '4个卵细胞', '2个卵细胞', '1个卵细胞+1个极体'], answer: '1个卵细胞+3个极体', explanation: '卵原细胞经减Ⅰ形成一个次级卵母细胞和一个第一极体，减Ⅱ后次级卵母细胞形成卵细胞和第二极体，第一极体再分裂成两个极体，共 1 个卵细胞和 3 个极体。' },
      { type: 'choice', question: '21三体综合征（唐氏综合征）最可能的成因是', options: ['减数分裂异常导致多一条21号染色体', '有丝分裂异常', '基因突变', '基因重组'], answer: '减数分裂异常导致多一条21号染色体', explanation: '21 三体综合征患者比正常人多一条 21 号染色体，通常是减数分裂时 21 号同源染色体或姐妹染色单体未能正常分离，产生了多一条 21 号的配子。' },
      { type: 'fill', question: '受精作用使受精卵中的染色体数目_____（恢复到体细胞水平）。', answer: '恢复恒定', explanation: '精子和卵细胞各含 n 条染色体，受精后合子恢复为 2n，使前后代染色体数目保持恒定，这是减数分裂与受精作用配合的结果。' },
      { type: 'fill', question: '减数分裂使生殖细胞中的染色体数目变为体细胞数目的_____。', answer: '一半', explanation: '减数分裂染色体复制一次而细胞连续分裂两次，产生的精子或卵细胞染色体数目是体细胞的一半，即由 2n 变为 n。' }
    ]
  });
})();
