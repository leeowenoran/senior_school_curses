/* 信息技术 · 高三复习 · 数据与算法 · 第10节 程序设计语言的发展 */
(function () {
  var v = gzGetVolume('it', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u10',
    name: '第10节 程序设计语言的发展',
    chapter: '七、程序设计语言基础',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、为什么需要程序设计语言' },
      { type: 'paragraph', text: '人要跟计算机说话，不能直接用中文或英文，因为计算机只认得由 0 和 1 组成的机器指令。可是让人类直接写一长串 0 和 1，既难写又难记还极易出错。于是人们一步步发明了更“像人话”的语言，这就是程序设计语言的发展过程。' },
      { type: 'paragraph', text: '从低到高，程序设计语言大致经历了三代：机器语言、汇编语言、高级语言。等级越低越接近计算机硬件、人越难懂；等级越高越接近自然语言、人越好写，开发效率也越高。' },
      { type: 'keypoint', label: '重点·三级语言一览', text: '<strong>机器语言是二进制代码指令，计算机可直接执行；汇编语言用助记符号表示，需要汇编器转换；高级语言接近自然语言，开发效率高，如 Python、C、Java。</strong>越往后，人越好懂，但都需要翻译成机器语言计算机才能运行。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">程序设计语言的发展：从机器到人</text><rect x="40" y="70" width="180" height="170" rx="12" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="130" y="100" font-size="15" font-weight="bold" fill="#6266d9" text-anchor="middle">机器语言</text><text x="130" y="130" font-size="11" fill="#2a3454" text-anchor="middle">二进制 0/1 指令</text><text x="130" y="152" font-size="11" fill="#2a3454" text-anchor="middle">计算机可直接执行</text><text x="130" y="174" font-size="11" fill="#2a3454" text-anchor="middle">人难写难记</text><text x="130" y="200" font-size="11" fill="#2a3454" text-anchor="middle">例：10110000</text><rect x="250" y="70" width="180" height="170" rx="12" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="340" y="100" font-size="15" font-weight="bold" fill="#6266d9" text-anchor="middle">汇编语言</text><text x="340" y="130" font-size="11" fill="#2a3454" text-anchor="middle">用助记符号</text><text x="340" y="152" font-size="11" fill="#2a3454" text-anchor="middle">需汇编器转换</text><text x="340" y="174" font-size="11" fill="#2a3454" text-anchor="middle">仍较贴近硬件</text><text x="340" y="200" font-size="11" fill="#2a3454" text-anchor="middle">例：MOV A, 1</text><rect x="460" y="70" width="180" height="170" rx="12" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="550" y="100" font-size="15" font-weight="bold" fill="#6266d9" text-anchor="middle">高级语言</text><text x="550" y="130" font-size="11" fill="#2a3454" text-anchor="middle">接近自然语言</text><text x="550" y="152" font-size="11" fill="#2a3454" text-anchor="middle">开发效率高</text><text x="550" y="174" font-size="11" fill="#2a3454" text-anchor="middle">Python/C/Java</text><text x="550" y="200" font-size="11" fill="#2a3454" text-anchor="middle">例：a = 1</text><line x1="220" y1="155" x2="248" y2="155" stroke="#6266d9" stroke-width="1.5"/><line x1="430" y1="155" x2="458" y2="155" stroke="#6266d9" stroke-width="1.5"/><text x="340" y="262" font-size="13" font-weight="bold" fill="#6266d9" text-anchor="middle">越往右：人越好写，越要翻译给计算机听</text></svg>', caption: '图1　程序设计语言三代：机器语言、汇编语言、高级语言，越往后越接近人话。' },
      { type: 'heading', text: '二、三代语言各有什么特点' },
      { type: 'paragraph', text: '机器语言用二进制代码写成，是计算机唯一能直接“听懂”的语言，不用翻译。但它难写、难读、难改，现在几乎没人直接用它写程序。汇编语言用 ADD、MOV 这类助记符号代替二进制，比机器语言好记一点，但仍要专门的“汇编器”翻译成机器语言，而且和具体机型绑得紧。' },
      { type: 'paragraph', text: '高级语言最接近我们日常说话和写数学公式的方式，比如写“a = 1 + 2”谁都看得懂。用它开发效率最高，所以现在的程序大多用高级语言写。常见的高级语言有 Python、C、C++、Java 等。' },
      { type: 'list', items: ['机器语言：二进制指令，计算机可直接执行，人难写', '汇编语言：助记符号，需汇编器转换，贴近硬件', '高级语言：接近自然语言，开发效率高，如 Python、C、Java'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 290" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="290" fill="#eef2fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">同一件事，三种语言的写法</text><rect x="40" y="60" width="190" height="60" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="135" y="84" font-size="13" font-weight="bold" fill="#6266d9" text-anchor="middle">机器语言</text><text x="135" y="106" font-size="11" fill="#2a3454" text-anchor="middle">10110000 00000001</text><rect x="250" y="60" width="190" height="60" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="345" y="84" font-size="13" font-weight="bold" fill="#6266d9" text-anchor="middle">汇编语言</text><text x="345" y="106" font-size="11" fill="#2a3454" text-anchor="middle">MOV A, 1</text><rect x="460" y="60" width="190" height="60" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="555" y="84" font-size="13" font-weight="bold" fill="#6266d9" text-anchor="middle">高级语言</text><text x="555" y="106" font-size="11" fill="#2a3454" text-anchor="middle">a = 1</text><text x="340" y="170" font-size="13" fill="#2a3454" text-anchor="middle">意思都是：把数字 1 放到变量 a 里</text><rect x="170" y="196" width="340" height="56" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="340" y="222" font-size="12" fill="#2a3454" text-anchor="middle">越高级的语言越像人话，但都要</text><text x="340" y="242" font-size="12" fill="#2a3454" text-anchor="middle">翻译成机器语言计算机才能执行</text></svg>', caption: '图2　“把 1 放进变量 a”在三代语言里的不同写法，越高级越易懂。' },
      { type: 'tip', label: '提示·考试怎么考', text: '<strong>选择题常让你区分三种语言：看到“二进制、可直接执行”想机器语言；看到“助记符、汇编器”想汇编语言；看到“接近自然语言、Python/C/Java、效率高”想高级语言。</strong>' },
      { type: 'warn', label: '易错·高级语言也要翻译', text: '很多同学以为“高级语言计算机能直接运行”，这是错的。不管多高级，最终都得翻译成机器语言（二进制）计算机才认得。翻译方式分编译和解释两种，下一节细讲。' },
      { type: 'example', label: '例题·判断语言类型', text: '题目：下列描述对应的是哪一代语言？“用 ADD、MOV 等助记符号表示指令，需要专门的汇编器把它翻译成机器语言才能运行。”<br>解析：关键词是“助记符号”和“汇编器”，这正是汇编语言的特征。机器语言是纯二进制、可直接执行；高级语言才接近自然语言并用 Python、C 等表示。所以答案是汇编语言。' }
    ],
    exercises: [
      { type: 'choice', question: '下列关于机器语言的说法，正确的是？', options: ['用助记符号表示，需要汇编器转换', '由二进制代码指令组成，计算机可直接执行', '最接近自然语言，开发效率最高', '就是 Python 语言'], answer: '由二进制代码指令组成，计算机可直接执行', explanation: '机器语言是用二进制代码指令写成的，是计算机唯一能直接执行的程序语言。助记符对应汇编语言，接近自然语言、效率高的是高级语言，Python 是高级语言。' },
      { type: 'choice', question: '“用 ADD、MOV 等助记符号表示指令，需要汇编器翻译成机器语言”，这描述的是？', options: ['机器语言', '汇编语言', '高级语言', '自然语言'], answer: '汇编语言', explanation: '用助记符号表示、并需经汇编器转换的语言是汇编语言。机器语言是二进制，高级语言接近自然语言（如 Python、C、Java）。' },
      { type: 'choice', question: '下列属于高级语言的是？', options: ['二进制指令', '汇编语言', 'Python', '机器语言'], answer: 'Python', explanation: '高级语言接近自然语言、开发效率高，常见有 Python、C、C++、Java 等。二进制指令属于机器语言，助记符号属于汇编语言。' },
      { type: 'fill', question: '程序设计语言的发展经历了___语言、___语言、___语言三代。', answer: '机器；汇编；高级', explanation: '从低级到高级依次为机器语言（二进制、可直接执行）、汇编语言（助记符、需汇编器）、高级语言（接近自然语言、效率高）。' },
      { type: 'fill', question: '高级语言虽接近自然语言、开发效率高，但最终都必须翻译成___语言，计算机才能执行。', answer: '机器', explanation: '无论高级语言多接近人话，计算机只认二进制机器指令，所以高级语言编写的源程序最终都要翻译成机器语言才能被计算机执行。' }
    ]
  });
})();
