/* 信息技术 · 必修2 · 信息系统与社会 · 第1节 计算机与移动终端 */
(function () {
  var v = gzGetVolume('it', 'bx2');
  if (!v) return;
  v.points.push({
    id: 'bx2-u9',
    name: '第1节 计算机与移动终端',
    chapter: '高一信息技术（必修2·信息系统与社会）· 第三章 信息系统的基础设施',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、计算机与移动终端是什么' },
      { type: 'paragraph', text: '信息系统要运转起来，首先得有“干活的机器”。这些机器就是计算机和移动终端，它们是信息系统最基础的硬件设施，负责把数据收进来、算出来、送出去。' },
      { type: 'list', items: [
        '计算机：能够按照预先编好的程序，自动、高速地处理海量数据的智能电子设备。常见的有台式机、笔记本电脑、服务器、超级计算机。',
        '移动终端：可以在移动过程中使用的计算机设备。常见的有智能手机、平板电脑、智能手表、车载导航设备。',
        '两者的关系：移动终端本质上也是计算机，只是体积更小、便于携带、通常靠电池供电、主要通过无线方式联网。'
      ] },
      { type: 'keypoint', label: '重点·两个定义', text: '<strong>计算机是按程序自动、高速处理海量数据的智能电子设备；移动终端是可以在移动中使用的计算机设备。</strong>抓住计算机定义里的四个关键词：<strong>按程序、自动、高速、处理数据</strong>。移动终端和计算机不是并列关系，而是<strong>移动终端属于计算机的一种</strong>，它最大的特点是“可移动”。' },
      { type: 'paragraph', text: '生活中的例子：学校机房里的台式机、网站背后的服务器属于计算机；你口袋里的手机、书包里的平板、手腕上的智能手表属于移动终端。它们共同构成了信息系统的“身体”。' },

      { type: 'heading', text: '二、计算机的工作原理：存储程序与程序控制' },
      { type: 'paragraph', text: '计算机为什么能自动干活，不用人在旁边一步步指挥？答案就是“存储程序”和“程序控制”这两条基本原理，它们最早由科学家冯·诺依曼提出，一直沿用到今天。' },
      { type: 'list', items: [
        '存储程序：把要执行的程序和要处理的数据，事先都存入计算机的存储器中。计算机需要时直接从存储器里取，不用人临时输入。',
        '程序控制：计算机的工作过程，就是程序被逐条执行的过程。控制器按顺序从存储器取出一条条指令，指挥各部件完成相应动作，直到程序结束。',
        '两者的关系：先有“存储程序”把指令存进去，才能有“程序控制”把指令一条条取出来执行。它们合在一起，让计算机实现了全自动运行。'
      ] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2fc"/><text x="340" y="28" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">存储程序与程序控制：计算机自动工作的原理</text><rect x="21" y="64" width="110" height="58" rx="9" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="76" y="88" font-size="12" font-weight="bold" fill="#3d4f8a" text-anchor="middle">① 编写程序</text><text x="76" y="108" font-size="10" fill="#2a3454" text-anchor="middle">用语言写出解题步骤</text><line x1="131" y1="93" x2="147" y2="93" stroke="#6266d9" stroke-width="2"/><polygon points="153,93 143,88 143,98" fill="#6266d9"/><rect x="153" y="64" width="110" height="58" rx="9" fill="#6266d9"/><text x="208" y="88" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">② 存入存储器</text><text x="208" y="108" font-size="10" fill="#ffffff" text-anchor="middle">程序和数据事先存好</text><line x1="263" y1="93" x2="279" y2="93" stroke="#6266d9" stroke-width="2"/><polygon points="285,93 275,88 275,98" fill="#6266d9"/><rect x="285" y="64" width="110" height="58" rx="9" fill="#6266d9"/><text x="340" y="88" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">③ 取出指令</text><text x="340" y="108" font-size="10" fill="#ffffff" text-anchor="middle">控制器按顺序逐条取</text><line x1="395" y1="93" x2="411" y2="93" stroke="#6266d9" stroke-width="2"/><polygon points="417,93 407,88 407,98" fill="#6266d9"/><rect x="417" y="64" width="110" height="58" rx="9" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="472" y="88" font-size="12" font-weight="bold" fill="#3d4f8a" text-anchor="middle">④ 执行指令</text><text x="472" y="108" font-size="10" fill="#2a3454" text-anchor="middle">运算器完成运算处理</text><line x1="527" y1="93" x2="543" y2="93" stroke="#6266d9" stroke-width="2"/><polygon points="549,93 539,88 539,98" fill="#6266d9"/><rect x="549" y="64" width="110" height="58" rx="9" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="604" y="88" font-size="12" font-weight="bold" fill="#3d4f8a" text-anchor="middle">⑤ 输出结果</text><text x="604" y="108" font-size="10" fill="#2a3454" text-anchor="middle">显示器等输出设备</text><path d="M472 122 L472 138 L340 138 L340 128" stroke="#6266d9" stroke-width="1.8" fill="none" stroke-dasharray="5 4"/><polygon points="340,122 334,132 346,132" fill="#6266d9"/><text x="406" y="156" font-size="11" fill="#2a3454" text-anchor="middle">指令逐条循环执行，直到程序结束</text><rect x="30" y="166" width="290" height="52" rx="9" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="175" y="188" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">存储程序</text><text x="175" y="208" font-size="11" fill="#2a3454" text-anchor="middle">程序和数据预先存入存储器</text><rect x="360" y="166" width="290" height="52" rx="9" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="505" y="188" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">程序控制</text><text x="505" y="208" font-size="11" fill="#2a3454" text-anchor="middle">工作过程就是程序执行过程</text><rect x="30" y="228" width="620" height="54" rx="10" fill="#6266d9"/><text x="340" y="250" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">正因为程序被事先存好、又能被自动逐条执行</text><text x="340" y="272" font-size="12" fill="#ffffff" text-anchor="middle">计算机才不需要人在旁边一步步指挥，能够全自动、高速地完成任务</text></svg>', caption: '图1　“存储程序 + 程序控制”工作原理流程：程序先存入存储器，控制器再逐条取出指令交给运算器执行。' },

      { type: 'heading', text: '三、计算机系统的组成' },
      { type: 'paragraph', text: '一台能用的计算机，光有机器还不够，还要有程序。所以计算机系统由硬件系统和软件系统两大部分组成，二者缺一不可。只有硬件没有软件的计算机叫“裸机”，什么也干不了。' },
      { type: 'paragraph', text: '硬件系统包括五大部件：运算器、控制器、存储器、输入设备、输出设备。其中运算器和控制器合在一起，集成在一块芯片上，就是我们常说的CPU（中央处理器）。' },
      { type: 'list', items: [
        '运算器：负责算术运算（加减乘除）和逻辑运算（与、或、非、比较大小）。',
        '控制器：整台机器的“指挥中心”，负责取指令、分析指令、发出控制信号，指挥其他部件工作。',
        '存储器：负责存放程序和数据。分为内存和外存两类——内存又分RAM（随机存储器，断电内容丢失，运行程序时用）和ROM（只读存储器，断电内容不丢失，存放开机启动程序）；外存包括硬盘、固态硬盘、U盘、光盘、存储卡，容量大、断电不丢失，但读写速度比内存慢。',
        '输入设备：把外界的数据送进计算机，如键盘、鼠标、扫描仪、摄像头、麦克风、触摸屏、传感器。',
        '输出设备：把处理结果送出计算机，如显示器、打印机、音箱、投影仪。'
      ] },
      { type: 'paragraph', text: '软件系统分为系统软件和应用软件两类。系统软件负责管理和维护计算机本身，应用软件负责帮用户完成具体任务。' },
      { type: 'list', items: [
        '系统软件：包括操作系统（如Windows、Linux、macOS、Android、iOS）和语言处理程序（把高级语言翻译成机器能懂的机器语言，如Python解释器、C语言编译器），此外还有数据库管理系统、各类工具软件。',
        '应用软件：包括办公软件（文字处理、电子表格、演示文稿）、社交软件、游戏、图像处理软件、浏览器、学习类APP等。',
        '两者关系：应用软件必须运行在系统软件（主要是操作系统）之上，操作系统是硬件和应用软件之间的桥梁。'
      ] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2fc"/><text x="340" y="26" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">计算机系统的组成</text><rect x="270" y="42" width="140" height="32" rx="8" fill="#6266d9"/><text x="340" y="64" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">计算机系统</text><path d="M340 74 L340 92 M180 92 L500 92 M180 92 L180 106 M500 92 L500 106" stroke="#6266d9" stroke-width="1.8" fill="none"/><rect x="110" y="106" width="140" height="30" rx="8" fill="#6266d9"/><text x="180" y="126" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">硬件系统</text><rect x="430" y="106" width="140" height="30" rx="8" fill="#6266d9"/><text x="500" y="126" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">软件系统</text><path d="M180 136 L180 148 M50 148 L298 148 M50 148 L50 152 M112 148 L112 152 M174 148 L174 152 M236 148 L236 152 M298 148 L298 152" stroke="#6266d9" stroke-width="1.5" fill="none"/><rect x="22" y="152" width="56" height="32" rx="7" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.2"/><text x="50" y="172" font-size="11" fill="#2a3454" text-anchor="middle">运算器</text><rect x="84" y="152" width="56" height="32" rx="7" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.2"/><text x="112" y="172" font-size="11" fill="#2a3454" text-anchor="middle">控制器</text><rect x="146" y="152" width="56" height="32" rx="7" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.2"/><text x="174" y="172" font-size="11" fill="#2a3454" text-anchor="middle">存储器</text><rect x="208" y="152" width="56" height="32" rx="7" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.2"/><text x="236" y="167" font-size="10" fill="#2a3454" text-anchor="middle">输入</text><text x="236" y="179" font-size="10" fill="#2a3454" text-anchor="middle">设备</text><rect x="270" y="152" width="56" height="32" rx="7" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.2"/><text x="298" y="167" font-size="10" fill="#2a3454" text-anchor="middle">输出</text><text x="298" y="179" font-size="10" fill="#2a3454" text-anchor="middle">设备</text><text x="174" y="206" font-size="11" fill="#2a3454" text-anchor="middle">运算器 + 控制器 = CPU（中央处理器）</text><text x="174" y="226" font-size="11" fill="#2a3454" text-anchor="middle">存储器分内存（RAM / ROM）和外存</text><text x="174" y="246" font-size="11" fill="#2a3454" text-anchor="middle">外存：硬盘、固态硬盘、U盘、存储卡</text><path d="M500 136 L500 148 M422 148 L578 148 M422 148 L422 152 M578 148 L578 152" stroke="#6266d9" stroke-width="1.5" fill="none"/><rect x="352" y="152" width="140" height="32" rx="7" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.2"/><text x="422" y="173" font-size="12" fill="#2a3454" text-anchor="middle">系统软件</text><rect x="508" y="152" width="140" height="32" rx="7" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.2"/><text x="578" y="173" font-size="12" fill="#2a3454" text-anchor="middle">应用软件</text><text x="422" y="206" font-size="10" fill="#2a3454" text-anchor="middle">操作系统 Windows/Android</text><text x="422" y="224" font-size="10" fill="#2a3454" text-anchor="middle">语言处理程序</text><text x="578" y="206" font-size="10" fill="#2a3454" text-anchor="middle">办公软件、社交软件</text><text x="578" y="224" font-size="10" fill="#2a3454" text-anchor="middle">游戏、浏览器</text><rect x="352" y="240" width="296" height="44" rx="9" fill="#6266d9"/><text x="500" y="258" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">应用软件运行在操作系统之上</text><text x="500" y="276" font-size="10" fill="#ffffff" text-anchor="middle">只有硬件没有软件的计算机叫“裸机”</text></svg>', caption: '图2　计算机系统组成树状图：硬件系统五大部件与软件系统两大类别。' },

      { type: 'heading', text: '四、常见性能指标' },
      { type: 'paragraph', text: '买手机、买电脑时看到的那一串参数，其实就是衡量计算机性能的指标。掌握下面几个，就能大致判断一台机器的强弱。' },
      { type: 'table', headers: ['性能指标', '含义', '对性能的影响'], rows: [
        ['CPU', '中央处理器，由运算器和控制器组成，是运算和控制的核心', 'CPU越先进、核心数越多，整机处理能力越强'],
        ['主频', 'CPU的时钟频率，单位赫兹（Hz），常用GHz表示', '主频越高，单位时间内执行的指令越多，运算速度越快'],
        ['内存容量', '内存（RAM）能存放数据的多少，单位GB', '容量越大，可同时运行的程序越多，越不容易卡顿'],
        ['字长', 'CPU一次能同时处理的二进制位数，如32位、64位', '字长越长，一次处理的数据越多，精度和速度越高'],
        ['外存容量', '硬盘、固态硬盘等能长期保存数据的多少', '容量越大，能保存的文件越多；固态硬盘读写更快']
      ] },
      { type: 'keypoint', label: '重点·主频与字长', text: '<strong>主频</strong>是CPU的时钟频率，单位是<strong>赫兹（Hz）</strong>，通常用GHz表示，主频越高运算速度越快。<strong>字长</strong>是CPU一次能同时处理的二进制位数，常见的有<strong>32位和64位</strong>，字长越长一次处理的数据越多。注意区分：主频衡量的是“多快”，字长衡量的是“一次多少”。' },
      { type: 'warn', label: '易错·内存和外存别搞混', text: '内存（RAM）是程序运行时的“工作台”，速度快但<strong>断电后内容全部丢失</strong>；外存（硬盘、U盘）是“仓库”，速度慢但<strong>断电后内容不丢失</strong>。所以写文档时一定要及时保存——保存就是把内存里的内容写到外存中。另外要注意ROM也属于内存，但它断电不丢失，主要存放开机启动程序。' },
      { type: 'tip', label: '提示·手机参数怎么看', text: '手机宣传页上写的“骁龙8 Gen3、主频3.3GHz、12GB+256GB”，翻译过来就是：CPU型号是骁龙8 Gen3，主频3.3GHz（每秒33亿次时钟周期），<strong>内存12GB</strong>（同时开很多APP不卡），<strong>外存256GB</strong>（能装很多照片和视频）。看懂这几个数字，就能自己判断一台手机的性能了。' },
      { type: 'example', label: '例题·判断设备与部件类别', text: '题目：请判断下列设备分别属于什么：①服务器　②智能手表　③摄像头　④打印机　⑤U盘　⑥Android系统。<br>解析：①服务器是提供网络服务的高性能计算机，属于<strong>计算机</strong>；②智能手表可以随身携带、在移动中使用，属于<strong>移动终端</strong>；③摄像头把外界图像送入计算机，属于<strong>输入设备</strong>；④打印机把处理结果输出到纸上，属于<strong>输出设备</strong>；⑤U盘断电后数据不丢失、用于长期保存文件，属于<strong>外存</strong>；⑥Android是管理手机硬件资源的操作系统，属于<strong>系统软件</strong>。' }
    ],
    exercises: [
      { type: 'choice', question: '下列关于计算机硬件系统五大部件的说法，正确的是？', options: ['运算器负责指挥其他部件工作', '控制器负责完成算术运算和逻辑运算', '运算器和控制器合称CPU', '显示器属于输入设备'], answer: '运算器和控制器合称CPU', explanation: '硬件系统五大部件是运算器、控制器、存储器、输入设备、输出设备。运算器负责算术运算和逻辑运算，控制器负责取指令、分析指令并指挥其他部件工作，两者集成在一起就是CPU（中央处理器）。显示器把结果送出计算机，属于输出设备。' },
      { type: 'choice', question: '计算机能够自动、连续工作，其基本原理是？', options: ['存储程序和程序控制', '硬件系统和软件系统', '输入设备和输出设备', '内存和外存'], answer: '存储程序和程序控制', explanation: '存储程序是指把程序和数据预先存入存储器；程序控制是指计算机的工作过程就是程序被逐条执行的过程。控制器从存储器中按顺序取出指令并指挥各部件执行，因此不需要人在旁边一步步指挥，计算机就能自动连续工作。' },
      { type: 'choice', question: '小明写文档时突然停电，没保存的内容全部丢失。这是因为文档内容当时存放在？', options: ['硬盘中', '内存RAM中', 'U盘中', 'ROM中'], answer: '内存RAM中', explanation: '编辑文档时，内容暂时存放在内存RAM里。RAM的特点是速度快但断电后内容全部丢失，所以未保存的内容会消失。执行“保存”操作，就是把内存中的内容写入硬盘、U盘等外存，外存断电后数据不会丢失。ROM虽然断电不丢失，但它是只读的，主要存放开机启动程序。' },
      { type: 'fill', question: '计算机系统由___系统和___系统两大部分组成，只有硬件而没有安装任何软件的计算机被称为___。', answer: '硬件；软件；裸机', explanation: '一台完整的计算机系统包括硬件系统（运算器、控制器、存储器、输入设备、输出设备）和软件系统（系统软件、应用软件）。二者缺一不可，只有硬件没有软件的计算机称为裸机，无法完成任何实际工作。' },
      { type: 'fill', question: 'CPU的时钟频率称为___，单位是赫兹（Hz）；CPU一次能同时处理的二进制位数称为___，常见的有32位和64位。', answer: '主频；字长', explanation: '主频是CPU的时钟频率，单位是赫兹（Hz），通常用GHz表示，主频越高单位时间执行的指令越多、运算速度越快。字长是CPU一次能同时处理的二进制位数，常见32位、64位，字长越长一次处理的数据越多，运算精度和速度越高。' }
    ]
  });
})();
