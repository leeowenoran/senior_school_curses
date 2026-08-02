/* 生物学 · 高三复习 · 分子与细胞 · 第1章 · 课时：第2节 细胞的多样性和统一性 */
(function () {
  var v = gzGetVolume('biology', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u2',
    name: '第2节 细胞的多样性和统一性',
    chapter: '分子与细胞 · 第1章 走近细胞',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、显微镜的使用' },
      { type: 'paragraph', text: '显微镜是观察细胞世界的"眼睛"。我们用它把肉眼看不见的微观结构放大，才能研究细胞的多样性和统一性。理解显微镜的成像规律，是高中实验和高考实验题的基础。' },
      { type: 'keypoint', text: '显微镜的放大倍数 = 目镜放大倍数 × 物镜放大倍数。例如目镜10倍、物镜40倍，总放大倍数为400倍。放大倍数越大，看到的细胞越少、越大，视野越暗。' },
      { type: 'list', items: [
        '成像特点：显微镜下成的像是倒立的像，即上下、左右都颠倒。',
        '物像偏离哪一侧，玻片就向哪一侧移动（偏哪移哪），因为像与实物运动方向相反。',
        '放大倍数越大，视野中细胞数目越少、体积越大、视野越暗。'
      ] },
      { type: 'paragraph', text: '高倍镜的使用可概括为四步：先在低倍镜下"找"到目标并把目标移到视野中央；再"移"动玻片使目标居中；然后转动转换器"转"换高倍物镜；最后调节细准焦螺旋和光圈"调"清晰。' },
      { type: 'list', items: [
        '第一步 找：在低倍镜下找到要观察的目标。',
        '第二步 移：将目标移到视野正中央（否则换高倍后可能找不到）。',
        '第三步 转：转动转换器，换上高倍物镜。',
        '第四步 调：只调节细准焦螺旋和光圈，使物像清晰。'
      ] },
      { type: 'warn', text: '易错辨析：① 换用高倍镜后绝对不能转动粗准焦螺旋，否则容易压碎玻片、损坏镜头，只能调细准焦螺旋；② 物像在左上方时，玻片应向左上方移动，而不是向右下方；③ 放大倍数指的是长度或宽度的放大，不是面积。' },
      { type: 'heading', text: '二、原核细胞与真核细胞' },
      { type: 'keypoint', text: '原核细胞与真核细胞的本质区别：有无以核膜为界限的细胞核。真核细胞有核膜包被的细胞核，原核细胞没有核膜，其DNA集中在称为拟核的区域。' },
      { type: 'table', headers: ['比较项目', '原核细胞', '真核细胞'],
        rows: [
          ['细胞核', '无核膜，有拟核', '有核膜包被的细胞核'],
          ['DNA形式', '环状DNA，位于拟核', '线性DNA，与蛋白质结合成染色体'],
          ['细胞器', '只有核糖体', '有核糖体及多种细胞器'],
          ['细胞壁', '多数有（肽聚糖）', '植物细胞有（纤维素），动物无'],
          ['代表生物', '细菌、蓝藻（蓝细菌）', '动物、植物、真菌']
        ] },
      { type: 'list', items: [
        '都有细胞膜、细胞质（细胞质中都有核糖体）。',
        '都以DNA作为遗传物质，共用一套遗传密码。',
        '都具有核糖体，都能进行蛋白质合成。'
      ] },
      { type: 'paragraph', text: '原核生物的代表：各种细菌（如大肠杆菌、乳酸菌）、蓝藻（又称蓝细菌，如念珠藻、颤藻）。真核生物的代表：动物、植物以及真菌（如酵母菌、蘑菇、霉菌）。' },
      { type: 'paragraph', text: '蓝藻是一类特殊的原核生物，虽然没有叶绿体，但含有叶绿素和藻蓝素，能进行光合作用，属于自养生物。这点在高考中常作为"原核生物也能进行光合作用"的反例出现。' },
      { type: 'warn', text: '易错辨析：① 名称带"菌"字的不一定都是细菌，如酵母菌、霉菌是真核生物；带"藻"字的也不都是原核，如衣藻、黑藻是真核，只有蓝藻（蓝细菌）是原核；② 原核生物没有染色体，只有环状DNA；③ 原核生物唯一共有的细胞器是核糖体。' },
      { type: 'example', text: '例题（高考风格）：下列关于原核细胞与真核细胞的叙述，错误的是（ ）。A. 原核细胞没有核膜 B. 原核细胞只有核糖体一种细胞器 C. 蓝藻有叶绿体因而能光合作用 D. 两者都以DNA为遗传物质。思路：蓝藻是原核生物，没有叶绿体，它靠叶绿素和藻蓝素进行光合作用，故C错误。' },
      { type: 'tip', text: '高频考点：① 显微镜成像"上下左右颠倒、偏哪移哪"几乎必考；② 高倍镜只能调细准焦螺旋；③ 原核与真核的本质区别（核膜）及DNA形式、细胞器差异；④ 快速判断原核/真核的"菌""藻"规律。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="20" y="34" font-size="20" fill="#3f7d1e" font-weight="bold">显微镜成像上下左右颠倒</text><rect x="60" y="80" width="120" height="120" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="120" y="150" font-size="48" fill="#2e3a22" text-anchor="middle">b</text><text x="120" y="230" font-size="14" fill="#2e3a22" text-anchor="middle">玻片上的实物</text><polygon points="240,110 300,140 240,170" fill="#3f7d1e"/><rect x="360" y="80" width="120" height="120" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="420" y="150" font-size="48" fill="#2e3a22" text-anchor="middle">q</text><text x="420" y="230" font-size="14" fill="#2e3a22" text-anchor="middle">显微镜下看到的像</text><text x="340" y="280" font-size="14" fill="#3f7d1e" text-anchor="middle">像与实物上下、左右均颠倒</text></svg>', caption: '显微镜成倒立放大的像，实物b在镜中看成q，移动方向相反。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef6e4"/><text x="20" y="34" font-size="20" fill="#3f7d1e" font-weight="bold">高倍镜使用四步</text><rect x="30" y="80" width="120" height="60" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="90" y="116" font-size="18" fill="#2e3a22" text-anchor="middle">①找</text><rect x="200" y="80" width="120" height="60" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="260" y="116" font-size="18" fill="#2e3a22" text-anchor="middle">②移</text><rect x="370" y="80" width="120" height="60" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="430" y="116" font-size="18" fill="#2e3a22" text-anchor="middle">③转</text><rect x="540" y="80" width="120" height="60" rx="8" fill="#5aa832" stroke="#3f7d1e"/><text x="600" y="116" font-size="18" fill="#2e3a22" text-anchor="middle">④调</text><polygon points="150,108 195,110 195,100" fill="#3f7d1e"/><polygon points="320,108 365,110 365,100" fill="#3f7d1e"/><polygon points="490,108 535,110 535,100" fill="#3f7d1e"/><text x="340" y="190" font-size="14" fill="#2e3a22" text-anchor="middle">找目标→移到中央→转高倍物镜→调细准焦螺旋</text><text x="340" y="220" font-size="14" fill="#3f7d1e" text-anchor="middle">高倍镜下只能调细准焦螺旋，不转粗准焦螺旋</text></svg>', caption: '高倍镜使用顺序为找、移、转、调，换镜后只调细准焦螺旋。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="20" y="34" font-size="20" fill="#3f7d1e" font-weight="bold">原核细胞与真核细胞对比</text><rect x="40" y="70" width="270" height="200" rx="10" fill="#d6eac4" stroke="#3f7d1e"/><text x="175" y="105" font-size="17" fill="#2e3a22" text-anchor="middle">原核细胞</text><text x="175" y="140" font-size="14" fill="#2e3a22" text-anchor="middle">无核膜（拟核）</text><text x="175" y="170" font-size="14" fill="#2e3a22" text-anchor="middle">环状DNA</text><text x="175" y="200" font-size="14" fill="#2e3a22" text-anchor="middle">只有核糖体</text><text x="175" y="230" font-size="14" fill="#2e3a22" text-anchor="middle">细菌、蓝藻</text><rect x="370" y="70" width="270" height="200" rx="10" fill="#d6eac4" stroke="#3f7d1e"/><text x="505" y="105" font-size="17" fill="#2e3a22" text-anchor="middle">真核细胞</text><text x="505" y="140" font-size="14" fill="#2e3a22" text-anchor="middle">有核膜包被</text><text x="505" y="170" font-size="14" fill="#2e3a22" text-anchor="middle">线性DNA（染色体）</text><text x="505" y="200" font-size="14" fill="#2e3a22" text-anchor="middle">多种细胞器</text><text x="505" y="230" font-size="14" fill="#2e3a22" text-anchor="middle">动植物、真菌</text><polygon points="320,150 350,150 340,140 350,150 340,160" fill="#3f7d1e"/><text x="335" y="135" font-size="13" fill="#3f7d1e" text-anchor="middle">本质区别</text></svg>', caption: '两者本质区别是有无核膜包被的细胞核，其余为结构差异。' },
      { type: 'paragraph', text: '小结：本节把"多样性"和"统一性"串在一起——细胞形态千差万别（多样），但都用细胞膜、细胞质、核糖体、DNA（统一）。显微镜规律和高倍镜操作是实验题常客，原核真核的区分是选择题必考。' }
    ],
    exercises: [
      { type: 'choice', question: '显微镜的总放大倍数等于（ ）。', options: ['目镜倍数+物镜倍数', '目镜倍数×物镜倍数', '目镜倍数÷物镜倍数', '物镜倍数−目镜倍数'], answer: '目镜倍数×物镜倍数', explanation: '显微镜的总放大倍数等于目镜放大倍数与物镜放大倍数的乘积；放大倍数越大，视野中细胞数目越少、个体越大、视野越暗。' },
      { type: 'choice', question: '用显微镜观察时，物像位于视野左上方，应将玻片移向（ ）。', options: ['左上方', '右下方', '左下方', '右上方'], answer: '左上方', explanation: '显微镜成倒立的像，物像偏离哪一侧，玻片就向哪一侧移动；物像在左上方，说明实物在右下方，故玻片应向左上方移动才能把目标移到视野中央。' },
      { type: 'choice', question: '原核细胞与真核细胞最根本的区别是（ ）。', options: ['有无细胞壁', '有无核膜包被的细胞核', '有无核糖体', '有无DNA'], answer: '有无核膜包被的细胞核', explanation: '原核细胞与真核细胞最本质的区别是有无以核膜为界限的细胞核；原核细胞无核膜、有拟核，真核细胞有核膜包被的细胞核，这是两者分类的根本依据。' },
      { type: 'fill', question: '换用高倍物镜后，只能调节______螺旋使物像清晰（填"细准焦"或"粗准焦"）。', answer: '细准焦', explanation: '使用高倍镜时，由于物镜与玻片距离很近，转动粗准焦螺旋容易压碎玻片并损坏镜头，因此只能调节细准焦螺旋来微调清晰度。' },
      { type: 'fill', question: '细菌、蓝藻（蓝细菌）都属于______细胞（填"原核"或"真核"）。', answer: '原核', explanation: '细菌和蓝藻都没有核膜包被的细胞核，DNA以环状形式存在于拟核中，只有核糖体一种细胞器，因此都属于原核细胞。' }
    ]
  });
})();
