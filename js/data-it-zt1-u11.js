/* 信息技术 · 高三复习 · 数据与算法 · 第11节 高级语言的转换方式 */
(function () {
  var v = gzGetVolume('it', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u11',
    name: '第11节 高级语言的转换方式',
    chapter: '七、程序设计语言基础',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、为什么需要“翻译”' },
      { type: 'paragraph', text: '上一节说过，高级语言写出来的程序人能看懂，但计算机只认二进制机器指令。所以必须把“人话版”的源程序，转换成“计算机版”的机器语言。这个转换过程就叫“翻译”，主要有两种方式：编译型和解释型。' },
      { type: 'paragraph', text: '打个比方：编译型像“先把整本书翻译成中文再出版”，出版后看书的人直接读中文，很快；解释型像“同声传译”，念一句翻一句，边翻边讲，不用等整本书翻完，但每读一句都要现场翻，速度稍慢。' },
      { type: 'keypoint', label: '重点·两种方式定义', text: '<strong>编译型：源代码通过编译器一次性“翻译”成目标代码（机器语言文件），之后计算机直接运行这个文件。解释型：由解释器边“翻译”边执行，不事先生成独立的机器语言文件。</strong>' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">编译型 vs 解释型</text><rect x="40" y="60" width="280" height="200" rx="12" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="180" y="90" font-size="15" font-weight="bold" fill="#6266d9" text-anchor="middle">编译型</text><text x="180" y="120" font-size="11" fill="#2a3454" text-anchor="middle">源代码 → 编译器</text><text x="180" y="144" font-size="11" fill="#2a3454" text-anchor="middle">一次性翻译</text><text x="180" y="168" font-size="11" fill="#2a3454" text-anchor="middle">生成机器语言文件</text><text x="180" y="192" font-size="11" fill="#2a3454" text-anchor="middle">之后直接运行该文件</text><text x="180" y="224" font-size="11" fill="#6266d9" text-anchor="middle">例：C、C++</text><rect x="360" y="60" width="280" height="200" rx="12" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="500" y="90" font-size="15" font-weight="bold" fill="#6266d9" text-anchor="middle">解释型</text><text x="500" y="120" font-size="11" fill="#2a3454" text-anchor="middle">源代码 → 解释器</text><text x="500" y="144" font-size="11" fill="#2a3454" text-anchor="middle">边翻译边执行</text><text x="500" y="168" font-size="11" fill="#2a3454" text-anchor="middle">不生成独立机器文件</text><text x="500" y="192" font-size="11" fill="#2a3454" text-anchor="middle">每次运行都要解释</text><text x="500" y="224" font-size="11" fill="#6266d9" text-anchor="middle">例：Python</text></svg>', caption: '图1　编译型一次性翻译生成机器文件；解释型由解释器边翻边执行，如 Python。' },
      { type: 'heading', text: '二、两种方式有什么不同' },
      { type: 'paragraph', text: '编译型先把整个程序翻译好，生成一份机器语言文件，以后运行这份文件就行，不用再翻译，所以运行速度快；但翻译这一步比较慢，而且翻译好的文件往往只能在同类机器上跑。解释型不用先整体翻译，拿来就能一句句跑，改一句就能马上看结果，很方便调试；但每跑一次都要现场翻译，运行速度相对慢一些。' },
      { type: 'list', items: ['编译型：一次翻译、生成文件、运行快、如 C / C++', '解释型：边翻边跑、不生成文件、调试方便、如 Python', '两者最终都是把高级语言变成机器能执行的指令'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 290" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="290" fill="#eef2fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">两种方式的执行过程对比</text><text x="160" y="66" font-size="13" font-weight="bold" fill="#6266d9" text-anchor="middle">编译型</text><rect x="40" y="80" width="120" height="44" rx="8" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="100" y="106" font-size="11" fill="#2a3454" text-anchor="middle">源代码</text><line x1="160" y1="102" x2="200" y2="102" stroke="#6266d9" stroke-width="1.5"/><rect x="202" y="80" width="120" height="44" rx="8" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="262" y="106" font-size="11" fill="#2a3454" text-anchor="middle">编译器</text><line x1="322" y1="102" x2="362" y2="102" stroke="#6266d9" stroke-width="1.5"/><rect x="364" y="80" width="140" height="44" rx="8" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="434" y="106" font-size="11" fill="#2a3454" text-anchor="middle">机器文件→运行</text><text x="520" y="66" font-size="13" font-weight="bold" fill="#6266d9" text-anchor="middle">解释型</text><rect x="430" y="160" width="120" height="44" rx="8" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="490" y="186" font-size="11" fill="#2a3454" text-anchor="middle">源代码</text><line x1="550" y1="182" x2="588" y2="182" stroke="#6266d9" stroke-width="1.5"/><rect x="590" y="160" width="80" height="44" rx="8" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="630" y="186" font-size="11" fill="#2a3454" text-anchor="middle">解释器</text><text x="490" y="240" font-size="11" fill="#2a3454" text-anchor="middle">解释器：读一句→翻一句→执行一句</text><text x="340" y="278" font-size="12" fill="#6266d9" text-anchor="middle">编译型“先翻完再跑”，解释型“边翻边跑”</text></svg>', caption: '图2　编译型先整体翻译生成文件再运行；解释型由解释器一句句翻一句句执行。' },
      { type: 'tip', label: '提示·怎么记', text: '<strong>记“编”=“一遍成”，“解”=“接着解”。</strong>编译型一遍翻译成文件；解释型接着一句句解释执行。考试常把 Python 当解释型的例子，把 C、C++ 当编译型的例子。' },
      { type: 'warn', label: '易错·解释型也会变机器指令', text: '别以为解释型“不翻译”。它其实也在翻译，只是翻译和执行交织在一起、不单独留下一份机器文件而已。无论编译还是解释，计算机最终执行的都是机器指令。' },
      { type: 'example', label: '例题·判断转换方式', text: '题目：用 Python 写的程序，运行时由解释器一句一句翻译并执行，不事先生成独立的机器语言文件。这属于哪种转换方式？<br>解析：关键词是“边翻译边执行”“不生成独立机器文件”，这正是解释型的特征。若换成 C 语言，先用编译器整体翻译成 exe 文件再运行，那就是编译型。所以答案是解释型。' },
      { type: 'table', headers: ['对比项', '编译型', '解释型'], rows: [['翻译时机', '一次性先翻译完', '边翻译边执行'], ['是否生成机器文件', '生成', '不生成'], ['运行速度', '较快', '相对较慢'], ['典型语言', 'C、C++', 'Python']] }
    ],
    exercises: [
      { type: 'choice', question: '关于编译型语言，下列说法正确的是？', options: ['边翻译边执行，不生成机器文件', '源代码经编译器一次性翻译成目标代码后再运行', '典型代表是 Python', '每次运行都要重新翻译'], answer: '源代码经编译器一次性翻译成目标代码后再运行', explanation: '编译型语言由编译器把源代码一次性“翻译”成目标代码（机器语言文件），之后计算机直接运行该文件。Python 是解释型；解释型才是边翻边执行、不生成独立文件、每次运行都翻译。' },
      { type: 'choice', question: 'Python 程序通常由解释器边翻译边执行，不生成独立的机器语言文件。这种转换方式属于？', options: ['编译型', '解释型', '机器语言', '汇编语言'], answer: '解释型', explanation: '由解释器边“翻译”边执行、不事先生成独立机器语言文件，这是解释型的特征。编译型才会一次性翻译并生成机器文件。' },
      { type: 'choice', question: '下列关于两种转换方式的说法，正确的是？', options: ['编译型运行前要先整体翻译，运行速度快', '解释型必须先生成 exe 文件才能运行', 'Python 属于编译型', '两种方式最终都不需要变成机器指令'], answer: '编译型运行前要先整体翻译，运行速度快', explanation: '编译型先整体翻译生成机器文件，之后直接运行，速度较快。解释型不生成独立文件，Python 是解释型；无论哪种，计算机最终执行的都是机器指令。' },
      { type: 'fill', question: '高级语言转换成机器语言有两种方式：___型和___型。其中 Python 属于___型。', answer: '编译；解释；解释', explanation: '转换方式分编译型和解释型。编译型一次性翻译生成机器文件（如 C、C++）；解释型边翻边执行、不生成独立文件（如 Python）。' },
      { type: 'fill', question: '编译型语言会一次性翻译成___代码（机器语言文件），之后计算机直接运行该文件；解释型则由___边翻译边执行。', answer: '目标；解释器', explanation: '编译型通过编译器一次性生成目标代码（机器语言文件）；解释型由解释器逐句翻译并立即执行，不单独生成机器文件。' }
    ]
  });
})();
