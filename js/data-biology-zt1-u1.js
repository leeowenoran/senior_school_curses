/* 生物学 · 高三复习 · 分子与细胞 · 第1章 · 课时：第1节 细胞是生命活动的基本单位 */
(function () {
  var v = gzGetVolume('biology', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u1',
    name: '第1节 细胞是生命活动的基本单位',
    chapter: '分子与细胞 · 第1章 走近细胞',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、细胞学说——生物学的基石' },
      { type: 'paragraph', text: '细胞学说与能量守恒与转化定律、达尔文的进化论并称为十九世纪自然科学的三大发现。它第一次把千姿百态的动物和植物统一到"细胞"这个共同基础上，告诉人们：看似完全不同的动植物，其实都是由细胞构成的。可以把细胞想象成盖房子的砖块，无论盖出的是平房还是高楼，砖块本身是一样的。' },
      { type: 'keypoint', text: '细胞学说三大要点：① 动植物都由细胞发育而来，并由细胞和细胞产物所构成；② 细胞是相对独立的单位，既有它自己的生命，又对与其他细胞共同组成的整体生命起作用；③ 新细胞是由老细胞分裂产生的。' },
      { type: 'list', items: [
        '施莱登（植物学家）：1838年提出植物由细胞构成。',
        '施旺（动物学家）：1839年提出动物也由细胞构成，两人共同建立细胞学说。',
        '虎克：1665年用显微镜观察软木薄片，第一次给"细胞"命名（他看到的其实是死细胞的细胞壁）。',
        '列文虎克：1674年用自制显微镜最早观察到活细胞（细菌、红细胞等）。',
        '魏尔肖：1858年提出"新细胞由老细胞分裂产生"，修正并完善了细胞学说。'
      ] },
      { type: 'paragraph', text: '细胞学说的意义：揭示了动物和植物的统一性，从而阐明了生物界的统一性；它打破了过去把动植物截然分开的观念，为达尔文的进化论奠定了细胞学基础。' },
      { type: 'warn', text: '易错辨析：虎克只是"命名"了细胞，他看到的是死细胞的细胞壁，并不是真正的活细胞结构；真正最早观察活细胞的是列文虎克。考试常把两人混淆，记住"命名看虎克，活细胞看列文虎克"。' },
      { type: 'heading', text: '二、生命活动离不开细胞' },
      { type: 'paragraph', text: '无论是微小的细菌，还是复杂的人体，一切生命活动都离不开细胞。细胞是生命活动的基本单位，没有细胞就没有完整的生命。' },
      { type: 'list', items: [
        '病毒：没有细胞结构，由蛋白质外壳和内部核酸组成，必须寄生在活细胞内才能繁殖，离开细胞就不能表现出生命现象。',
        '单细胞生物（如草履虫、细菌、酵母菌）：一个细胞就能独立完成摄食、呼吸、繁殖等全部生命活动。',
        '多细胞生物（如人、植物）：依赖各种分化的细胞密切合作，共同完成复杂的生命活动，例如缩手反射需要神经细胞和肌肉细胞配合。'
      ] },
      { type: 'paragraph', text: '可以这样理解：单细胞生物像一个人包揽全部家务；多细胞生物则像一个分工明确的公司，有人做饭、有人扫地、有人管账，各司其职。' },
      { type: 'heading', text: '三、生命系统的结构层次' },
      { type: 'paragraph', text: '生命系统从微观到宏观可以分成若干层次，就像俄罗斯套娃一样一层套一层。从最小的细胞，一直大到覆盖整个地球的生物圈。' },
      { type: 'table', headers: ['层次', '含义举例', '说明'],
        rows: [
          ['细胞', '心肌细胞', '最基本、最小的生命系统'],
          ['组织', '肌肉组织', '形态相似、功能相同的细胞群'],
          ['器官', '心脏', '不同组织按一定次序结合'],
          ['系统', '循环系统', '植物没有这一层次'],
          ['个体', '一个人', '由系统或器官构成完整个体'],
          ['种群', '一片草原上的所有羊', '一定区域同种生物全部个体'],
          ['群落', '草原上所有生物', '一定区域全部种群的总和'],
          ['生态系统', '草原', '生物群落加无机环境'],
          ['生物圈', '地球全部生物和无机环境', '最大的生命系统']
        ] },
      { type: 'keypoint', text: '生命系统中最基本的层次是细胞，最大的层次是生物圈。其他所有层次都建立在细胞的基础之上；细胞是生物体结构和功能的基本单位。' },
      { type: 'warn', text: '易错辨析：① 病毒没有细胞结构，不属于生命系统的任何层次；② 植物没有"系统"这一层次，其结构层次为细胞→组织→器官→个体→种群→群落→生态系统→生物圈；③ 种群强调"同种"，群落强调"该区域所有生物"。' },
      { type: 'example', text: '例题（高考风格）：下列结构中，属于生命系统"器官"层次的是（ ）。A. 一个心肌细胞 B. 一块心肌组织 C. 一只心脏 D. 一个种群。思路：器官是由不同组织按一定次序结合而成、能完成特定功能的结构，心脏由肌肉组织、神经组织等构成，属于器官层次；心肌细胞是细胞层次，心肌组织是组织层次。' },
      { type: 'tip', text: '高频考点：① 生命系统九个层次的顺序必须记牢，常考填空；② "最基本=细胞""最大=生物圈"几乎年年考；③ 病毒、植物无系统层次是选择题最爱挖的坑；④ 种群与群落的区分（同种 vs 全部生物）。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 520" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="520" fill="#eef6e4"/><text x="20" y="34" font-size="20" fill="#3f7d1e" font-weight="bold">生命系统的结构层次（由小到大）</text><rect x="240" y="56" width="200" height="34" rx="6" fill="#5aa832" stroke="#3f7d1e"/><text x="340" y="79" font-size="16" fill="#2e3a22" text-anchor="middle">细胞（最基本）</text><rect x="240" y="108" width="200" height="34" rx="6" fill="#d6eac4" stroke="#3f7d1e"/><text x="340" y="131" font-size="16" fill="#2e3a22" text-anchor="middle">组织</text><rect x="240" y="160" width="200" height="34" rx="6" fill="#d6eac4" stroke="#3f7d1e"/><text x="340" y="183" font-size="16" fill="#2e3a22" text-anchor="middle">器官</text><rect x="240" y="212" width="200" height="34" rx="6" fill="#d6eac4" stroke="#3f7d1e"/><text x="340" y="235" font-size="16" fill="#2e3a22" text-anchor="middle">系统（植物无）</text><rect x="240" y="264" width="200" height="34" rx="6" fill="#d6eac4" stroke="#3f7d1e"/><text x="340" y="287" font-size="16" fill="#2e3a22" text-anchor="middle">个体</text><rect x="240" y="316" width="200" height="34" rx="6" fill="#d6eac4" stroke="#3f7d1e"/><text x="340" y="339" font-size="16" fill="#2e3a22" text-anchor="middle">种群</text><rect x="240" y="368" width="200" height="34" rx="6" fill="#d6eac4" stroke="#3f7d1e"/><text x="340" y="391" font-size="16" fill="#2e3a22" text-anchor="middle">群落</text><rect x="240" y="420" width="200" height="34" rx="6" fill="#d6eac4" stroke="#3f7d1e"/><text x="340" y="443" font-size="16" fill="#2e3a22" text-anchor="middle">生态系统</text><rect x="240" y="472" width="200" height="34" rx="6" fill="#d6eac4" stroke="#3f7d1e"/><text x="340" y="495" font-size="16" fill="#2e3a22" text-anchor="middle">生物圈（最大）</text><polygon points="330,91 350,91 340,107" fill="#3f7d1e"/><polygon points="330,143 350,143 340,159" fill="#3f7d1e"/><polygon points="330,195 350,195 340,211" fill="#3f7d1e"/><polygon points="330,247 350,247 340,263" fill="#3f7d1e"/><polygon points="330,299 350,299 340,315" fill="#3f7d1e"/><polygon points="330,351 350,351 340,367" fill="#3f7d1e"/><polygon points="330,403 350,403 340,419" fill="#3f7d1e"/><polygon points="330,455 350,455 340,471" fill="#3f7d1e"/></svg>', caption: '生命系统九个层次由小到大排列，最基本是细胞，最大是生物圈。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef6e4"/><text x="20" y="34" font-size="20" fill="#3f7d1e" font-weight="bold">细胞学说的建立过程</text><line x1="70" y1="150" x2="630" y2="150" stroke="#3f7d1e" stroke-width="3"/><circle cx="110" cy="150" r="14" fill="#5aa832" stroke="#3f7d1e"/><text x="110" y="120" font-size="14" fill="#2e3a22" text-anchor="middle">1665</text><text x="110" y="190" font-size="14" fill="#2e3a22" text-anchor="middle">虎克命名</text><circle cx="250" cy="150" r="14" fill="#5aa832" stroke="#3f7d1e"/><text x="250" y="120" font-size="14" fill="#2e3a22" text-anchor="middle">1674</text><text x="250" y="190" font-size="14" fill="#2e3a22" text-anchor="middle">列文虎克活细胞</text><circle cx="390" cy="150" r="14" fill="#5aa832" stroke="#3f7d1e"/><text x="390" y="120" font-size="14" fill="#2e3a22" text-anchor="middle">1838-39</text><text x="390" y="190" font-size="14" fill="#2e3a22" text-anchor="middle">施莱登施旺建立</text><circle cx="530" cy="150" r="14" fill="#5aa832" stroke="#3f7d1e"/><text x="530" y="120" font-size="14" fill="#2e3a22" text-anchor="middle">1858</text><text x="530" y="190" font-size="14" fill="#2e3a22" text-anchor="middle">魏尔肖分裂说</text><polygon points="620,144 632,150 620,156" fill="#3f7d1e"/></svg>', caption: '细胞学说由多人逐步建立和完善，关键人物与时间节点如上。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="20" y="34" font-size="20" fill="#3f7d1e" font-weight="bold">病毒必须寄生在活细胞内</text><rect x="60" y="90" width="180" height="160" rx="12" fill="#d6eac4" stroke="#3f7d1e"/><text x="150" y="150" font-size="15" fill="#2e3a22" text-anchor="middle">宿主细胞</text><text x="150" y="175" font-size="13" fill="#2e3a22" text-anchor="middle">（有细胞结构）</text><circle cx="470" cy="120" r="22" fill="#5aa832" stroke="#3f7d1e"/><text x="470" y="125" font-size="13" fill="#2e3a22" text-anchor="middle">蛋白质</text><circle cx="470" cy="190" r="20" fill="#d6eac4" stroke="#3f7d1e"/><text x="470" y="194" font-size="12" fill="#2e3a22" text-anchor="middle">核酸</text><text x="470" y="240" font-size="14" fill="#2e3a22" text-anchor="middle">病毒（无细胞结构）</text><polygon points="250,150 320,150 305,140 320,150 305,160" fill="#3f7d1e"/><text x="290" y="135" font-size="13" fill="#3f7d1e" text-anchor="middle">寄生</text></svg>', caption: '病毒没有细胞结构，只有侵入活细胞才能繁殖，箭头表示寄生关系。' },
      { type: 'paragraph', text: '小结：本节要抓住三条主线——细胞学说的要点与意义、生命活动离不开细胞（病毒最典型）、生命系统的九个层次。这三点既是基础，也是高考选择题的高频考点，务必记准记牢。' }
    ],
    exercises: [
      { type: 'choice', question: '细胞学说的主要建立者是（ ）。', options: ['施莱登和施旺', '达尔文和孟德尔', '虎克和列文虎克', '魏尔肖和巴斯德'], answer: '施莱登和施旺', explanation: '细胞学说由施莱登（研究植物）和施旺（研究动物）在1838至1839年共同建立，揭示了动植物结构的统一性；虎克只是命名了细胞，列文虎克最早观察活细胞，魏尔肖后来补充了细胞分裂学说。' },
      { type: 'choice', question: '下列结构层次中，植物不具有的是（ ）。', options: ['细胞', '组织', '系统', '器官'], answer: '系统', explanation: '植物的生命系统层次为细胞、组织、器官、个体、种群、群落、生态系统、生物圈，没有系统这一层次；系统层次只存在于动物体中，例如人体的循环系统、消化系统。' },
      { type: 'choice', question: '下列关于病毒的描述中，正确的是（ ）。', options: ['病毒有细胞结构', '病毒能独立生存', '病毒必须寄生在活细胞内', '病毒属于生命系统的一个层次'], answer: '病毒必须寄生在活细胞内', explanation: '病毒没有细胞结构，不能独立进行代谢，必须寄生在活细胞内才能繁殖；病毒也不属于生命系统的任何结构层次，因此它既非细胞也非生命系统的组成单位。' },
      { type: 'fill', question: '生命系统中最基本的结构层次是______。', answer: '细胞', explanation: '细胞是生物体结构和功能的基本单位，也是生命系统中最基本、最小的层次，其他层次都建立在细胞的基础之上，没有细胞就没有完整的生命。' },
      { type: 'fill', question: '魏尔肖对细胞学说的补充是"新细胞由______产生"。', answer: '老细胞分裂', explanation: '魏尔肖在1858年提出"新细胞由老细胞分裂产生"，修正并完善了细胞学说，使细胞学说更加完整，这也与现代生物学中细胞增殖的观点一致。' }
    ]
  });
})();
