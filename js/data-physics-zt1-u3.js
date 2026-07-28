/* ============================================================
 * 高三复习 · 力学综合 · 专题一 运动学
 * 课时3：运动图像
 * 数据注入：physics.zt1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt1');
  if (!v) return;

  v.points.push({
    id: 'zt1-u3',
    name: '运动图像',
    chapter: '力学综合 · 专题一 运动学',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、x-t 图像（位移—时间图像）' },
      { type: 'paragraph', text: 'x-t 图像的横轴是时间 t，纵轴是位移 x。图像上的每一个点表示"某一时刻物体在什么位置"。图像的形状直接反映物体怎么运动：倾斜直线代表匀速，曲线代表变速，水平直线代表静止。' },
      { type: 'keypoint', label: '重点·x-t 图像的斜率', text: '在 x-t 图像中，<strong>图线的斜率等于速度</strong>。斜率正表示向正方向运动，斜率负表示向反方向运动，斜率为0（水平线）表示静止不动。' },
      { type: 'list', items: ['斜率 = 速度，斜率正负代表运动方向', '水平直线表示物体静止（速度为0）', '两条图线相交表示两物体在同一时刻到达同一位置，即相遇', '图线是曲线时，某点切线斜率才是该时刻的瞬时速度'] },
      { type: 'example', label: '例题·x-t 图像判读', text: '甲、乙两物体的 x-t 图像在第4秒处相交，这说明什么？<br><strong>解析</strong>：x-t 图像的交点表示同一时刻两物体位移相同，也就是位置相同，所以第4秒时甲、乙相遇（在同一地点）。交点与"谁快谁慢"无关，只说明此刻位置重合。' },
      { type: 'heading', text: '二、v-t 图像（速度—时间图像）' },
      { type: 'paragraph', text: 'v-t 图像的横轴是时间 t，纵轴是速度 v。图线上的每个点表示"某一时刻物体速度多大、方向如何"。它比 x-t 图像信息更丰富：既能看加速度，又能看位移，是高考和运动学里最常用的图像。' },
      { type: 'keypoint', label: '重点·v-t 图像的斜率', text: '在 v-t 图像中，<strong>图线的斜率等于加速度</strong>。斜率正表示加速（加速度与速度同向），斜率负表示减速，水平直线表示匀速（加速度为0）。' },
      { type: 'keypoint', label: '重点·v-t 图像的面积', text: 'v-t 图像中，<strong>图线与时间轴围成的"面积"等于这段时间内的位移</strong>。面积在时间轴上方为正位移，下方为负位移；总位移是上下面积代数和，而路程是面积的绝对值之和。' },
      { type: 'paragraph', text: 'v-t 图像中两条图线相交，表示两物体在该时刻速度相同。在追及相遇问题里，这常常就是"距离最大或最小"的临界时刻——后面专题会专门讲。所以看到 v-t 交点，要立刻想到"速度相等，可能临界"。' },
      { type: 'list', items: ['斜率 = 加速度，看倾斜方向和陡缓', '图线与 t 轴围成面积 = 位移（上正下负）', '两线交点 = 两物体该时刻速度相等，常是追及临界', '水平线 = 匀速；图线越陡加速度越大'] },
      { type: 'table', headers: ['比较项', 'x-t 图像', 'v-t 图像'], rows: [['纵轴含义', '位移 x', '速度 v'], ['斜率含义', '速度', '加速度'], ['交点含义', '两物体相遇', '两物体速度相等'], ['面积含义', '无意义', '位移']] },
      { type: 'warn', label: '易错', text: '<strong>v-t 图像中"面积"给的是位移不是路程。</strong>若物体有反向运动，图像会落到时间轴下方，下方面积为负位移。总位移要上下代数相加；若题目问路程，则要把上下面积都取绝对值再相加。另外 x-t 图像的交点和 v-t 图像的交点含义完全不同，别记混。' },
      { type: 'heading', text: '三、两类图像综合辨析' },
      { type: 'example', label: '例题·综合辨析', text: '某物体 v-t 图像是一条过原点、向右上方倾斜的直线。下列判断正确的是？A. 做匀速运动 B. 做匀加速运动 C. x-t 图像是水平线 D. 加速度为0。<br><strong>解析</strong>：v-t 图线向右上方倾斜且为直线，说明速度随时间均匀增大、斜率恒定，即做初速为零的匀加速直线运动，故 B 正确。对应 x-t 图应是向上弯曲的抛物线而非水平线，加速度不为0。' },
      { type: 'tip', label: '提示', text: '<strong>看图像先看坐标轴。</strong>拿到一张运动图像，先确认横轴纵轴分别是什么：是 x-t 还是 v-t，含义差很远。再看斜率、交点、面积（仅 v-t）三大要素，绝大多数图像题都能迎刃而解。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">x-t 图像：斜率 = 速度，交点 = 相遇</text><line x1="80" y1="60" x2="80" y2="250" stroke="#2e9e8f" stroke-width="2"/><line x1="80" y1="250" x2="600" y2="250" stroke="#2e9e8f" stroke-width="2"/><line x1="80" y1="250" x2="560" y2="90" stroke="#4fb3a5" stroke-width="3"/><line x1="200" y1="250" x2="560" y2="110" stroke="#234b45" stroke-width="3"/><circle cx="380" cy="170" r="7" fill="#c0392b"/><text x="392" y="165" font-size="13" fill="#234b45">交点=相遇</text><text x="56" y="70" font-size="12" fill="#234b45">x</text><text x="590" y="270" font-size="12" fill="#234b45">t</text><text x="340" y="290" font-size="13" fill="#234b45" text-anchor="middle">绿线、黑线斜率不同（速度不同），交点处位置相同</text></svg>', caption: '图1　x-t 图像中图线斜率表示速度，两条图线相交表示两物体在该时刻相遇。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">v-t 图像：斜率 = 加速度，面积 = 位移</text><line x1="80" y1="60" x2="80" y2="250" stroke="#2e9e8f" stroke-width="2"/><line x1="80" y1="250" x2="600" y2="250" stroke="#2e9e8f" stroke-width="2"/><line x1="80" y1="200" x2="520" y2="80" stroke="#4fb3a5" stroke-width="3"/><polygon points="80,200 520,80 520,250 80,250" fill="#d6ece8" opacity="0.7"/><text x="260" y="160" font-size="13" fill="#234b45">面积=位移</text><text x="540" y="90" font-size="12" fill="#234b45">v</text><text x="590" y="270" font-size="12" fill="#234b45">t</text><text x="340" y="290" font-size="13" fill="#234b45" text-anchor="middle">倾斜直线斜率恒定→匀加速；图线下方面积代表位移</text></svg>', caption: '图2　v-t 图像中斜率表示加速度，图线与时间轴围成的面积表示这段时间的位移。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">x-t 与 v-t 含义对比</text><rect x="40" y="60" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">x-t 图像</text><text x="180" y="120" font-size="13" fill="#234b45" text-anchor="middle">纵轴：位移 x</text><text x="180" y="150" font-size="13" fill="#234b45" text-anchor="middle">斜率 = 速度</text><text x="180" y="180" font-size="13" fill="#234b45" text-anchor="middle">交点 = 相遇</text><text x="180" y="210" font-size="13" fill="#234b45" text-anchor="middle">面积无意义</text><rect x="360" y="60" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="86" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">v-t 图像</text><text x="500" y="120" font-size="13" fill="#234b45" text-anchor="middle">纵轴：速度 v</text><text x="500" y="150" font-size="13" fill="#234b45" text-anchor="middle">斜率 = 加速度</text><text x="500" y="180" font-size="13" fill="#234b45" text-anchor="middle">交点 = 速度相等</text><text x="500" y="210" font-size="13" fill="#234b45" text-anchor="middle">面积 = 位移</text></svg>', caption: '图3　对比 x-t 与 v-t 图像：纵轴不同，导致斜率、交点、面积的含义完全不同。' }
    ],
    exercises: [
      { type: 'choice', question: '关于 x-t 图像，下列说法正确的是？', options: ['图线斜率表示加速度', '两条图线相交表示两物体速度相等', '图线斜率表示速度，交点表示相遇', '水平图线表示物体做匀速运动'], answer: '图线斜率表示速度，交点表示相遇', explanation: '在 x-t（位移—时间）图像中，纵轴是位移，横轴是时间，图线的斜率等于速度，斜率为0（水平线）表示静止；两条图线相交代表同一时刻位移相同，即两物体在该位置相遇。交点与速度相等无关，那是 v-t 图像交点的含义。' },
      { type: 'choice', question: '关于 v-t 图像，下列说法正确的是？', options: ['图线斜率表示速度', '图线与时间轴围成的面积表示位移', '两条图线相交表示两物体相遇', '水平图线表示物体静止'], answer: '图线与时间轴围成的面积表示位移', explanation: '在 v-t（速度—时间）图像中，纵轴是速度，斜率等于加速度；图线与时间轴围成的面积等于这段时间的位移（上方为正、下方为负，总位移是代数和）；两线相交表示速度相等而非相遇；水平图线表示匀速而非静止。' },
      { type: 'choice', question: '物体做匀减速直线运动直到停止，其 v-t 图像应是？', options: ['过原点的向右上倾斜直线', '向右下倾斜的直线，落到时间轴上', '水平直线', '向上弯曲的曲线'], answer: '向右下倾斜的直线，落到时间轴上', explanation: '匀减速直线运动加速度恒定且与速度反向，v-t 图像是一条向右下方倾斜的直线；速度逐渐减小，当图线落到时间轴（v=0）时物体停止。若题目说"直到停止"，图像应在某时刻与时间轴相交后不再延伸，因为停下后不再运动。' },
      { type: 'fill', question: '在 x-t 图像中，图线的 ___ 等于物体的速度；在 v-t 图像中，图线的 ___ 等于物体的加速度。', answer: '斜率 | 斜率', explanation: '两类图像的斜率都有明确的物理意义：x-t 图像的纵轴是位移，斜率 = Δx/Δt = 速度；v-t 图像的纵轴是速度，斜率 = Δv/Δt = 加速度。记住"看斜率先看纵轴是什么"，就不会混淆。' },
      { type: 'fill', question: '某物体 v-t 图像是一条从 t=0、v=0 出发的向右上倾斜直线，则表示位移应看图线与 ___ 围成的 ___。', answer: '时间轴 | 面积', explanation: 'v-t 图像中，图线与时间轴（t 轴）围成的面积数值上等于对应时间内的位移。图线在 t 轴上方时面积为正位移；若物体有反向运动，下方面积为负位移。本例图线始终在上方，面积即为位移且为正。' }
    ]
  });
})();
