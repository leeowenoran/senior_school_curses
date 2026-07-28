/* ============================================================
 * 高一物理 · 必修 第三册 · 第十三章 电磁感应与电磁波初步
 * 课时20：磁感应强度 磁通量
 * 数据注入：physics.bx3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx3');
  if (!v) return;

  v.points.push({
    id: 'bx3-u20',
    name: '磁感应强度 磁通量',
    chapter: '必修第三册 · 第十三章 电磁感应与电磁波初步',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、怎样描述磁场的强弱：磁感应强度 B' },
      { type: 'paragraph', text: '电场用"电场强度E"来描述强弱，磁场也类似，需要一个物理量来描述它的强弱和方向，这个量叫磁感应强度，符号用大写字母B。磁场中某点磁感应强度B的方向，就是该点的磁场方向（即小磁针N极受力方向）；B的大小则代表磁场的强弱。' },
      { type: 'keypoint', label: '重点·磁感应强度', text: '<strong>磁感应强度B是描述磁场强弱和方向的物理量，方向与磁场方向一致，大小表示磁场的强弱。</strong>B是矢量，既有大小也有方向。' },
      { type: 'heading', text: '二、B 的大小怎么定：B = F / (I × L)' },
      { type: 'paragraph', text: '把一小段通电导线垂直放入磁场中，导线会受到磁场的力（这种力叫安培力）。实验发现：当导线与磁场方向垂直时，导线受到的力F，与电流I、导线长度L都成正比，也就是F和I×L的比值是一个只由磁场本身决定、跟导线无关的常数。我们就把这个比值定义为磁感应强度的大小：B = F / (I × L)。' },
      { type: 'keypoint', label: '重点·定义式', text: '当通电导线与磁场<strong>垂直</strong>时，磁感应强度大小为 <strong>B = F / (I × L)</strong>，其中F是导线受力、I是电流、L是导线在磁场中的长度。这个比值只由磁场决定，与导线本身无关。' },
      { type: 'list', items: ['F 是导线受到的安培力，单位牛顿(N)', 'I 是导线中的电流，单位安培(A)', 'L 是导线在磁场中的长度，单位米(m)', 'B 是磁感应强度，单位特斯拉(T)，1 T = 1 N / (A·m)'] },
      { type: 'example', label: '例题·计算B', text: '一段长0.20 m的通电导线，垂直放入磁场中，通有电流2.0 A，受到的安培力为0.040 N。求该处磁感应强度B。<br><br><strong>解析</strong>：<br>由 B = F / (I × L) 得 B = 0.040 / (2.0 × 0.20) = 0.040 / 0.40 = 0.10 T。所以该处磁感应强度为0.10特斯拉。注意导线必须与磁场垂直，公式才直接成立。' },
      { type: 'warn', label: '易错', text: '<strong>B = F / (I × L) 只适用于导线与磁场垂直的情况。</strong>如果导线不垂直，受力会变小，直接用这个式子的比值就偏小，不能代表真正的B。另外，B是磁场本身的性质，<strong>不会因为导线电流变大、受力变大而改变</strong>——F变大的同时I×L也按比例变，比值B不变。' },
      { type: 'table', headers: ['物理量', '符号', '单位', '含义'], rows: [['磁感应强度', 'B', '特斯拉(T)', '描述磁场强弱和方向'], ['安培力', 'F', '牛顿(N)', '磁场对通电导线的作用力'], ['电流', 'I', '安培(A)', '导线中的电流大小'], ['导线长度', 'L', '米(m)', '处在磁场中的那一段长度']] },
      { type: 'heading', text: '三、匀强磁场：大小方向都不变的磁场' },
      { type: 'paragraph', text: '如果某个区域内，磁感应强度B的大小处处相等、方向处处相同，这样的磁场叫匀强磁场。匀强磁场的磁感线是一些间隔均匀、彼此平行的直线。两块靠近的、正对放置的平行磁极（如电磁铁两极）之间，靠近中心的一小块区域就近似是匀强磁场，这正是实验室里常用的磁场。' },
      { type: 'keypoint', label: '重点·匀强磁场', text: '<strong>匀强磁场中，B的大小处处相等、方向处处相同；磁感线是间隔均匀、互相平行的直线。</strong>平行且正对的两磁极之间的中心区域可近似看作匀强磁场。' },
      { type: 'tip', label: '提示', text: '判断是不是匀强磁场，看两点：<strong>一是磁感线是否平行（方向相同），二是是否疏密均匀（大小相同）</strong>。只要有一处疏密不同或方向偏转，就不是严格的匀强磁场。' },
      { type: 'list', items: ['匀强磁场的磁感线是一组平行、等间距的直线', '平行正对磁极间的中心区域近似为匀强磁场', '匀强磁场中任意面积上的磁通量便于用 Φ = B × S × cosθ 计算'] },
      { type: 'heading', text: '四、磁通量：穿过面的磁感线条数' },
      { type: 'paragraph', text: '为了描述"穿过某一个面的磁场有多少"，引入磁通量Φ。可以形象理解为：穿过该面的磁感线条数。在匀强磁场中，若平面与磁场方向垂直（θ=0，cosθ=1），穿过面积S的磁通量就是 Φ = B × S；若平面与磁场夹角为θ，则有效面积变小，要乘上 cosθ，即 Φ = B × S × cosθ。磁通量Φ是标量，但有正负（代表磁感线从哪一面穿入）。' },
      { type: 'keypoint', label: '重点·磁通量', text: '<strong>磁通量 Φ = B × S × cosθ</strong>，其中B是磁感应强度，S是平面面积，θ是磁场方向与平面法线（垂直平面的方向）的夹角。它形象表示穿过该面的磁感线条数。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">用 B = F / (I × L) 测量磁感应强度</text><line x1="120" y1="160" x2="560" y2="160" stroke="#2e9e8f" stroke-width="4"/><text x="340" y="150" font-size="13" fill="#234b45" text-anchor="middle">通电导线(长L)</text><polygon points="560,160 552,153 552,167" fill="#2e9e8f"/><path d="M 560 160 A 90 90 0 0 1 620 90" fill="none" stroke="#2e9e8f" stroke-width="2"/><text x="600" y="120" font-size="22" fill="#234b45">↑</text><text x="600" y="150" font-size="13" fill="#234b45" text-anchor="middle">F</text><line x1="80" y1="220" x2="600" y2="220" stroke="#4fb3a5" stroke-width="1" stroke-dasharray="4,4"/><text x="100" y="240" font-size="13" fill="#234b45">磁场B竖直向上(垂直穿过导线)</text><text x="340" y="290" font-size="14" fill="#234b45" text-anchor="middle">垂直时 B = F / (I × L)</text></svg>', caption: '图1　导线垂直放入磁场受安培力F，由 B = F/(I×L) 确定磁感应强度。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">匀强磁场：平行等距的磁感线</text><line x1="100" y1="90" x2="580" y2="90" stroke="#2e9e8f" stroke-width="2"/><line x1="100" y1="130" x2="580" y2="130" stroke="#2e9e8f" stroke-width="2"/><line x1="100" y1="170" x2="580" y2="170" stroke="#2e9e8f" stroke-width="2"/><line x1="100" y1="210" x2="580" y2="210" stroke="#2e9e8f" stroke-width="2"/><polygon points="580,90 572,83 572,97" fill="#2e9e8f"/><polygon points="580,130 572,123 572,137" fill="#2e9e8f"/><polygon points="580,170 572,163 572,177" fill="#2e9e8f"/><polygon points="580,210 572,203 572,217" fill="#2e9e8f"/><text x="340" y="260" font-size="13" fill="#234b45" text-anchor="middle">磁感线平行、等间距 → 大小方向都相同的匀强磁场</text></svg>', caption: '图2　匀强磁场的磁感线互相平行且等间距，表示B处处相同。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">磁通量 Φ = B × S × cosθ</text><rect x="270" y="120" width="140" height="100" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="175" font-size="14" fill="#234b45" text-anchor="middle">面积S</text><line x1="340" y1="120" x2="340" y2="70" stroke="#234b45" stroke-width="2"/><polygon points="340,70 334,80 346,80" fill="#234b45"/><text x="356" y="78" font-size="13" fill="#234b45">法线</text><line x1="340" y1="170" x2="430" y2="110" stroke="#2e9e8f" stroke-width="3"/><polygon points="430,110 420,116 422,103" fill="#2e9e8f"/><text x="430" y="100" font-size="13" fill="#234b45">B</text><path d="M 340 170 A 55 55 0 0 0 388 128" fill="none" stroke="#234b45" stroke-width="1"/><text x="360" y="132" font-size="13" fill="#234b45">θ</text><text x="340" y="300" font-size="13" fill="#234b45" text-anchor="middle">θ为B与法线夹角，平面与磁场越垂直cosθ越大，Φ越大</text></svg>', caption: '图3　磁通量等于磁感应强度乘以有效面积，夹角为B与法线的夹角θ。' }
    ],
    exercises: [
      { type: 'choice', question: '关于磁感应强度B，下列说法正确的是？', options: ['B的大小由F、I、L共同决定，会随它们改变', 'B是描述磁场强弱和方向的物理量，是矢量', 'B的方向就是小磁针静止时S极所指方向', 'B的单位是安培(A)'], answer: 'B是描述磁场强弱和方向的物理量，是矢量', explanation: '磁感应强度B描述磁场的强弱和方向，既有大小又有方向，是矢量（B对）。B = F/(I×L)只是定义式，B由磁场本身决定，不随导线受力、电流、长度变化（A错）。B方向与磁场方向一致，即小磁针N极所指方向，不是S极（C错）。B的单位是特斯拉T，不是安培（D错）。' },
      { type: 'choice', question: '公式 B = F / (I × L) 的适用条件是？', options: ['导线与磁场平行', '导线与磁场垂直', '导线任意放置', '不需要电流'], answer: '导线与磁场垂直', explanation: 'B = F/(I×L) 是在通电导线与磁场方向垂直的条件下推导出来的定义式。若导线与磁场平行，安培力为零，不能用来定义B；若成任意角度，受力会随夹角变化而减小，比值不等于真正的B。因此必须强调"垂直"这一前提条件。' },
      { type: 'choice', question: '关于匀强磁场，下列说法正确的是？', options: ['匀强磁场的磁感线是一组平行但不等距的直线', '匀强磁场内B的大小处处相等、方向处处相同', '任意两个磁极之间都是匀强磁场', '匀强磁场中磁感线可以相交'], answer: '匀强磁场内B的大小处处相等、方向处处相同', explanation: '匀强磁场要求B的大小和方向都处处相同（B对）。其磁感线是平行且等间距的直线，不是"不等距"（A错）；只有正对放置的平行磁极中心小区域才近似匀强，并非任意两磁极间都匀强（C错）；磁感线永不相交（D错）。' },
      { type: 'fill', question: '在匀强磁场中，当平面与磁场方向垂直时，穿过面积S的磁通量 Φ = ___。', answer: 'B × S', explanation: '磁通量定义为穿过面的磁感线条数。平面与磁场垂直时θ=0、cosθ=1，公式 Φ = B × S × cosθ 退化为 Φ = B × S。此时磁感线垂直穿过整个面积，磁通量达到最大。注意平面必须"垂直"磁场才直接等于B×S。' },
      { type: 'fill', question: '在磁场中把一小段通电导线垂直放入，测得受力F = 0.10 N，电流I = 2.0 A，长度L = 0.50 m，则该处磁感应强度 B = ___ T。', answer: '0.10', explanation: '由定义式 B = F / (I × L) 计算：B = 0.10 / (2.0 × 0.50) = 0.10 / 1.0 = 0.10 T。这里导线与磁场垂直，公式直接成立。单位上 0.10/(A·m) 即 0.10 特斯拉。' }
    ]
  });
})();
