/* ============================================================
 * 化学 · 选择性必修2 物质结构与性质 · 第一章 原子结构与性质
 * 课时2：能层与能级
 * 数据注入：chemistry.xb2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'xb2');
  if (!v) return;

  v.points.push({
    id: 'xb2-u2',
    name: '能层与能级',
    chapter: '选择性必修2 物质结构与性质 · 第一章 原子结构与性质',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、能层：电子住的“楼层”' },
      { type: 'paragraph', text: '在多电子原子里，电子离核有远有近、能量有高有低。化学家按能量由低到高、离核由近到远，把电子运动区域分成一个个“楼层”，叫能层（也叫电子层）。从里到外依次用 K、L、M、N、O、P、Q 表示，K 是最靠核、能量最低的一层，就像大楼的 1 楼离地面最近。' },
      { type: 'keypoint', label: '重点·能层与最多电子数', text: '第 n 个能层（K 对应 n=1，L 对应 n=2，依此类推）最多能容纳的电子数是 <strong>2n²</strong>。所以 K 层最多 2 个、L 层最多 8 个、M 层最多 18 个、N 层最多 32 个、O 层 50 个、P 层 72 个、Q 层 98 个。' },
      { type: 'list', items: ['K 层（n=1）：最多 2 个电子', 'L 层（n=2）：最多 8 个电子', 'M 层（n=3）：最多 18 个电子', 'N 层（n=4）：最多 32 个电子', 'O、P、Q 层：最多 50、72、98 个电子'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">能层：电子住的“楼层”（K 在最里、能量最低）</text><circle cx="340" cy="185" r="40" fill="#d98e3a" stroke="#b5651d" stroke-width="2"/><text x="340" y="190" font-size="13" fill="#ffffff" text-anchor="middle">K</text><circle cx="340" cy="185" r="80" fill="none" stroke="#b5651d" stroke-width="2"/><text x="340" y="104" font-size="13" fill="#4a3724" text-anchor="middle">L</text><circle cx="340" cy="185" r="120" fill="none" stroke="#b5651d" stroke-width="2"/><text x="340" y="64" font-size="13" fill="#4a3724" text-anchor="middle">M</text><circle cx="340" cy="185" r="155" fill="none" stroke="#b5651d" stroke-width="2"/><text x="340" y="40" font-size="13" fill="#4a3724" text-anchor="middle">N</text><text x="540" y="270" font-size="13" fill="#4a3724" text-anchor="middle">离核越远，能层越大、能量越高</text><text x="120" y="270" font-size="13" fill="#d98e3a" text-anchor="middle">核</text></svg>', caption: '图1　能层像大楼的楼层，K 最靠核、能量最低，向外依次为 L、M、N，能层越大能量越高。' },
      { type: 'heading', text: '二、能级：每层里的“隔间”' },
      { type: 'paragraph', text: '同一能层里的电子，能量也还不完全一样，会再分成更小的“隔间”，叫能级。能级用 s、p、d、f 等字母表示，同一能层里能量按 s < p < d < f 依次升高。注意能级是“能层里的细分”，比如 L 层里有 2s 和 2p 两个能级，M 层里有 3s、3p、3d 三个能级。' },
      { type: 'keypoint', label: '重点·能级容纳电子与轨道数', text: '每个能级最多能容纳的电子数固定：<strong>s 最多 2 个、p 最多 6 个、d 最多 10 个、f 最多 14 个</strong>。对应的“原子轨道”数分别是 1、3、5、7 个（每个轨道最多住 2 个电子，所以轨道数 = 最多电子数 ÷ 2）。' },
      { type: 'list', items: ['s 能级：1 个轨道，最多容纳 2 个电子', 'p 能级：3 个轨道（p_x、p_y、p_z），最多容纳 6 个电子', 'd 能级：5 个轨道，最多容纳 10 个电子', 'f 能级：7 个轨道，最多容纳 14 个电子'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">能级与原子轨道数：s/p/d/f</text><rect x="40" y="70" width="140" height="60" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="110" y="96" font-size="15" fill="#4a3724" text-anchor="middle" font-weight="bold">s 能级</text><text x="110" y="118" font-size="12" fill="#4a3724" text-anchor="middle">1 轨道 / 2 电子</text><rect x="200" y="70" width="140" height="60" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="270" y="96" font-size="15" fill="#4a3724" text-anchor="middle" font-weight="bold">p 能级</text><text x="270" y="118" font-size="12" fill="#4a3724" text-anchor="middle">3 轨道 / 6 电子</text><rect x="360" y="70" width="140" height="60" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="430" y="96" font-size="15" fill="#4a3724" text-anchor="middle" font-weight="bold">d 能级</text><text x="430" y="118" font-size="12" fill="#4a3724" text-anchor="middle">5 轨道 / 10 电子</text><rect x="520" y="70" width="140" height="60" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="590" y="96" font-size="15" fill="#4a3724" text-anchor="middle" font-weight="bold">f 能级</text><text x="590" y="118" font-size="12" fill="#4a3724" text-anchor="middle">7 轨道 / 14 电子</text><rect x="60" y="170" width="30" height="30" fill="#d98e3a"/><text x="110" y="200" font-size="12" fill="#4a3724" text-anchor="middle">□=1 轨道</text><rect x="220" y="170" width="30" height="30" fill="#d98e3a"/><rect x="256" y="170" width="30" height="30" fill="#d98e3a"/><rect x="292" y="170" width="30" height="30" fill="#d98e3a"/><text x="290" y="200" font-size="12" fill="#4a3724" text-anchor="middle">3 个 □</text><text x="340" y="270" font-size="13" fill="#4a3724" text-anchor="middle">每个能级好比一排“床位”，轨道数决定了最多能住多少电子</text></svg>', caption: '图2　s、p、d、f 能级分别含 1、3、5、7 个原子轨道，最多容纳 2、6、10、14 个电子。' },
      { type: 'heading', text: '三、能级交错：小楼层里藏着“插队”现象' },
      { type: 'paragraph', text: '一般来说，能层越大、能级越高；但事情没这么简单。当能层数变大后，会出现“能级交错”：高一层里靠前的能级，反而比低一层里靠后的能级能量更低。最典型的是 4s 的能量低于 3d，也就是说电子会先填 4s、再填 3d，像排队时后面的人插到了前面。' },
      { type: 'keypoint', label: '重点·三条能量规律', text: '<strong>①同一能层内：E(s) < E(p) < E(d) < E(f)。②不同能层同能级：1s < 2s < 3s < 4s…… 能层越大能量越高。③能级交错：例如 E(4s) < E(3d)、E(5s) < E(4d)、E(6s) < E(4f) < E(5d)。</strong>' },
      { type: 'table', headers: ['能层(n)', '包含能级', '该层最多电子数(2n²)'], rows: [['K（1）', '1s', '2'], ['L（2）', '2s、2p', '8'], ['M（3）', '3s、3p、3d', '18'], ['N（4）', '4s、4p、4d、4f', '32'], ['O（5）', '5s、5p、5d、5f', '50']] },
      { type: 'warn', label: '易错·能层≠能级', text: '很多同学把“能层”和“能级”混为一谈。能层是 K/L/M/N 这种“大楼层”，能级是每层里的 s/p/d/f 这种“隔间”。M 层最多 18 个电子，但这 18 个要分到 3s(2)、3p(6)、3d(10) 三个能级里，并不是说 M 层只有一个“M 能级”。做题时先分清问的是能层还是能级。' },
      { type: 'example', label: '例题·能级能量排序', text: '题目：下列各能级能量由低到高排列正确的是？<br>A. E(3d) < E(4s) < E(3p)<br>B. E(3p) < E(4s) < E(3d)<br>C. E(4s) < E(3p) < E(3d)<br>D. E(3d) < E(3p) < E(4s)<br><br><strong>解析</strong>：同能层内 3p < 3d；又有能级交错 E(4s) < E(3d)。而 3p 属于第三层、能量低于第四层的 4s，所以顺序是 E(3p) < E(4s) < E(3d)，选 B。' },
      { type: 'tip', label: '提示·记交错靠“构造原理”', text: '以后填电子有一个大顺序 1s→2s→2p→3s→3p→4s→3d→4p→……，其中 4s 排在 3d 前就是能级交错的直接体现。先记住“4s 比 3d 先填”这个结论，能帮你避开大量排序题的坑，等学完下一节构造原理就更清楚了。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">能级交错：E(3p) &lt; E(4s) &lt; E(3d)</text><text x="60" y="290" font-size="13" fill="#4a3724" text-anchor="middle">能量 →</text><line x1="60" y1="270" x2="620" y2="270" stroke="#b5651d" stroke-width="2"/><rect x="120" y="190" width="60" height="80" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="150" y="235" font-size="13" fill="#4a3724" text-anchor="middle">3p</text><rect x="300" y="150" width="60" height="120" fill="#d98e3a" stroke="#b5651d" stroke-width="2"/><text x="330" y="215" font-size="13" fill="#ffffff" text-anchor="middle">4s</text><rect x="480" y="90" width="60" height="180" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="510" y="185" font-size="13" fill="#4a3724" text-anchor="middle">3d</text><text x="340" y="305" font-size="13" fill="#4a3724" text-anchor="middle">柱子越矮能量越低：3p 最低，4s 居中（插队），3d 最高</text></svg>', caption: '图3　能级交错直观图：4s 能量低于 3d，所以电子先填 4s 再填 3d。' }
    ],
    exercises: [
      { type: 'choice', question: '第 n 个能层最多能容纳的电子数，用 n 表示的式子是？', options: ['n', '2n', 'n²', '2n²'], answer: '2n²', explanation: '能层最多电子数公式为 2n²。代入验证：K 层 n=1 时 2×1²=2，L 层 n=2 时 2×4=8，M 层 n=3 时 2×9=18，都与事实相符，所以选 2n² 而非 n、2n 或 n²。' },
      { type: 'choice', question: 'p 能级包含的原子轨道数是？', options: ['1', '3', '5', '7'], answer: '3', explanation: 'p 能级有 3 个互相垂直的原子轨道，分别记作 p_x、p_y、p_z，每个轨道最多住 2 个电子，所以 p 能级最多容纳 6 个电子。轨道数 3 = 最多电子数 6 ÷ 2。s、d、f 的轨道数分别是 1、5、7。' },
      { type: 'choice', question: '关于能级能量，下列说法正确的是？', options: ['E(3d) < E(4s)', 'E(4s) < E(3d)', 'E(2s) < E(1s)', '同能层内 E(p) < E(s)'], answer: 'E(4s) < E(3d)', explanation: '存在能级交错，4s 能量低于 3d，所以 E(4s) < E(3d) 正确。能层越大同能级能量越高，故 E(2s) > E(1s)；同一能层内能量 s 最低，应是 E(s) < E(p)。其余三项都写反了。' },
      { type: 'fill', question: 'M 层（对应 n=3）按公式 2n² 计算，最多能容纳的电子数是___个。', answer: '18', explanation: 'M 层是第 3 能层，n=3，最多电子数 = 2×3² = 2×9 = 18。这 18 个电子分别住在 3s(2 个)、3p(6 个)、3d(10 个) 三个能级里，加总正好 18。' },
      { type: 'fill', question: 's 能级最多容纳 2 个电子，每个轨道最多住 2 个电子，因此 s 能级含有___个原子轨道。', answer: '1', explanation: '原子轨道数 = 该能级最多电子数 ÷ 每个轨道容纳的电子数(2)。s 能级最多 2 个电子，2 ÷ 2 = 1，所以 s 能级只有 1 个原子轨道。同理 p 能级 6÷2=3 个轨道，d 能级 5 个，f 能级 7 个。' }
    ]
  });
})();
