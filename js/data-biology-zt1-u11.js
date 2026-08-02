/* 生物学 · 高三复习 · 分子与细胞 · 第4章 · 课时：第1节 被动运输 */
(function () {
  var v = gzGetVolume('biology', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u11',
    name: '第1节 被动运输',
    chapter: '分子与细胞 · 第4章 细胞的物质输入和输出',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '第1节 被动运输' },
      { type: 'paragraph', text: '细胞就像一个小区，物质进出细胞需要门卫把关。被动运输是一类不消耗细胞能量的运输方式，物质顺着浓度梯度（从高浓度一侧向低浓度一侧）自己扩散过去。被动运输分为自由扩散和协助扩散两种。' },
      { type: 'keypoint', text: '被动运输的共同特点：物质都是顺浓度梯度（高浓度→低浓度）运输，都不消耗细胞代谢产生的能量。两者的区别只在于是否需要载体蛋白帮忙。' },
      { type: 'svg', caption: '渗透作用需要半透膜和两侧浓度差，水从低浓度一侧流向高浓度一侧。', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg">\n<rect width="680" height="320" fill="#eef6e4"/>\n<text x="340" y="32" text-anchor="middle" font-size="19" fill="#3f7d1e" font-weight="bold">图1：渗透作用示意图</text>\n<rect x="150" y="70" width="120" height="180" fill="#d6eac4" stroke="#3f7d1e"/>\n<rect x="410" y="70" width="120" height="180" fill="#d6eac4" stroke="#3f7d1e"/>\n<line x1="340" y1="70" x2="340" y2="250" stroke="#3f7d1e" stroke-width="4"/>\n<text x="210" y="160" text-anchor="middle" font-size="14" fill="#2e3a22">低浓度侧</text>\n<text x="470" y="160" text-anchor="middle" font-size="14" fill="#2e3a22">高浓度侧</text>\n<text x="210" y="185" text-anchor="middle" font-size="13" fill="#2e3a22">水多</text>\n<text x="470" y="185" text-anchor="middle" font-size="13" fill="#2e3a22">水少</text>\n<text x="340" y="150" text-anchor="middle" font-size="12" fill="#5aa832">半透膜</text>\n<polygon points="250,140 322,123 322,157" fill="#3f7d1e"/>\n<text x="268" y="115" text-anchor="middle" font-size="12" fill="#2e3a22">水</text>\n</svg>' },
      { type: 'paragraph', text: '渗透作用是一种特殊的扩散，专指水分子（或其他溶剂分子）通过半透膜，从低浓度溶液一侧向高浓度溶液一侧扩散的现象。注意：这里说的低浓度、高浓度指的是溶液浓度，溶液浓度越低，水的相对含量越高。' },
      { type: 'list', items: [
        '具有半透膜（允许某些小分子通过、阻挡大分子的薄膜）。',
        '半透膜两侧存在浓度差（即膜两侧溶液的浓度不相等）。'
      ] },
      { type: 'keypoint', text: '渗透方向：水从相对含量高的（即溶液浓度低的）一侧，向相对含量低的（即溶液浓度高的）一侧流动。记忆口诀：水往高浓度走。' },
      { type: 'heading', text: '自由扩散' },
      { type: 'paragraph', text: '自由扩散就像人直接从敞开的大门走出去，不需要任何帮手。一些很小的分子可以直接穿过磷脂双分子层，从高浓度一侧自己扩散到低浓度一侧。' },
      { type: 'list', items: [
        '不需要载体蛋白协助。',
        '不消耗细胞代谢产生的能量。',
        '顺浓度梯度运输（高浓度→低浓度）。'
      ] },
      { type: 'list', items: [
        '气体：氧气、二氧化碳。',
        '水（小分子，可自由穿过）。',
        '脂溶性小分子：甘油、乙醇、苯等。'
      ] },
      { type: 'example', text: '典型例题：下列物质进入细胞的方式属于自由扩散的是（ ）。A 葡萄糖 B 氨基酸 C 氧气 D 钾离子。思路点拨：气体和脂溶性小分子以自由扩散方式进出细胞，葡萄糖进红细胞是协助扩散，氨基酸和钾离子一般为主动运输，因此选 C。' },
      { type: 'warn', text: '易错辨析：水既能自由扩散，也能通过水通道蛋白进行协助扩散，教材把水列为自由扩散实例，考试照此判断即可。葡萄糖进入红细胞是协助扩散，但葡萄糖进入小肠上皮细胞是主动运输，二者不可混为一谈。' },
      { type: 'heading', text: '协助扩散' },
      { type: 'paragraph', text: '协助扩散好比小区门卫帮老人提东西出门：物质仍是自己顺浓度走，但需要载体蛋白这个帮手搭把手、开个专用通道，才能顺利通过细胞膜。' },
      { type: 'list', items: [
        '需要载体蛋白（或通道蛋白）协助。',
        '不消耗细胞代谢产生的能量。',
        '顺浓度梯度运输（高浓度→低浓度）。'
      ] },
      { type: 'svg', caption: '自由扩散无载体、直接穿过；协助扩散需载体蛋白（通道）协助，二者都不耗能。', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg">\n<rect width="680" height="300" fill="#eef6e4"/>\n<text x="340" y="30" text-anchor="middle" font-size="19" fill="#3f7d1e" font-weight="bold">图2：自由扩散与协助扩散对比</text>\n<rect x="60" y="70" width="240" height="180" fill="#d6eac4" stroke="#3f7d1e"/>\n<rect x="380" y="70" width="240" height="180" fill="#d6eac4" stroke="#3f7d1e"/>\n<line x1="60" y1="160" x2="300" y2="160" stroke="#3f7d1e" stroke-width="4"/>\n<line x1="380" y1="160" x2="620" y2="160" stroke="#3f7d1e" stroke-width="4"/>\n<rect x="490" y="140" width="22" height="40" fill="#5aa832"/>\n<text x="180" y="100" text-anchor="middle" font-size="14" fill="#2e3a22">自由扩散</text>\n<text x="500" y="100" text-anchor="middle" font-size="14" fill="#2e3a22">协助扩散</text>\n<polygon points="120,160 230,150 230,170" fill="#3f7d1e"/>\n<polygon points="430,160 540,150 540,170" fill="#3f7d1e"/>\n<text x="180" y="240" text-anchor="middle" font-size="12" fill="#2e3a22">无载体蛋白</text>\n<text x="500" y="240" text-anchor="middle" font-size="12" fill="#2e3a22">有载体（通道）</text>\n</svg>' },
      { type: 'table', headers: ['比较项目', '自由扩散', '协助扩散'], rows: [
        ['运输方向', '高浓度→低浓度', '高浓度→低浓度'],
        ['是否需载体', '不需要', '需要'],
        ['是否耗能', '不消耗', '不消耗'],
        ['实例', '水、气体、脂溶性小分子', '葡萄糖进入红细胞']
      ] },
      { type: 'tip', text: '高频考点：判断跨膜方式先看能量——消耗能量的是主动运输；不耗能时再看载体——无载体是自由扩散，有载体是协助扩散。葡萄糖进入红细胞是协助扩散的经典例子，务必记牢。' },
      { type: 'svg', caption: '被动运输总览：物质均顺浓度梯度移动，自由扩散直穿、协助扩散借载体。', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg">\n<rect width="680" height="260" fill="#eef6e4"/>\n<text x="340" y="30" text-anchor="middle" font-size="19" fill="#3f7d1e" font-weight="bold">图3：被动运输总览</text>\n<rect x="90" y="90" width="120" height="80" fill="#d6eac4" stroke="#3f7d1e"/>\n<rect x="470" y="90" width="120" height="80" fill="#d6eac4" stroke="#3f7d1e"/>\n<text x="150" y="135" text-anchor="middle" font-size="13" fill="#2e3a22">高浓度侧</text>\n<text x="530" y="135" text-anchor="middle" font-size="13" fill="#2e3a22">低浓度侧</text>\n<polygon points="220,130 450,118 450,142" fill="#3f7d1e"/>\n<text x="335" y="105" text-anchor="middle" font-size="13" fill="#5aa832">顺浓度梯度</text>\n<text x="335" y="180" text-anchor="middle" font-size="13" fill="#2e3a22">被动运输：自由扩散 / 协助扩散</text>\n</svg>' },
      { type: 'keypoint', text: '本节核心：被动运输 = 顺浓度梯度 + 不耗能；自由扩散无载体，协助扩散有载体；渗透作用是水分子通过半透膜的扩散，条件为半透膜加浓度差。' },
      { type: 'paragraph', text: '小结：被动运输让细胞在不花钱的情况下完成物质交换，是维持细胞内外物质平衡的重要方式。高浓度一侧的物质自发流向低浓度一侧，直到两侧趋于平衡。' }
    ],
    exercises: [
      { type: 'choice', question: '渗透作用发生的两个必备条件是（ ）。', options: ['半透膜和浓度差', '细胞壁和浓度差', '半透膜和能量', '载体蛋白和浓度差'], answer: '半透膜和浓度差', explanation: '渗透作用是指水分子通过半透膜的扩散，必须同时具备两个条件：一是具有半透膜，二是半透膜两侧存在浓度差。缺少半透膜或浓度差，渗透作用都不能发生，因此选半透膜和浓度差。' },
      { type: 'choice', question: '下列物质进入细胞的方式属于自由扩散的是（ ）。', options: ['葡萄糖进入红细胞', '氧气进入细胞', '氨基酸进入小肠上皮细胞', '钾离子进入细胞'], answer: '氧气进入细胞', explanation: '自由扩散不需载体、不耗能，物质顺浓度梯度直接穿过磷脂双分子层，典型实例是气体（氧气、二氧化碳）、水和脂溶性小分子。葡萄糖进红细胞是协助扩散，氨基酸和钾离子一般为主动运输，所以选氧气进入细胞。' },
      { type: 'choice', question: '协助扩散的特点是（ ）。', options: ['需要载体、不耗能、顺浓度梯度', '不需载体、耗能、逆浓度梯度', '需要载体、耗能、逆浓度梯度', '不需载体、不耗能、逆浓度梯度'], answer: '需要载体、不耗能、顺浓度梯度', explanation: '协助扩散是被动运输的一种，物质顺浓度梯度（高浓度到低浓度）运输，不消耗能量，但需要载体蛋白或通道蛋白协助。因此正确描述为需要载体、不耗能、顺浓度梯度。' },
      { type: 'fill', question: '水分子通过半透膜，从溶液浓度低（水相对含量高）的一侧向______的一侧扩散。', answer: '溶液浓度高（水相对含量低）', explanation: '渗透方向取决于水的相对含量：水总是从相对含量高的一侧流向相对含量低的一侧。溶液浓度越低，水的相对含量越高，所以水从低浓度溶液一侧流向高浓度溶液一侧，即流向水相对含量低的一侧。' },
      { type: 'fill', question: '葡萄糖进入成熟的红细胞，依靠载体蛋白、不消耗能量、顺浓度梯度，这种方式称为______。', answer: '协助扩散', explanation: '葡萄糖进入成熟红细胞时，不消耗能量，顺浓度梯度运输，但需要载体蛋白协助，这符合协助扩散的定义。注意它不同于葡萄糖进入小肠上皮细胞，后者是消耗能量的主动运输。' }
    ]
  });
})();
