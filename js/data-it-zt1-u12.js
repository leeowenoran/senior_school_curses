/* 信息技术 · 高三复习 · 数据与算法 · 第12节 程序设计的一般过程 */
(function () {
  var v = gzGetVolume('it', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u12',
    name: '第12节 程序设计的一般过程',
    chapter: '七、程序设计语言基础',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、写程序不是上来就敲代码' },
      { type: 'paragraph', text: '很多同学以为“学编程就是学敲代码”，其实敲代码只是最后一步。真正写程序，要按部就班地走四个阶段：分析问题、设计算法、编写程序、运行调试。先想清楚要干什么、怎么算，最后才动手写。' },
      { type: 'paragraph', text: '就像做菜：先明确“今天给几个人吃、做什么菜”（分析问题），再想好“先放油还是先放水、火多大”（设计算法），然后照着菜谱下锅（编写程序），最后尝一口咸淡、不对就改（运行调试）。顺序乱了，菜就做砸了。' },
      { type: 'keypoint', label: '重点·四步流程', text: '<strong>程序设计的一般过程：分析问题 → 设计算法 → 编写程序 → 运行调试。</strong>前两步在“脑子”里完成，后两步才在“电脑”上完成，但前两步往往比后两步更重要。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef2fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">程序设计的一般过程（四步）</text><rect x="20" y="70" width="145" height="60" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="92" y="96" font-size="13" font-weight="bold" fill="#6266d9" text-anchor="middle">①分析问题</text><text x="92" y="116" font-size="10" fill="#2a3454" text-anchor="middle">确定方法、描述数据</text><line x1="165" y1="100" x2="200" y2="100" stroke="#6266d9" stroke-width="1.5"/><rect x="202" y="70" width="145" height="60" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="274" y="96" font-size="13" font-weight="bold" fill="#6266d9" text-anchor="middle">②设计算法</text><text x="274" y="116" font-size="10" fill="#2a3454" text-anchor="middle">选方法、设步骤</text><line x1="347" y1="100" x2="382" y2="100" stroke="#6266d9" stroke-width="1.5"/><rect x="384" y="70" width="145" height="60" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="456" y="96" font-size="13" font-weight="bold" fill="#6266d9" text-anchor="middle">③编写程序</text><text x="456" y="116" font-size="10" fill="#2a3454" text-anchor="middle">选语言、写代码</text><line x1="529" y1="100" x2="564" y2="100" stroke="#6266d9" stroke-width="1.5"/><rect x="566" y="70" width="100" height="60" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="616" y="96" font-size="13" font-weight="bold" fill="#6266d9" text-anchor="middle">④调试</text><text x="616" y="116" font-size="10" fill="#2a3454" text-anchor="middle">改错、运行</text><line x1="616" y1="130" x2="616" y2="170" stroke="#6266d9" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="616" y1="170" x2="274" y2="170" stroke="#6266d9" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="274" y1="170" x2="274" y2="130" stroke="#6266d9" stroke-width="1.5" stroke-dasharray="4,3"/><text x="340" y="210" font-size="12" fill="#6266d9" text-anchor="middle">调试发现问题，常要回头改算法或改代码</text></svg>', caption: '图1　程序设计四步：分析问题→设计算法→编写程序→运行调试，出错会回头修改。' },
      { type: 'heading', text: '二、四步分别做什么' },
      { type: 'paragraph', text: '第一步分析问题：弄清楚要解决的到底什么问题，确定用什么方法解决，并把要用到的数据描述清楚。第二步设计算法：选一种描述算法的方法（自然语言、流程图、伪代码），把解决问题的步骤设计出来。这两步都还没碰电脑。' },
      { type: 'list', items: ['分析问题：确定解决问题的方法，描述数据', '设计算法：选择描述算法的方法，设计算法', '编写程序：选择程序设计语言，把算法写成代码', '运行调试：修改语法错误，运行程序，发现并修改错误'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 290" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="290" fill="#eef2fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">每步的关键产出</text><rect x="30" y="60" width="300" height="64" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="180" y="88" font-size="13" font-weight="bold" fill="#6266d9" text-anchor="middle">①分析问题</text><text x="180" y="110" font-size="11" fill="#2a3454" text-anchor="middle">产出：问题理解与数据说明</text><rect x="350" y="60" width="300" height="64" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="500" y="88" font-size="13" font-weight="bold" fill="#6266d9" text-anchor="middle">②设计算法</text><text x="500" y="110" font-size="11" fill="#2a3454" text-anchor="middle">产出：流程图/伪代码</text><rect x="30" y="146" width="300" height="64" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="180" y="174" font-size="13" font-weight="bold" fill="#6266d9" text-anchor="middle">③编写程序</text><text x="180" y="196" font-size="11" fill="#2a3454" text-anchor="middle">产出：可运行的源代码</text><rect x="350" y="146" width="300" height="64" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="500" y="174" font-size="13" font-weight="bold" fill="#6266d9" text-anchor="middle">④运行调试</text><text x="500" y="196" font-size="11" fill="#2a3454" text-anchor="middle">产出：正确运行的程序</text><text x="340" y="256" font-size="12" fill="#6266d9" text-anchor="middle">前两步在脑中，后两步在电脑上</text></svg>', caption: '图2　四步各自的关键产出：从理解问题，到算法，到代码，到能正确运行的程序。' },
      { type: 'tip', label: '提示·考试常考填空', text: '<strong>记住“分析、设计、编写、调试”八个字顺序不能乱。</strong>选择题常把顺序打乱让你排，或问“选语言写代码”属于哪一步（答：编写程序），“画流程图”属于哪一步（答：设计算法）。' },
      { type: 'warn', label: '易错·调试不是最后才想起', text: '有同学把“运行调试”当成写完代码之后的事，其实调试贯穿始终。一旦发现算法想错了，要回头改算法；发现代码写错了，要改代码。调试不只是改“语法错误”，还包括改“逻辑错误”（程序能跑但答案不对）。' },
      { type: 'example', label: '例题·排步骤', text: '题目：小王想写一个“计算全班平均分”的程序。他先画了一张流程图，标出“输入成绩、累加、除以人数”的步骤；接着用 Python 把流程图写成代码；运行后发现除以 0 报错，于是加了“人数不为 0”的判断。请指出这三件事分别属于哪个阶段。<br>解析：画流程图属于“设计算法”；用 Python 写代码属于“编写程序”；运行发现错误并加判断属于“运行调试”。最开始的“想算平均分”属于“分析问题”。顺序是分析问题→设计算法→编写程序→运行调试。' }
    ],
    exercises: [
      { type: 'choice', question: '程序设计一般过程的正确顺序是？', options: ['编写程序→分析问题→设计算法→运行调试', '分析问题→设计算法→编写程序→运行调试', '设计算法→编写程序→分析问题→运行调试', '运行调试→分析问题→设计算法→编写程序'], answer: '分析问题→设计算法→编写程序→运行调试', explanation: '标准顺序是：先分析问题（确定方法和数据），再设计算法（设计步骤），然后编写程序（写代码），最后运行调试（改错运行）。' },
      { type: 'choice', question: '“选择一种描述算法的方法，把解决问题的步骤设计出来（如画流程图）”，这属于哪个阶段？', options: ['分析问题', '设计算法', '编写程序', '运行调试'], answer: '设计算法', explanation: '设计算法阶段要选择合适的描述方法（自然语言、流程图、伪代码）并设计算法步骤。画流程图正是这一阶段的典型活动。' },
      { type: 'choice', question: '运行调试阶段的主要工作不包括？', options: ['修改语法错误', '运行程序', '发现并修改错误', '确定用什么方法解决问题'], answer: '确定用什么方法解决问题', explanation: '确定解决问题的方法属于“分析问题”阶段。运行调试阶段的工作是修改语法错误、运行程序、发现并修改错误。' },
      { type: 'fill', question: '程序设计四步：分析问题、___、编写程序、___。其中“用 Python 把算法写成代码”属于___阶段。', answer: '设计算法；运行调试；编写程序', explanation: '四步为分析问题、设计算法、编写程序、运行调试。把算法写成代码是编写程序阶段的工作。' },
      { type: 'fill', question: '在___阶段要确定解决问题的方法并描述数据；在___阶段要运行程序并修改语法错误和逻辑错误。', answer: '分析问题；运行调试', explanation: '分析问题阶段明确方法和数据；运行调试阶段运行程序、发现并修改语法错误以及逻辑错误。' }
    ]
  });
})();
