/* 信息技术 · 高三复习 · 数据与算法 · 第13节 Python语言基础 */
(function () {
  var v = gzGetVolume('it', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u13',
    name: '第13节 Python语言基础',
    chapter: '七、程序设计语言基础',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、常量与变量' },
      { type: 'paragraph', text: '程序里要处理各种数值，这些数值分两类。一类是常量：直接给定、在程序运行中不会改变的数，比如数学里的圆周率 3.14，或者写死的“及格线 60”。另一类是变量：用来“装”一个可能会变化的数，就像一个个带名字的盒子，盒子里的东西可以换。' },
      { type: 'paragraph', text: '举个生活例子：考试满分是常量（固定 100 分），你的得分是变量（每次考试都不同）。在 Python 里写“score = 90”，意思是把 90 放进名叫 score 的盒子里；下次写“score = 85”，盒子里就换成 85 了。' },
      { type: 'keypoint', label: '重点·常量与变量', text: '<strong>常量：直接给定、程序中不能改变的数值。变量：用于引用程序中可能变化的数值，用“名字 = 值”来赋值。</strong>变量的值可以随时改变，常量一般不变。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#eef2fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">常量与变量</text><rect x="40" y="64" width="280" height="150" rx="12" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="180" y="94" font-size="15" font-weight="bold" fill="#6266d9" text-anchor="middle">常量</text><text x="180" y="124" font-size="11" fill="#2a3454" text-anchor="middle">直接给定、运行中不变</text><text x="180" y="150" font-size="11" fill="#2a3454" text-anchor="middle">例：PI = 3.14</text><text x="180" y="174" font-size="11" fill="#2a3454" text-anchor="middle">例：满分 = 100</text><rect x="360" y="64" width="280" height="150" rx="12" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="500" y="94" font-size="15" font-weight="bold" fill="#6266d9" text-anchor="middle">变量</text><text x="500" y="124" font-size="11" fill="#2a3454" text-anchor="middle">装可能变化的数</text><text x="500" y="150" font-size="11" fill="#2a3454" text-anchor="middle">score = 90</text><text x="500" y="174" font-size="11" fill="#2a3454" text-anchor="middle">score = 85（可变）</text><line x1="320" y1="139" x2="358" y2="139" stroke="#6266d9" stroke-width="1.5"/><text x="339" y="130" font-size="11" fill="#6266d9" text-anchor="middle">对比</text><text x="340" y="252" font-size="12" fill="#6266d9" text-anchor="middle">变量像带名字的盒子，常量像刻死的数值</text></svg>', caption: '图1　常量固定不变，变量盒子里的数可以换。' },
      { type: 'heading', text: '二、变量命名要讲规矩' },
      { type: 'paragraph', text: '给变量起名字不是随便起的。Python 有几条基本规矩：名字可以由字母、数字和下划线组成，但不能以数字开头；不能用 Python 的关键字（如 if、for）当名字；字母大小写算不同的名字（age 和 Age 是两个变量）。' },
      { type: 'paragraph', text: '更重要的是命名要有意义。比起用 a、b、c 这种让人摸不着头脑的名字，用 score（成绩）、count（个数）、total（总和）这样的名字，别人一看就懂这个盒子装的是什么，程序也更好读、更好改。' },
      { type: 'list', items: ['可由字母、数字、下划线组成，不能以数字开头', '不能使用 if、for 等关键字作为变量名', '区分大小写，age 和 Age 不是同一个变量', '命名应尽量体现数据的意义，增加程序可读性'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 290" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="290" fill="#eef2fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">变量命名：好名字 vs 坏名字</text><rect x="40" y="60" width="290" height="120" rx="12" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="185" y="88" font-size="14" font-weight="bold" fill="#6266d9" text-anchor="middle">推荐（有意义）</text><text x="185" y="116" font-size="11" fill="#2a3454" text-anchor="middle">score = 90  成绩</text><text x="185" y="140" font-size="11" fill="#2a3454" text-anchor="middle">count = 5   个数</text><text x="185" y="164" font-size="11" fill="#2a3454" text-anchor="middle">total = 450 总和</text><rect x="350" y="60" width="290" height="120" rx="12" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="495" y="88" font-size="14" font-weight="bold" fill="#6266d9" text-anchor="middle">不推荐（无意义）</text><text x="495" y="116" font-size="11" fill="#2a3454" text-anchor="middle">a = 90</text><text x="495" y="140" font-size="11" fill="#2a3454" text-anchor="middle">b = 5</text><text x="495" y="164" font-size="11" fill="#2a3454" text-anchor="middle">c = 450</text><text x="340" y="226" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">命名规矩</text><text x="340" y="252" font-size="11" fill="#2a3454" text-anchor="middle">不以数字开头 · 不用关键字 · 区分大小写</text></svg>', caption: '图2　变量名要有意义，并遵守不以数字开头、不用关键字等规矩。' },
      { type: 'tip', label: '提示·赋值符号', text: '<strong>Python 里用单个等号“=”表示“赋值”（把右边的值放进左边的盒子），不是数学里的“相等”。</strong>比如“x = x + 1”意思是“把盒子里原来的数加 1 再放回去”，完全合法。' },
      { type: 'warn', label: '易错·变量未赋值就用', text: '变量必须“先装东西，再使用”。如果写“print(score)”但前面从没给 score 赋过值，程序会报错。还有同学把“1age”当变量名，以数字开头是违规的；把“for”当变量名，会跟关键字冲突。' },
      { type: 'example', label: '例题·判断变量名', text: '题目：下列不能作为 Python 变量名的是哪一个？A. score  B. student_name  C. 2num  D. total<br>解析：变量名不能以数字开头，“2num”以数字 2 开头，违反规则，不能作为变量名。score、student_name（含下划线）、total 都符合命名规则。所以答案是 C。' }
    ],
    exercises: [
      { type: 'choice', question: '下列关于常量的说法，正确的是？', options: ['常量在程序中可以改变', '常量是直接给定、程序中不能改变的数值', '常量必须用一个盒子装起来', '变量和常量没有区别'], answer: '常量是直接给定、程序中不能改变的数值', explanation: '常量是直接给定、在程序运行过程中不会改变的数值（如圆周率 3.14）。变量才用于引用可能变化的数值，且变量与常量是不同的概念。' },
      { type: 'choice', question: '在 Python 中，语句“score = 90”的含义是？', options: ['判断 score 是否等于 90', '把数值 90 赋给变量 score', '把 score 加 90', '删除变量 score'], answer: '把数值 90 赋给变量 score', explanation: '在 Python 中单个等号“=”是赋值符号，表示把右边的值放进左边的变量里。所以“score = 90”是把 90 存进名叫 score 的变量。' },
      { type: 'choice', question: '下列可以作为 Python 变量名的是？', options: ['2num', 'for', 'student_name', 'my-name'], answer: 'student_name', explanation: '变量名可由字母、数字、下划线组成且不能以数字开头，也不能用关键字。2num 以数字开头，for 是关键字，my-name 含减号，都不合法；student_name 用下划线连接，合法。' },
      { type: 'fill', question: '___用于引用程序中可能变化的数值；___是直接给定、程序中不能改变的数值。', answer: '变量；常量', explanation: '变量用于引用可能变化的数值；常量是直接给定、在程序运行中不变的数值。二者是程序中两类基本的数值表示。' },
      { type: 'fill', question: '变量命名应尽量体现数据的___，以增加程序的___；且变量名不能以___开头。', answer: '意义；可读性；数字', explanation: '有意义的命名能让人一眼看懂盒子装的是什么，提高程序可读性；命名规矩要求变量名不能以数字开头。' }
    ]
  });
})();
