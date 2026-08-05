/* 信息技术 · 必修1 · 数据与计算 · 第4节 数据编码 */
(function () {
  var v = gzGetVolume('it', 'bx1');
  if (!v) return;
  v.points.push({
    id: 'bx1-u4',
    name: '第4节 数据编码',
    chapter: '高一信息技术（必修1·数据与计算）· 第一章 数据与信息',
    difficulty: '中等',
    content: [
      { type: 'heading', text: '一、编码的本质' },
      { type: 'paragraph', text: '计算机只能识别两种状态：高电平（1）和低电平（0），也就是说<strong>计算机只认识0和1</strong>。但现实世界的数据有文字、图像、声音等各种形式，怎么让计算机处理它们呢？答案就是——编码。' },
      { type: 'list', items: ['编码的本质：将各类信息转化为计算机可识别的二进制信号（0和1）', '计算机只能识别二进制：所有数据最终都要变成0和1的序列', '编码的作用：建立现实信息与二进制之间的对应规则', '解码是编码的逆过程：将二进制信号还原为原始信息'] },
      { type: 'keypoint', label: '重点·编码的本质', text: '<strong>编码就是将各类信息（文字、图像、声音等）转化为计算机可识别的二进制信号的过程。</strong>计算机内部只能识别0和1两种状态，一切信息都必须经过编码才能被计算机存储和处理。' },
      { type: 'heading', text: '二、模拟信号与数字信号' },
      { type: 'paragraph', text: '信号分为两种：模拟信号和数字信号。它们在形态和特点上有很大不同。' },
      { type: 'list', items: ['模拟信号：信号是连续变化的，波形平滑。处理简单，适合近距离传输。如老式电话、录音磁带', '数字信号：信号是离散的，只有0和1两种状态。保密性强、抗干扰能力强，适合远距离传输。如网络通信、数字电视', '模拟信号→数字信号：需要经过采样、量化、编码三个步骤'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">模拟信号 vs 数字信号</text><text x="170" y="65" font-size="14" font-weight="bold" fill="#3d4f8a" text-anchor="middle">模拟信号（连续变化）</text><path d="M40 200 Q70 120 100 200 T160 200 T220 200 T280 200" stroke="#6266d9" stroke-width="2.5" fill="none"/><text x="170" y="240" font-size="12" fill="#2a3454" text-anchor="middle">波形平滑连续，适合近距离传输</text><text x="170" y="260" font-size="12" fill="#2a3454" text-anchor="middle">如：老式电话、录音磁带</text><line x1="340" y1="60" x2="340" y2="270" stroke="#6266d9" stroke-width="1" stroke-dasharray="5,5"/><text x="510" y="65" font-size="14" font-weight="bold" fill="#3d4f8a" text-anchor="middle">数字信号（离散存储）</text><polyline points="370,200 390,200 390,130 430,130 430,200 470,200 470,130 510,130 510,200 550,200 550,130 590,130 590,200 630,200 630,130 650,130" stroke="#6266d9" stroke-width="2.5" fill="none"/><text x="510" y="240" font-size="12" fill="#2a3454" text-anchor="middle">只有0和1，抗干扰强，适合远距离</text><text x="510" y="260" font-size="12" fill="#2a3454" text-anchor="middle">如：网络通信、数字电视</text></svg>', caption: '图1　模拟信号波形连续平滑，数字信号呈方波离散，各有适用场景。' },
      { type: 'heading', text: '三、文字编码' },
      { type: 'paragraph', text: '为了让计算机能处理文字，人们制定了各种编码标准，将每个字符对应为一个二进制编号。' },
      { type: 'list', items: ['ASCII码：美国标准信息交换码，使用1个字节（8位二进制）表示一个字符，可表示128个字符，包括英文字母、数字和常用符号', 'GBK码：汉字编码标准，使用2个字节表示一个汉字，可表示简体和繁体汉字，且兼容ASCII码', 'Unicode：统一码，使用2~4个字节，覆盖全球几乎所有语言的字符，是目前最通用的编码方案'] },
      { type: 'table', headers: ['编码标准', '字节数', '适用范围', '特点'], rows: [['ASCII码', '1字节', '英文、数字、符号', '最基础，128个字符'], ['GBK码', '2字节', '简繁体汉字', '兼容ASCII，适合中文'], ['Unicode', '2~4字节', '全球多语言', '最通用，覆盖面最广']] },
      { type: 'heading', text: '四、图像编码' },
      { type: 'paragraph', text: '图像在计算机中也有两种不同的编码方式：位图和矢量图，它们各有优缺点，适用于不同场景。' },
      { type: 'list', items: ['位图（点阵图）：由一个个像素点排列组成。放大后会失真（出现马赛克），适合表现色彩丰富的照片。常见格式：png、jpg、bmp、gif', '矢量图：由数学向量（点、线、面）构成。放大不失真，适合Logo、工程图等。常见格式：ai、dwg、cdr', '位图记录每个像素的颜色信息，矢量图记录图形的数学描述'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">位图 vs 矢量图</text><text x="170" y="62" font-size="14" font-weight="bold" fill="#3d4f8a" text-anchor="middle">位图（像素构成）</text><g transform="translate(100,80)"><rect x="0" y="0" width="20" height="20" fill="#6266d9"/><rect x="20" y="0" width="20" height="20" fill="#a8b4ee"/><rect x="40" y="0" width="20" height="20" fill="#6266d9"/><rect x="0" y="20" width="20" height="20" fill="#a8b4ee"/><rect x="20" y="20" width="20" height="20" fill="#6266d9"/><rect x="40" y="20" width="20" height="20" fill="#a8b4ee"/><rect x="0" y="40" width="20" height="20" fill="#6266d9"/><rect x="20" y="40" width="20" height="20" fill="#a8b4ee"/><rect x="40" y="40" width="20" height="20" fill="#6266d9"/></g><text x="170" y="170" font-size="12" fill="#2a3454" text-anchor="middle">由像素点排列组成</text><text x="170" y="192" font-size="12" fill="#2a3454" text-anchor="middle">放大后会失真（马赛克）</text><text x="170" y="214" font-size="12" fill="#2a3454" text-anchor="middle">适合照片，格式：png/jpg/bmp/gif</text><line x1="340" y1="60" x2="340" y2="230" stroke="#6266d9" stroke-width="1" stroke-dasharray="5,5"/><text x="510" y="62" font-size="14" font-weight="bold" fill="#3d4f8a" text-anchor="middle">矢量图（向量构成）</text><circle cx="510" cy="115" r="40" fill="none" stroke="#6266d9" stroke-width="3"/><polygon points="510,75 540,125 480,125" fill="none" stroke="#6266d9" stroke-width="3"/><line x1="510" y1="95" x2="510" y2="155" stroke="#6266d9" stroke-width="2" stroke-dasharray="3,3"/><text x="510" y="175" font-size="12" fill="#2a3454" text-anchor="middle">由数学向量构成</text><text x="510" y="197" font-size="12" fill="#2a3454" text-anchor="middle">放大不失真</text><text x="510" y="219" font-size="12" fill="#2a3454" text-anchor="middle">适合Logo，格式：ai/dwg/cdr</text><rect x="60" y="250" width="560" height="36" rx="8" fill="#d5dcf5" stroke="#6266d9" stroke-width="1"/><text x="340" y="273" font-size="12" fill="#3d4f8a" text-anchor="middle">位图记像素颜色，矢量图记数学描述——同样是圆，存储方式完全不同</text></svg>', caption: '图2　位图放大失真，矢量图放大不失真，适用场景不同。' },
      { type: 'heading', text: '五、位图文件大小计算' },
      { type: 'paragraph', text: '位图文件的大小可以通过公式来计算。这是考试中常考的知识点，需要掌握计算方法。' },
      { type: 'keypoint', label: '重点·位图文件大小公式', text: '<strong>位图文件大小(字节) = 14(文件头) + 40(信息头) + 颜色表项 + 图像分辨率 × 量化位数 ÷ 8</strong><br>其中：文件头固定14字节，信息头固定40字节；图像分辨率 = 宽 × 高（像素数）；量化位数是每个像素占的二进制位数（如24位真彩色）。' },
      { type: 'example', label: '例题·位图文件大小计算', text: '题目：一幅分辨率为800×600的24位真彩色位图（无颜色表），文件大小约为多少字节？<br>解析：根据公式，文件大小 = 14(文件头) + 40(信息头) + 0(无颜色表) + 800×600×24÷8 = 14 + 40 + 0 + 1440000 = 1440054字节。其中图像数据部分：800×600 = 480000个像素，每个像素24位(3字节)，所以480000×3 = 1440000字节。加上文件头和信息头共54字节，总计约1440054字节，约1.37MB。' },
      { type: 'warn', label: '易错·量化位数与字节的换算', text: '计算位图大小时，注意量化位数是"位(bit)"，而文件大小是"字节(byte)"，1字节=8位。所以公式中要"÷8"把位转换为字节。比如24位真彩色，每个像素占24÷8=3字节。常见错误是忘记除以8，导致结果放大8倍。' },
      { type: 'tip', label: '提示·编码类型速记', text: '文字编码记住"三步升级"：ASCII(英文,1字节) → GBK(中文,2字节) → Unicode(全球,2~4字节)。图像编码记住"二选一"：位图(像素,放大失真,适合照片) vs 矢量图(向量,放大不失真,适合Logo)。信号记住"连与断"：模拟(连续,近距离) vs 数字(离散,远距离)。' }
    ],
    exercises: [
      { type: 'choice', question: '计算机内部能够识别的信号是？', options: ['十进制数', '二进制信号（0和1）', '模拟信号', '任意进制数'], answer: '二进制信号（0和1）', explanation: '计算机内部由电子元件构成，只能识别高电平(1)和低电平(0)两种状态，即二进制信号。所有信息都必须编码为二进制才能被计算机处理。这就是数据编码的根本原因。' },
      { type: 'choice', question: '下列关于模拟信号和数字信号的说法，正确的是？', options: ['模拟信号抗干扰能力更强', '数字信号适合远距离传输', '模拟信号只有0和1两种状态', '数字信号波形是连续变化的'], answer: '数字信号适合远距离传输', explanation: '数字信号只有0和1两种离散状态，抗干扰能力强、保密性好，适合远距离传输（如网络通信）。模拟信号连续变化，处理简单但抗干扰差，适合近距离传输（如老式电话）。B正确，其他选项描述的都是模拟信号或错误特征。' },
      { type: 'choice', question: '一幅放大后不失真的Logo图案，最可能是哪种图像类型？', options: ['位图（png格式）', '位图（jpg格式）', '矢量图（ai格式）', '位图（bmp格式）'], answer: '矢量图（ai格式）', explanation: '矢量图由数学向量构成，放大不失真，适合Logo、工程图等，常见格式有ai、dwg、cdr。位图由像素构成，放大后会失真出现马赛克，适合照片，格式有png、jpg、bmp、gif。Logo需要放大不失真，应选矢量图。' },
      { type: 'fill', question: 'ASCII码使用___个字节表示一个字符，GBK码使用___个字节表示一个汉字，Unicode可使用___个字节表示全球多语言字符。', answer: '1；2；2~4', explanation: 'ASCII码是最基础的编码，1字节表示英文字母数字符号（128个字符）；GBK码是中文编码标准，2字节表示一个汉字，兼容ASCII；Unicode是最通用的编码，2~4字节覆盖全球几乎所有语言字符。' },
      { type: 'fill', question: '一幅分辨率为400×300的24位真彩色位图（无颜色表），其图像数据部分的大小为___字节，加上文件头和信息头共___字节后为文件总大小。', answer: '360000；360054', explanation: '图像数据 = 分辨率 × 量化位数 ÷ 8 = 400×300×24÷8 = 360000字节。文件总大小 = 14(文件头) + 40(信息头) + 0(无颜色表) + 360000 = 360054字节。注意量化位数24位要除以8转换为字节，每个像素占3字节。' }
    ]
  });
})();
