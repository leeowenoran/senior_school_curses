/* ============================================================
 * 高一物理 · 必修 第三册 · 第十三章 电磁感应与电磁波初步
 * 课时19：磁场 磁感线
 * 数据注入：physics.bx3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx3');
  if (!v) return;

  v.points.push({
    id: 'bx3-u19',
    name: '磁场 磁感线',
    chapter: '必修第三册 · 第十三章 电磁感应与电磁波初步',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、磁场：看不见却真实存在的"力场"' },
      { type: 'paragraph', text: '两块磁铁不挨着，却能把铁钉吸起来；通电导线周围，小磁针会自己转过去。这说明在磁铁或电流周围，存在一种看不见、摸不着却能对别的磁体或通电导线施加力的特殊物质，这就是磁场。磁场和前面学过的电场很像，都是"场"，都是真实存在的物质形态，只是我们用眼睛看不到它。' },
      { type: 'keypoint', label: '重点·磁场', text: '<strong>磁场是存在于磁体或电流周围的一种特殊物质，它会对放入其中的磁体、电流产生力的作用。</strong>磁场和电场一样，是客观存在的，不是凭空想象出来的。' },
      { type: 'paragraph', text: '磁场有方向。我们规定：在磁场中的某一点，小磁针静止时北极（N极）所指的方向，就是该点的磁场方向。也就是说，把一枚可以自由转动的小磁针放到某处，它N极指向哪，哪就是磁场的方向。这个方向非常重要，后面画磁感线就是靠它来定的。' },
      { type: 'heading', text: '二、磁感线：把看不见的磁场画出来' },
      { type: 'paragraph', text: '磁场看不见，为了研究和描述方便，人们想了个办法：在磁场中画一条条带箭头的曲线，让曲线上每一点的切线方向都跟该点的磁场方向一致，这样的曲线就叫作磁感线。磁感线是人们为了直观而假想出来的"辅助线"，磁场本身并不是真有一根根线。' },
      { type: 'list', items: ['磁感线上每一点的切线方向，就是该点的磁场方向（即小磁针N极受力方向）', '磁感线的疏密表示磁场的强弱：越密的地方磁场越强，越疏的地方磁场越弱', '磁感线是闭合曲线，在磁体外部从N极出发回到S极，在磁体内部从S极回到N极', '任意两条磁感线都不会相交，因为同一点的磁场方向只能有一个'] },
      { type: 'keypoint', label: '重点·磁感线特点', text: '<strong>磁感线是为了形象描述磁场而假想的曲线；外部从N极到S极，内部从S极到N极，形成闭合回路；疏密表示强弱，切线表示方向。</strong>' },
      { type: 'example', label: '例题·判断磁感线说法', text: '关于磁感线，下列说法正确的是？<br>A. 磁感线是磁场中实际存在的线<br>B. 磁感线从磁体的S极出发，回到N极<br>C. 磁感线越密的地方磁场越强<br><br><strong>解析</strong>：<br>选C。磁感线是假想的，不是真实存在的（A错）；在磁体外部磁感线从N极出发回到S极（B错）；磁感线越密代表磁场越强（C对）。注意"外部"二字，内部方向正好相反。' },
      { type: 'warn', label: '易错', text: '不要以为<strong>磁感线是真实画在磁场里的线</strong>。它和电场线一样，完全是人为引入的"图像工具"，用来帮我们想象磁场的形状。另外常有人记反方向：记住<strong>外部是"N出S进"</strong>，磁体内部才是从S极回到N极。' },
      { type: 'table', headers: ['对比项', '磁感线（磁场）', '电场线（电场）'], rows: [['是否真实存在', '不是真实线，是假想曲线', '不是真实线，是假想曲线'], ['外部方向', '从N极出发到S极', '从正电荷出发到负电荷'], ['是否闭合', '闭合曲线', '不闭合，起于正电荷终于负电荷'], ['疏密含义', '表示磁场强弱', '表示电场强弱']] },
      { type: 'heading', text: '三、条形磁铁和蹄形磁铁的磁感线' },
      { type: 'paragraph', text: '条形磁铁是最常见的磁铁，两端分别是N极和S极。它外部的磁感线从N极出发，呈弧形弯曲，最后回到S极；在磁铁中间靠外的区域，磁感线比较平直、稀疏，磁场较弱；越靠近两极，磁感线越密，磁场越强。蹄形磁铁（U形磁铁）两个磁极在同一侧，磁感线从一个极出来后，几乎直接连到另一个极，两极之间磁场很强且近似平行。' },
      { type: 'list', items: ['条形磁铁：外部磁感线N极出、S极进，中间疏、两极密', '蹄形磁铁：两磁极在同一侧，极间磁感线密集且近似平行，磁场强而均匀', '无论哪种磁铁，内部磁感线都从S极指向N极，与外面连成闭合回路'] },
      { type: 'tip', label: '提示', text: '做实验时常用<strong>撒铁屑</strong>的方法显示磁感线形状：把磁铁放在纸下，纸上撒细铁屑，轻敲纸张，铁屑就会沿磁场方向排成一条条曲线，这正是磁感线的"实物照片"。它显示的是铁屑排列，不是磁场里真有线。' },
      { type: 'heading', text: '四、地磁场：地球本身就是一块大磁铁' },
      { type: 'paragraph', text: '我们脚下的地球，其实是一个巨大的磁体，它周围存在的磁场叫地磁场。地磁场的N极在地理南极附近，S极在地理北极附近（注意是"附近"，并不正好重合）。所以指南针的N极并不指向正北，而是略微偏一点，这个偏角叫磁偏角。地磁场外部磁感线从地理南极附近出来，绕到地理北极附近进去。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">条形磁铁外部的磁感线（N出S进）</text><rect x="120" y="80" width="60" height="160" rx="6" fill="#4fb3a5"/><rect x="500" y="80" width="60" height="160" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="150" y="170" font-size="16" font-weight="bold" fill="#234b45" text-anchor="middle">N</text><text x="530" y="170" font-size="16" font-weight="bold" fill="#234b45" text-anchor="middle">S</text><path d="M 180 110 C 280 60, 400 60, 500 110" fill="none" stroke="#2e9e8f" stroke-width="2"/><polygon points="500,110 492,102 492,118" fill="#2e9e8f"/><path d="M 180 170 C 300 150, 320 150, 500 170" fill="none" stroke="#2e9e8f" stroke-width="2"/><polygon points="500,170 492,162 492,178" fill="#2e9e8f"/><path d="M 180 230 C 280 280, 400 280, 500 230" fill="none" stroke="#2e9e8f" stroke-width="2"/><polygon points="500,230 492,222 492,238" fill="#2e9e8f"/><text x="340" y="300" font-size="13" fill="#234b45" text-anchor="middle">越靠近磁极磁感线越密，磁场越强</text></svg>', caption: '图1　条形磁铁外部磁感线从N极出发、回到S极，中间疏、两极密。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">蹄形磁铁两极间的磁场强而近似平行</text><path d="M 220 90 L 220 220 Q 220 250 250 250 L 430 250 Q 460 250 460 220 L 460 90" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="240" y="160" font-size="15" font-weight="bold" fill="#234b45" text-anchor="middle">N</text><text x="440" y="160" font-size="15" font-weight="bold" fill="#234b45" text-anchor="middle">S</text><line x1="280" y1="120" x2="400" y2="120" stroke="#2e9e8f" stroke-width="2"/><polygon points="400,120 392,113 392,127" fill="#2e9e8f"/><line x1="280" y1="160" x2="400" y2="160" stroke="#2e9e8f" stroke-width="2"/><polygon points="400,160 392,153 392,167" fill="#2e9e8f"/><line x1="280" y1="200" x2="400" y2="200" stroke="#2e9e8f" stroke-width="2"/><polygon points="400,200 392,193 392,207" fill="#2e9e8f"/><text x="340" y="285" font-size="13" fill="#234b45" text-anchor="middle">两极之间磁感线密集且平行，磁场强</text></svg>', caption: '图2　蹄形磁铁两磁极之间的磁感线密集而近似平行，这里磁场很强。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">地磁场：地球像一块大磁铁</text><circle cx="340" cy="180" r="90" fill="#4fb3a5"/><text x="340" y="150" font-size="13" fill="#234b45" text-anchor="middle" font-weight="bold">地球</text><text x="262" y="150" font-size="14" font-weight="bold" fill="#234b45" text-anchor="middle">S</text><text x="418" y="150" font-size="14" font-weight="bold" fill="#234b45" text-anchor="middle">N</text><path d="M 340 90 C 230 60, 200 150, 250 230" fill="none" stroke="#2e9e8f" stroke-width="2"/><polygon points="250,230 256,220 243,219" fill="#2e9e8f"/><path d="M 430 120 C 470 160, 470 200, 430 240" fill="none" stroke="#2e9e8f" stroke-width="2"/><polygon points="430,240 424,231 437,231" fill="#2e9e8f"/><text x="340" y="300" font-size="13" fill="#234b45" text-anchor="middle">地磁N极在地理南极附近，指南针N极指向地磁S极（地理北）</text></svg>', caption: '图3　地磁场的磁感线分布，地磁极与地理极接近但略有偏差。' }
    ],
    exercises: [
      { type: 'choice', question: '关于磁场，下列说法正确的是？', options: ['磁场是磁体周围才存在的特殊物质', '磁场只对磁体有力的作用，对电流没有', '磁场和电场一样，是客观存在的物质', '小磁针在磁场中静止时S极所指方向是该点磁场方向'], answer: '磁场和电场一样，是客观存在的物质', explanation: '磁场存在于磁体和电流周围，不只有磁体才有（A错）；磁场既对磁体也对通电导线施加力的作用（B错）；小磁针静止时N极所指方向才是该点磁场方向，不是S极（D错）。磁场和电场一样都是客观存在的特殊物质，C正确。' },
      { type: 'choice', question: '关于磁感线，下列说法中正确的是？', options: ['磁感线是磁场中真实画出来的线', '磁体外部磁感线从S极出发回到N极', '磁感线越密的地方磁场越弱', '磁感线是闭合曲线'], answer: '磁感线是闭合曲线', explanation: '磁感线是为形象描述磁场而假想出来的，并非真实存在（A错）；外部磁感线从N极出发回到S极（B错）；磁感线越密表示磁场越强而非越弱（C错）。磁感线在外部从N到S、内部从S到N，连成闭合回路，所以是闭合曲线，D正确。' },
      { type: 'choice', question: '下列说法正确的是？', options: ['条形磁铁中间部位磁场最强', '蹄形磁铁两极之间磁场较强且近似平行', '地磁场的N极在地理北极附近', '指南针的N极指向地理南极'], answer: '蹄形磁铁两极之间磁场较强且近似平行', explanation: '条形磁铁中间磁感线稀疏，磁场较弱，两极才最强（A错）；蹄形磁铁两磁极在同一侧，极间磁感线密集且近似平行，磁场强（B对）。地磁场的N极在地理南极附近，S极在地理北极附近（C错）；指南针N极指向地磁S极，即地理北极附近（D错）。' },
      { type: 'fill', question: '在磁场中的某一点，小磁针静止时___极所指的方向，规定为该点的磁场方向。', answer: 'N', explanation: '人们规定：磁场中某一点，小磁针静止时北极（N极）所指的方向，就是该点的磁场方向。也等于小磁针N极所受磁场力的方向。记住是N极而非S极，这是磁场方向的定义。' },
      { type: 'fill', question: '磁感线是用来形象描述磁场而假想出来的曲线，在磁体外部它从___极出发，回到___极。', answer: 'N|S', explanation: '磁体外部的磁感线从N极出发，经过空间回到S极；而在磁体内部，磁感线又从S极回到N极，从而构成闭合回路。填空只要符合"外部N出S进"这一规律即可。注意题目说的是"外部"。' }
    ]
  });
})();
