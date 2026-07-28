/* ============================================================
 * 高一物理 · 必修 第三册 · 第十三章 电磁感应与电磁波初步
 * 课时21：电磁感应现象及应用
 * 数据注入：physics.bx3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx3');
  if (!v) return;

  v.points.push({
    id: 'bx3-u21',
    name: '电磁感应现象及应用',
    chapter: '必修第三册 · 第十三章 电磁感应与电磁波初步',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、划时代的发现：磁也能生电' },
      { type: 'paragraph', text: '前面学过，电流周围会产生磁场（电生磁）。那么反过来，磁场能不能产生电流呢？英国科学家法拉第经过多年探索，在1831年终于发现：当穿过闭合电路的磁通量发生变化时，电路中会产生电流。这种现象叫电磁感应，产生的电流叫感应电流。这是发电机、变压器等无数电气设备的原理基础。' },
      { type: 'keypoint', label: '重点·电磁感应', text: '<strong>当穿过闭合电路的磁通量发生变化时，电路中就会产生感应电流，这种现象叫电磁感应。</strong>感应电流产生的条件是：电路闭合，且穿过它的磁通量发生变化。' },
      { type: 'paragraph', text: '这里的关键是"磁通量变化"，不是"有磁场"就够了。把一条形磁铁静静插进线圈旁不动，只要磁铁不再动，磁通量不变，就没有电流；只有磁铁插入或拔出的"过程"中，磁通量在变，才有电流。磁通量变化的方式可以很多：磁铁靠近或远离、线圈转动、磁场强弱改变、线圈面积改变等。' },
      { type: 'list', items: ['电路必须是闭合的（开路不会有持续的感应电流）', '穿过电路的磁通量必须发生变化，这是产生感应电流的根本原因', '磁通量变化可由磁场强弱变化、面积变化、相对位置变化等引起', '磁通量不变，即使有很强磁场也不会产生感应电流'] },
      { type: 'example', label: '例题·判断有无感应电流', text: '把一条形磁铁从线圈中静止抽出后停在线圈外不动，问抽出的过程中和停下后，线圈中是否都有感应电流？<br><br><strong>解析</strong>：<br>抽出过程中，穿过线圈的磁通量在不断减小，所以<strong>有</strong>感应电流；抽出停下后，磁铁位置不再变化，磁通量保持不变，此时<strong>没有</strong>感应电流。可见感应电流只在磁通量变化的"过程中"存在。' },
      { type: 'warn', label: '易错', text: '常见误区：<strong>以为"有磁场"或"有磁通量"就一定能产生感应电流</strong>。错！必须是磁通量"发生变化"才行。还有人以为只要线圈在磁场里运动就有电流，但若整个线圈平移、磁通量并没变，也不会产生电流。判断第一步永远先看：磁通量变没变？' },
      { type: 'table', headers: ['情形', '磁通量是否变化', '有无感应电流'], rows: [['磁铁插入线圈', '变化（增大）', '有'], ['磁铁停在线圈中不动', '不变', '无'], ['线圈在匀强磁场中平移', '不变', '无'], ['线圈转动使穿过的磁感线条数变', '变化', '有']] },
      { type: 'heading', text: '二、楞次定律：感应电流的方向怎么定' },
      { type: 'paragraph', text: '感应电流也有方向。俄国物理学家楞次总结出一条规律：感应电流具有这样的方向，它产生的磁场总要阻碍引起感应电流的磁通量的变化。简单记成"增反减同"——原磁通量要增加时，感应电流的磁场方向与原磁场相反；原磁通量要减少时，感应电流的磁场方向与原磁场相同。这就是楞次定律，它本质上是能量守恒在电磁感应中的体现。' },
      { type: 'keypoint', label: '重点·楞次定律', text: '<strong>感应电流的磁场总要阻碍引起感应电流的磁通量的变化。</strong>口诀"增反减同"：磁通量增加时感应磁场与原磁场反向，减少时同向。楞次定律指出感应电流的方向。' },
      { type: 'tip', label: '提示', text: '用楞次定律判断方向分四步：① 明确原磁场方向；② 看磁通量是增还是减；③ 由"增反减同"定出感应电流的磁场方向；④ 用右手螺旋定则（安培定则）由磁场方向反推感应电流方向。一步步来就不容易乱。' },
      { type: 'list', items: ['楞次定律告诉我们感应电流的方向，而非大小', '核心是"阻碍变化"，不是"阻止变化"，磁通量最终仍会变', '"增反减同"是快速判断感应磁场方向的口诀', '楞次定律的本质是能量守恒：阻碍变化需要外力做功'] },
      { type: 'heading', text: '三、右手定则：导线切割磁感线时的简便方法' },
      { type: 'paragraph', text: '当一段导体在磁场中做切割磁感线运动时，用楞次定律也能判断感应电流方向，但更方便的是右手定则：伸开右手，让磁感线垂直穿入手心，大拇指指向导体运动方向，那么四指所指的方向就是感应电流的方向。注意这是"右手"，别和判断安培力的"左手定则"搞混——动力（受力）用左手，发电（感应电流）用右手。' },
      { type: 'keypoint', label: '重点·右手定则', text: '<strong>右手定则：磁感线垂直穿入手心，大拇指指向导体运动方向，四指指向感应电流方向。</strong>用于导体切割磁感线产生感应电流的情形。记住：发电用右手，受力用左手。' },
      { type: 'warn', label: '易错', text: '最易混的是<strong>左手和右手</strong>。左手定则判断"通电导线在磁场中受力方向"（电动机原理，电生力）；右手定则判断"导体切割磁感线产生感应电流方向"（发电机原理，动生电）。一句话：<strong>左力右电</strong>。用错手整个方向就反了。' },
      { type: 'heading', text: '四、法拉第电磁感应定律（定性）' },
      { type: 'paragraph', text: '法拉第不仅发现了电磁感应，还进一步指出：感应电动势的大小，跟穿过电路的磁通量的变化快慢（即变化率）成正比。磁通量变化得越快，产生的感应电动势（从而感应电流）就越大；变化得慢，就小。写成公式就是 E = n × ΔΦ / Δt（n是线圈匝数）。这里先定性理解"变化越快、电动势越大"，严格定量计算到高二再深入。' },
      { type: 'keypoint', label: '重点·法拉第定律(定性)', text: '<strong>感应电动势的大小跟磁通量的变化率成正比，即 E = n × ΔΦ / Δt。</strong>磁通量变化越快，感应电动势越大。本节课只需定性理解"快慢"与"大小"的关系。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">磁铁插入线圈 → 磁通量变化 → 产生感应电流</text><rect x="300" y="90" width="80" height="140" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="165" font-size="13" fill="#234b45" text-anchor="middle">线圈</text><rect x="120" y="120" width="40" height="80" rx="4" fill="#4fb3a5"/><text x="140" y="118" font-size="14" font-weight="bold" fill="#234b45" text-anchor="middle">N</text><line x1="160" y1="160" x2="290" y2="160" stroke="#2e9e8f" stroke-width="3"/><polygon points="290,160 282,153 282,167" fill="#2e9e8f"/><text x="225" y="150" font-size="13" fill="#234b45" text-anchor="middle">插入</text><path d="M 300 130 L 380 110" stroke="#234b45" stroke-width="2"/><polygon points="380,110 370,116 372,103" fill="#234b45"/><path d="M 380 200 L 300 180" stroke="#234b45" stroke-width="2"/><polygon points="300,180 310,174 308,187" fill="#234b45"/><text x="340" y="300" font-size="13" fill="#234b45" text-anchor="middle">磁通量增大 → 有感应电流(回路中出现I)</text></svg>', caption: '图1　磁铁插入线圈使磁通量增大，闭合回路中产生感应电流。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">右手定则：判断切割磁感线的感应电流方向</text><line x1="120" y1="80" x2="120" y2="220" stroke="#2e9e8f" stroke-width="3"/><text x="100" y="155" font-size="13" fill="#234b45" text-anchor="middle">B</text><rect x="240" y="140" width="200" height="14" rx="4" fill="#4fb3a5"/><text x="340" y="133" font-size="13" fill="#234b45" text-anchor="middle">导体(向右运动v)</text><line x1="340" y1="140" x2="340" y2="80" stroke="#234b45" stroke-width="2"/><polygon points="340,80 334,90 346,90" fill="#234b45"/><text x="356" y="92" font-size="13" fill="#234b45">v</text><path d="M 290 154 L 290 200" stroke="#234b45" stroke-width="2"/><polygon points="290,200 284,191 296,191" fill="#234b45"/><text x="290" y="220" font-size="13" fill="#234b45" text-anchor="middle">I</text><text x="340" y="270" font-size="13" fill="#234b45" text-anchor="middle">磁感线穿手心，拇指向运动，四指即电流</text></svg>', caption: '图2　右手定则：磁感线穿手心、拇指向运动方向，四指指向感应电流。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">楞次定律"增反减同"示意</text><circle cx="200" cy="170" r="40" fill="#4fb3a5"/><text x="200" y="175" font-size="14" font-weight="bold" fill="#234b45" text-anchor="middle">原磁场↓</text><circle cx="480" cy="170" r="40" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="480" y="165" font-size="13" fill="#234b45" text-anchor="middle">感应磁场</text><text x="480" y="185" font-size="14" font-weight="bold" fill="#234b45" text-anchor="middle">↑(反)</text><text x="340" y="110" font-size="13" fill="#234b45" text-anchor="middle">磁通量增大</text><path d="M 260 170 L 420 170" stroke="#234b45" stroke-width="2"/><polygon points="420,170 410,164 410,176" fill="#234b45"/><text x="340" y="300" font-size="13" fill="#234b45" text-anchor="middle">原磁通增加 → 感应磁场与原磁场反向，阻碍增加</text></svg>', caption: '图3　楞次定律：原磁通量增大时，感应电流的磁场与原磁场反向（增反）。' }
    ],
    exercises: [
      { type: 'choice', question: '产生感应电流的条件是？', options: ['电路中有电源', '电路闭合且穿过电路的磁通量发生变化', '导体在磁场中运动', '线圈周围存在磁场'], answer: '电路闭合且穿过电路的磁通量发生变化', explanation: '感应电流产生的两个必要条件：一是电路必须闭合，开路时仅有感应电动势而无持续电流；二是穿过闭合电路的磁通量必须发生变化。仅有磁场、仅有运动都不够，关键是磁通量在变化（B对）。有电源那是普通电流，不是感应电流（A错）。' },
      { type: 'choice', question: '关于楞次定律，下列说法正确的是？', options: ['感应电流的磁场总是与原磁场方向相同', '感应电流的磁场总是阻碍引起感应电流的磁通量的变化', '感应电流的磁场会阻止磁通量变化', '楞次定律与能量守恒无关'], answer: '感应电流的磁场总是阻碍引起感应电流的磁通量的变化', explanation: '楞次定律指出：感应电流的磁场总要阻碍引起感应电流的磁通量的变化（B对）。"阻碍变化"不是"阻止变化"，磁通量最终仍会改变（C错）；磁通量增加时感应磁场与原磁场反向，减少时同向，并非总相同（A错）；楞次定律正是能量守恒的体现（D错）。' },
      { type: 'choice', question: '用右手定则判断导体切割磁感线的感应电流方向时，应伸开哪只手？', options: ['左手', '右手', '两只手一起用', '不用手，用左手螺旋定则'], answer: '右手', explanation: '判断导体切割磁感线产生感应电流的方向用右手定则：磁感线垂直穿入手心，大拇指指向导体运动方向，四指指向感应电流方向（选右手）。左力右电：左手定则用于判断通电导线受安培力方向，右手用于判断感应电流方向，二者不可混淆。' },
      { type: 'fill', question: '把一条形磁铁静止地插在线圈中不动，此时穿过线圈的磁通量___（填"变化"或"不变"），线圈中___（填"有"或"无"）感应电流。', answer: '不变|无', explanation: '磁铁插入线圈的过程中磁通量在变化，有感应电流；但一旦磁铁停在线圈中不动，穿过线圈的磁通量就保持不变。根据电磁感应条件，磁通量不变则不会产生感应电流。所以静止不动时磁通量不变、无感应电流。' },
      { type: 'fill', question: '法拉第电磁感应定律定性指出：磁通量变化得越___，产生的感应电动势就越大；其公式为 E = n × ___ / ___。', answer: '快|ΔΦ|Δt', explanation: '法拉第定律定性表明感应电动势大小与磁通量的变化率（变化快慢）成正比：变化越快，电动势越大。公式写作 E = n × ΔΦ / Δt，其中n是线圈匝数，ΔΦ是磁通量变化量，Δt是变化所用时间。本题考查对"快慢"与公式形式的定性理解。' }
    ]
  });
})();
