/* ============================================================
 * 高二物理 · 选择性必修第二册 · 第二章 电磁感应
 * 课时5：电磁感应现象
 * 数据注入：physics.xb2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb2');
  if (!v) return;

  v.points.push({
    id: 'xb2-u5',
    name: '电磁感应现象',
    chapter: '选择性必修第二册 · 第二章 电磁感应',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、从"电生磁"到"磁生电"' },
      { type: 'paragraph', text: '1820年奥斯特发现，通电导线能让旁边的磁针偏转，说明"电可以生磁"。既然电能够产生磁，人们自然想到：磁能不能反过来产生电呢？英国科学家法拉第为此苦苦探索了整整十年，终于在1831年发现：当穿过闭合线圈的磁场发生变化时，线圈里会冒出电流。这种"磁生电"的现象，就是我们这一章要学的电磁感应。' },
      { type: 'keypoint', label: '重点·什么是电磁感应', text: '<strong>电磁感应是指：当闭合回路的磁通量发生变化时，回路中就会产生感应电流的现象。</strong>产生的电流叫感应电流，产生的电动势叫感应电动势。' },
      { type: 'paragraph', text: '要理解电磁感应，先要认识一个量——磁通量。我们可以把磁感线想象成一条条"看不见的线"，磁通量就表示有多少条磁感线穿过了某一个面。穿过这个面的磁感线越多，磁通量就越大。' },
      { type: 'list', items: ['磁通量 Φ 表示穿过某个面的磁感线条数', '当磁场 B 垂直穿过面积 S 时，大小近似为 Φ = B × S', 'B 越大、S 越大，或者磁场与面的夹角越正对，磁通量越大', '磁通量变化，就是指 Φ 比之前多了或者少了'] },
      { type: 'heading', text: '二、产生感应电流的条件' },
      { type: 'paragraph', text: '做了大量实验后，科学家总结出产生感应电流的两个缺一不可的条件：第一，电路必须是闭合的；第二，穿过这个闭合回路的磁通量必须发生变化。两个条件少一个都不行。' },
      { type: 'keypoint', label: '重点·产生感应电流的条件', text: '<strong>闭合回路 + 磁通量发生变化，二者同时满足，才有感应电流。</strong>只闭合但磁通量不变，或者磁通量变了但电路不闭合，都不会有感应电流。' },
      { type: 'list', items: ['磁场强弱 B 发生变化（比如移近或移远磁铁）', '回路包围的面积 S 发生变化（比如闭合电路的一部分导体在运动）', '磁场与面的夹角发生变化（比如线圈在磁场中转动）', '以上三种都会造成磁通量 Φ 改变，从而可能产生感应电流'] },
      { type: 'table', headers: ['情形', '磁通量是否变化', '是否有感应电流'], rows: [['闭合线圈在匀强磁场中平移', '不变', '无'], ['磁铁插入或拔出闭合线圈', '变化', '有'], ['闭合电路的一部分导体切割磁感线', '变化', '有'], ['开路线圈在磁场中转动', '变化但电路不闭合', '无']] },
      { type: 'example', label: '例题·判断有无感应电流', text: '判断下列情形中闭合线圈里有无感应电流：<br>① 一个闭合矩形线圈在匀强磁场中沿磁感线方向平移。<br>② 一个闭合线圈套在条形磁铁上，把磁铁向上抽出。<br><br><strong>解析</strong>：<br>① 线圈平移时，穿过它的磁感线条数没有变，磁通量不变，所以<strong>没有</strong>感应电流。<br>② 抽出磁铁时，穿过线圈的磁通量在减小，发生变化，所以<strong>有</strong>感应电流。' },
      { type: 'warn', label: '易错', text: '很多同学以为"只要在磁场里动就有感应电流"，这是错的。<strong>关键是磁通量有没有变化。</strong>线圈在匀强磁场中平移、磁通量不变，就没有电流；反过来，磁铁不动、线圈不动但电路断开，磁通量虽然可能被磁铁的磁场穿过，因为不闭合也没有电流。' },
      { type: 'heading', text: '三、楞次定律——判断感应电流方向' },
      { type: 'paragraph', text: '有了感应电流，它的方向朝哪边？俄国物理学家楞次在1834年总结出一条规律：感应电流产生的磁场，总是要阻碍引起感应电流的磁通量的变化。这就是楞次定律。' },
      { type: 'keypoint', label: '重点·楞次定律', text: '<strong>感应电流的磁场，总要阻碍引起它的磁通量的变化。</strong>原磁通量增加时，感应磁场与它反向；原磁通量减少时，感应磁场与它同向。' },
      { type: 'tip', label: '提示', text: '<strong>"阻碍变化"不等于"阻止变化"。</strong>感应电流的磁场只是想拖慢磁通量变化的脚步，并不能把变化完全挡住。磁通量终究还是会按照外界的原因继续增加或减少下去。' },
      { type: 'heading', text: '四、右手定则——切割磁感线时判断方向' },
      { type: 'paragraph', text: '当导体棒在磁场中切割磁感线时，用右手定则判断感应电流方向最方便：伸开右手，让磁感线垂直穿入手心，大拇指指向导体运动的方向，这时四指所指的方向就是感应电流的方向。' },
      { type: 'warn', label: '易错', text: '<strong>右手定则（发电）和左手定则（电动）容易混。</strong>判断"磁生电"用右手；判断"电生力、电动机转动"用左手。简单记：右手发电，左手电动。' },
      { type: 'example', label: '例题·用右手定则', text: '如图，一根导体棒在垂直纸面向里的匀强磁场中向右运动。用右手定则判断感应电流方向。<br><br><strong>解析</strong>：磁感线垂直穿入手心（手心朝纸里），拇指指向右（运动方向），此时四指向上，所以感应电流沿导体棒<strong>向上</strong>流动。' },
      { type: 'tip', label: '提示', text: '<strong>右手定则其实是楞次定律在"导体切割磁感线"这一特殊情形下的简便办法。</strong>两种判断结果一定一致，遇到切割情形直接用右手定则更快。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">磁通量 Φ 表示垂直穿过线圈面积的磁感线条数</text><circle cx="200" cy="165" r="80" fill="none" stroke="#2e9e8f" stroke-width="3"/><line x1="150" y1="85" x2="150" y2="245" stroke="#4fb3a5" stroke-width="2"/><line x1="190" y1="85" x2="190" y2="245" stroke="#4fb3a5" stroke-width="2"/><line x1="230" y1="85" x2="230" y2="245" stroke="#4fb3a5" stroke-width="2"/><polygon points="150,85 144,99 156,99" fill="#4fb3a5"/><polygon points="190,85 184,99 196,99" fill="#4fb3a5"/><polygon points="230,85 224,99 236,99" fill="#4fb3a5"/><text x="200" y="285" font-size="13" fill="#234b45" text-anchor="middle">磁感线垂直穿过线圈，条数越多磁通量越大</text><rect x="400" y="100" width="240" height="120" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="520" y="152" font-size="20" fill="#234b45" text-anchor="middle" font-weight="bold">Φ = B × S</text><text x="520" y="188" font-size="13" fill="#234b45" text-anchor="middle">B 越大、S 越大，磁通量越大</text></svg>', caption: '图1　磁通量 Φ 表示垂直穿过线圈面积 S 的磁感线条数，大小近似为 Φ = B × S。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">楞次定律：感应电流的磁场阻碍磁通量变化</text><rect x="60" y="70" width="250" height="170" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="185" y="100" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">磁铁插入线圈</text><rect x="115" y="120" width="35" height="100" fill="#234b45"/><rect x="150" y="120" width="35" height="100" fill="#4fb3a5"/><text x="185" y="240" font-size="12" fill="#234b45" text-anchor="middle">原磁通量增加</text><rect x="370" y="70" width="250" height="170" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="495" y="100" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">感应电流磁场</text><circle cx="495" cy="160" r="34" fill="none" stroke="#2e9e8f" stroke-width="3"/><text x="495" y="170" font-size="24" fill="#234b45" text-anchor="middle">↺</text><text x="495" y="240" font-size="12" fill="#234b45" text-anchor="middle">方向相反，阻碍增加</text></svg>', caption: '图2　磁铁插入使原磁通量增加时，感应电流的磁场与它反向，从而阻碍这一增加。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">右手定则：导体切割磁感线判断感应电流方向</text><line x1="130" y1="70" x2="130" y2="240" stroke="#4fb3a5" stroke-width="4"/><text x="110" y="160" font-size="13" fill="#234b45">B 进纸面</text><rect x="250" y="130" width="200" height="20" fill="#234b45"/><text x="350" y="105" font-size="13" fill="#234b45" text-anchor="middle">导体棒向右运动 v</text><polygon points="450,140 434,134 434,146" fill="#234b45"/><text x="350" y="195" font-size="13" fill="#234b45" text-anchor="middle">磁感线穿入手心，拇指指向 v，四指指向 I</text><rect x="470" y="70" width="170" height="160" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="555" y="105" font-size="13" fill="#234b45" text-anchor="middle">右手</text><text x="555" y="140" font-size="13" fill="#234b45" text-anchor="middle">掌心朝 B</text><text x="555" y="170" font-size="13" fill="#234b45" text-anchor="middle">拇指 → v</text><text x="555" y="200" font-size="13" fill="#234b45" text-anchor="middle">四指 → I</text></svg>', caption: '图3　右手定则：磁感线穿入手心，拇指指向导体运动方向，四指指向感应电流方向。' }
    ],
    exercises: [
      { type: 'choice', question: '关于产生感应电流的条件，下列说法正确的是？', options: ['只要闭合回路中有磁场就有感应电流', '只要导体在磁场中运动就有感应电流', '闭合回路的磁通量发生变化', '只要线圈在磁场中转动就有感应电流'], answer: '闭合回路的磁通量发生变化', explanation: '产生感应电流必须同时满足两个条件：电路闭合，并且穿过闭合回路的磁通量发生变化。仅有磁场、仅有运动或仅有转动，若磁通量并未改变，都不会产生感应电流。因此只有"闭合回路的磁通量发生变化"这一说法准确。' },
      { type: 'choice', question: '根据楞次定律，感应电流产生的磁场总是？', options: ['与原磁场方向相同', '与原磁场方向相反', '阻碍引起感应电流的磁通量变化', '增强引起感应电流的磁通量变化'], answer: '阻碍引起感应电流的磁通量变化', explanation: '楞次定律的核心结论是：感应电流的磁场总要阻碍引起感应电流的磁通量的变化。当原磁通量增加时，感应磁场与原磁场反向；当原磁通量减少时，感应磁场与原磁场同向。所以不能简单说"总是相同"或"总是相反"，而取决于磁通量是在增加还是在减少。' },
      { type: 'choice', question: '用右手定则判断导体切割磁感线产生的感应电流方向时，四指指向的是？', options: ['磁场方向', '导体运动方向', '感应电流方向', '原磁场的反方向'], answer: '感应电流方向', explanation: '右手定则的操作是：伸开右手，让磁感线垂直穿入手心，大拇指指向导体运动方向，这时四指所指的方向就是感应电流的方向。因此四指指向感应电流方向，拇指才指向运动方向，手掌心对着磁场方向。' },
      { type: 'fill', question: '当磁场 B 垂直穿过面积 S 时，磁通量 Φ 的大小近似等于 ___（用符号与乘号写出）。', answer: 'B × S', explanation: '磁通量表示穿过某个面的磁感线条数。当磁场方向垂直于该平面时，磁通量大小等于磁感应强度 B 与面积 S 的乘积，写作 Φ = B × S。若磁场与平面不垂直，还需乘以夹角的余弦，但在垂直情形下直接就是 B 乘 S。' },
      { type: 'fill', question: '判断导体切割磁感线产生感应电流的方向，应当使用 ___ 定则（填"右手"或"左手"）。', answer: '右手', explanation: '判断"磁生电"即感应电流方向时使用右手定则；而判断"电生力"即通电导体在磁场中受力方向时使用左手定则。记忆口诀是"右手发电，左手电动"。本题是切割磁感线产生感应电流，因此用右手定则。' }
    ]
  });
})();
