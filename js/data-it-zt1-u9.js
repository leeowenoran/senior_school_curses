/* 信息技术 · 高三复习 · 数据与算法 · 第9节 枚举算法 */
(function () {
  var v = gzGetVolume('it', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u9',
    name: '第9节 枚举算法',
    chapter: '六、常用算法思想',
    difficulty: '中等',
    content: [
      { type: 'heading', text: '一、什么是枚举算法' },
      { type: 'paragraph', text: '枚举算法，说白了就是“一个一个试”。遇到一道题，如果不知道巧办法，就把问题所有可能的解先全部罗列出来，再对每一个可能的解做判断，看它是不是真正的解。凡是符合条件的，就保留；不符合的，就丢掉。最后留下的就是答案。' },
      { type: 'paragraph', text: '生活里到处都有枚举。比如你忘了一把密码锁的后两位，范围只可能是00到99，那你就从00、01、02一直试到99，总有一次能打开——这就是枚举。计算机算得快，所以这个“笨办法”反而常常是最可靠的办法。' },
      { type: 'list', items: ['基本思想：把问题所有可能的解一一罗列出来', '对每一个可能的解，判断它是不是真正的解', '最后保留所有判断为“是”的解'] },
      { type: 'keypoint', label: '重点·枚举的核心', text: '<strong>枚举 = 循环列举 + 分支检验。</strong>用循环结构把所有可能的解一个个产生出来，再用分支结构（如果……就……）去检验它是不是真解。这两个结构配在一起，就是枚举算法的骨架。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">枚举算法的基本思想</text><rect x="24" y="70" width="150" height="56" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="99" y="95" font-size="13" font-weight="bold" fill="#6266d9" text-anchor="middle">① 确定范围</text><text x="99" y="114" font-size="11" fill="#2a3454" text-anchor="middle">所有可能的解</text><line x1="174" y1="98" x2="212" y2="98" stroke="#6266d9" stroke-width="1.5"/><text x="193" y="90" font-size="12" fill="#6266d9" text-anchor="middle">▶</text><rect x="214" y="70" width="156" height="56" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="292" y="95" font-size="13" font-weight="bold" fill="#6266d9" text-anchor="middle">② 循环列举</text><text x="292" y="114" font-size="11" fill="#2a3454" text-anchor="middle">逐一罗列候选解</text><line x1="370" y1="98" x2="408" y2="98" stroke="#6266d9" stroke-width="1.5"/><text x="389" y="90" font-size="12" fill="#6266d9" text-anchor="middle">▶</text><polygon points="484,72 544,72 514,110 454,110" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="499" y="98" font-size="13" font-weight="bold" fill="#6266d9" text-anchor="middle">③检验</text><line x1="499" y1="142" x2="499" y2="172" stroke="#6266d9" stroke-width="1.5"/><text x="508" y="162" font-size="11" fill="#6266d9">是</text><rect x="419" y="174" width="160" height="50" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="499" y="202" font-size="12" fill="#2a3454" text-anchor="middle">④ 记录为真正解</text><line x1="454" y1="110" x2="412" y2="98" stroke="#6266d9" stroke-width="1.5" stroke-dasharray="4,3"/><text x="400" y="86" font-size="11" fill="#6266d9">否→下一个</text><text x="340" y="262" font-size="12" fill="#2a3454" text-anchor="middle">全部候选检验完，输出所有真正解</text></svg>', caption: '图1　枚举算法的四个步骤：先定范围，再循环列举，然后逐个检验，最后保留真解。' },
      { type: 'heading', text: '二、枚举算法的设计过程' },
      { type: 'paragraph', text: '照着思想落地成程序，枚举算法有两件必须做的事。第一件是“列举”，也就是用循环结构把可能的解一个一个产生出来，比如让数字 i 从 1 跑到 100。第二件是“检验”，也就是用分支结构（如果……就……）去判断这个解满不满足题目条件。' },
      { type: 'list', items: ['逐一列举可能解的范围：用循环结构实现，例如 for i in range(1,101)', '对每一个可能的解进行检验：用分支结构实现，例如 if 满足条件', '检验通过的，收集起来作为答案；检验不通过的，直接跳过'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef2fc"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#3d4f8a" text-anchor="middle">例：找出 1~20 中能被 7 整除的数</text><rect x="30" y="64" width="200" height="50" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="130" y="93" font-size="12" fill="#2a3454" text-anchor="middle">循环 i = 1, 2, …, 20</text><rect x="270" y="64" width="200" height="50" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="370" y="93" font-size="12" fill="#2a3454" text-anchor="middle">if i % 7 == 0 ?</text><rect x="510" y="64" width="140" height="50" rx="10" fill="#d5dcf5" stroke="#6266d9" stroke-width="1.5"/><text x="580" y="93" font-size="12" fill="#2a3454" text-anchor="middle">记录 i</text><line x1="230" y1="89" x2="268" y2="89" stroke="#6266d9" stroke-width="1.5"/><line x1="470" y1="89" x2="508" y2="89" stroke="#6266d9" stroke-width="1.5"/><text x="340" y="160" font-size="13" font-weight="bold" fill="#3d4f8a" text-anchor="middle">检验过程</text><text x="60" y="196" font-size="12" fill="#2a3454">7 → 7%7=0 ✓ 真解</text><text x="60" y="222" font-size="12" fill="#2a3454">14 → 14%7=0 ✓ 真解</text><text x="360" y="196" font-size="12" fill="#2a3454">1 → 1%7=1 ✗ 跳过</text><text x="360" y="222" font-size="12" fill="#2a3454">13 → 13%7=6 ✗ 跳过</text><text x="340" y="272" font-size="13" font-weight="bold" fill="#6266d9" text-anchor="middle">答案：7、14</text></svg>', caption: '图2　用枚举找出 1~20 中能被 7 整除的数：循环产生候选，再用取余判断是否整除。' },
      { type: 'keypoint', label: '重点·枚举的优缺点', text: '<strong>优点：对现实生活的直接描述，容易理解，也容易证明它一定不会漏解。缺点：要考察大量状态，效率比较低。</strong>所以当解的范围很大时，要想法子缩小范围。' },
      { type: 'tip', label: '提示·提高枚举效率', text: '<strong>两条经验：第一，做到既不遗漏也不重复；第二，尽量结合解析算法，先用数学方法缩小变量的数量和范围。</strong>比如找“两数之和为100”，不必让两个数都从1试到100，只要一个数确定了，另一个就等于100减去它，这样枚举量立刻减半。' },
      { type: 'warn', label: '易错·遗漏和重复', text: '最容易出错的地方是枚举范围定错。范围定小了会漏解，定大了又会算出根本不存在的解；循环边界写得不对（比如把 range(1,100) 写成 range(1,99)）也会少算一个。写程序前先把“从几到几”在草稿上写清楚。' },
      { type: 'example', label: '例题·枚举应用', text: '题目：用枚举思想找出 1 到 50 中既能被 3 整除又能被 5 整除的数。<br>解析：让 i 从 1 循环到 50，对每个 i 检验“i%3==0 且 i%5==0”（也就是 i%15==0）。满足的 i 有 15、30、45。所以答案是 15、30、45。这里还可以先缩小范围：既然要被15整除，直接让 i 取 15、30、45 即可，不必从1试到50，效率更高。' },
      { type: 'table', headers: ['环节', '用什么结构', '作用'], rows: [['列举可能解', '循环结构', '把候选解一个个产生出来'], ['检验是否真解', '分支结构', '判断候选解是否满足条件'], ['收集答案', '顺序结构', '把通过检验的解保存或输出']] }
    ],
    exercises: [
      { type: 'choice', question: '枚举算法的基本思想可以概括为？', options: ['先排序再查找', '把所有可能解一一罗列并逐个检验', '用递归不断缩小问题', '只检验最可能的那一个解'], answer: '把所有可能解一一罗列并逐个检验', explanation: '枚举算法的核心就是“列举 + 检验”：先把问题所有可能的解全部罗列出来，再对每一个可能的解判断是否为真正的解。它不依赖排序或递归，也不只检验一个解。' },
      { type: 'choice', question: '在枚举算法的设计过程中，“对每一个可能的解进行检验”通常用哪种程序结构实现？', options: ['循环结构', '分支结构', '顺序结构', '数据结构'], answer: '分支结构', explanation: '列举可能解用循环结构（如 for 循环）实现；而判断某个候选解是否满足条件、是不是真解，要靠分支结构（如 if 判断）来实现。' },
      { type: 'choice', question: '下列关于枚举算法优缺点的说法，正确的是？', options: ['枚举一定比解析算法快', '枚举容易理解、容易证明正确性，但效率往往较低', '枚举不会遗漏解，所以不需要考虑重复', '枚举只能用于数字问题'], answer: '枚举容易理解、容易证明正确性，但效率往往较低', explanation: '枚举的优点是对现实生活描述直接、易于理解、容易证明正确性；缺点是需考察大量状态，效率较低。它仍要注意不遗漏、不重复，并且不仅限数字问题。' },
      { type: 'fill', question: '枚举算法的两个关键步骤是：用___结构逐一列举可能解，用___结构对每一个解进行检验。', answer: '循环；分支', explanation: '设计枚举算法时，列举所有可能解靠循环结构完成，判断每个解是否为真解靠分支结构（if 判断）完成，二者结合就是枚举的骨架。' },
      { type: 'fill', question: '为了提高枚举效率，应做到既不___也不___，并尽可能结合___算法来缩小枚举变量的数量和范围。', answer: '遗漏；重复；解析', explanation: '枚举的两个注意点：一是既不遗漏任何一个解也不重复枚举；二是尽可能结合解析算法，先用数学方法缩小范围，从而提高效率。' }
    ]
  });
})();
