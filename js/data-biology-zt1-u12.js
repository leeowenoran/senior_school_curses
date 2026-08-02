/* 生物学 · 高三复习 · 分子与细胞 · 第4章 · 课时：第2节 主动运输与胞吞、胞吐 */
(function () {
  var v = gzGetVolume('biology', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u12',
    name: '第2节 主动运输与胞吞、胞吐',
    chapter: '分子与细胞 · 第4章 细胞的物质输入和输出',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '第2节 主动运输与胞吞、胞吐' },
      { type: 'paragraph', text: '细胞有时需要逆着浓度梯度搬运物质，就像逆水行舟，必须自己出力。主动运输就是细胞花钱（消耗能量）把物质从低浓度一侧运到高浓度一侧的过程；而大分子物质则干脆用膜把自己包起来，以胞吞、胞吐的方式进出细胞。' },
      { type: 'keypoint', text: '主动运输特点：需要载体蛋白、需要消耗能量、逆浓度梯度运输（低浓度→高浓度）。它是细胞按照自身需要选择性吸收或排出物质的关键方式。' },
      { type: 'list', items: [
        '需要载体蛋白（多为载体蛋白，具特异性）。',
        '需要消耗细胞代谢产生的能量（主要由 ATP 提供）。',
        '逆浓度梯度运输（低浓度一侧→高浓度一侧）。'
      ] },
      { type: 'list', items: [
        '离子：Na⁺、K⁺、Ca²⁺ 等离子逆浓度跨膜。',
        '小分子有机物：氨基酸、葡萄糖进入小肠上皮细胞。',
        '意义：保证细胞按需吸收营养、排出废物，维持细胞内环境稳定。'
      ] },
      { type: 'svg', caption: '主动运输逆浓度梯度进行，需载体蛋白协助并消耗能量（ATP）。', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg">\n<rect width="680" height="320" fill="#eef6e4"/>\n<text x="340" y="32" text-anchor="middle" font-size="19" fill="#3f7d1e" font-weight="bold">图1：主动运输</text>\n<rect x="60" y="80" width="220" height="180" fill="#d6eac4" stroke="#3f7d1e"/>\n<rect x="400" y="80" width="220" height="180" fill="#d6eac4" stroke="#3f7d1e"/>\n<line x1="280" y1="80" x2="280" y2="260" stroke="#3f7d1e" stroke-width="4"/>\n<text x="170" y="130" text-anchor="middle" font-size="13" fill="#2e3a22">低浓度侧</text>\n<text x="510" y="130" text-anchor="middle" font-size="13" fill="#2e3a22">高浓度侧</text>\n<rect x="270" y="160" width="20" height="40" fill="#5aa832"/>\n<polygon points="450,170 300,158 300,182" fill="#3f7d1e"/>\n<text x="375" y="140" text-anchor="middle" font-size="12" fill="#5aa832">耗能</text>\n<text x="375" y="220" text-anchor="middle" font-size="12" fill="#2e3a22">逆浓度梯度</text>\n</svg>' },
      { type: 'warn', text: '易错辨析：自由扩散和协助扩散都是顺浓度、不耗能；主动运输是逆浓度、耗能。判断时先问是否耗能——耗能的一定是主动运输。另外葡萄糖进红细胞是协助扩散，进小肠上皮细胞才是主动运输，两者运输方向虽然都从高到低或低到高要结合具体情境，但红细胞明确不耗能。' },
      { type: 'heading', text: '胞吞和胞吐' },
      { type: 'paragraph', text: '胞吞是大分子或颗粒物质附着在细胞膜表面，细胞膜内陷把它包裹成小囊泡，送进细胞内部，像用保鲜膜把东西包进来。胞吐则是细胞内的囊泡移动到细胞膜，与膜融合把内容物排到细胞外，像把包裹从窗口递出去。' },
      { type: 'paragraph', text: '胞吞和胞吐主要运输大分子物质（如蛋白质、多糖）或颗粒（如细菌、残渣）。它们没有穿过磷脂双分子层，而是依赖细胞膜的流动性，把膜的一部分变成囊泡，整个过程消耗能量。' },
      { type: 'list', items: [
        '运输对象：大分子物质或颗粒性物质。',
        '结构基础：依赖细胞膜的流动性。',
        '能量：需要消耗细胞代谢产生的能量。',
        '实例：白细胞吞噬细菌、分泌蛋白释放、神经递质释放。'
      ] },
      { type: 'example', text: '典型例题：胰岛 B 细胞分泌胰岛素的方式是（ ）。A 自由扩散 B 协助扩散 C 主动运输 D 胞吐。思路点拨：胰岛素是蛋白质类大分子，无法通过跨膜方式运出，只能由囊泡与细胞膜融合排出，属于胞吐，因此选 D。' },
      { type: 'svg', caption: '胞吞时细胞膜内陷形成囊泡，胞吐时囊泡与细胞膜融合释放内容物。', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg">\n<rect width="680" height="300" fill="#eef6e4"/>\n<text x="340" y="30" text-anchor="middle" font-size="19" fill="#3f7d1e" font-weight="bold">图2：胞吞与胞吐</text>\n<rect x="60" y="100" width="240" height="120" fill="#d6eac4" stroke="#3f7d1e"/>\n<rect x="380" y="100" width="240" height="120" fill="#d6eac4" stroke="#3f7d1e"/>\n<circle cx="150" cy="160" r="22" fill="#5aa832"/>\n<circle cx="490" cy="160" r="22" fill="#5aa832"/>\n<path d="M180,160 q40,40 80,0" stroke="#3f7d1e" stroke-width="3" fill="none"/>\n<path d="M460,160 q-40,40 -80,0" stroke="#3f7d1e" stroke-width="3" fill="none"/>\n<polygon points="250,165 285,158 285,172" fill="#3f7d1e"/>\n<text x="150" y="250" text-anchor="middle" font-size="13" fill="#2e3a22">胞吞：膜内陷包入</text>\n<text x="500" y="250" text-anchor="middle" font-size="13" fill="#2e3a22">胞吐：囊泡融合排出</text>\n</svg>' },
      { type: 'table', headers: ['运输方式', '载体蛋白', '能量', '运输方向', '实例'], rows: [
        ['自由扩散', '不需要', '不消耗', '高浓度→低浓度', '水、气体、脂溶性小分子'],
        ['协助扩散', '需要', '不消耗', '高浓度→低浓度', '葡萄糖进入红细胞'],
        ['主动运输', '需要', '消耗', '低浓度→高浓度', '离子、氨基酸、葡萄糖进小肠上皮细胞']
      ] },
      { type: 'tip', text: '高频考点：跨膜方式三步判断法——第一步看是否耗能（耗能→主动运输）；第二步看方向（逆浓度必为主动运输）；第三步看物质大小（大分子靠胞吞胞吐，依赖膜流动性）。葡萄糖的运输方式要区分红细胞与小肠上皮细胞。' },
      { type: 'svg', caption: '跨膜运输总览：被动运输（自由扩散、协助扩散）与主动运输均穿膜，胞吞胞吐以囊泡形式过膜。', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg">\n<rect width="680" height="280" fill="#eef6e4"/>\n<text x="340" y="30" text-anchor="middle" font-size="19" fill="#3f7d1e" font-weight="bold">图3：跨膜运输方式总览</text>\n<rect x="70" y="80" width="180" height="150" fill="#d6eac4" stroke="#3f7d1e"/>\n<rect x="270" y="80" width="160" height="150" fill="#d6eac4" stroke="#3f7d1e"/>\n<rect x="450" y="80" width="160" height="150" fill="#d6eac4" stroke="#3f7d1e"/>\n<text x="160" y="120" text-anchor="middle" font-size="13" fill="#2e3a22">被动运输</text>\n<text x="160" y="145" text-anchor="middle" font-size="12" fill="#2e3a22">自由+协助</text>\n<text x="350" y="120" text-anchor="middle" font-size="13" fill="#2e3a22">主动运输</text>\n<text x="350" y="145" text-anchor="middle" font-size="12" fill="#2e3a22">逆浓度耗能</text>\n<text x="530" y="120" text-anchor="middle" font-size="13" fill="#2e3a22">胞吞胞吐</text>\n<text x="530" y="145" text-anchor="middle" font-size="12" fill="#2e3a22">大分子囊泡</text>\n<polygon points="250,155 262,148 262,162" fill="#3f7d1e"/>\n<polygon points="430,155 442,148 442,162" fill="#3f7d1e"/>\n</svg>' },
      { type: 'keypoint', text: '本节核心：主动运输是逆浓度、需载体、耗能，体现细胞的选择性；胞吞胞吐运输大分子，依赖膜流动性并耗能。三种跨膜方式在载体、能量、方向上各不相同，比较表必须背熟。' },
      { type: 'paragraph', text: '小结：细胞膜的选择透过性，既靠被动运输顺浓度完成日常交换，又靠主动运输逆浓度精准调控，还靠胞吞胞吐处理大分子。多种方式配合，保证了细胞生命活动的有序进行。' }
    ],
    exercises: [
      { type: 'choice', question: '主动运输的特点是（ ）。', options: ['需载体、需能量、低浓度→高浓度', '不需载体、不耗能、高浓度→低浓度', '需载体、不耗能、高浓度→低浓度', '不需载体、需能量、低浓度→高浓度'], answer: '需载体、需能量、低浓度→高浓度', explanation: '主动运输是细胞逆浓度梯度运输物质的方式，需要载体蛋白协助，并且要消耗细胞代谢释放的能量（主要是 ATP）。因此正确描述是需载体、需能量、低浓度运到高浓度。' },
      { type: 'choice', question: '葡萄糖进入小肠上皮细胞的方式是（ ）。', options: ['自由扩散', '协助扩散', '主动运输', '胞吐'], answer: '主动运输', explanation: '葡萄糖进入小肠上皮细胞是逆浓度梯度、需要载体并消耗能量的过程，属于主动运输。注意它与葡萄糖进入红细胞不同，后者是顺浓度、不耗能的协助扩散，审题时要分清细胞类型。' },
      { type: 'choice', question: '大分子蛋白质分泌到细胞外，主要依靠（ ）。', options: ['细胞膜的流动性', '自由扩散', '协助扩散', '载体的数量'], answer: '细胞膜的流动性', explanation: '大分子蛋白质不能通过磷脂双分子层，需先被囊泡包裹，再与细胞膜融合排出细胞，这就是胞吐，其结构基础是细胞膜的流动性，并且整个过程需要消耗能量。因此选细胞膜的流动性。' },
      { type: 'fill', question: '主动运输中物质从低浓度一侧运输到高浓度一侧，这种运输方向可概括为______。', answer: '逆浓度梯度（低浓度→高浓度）', explanation: '主动运输和被动运输的根本区别在于方向：被动运输顺浓度梯度，主动运输逆浓度梯度，即物质从低浓度一侧被运到高浓度一侧，逆着浓度差进行，所以应填逆浓度梯度。' },
      { type: 'fill', question: '白细胞吞噬细菌、分泌蛋白释放到细胞外，这类大分子物质进出细胞的方式分别是______。', answer: '胞吞和胞吐', explanation: '大分子或颗粒性物质无法穿过磷脂双分子层，只能以囊泡形式进出细胞：外界颗粒进入细胞为胞吞，细胞内物质排出为胞吐。两者都依赖细胞膜的流动性并消耗能量。' }
    ]
  });
})();
