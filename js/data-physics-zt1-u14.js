/* ============================================================
 * 高三复习 · 力学综合 · 专题三 牛顿运动定律
 * 课时14：典型模型
 * 数据注入：physics.zt1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt1');
  if (!v) return;

  v.points.push({
    id: 'zt1-u14',
    name: '典型模型',
    chapter: '力学综合 · 专题三 牛顿运动定律',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、连接体问题' },
      { type: 'paragraph', text: '几个物体靠在一起（如叠放、用绳或杆相连）一起运动，叫作连接体。它们整体加速度相同，但内部还有相互作用的内力。常用两种方法是：整体法和隔离法。' },
      { type: 'keypoint', label: '重点·整体法与隔离法', text: '<strong>整体法：把几个物体当作一个整体，外力之和 = 总质量 × 共同加速度 a，用来求整体加速度。</strong>隔离法：单独取其中一个物体分析，求物体间的相互作用内力。' },
      { type: 'list', items: ['整体法：不关心内力，直接求共同加速度', '隔离法：求两个物体之间的弹力、摩擦力等内力', '先整体求 a，再隔离求内力，是标准套路'] },
      { type: 'example', label: '例题·连接体', text: '质量 3 kg 的 A 和质量 2 kg 的 B 叠放，在外力 F = 10 N 水平拉 A 使一起加速，求加速度和 A、B 间摩擦力。<br><br><strong>解析</strong>：整体法，a = F / (mA + mB) = 10 / 5 = 2 m/s²；隔离 B，B 只受 A 给的摩擦力 f = mB × a = 2 × 2 = 4 N。所以加速度 2 m/s²，内摩擦力 4 N。' },
      { type: 'heading', text: '二、临界问题' },
      { type: 'paragraph', text: '题目里出现“恰好”“刚好”“最大”“最小”等词，往往是临界问题：再多一点或少一点，状态就发生突变（比如恰好不滑动、绳恰好拉直、支持力恰好为零）。' },
      { type: 'keypoint', label: '重点·临界条件', text: '<strong>临界条件：把“恰好/刚好”翻译成物理条件</strong>，如恰好不滑动 → 静摩擦力达到最大值；恰好离开接触面 → 支持力 FN = 0；绳恰好拉直 → 张力 T = 0。' },
      { type: 'warn', label: '易错', text: '临界问题必须先判断“临界时哪个力达到极限”。很多同学直接套公式却没找对临界条件，导致方向或大小算错。一定要先用文字说明“恰好什么”，再列方程求解。' },
      { type: 'list', items: ['“恰好不滑动”：静摩擦力达到最大静摩擦力', '“恰好离开地面”：支持力 FN = 0', '“恰好不断裂”：绳张力达到最大值', '“恰好不分离”：两物体加速度相同、接触力为零的临界'] },
      { type: 'heading', text: '三、传送带模型' },
      { type: 'paragraph', text: '传送带（匀速转动的皮带）上的物体，摩擦力方向和大小会随相对运动变化。刚放上去时，物体速度小于皮带，摩擦力向前使物体加速；当物体速度达到皮带速度（共速）后，若皮带水平且无其他力，摩擦力消失，物体随皮带匀速。' },
      { type: 'keypoint', label: '重点·传送带关键', text: '<strong>传送带关键：摩擦力方向总与“相对皮带的运动趋势”相反；达到共速后若水平，摩擦力可能变为零，物体不再加速。</strong>' },
      { type: 'tip', label: '提示', text: '若传送带倾斜，共速后物体还可能因重力分量继续相对滑动，摩擦力不一定消失，要重新判断相对运动方向，不能想当然认为共速后一定一起匀速。' },
      { type: 'example', label: '例题·传送带', text: '水平传送带以 2 m/s 匀速，物块初速 0 放上，加速度 1 m/s²，求共速所需时间。<br><br><strong>解析</strong>：由 v = a × t，得 t = v带 / a = 2 / 1 = 2 s。2 秒后共速，若皮带水平则摩擦力消失，物块以 2 m/s 随带匀速。' },
      { type: 'heading', text: '四、板块模型' },
      { type: 'paragraph', text: '“板块”指一个小物块放在长木板上。物块和木板各自受力，可能先相对滑动，达到共速后一起运动。关键是相对位移 Δx = x滑 − x板。' },
      { type: 'keypoint', label: '重点·板块模型', text: '<strong>板块模型：先判断能否共速；共速前二者加速度不同，相对位移 Δx = x物块 − x木板（注意方向）；共速后若地面光滑则一起匀速，若有摩擦要判断是否还会分离。</strong>' },
      { type: 'warn', label: '易错', text: '很多同学直接认为“放上去就一起动”。实际上若物块与板间摩擦不够，二者加速度不同会相对滑动；共速后也别默认一直一起，要看之后受力是否允许保持共速，否则可能再次分离。' },
      { type: 'table', headers: ['模型', '核心方法', '关键词'], rows: [['连接体', '整体求 a，隔离求内力', '整体/隔离'], ['临界', '找“恰好”对应极限条件', 'FN = 0 / fmax'], ['传送带', '摩擦随相对运动变，共速可能消失', '共速'], ['板块', 'Δx = x滑 − x板，注意共速后状态', '相对位移']] },
      { type: 'list', items: ['连接体：整体法与隔离法配合', '临界：把“恰好”翻译成具体等于零或达极值的力', '传送带：关注共速瞬间摩擦力是否消失', '板块：盯住相对位移 Δx 和共速后是否分离'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">连接体：先整体求 a，再隔离求内力</text><rect x="80" y="170" width="200" height="60" rx="6" fill="#4fb3a5"/><text x="180" y="204" font-size="13" fill="#234b45" text-anchor="middle">A 3 kg</text><rect x="280" y="170" width="160" height="60" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="360" y="204" font-size="13" fill="#234b45" text-anchor="middle">B 2 kg</text><line x1="440" y1="200" x2="540" y2="200" stroke="#234b45" stroke-width="3"/><polygon points="540,200 528,194 528,206" fill="#234b45"/><text x="490" y="188" font-size="12" fill="#234b45" text-anchor="middle">F</text><text x="180" y="270" font-size="12" fill="#234b45" text-anchor="middle">整体：a = F/(mA+mB)</text><text x="500" y="270" font-size="12" fill="#234b45" text-anchor="middle">隔离 B 求内力 f</text></svg>', caption: '图1　连接体先用整体法求共同加速度 a，再用隔离法求 A、B 间内力。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">传送带：达到共速后摩擦力可能消失</text><rect x="40" y="190" width="600" height="16" fill="#2e9e8f"/><circle cx="120" cy="170" r="18" fill="#4fb3a5"/><text x="120" y="174" font-size="12" fill="#234b45" text-anchor="middle">物</text><line x1="150" y1="170" x2="300" y2="170" stroke="#234b45" stroke-width="3"/><polygon points="300,170 288,164 288,176" fill="#234b45"/><text x="230" y="158" font-size="12" fill="#234b45" text-anchor="middle">f向前</text><line x1="320" y1="170" x2="620" y2="170" stroke="#4fb3a5" stroke-width="3" stroke-dasharray="6,5"/><text x="470" y="158" font-size="12" fill="#234b45" text-anchor="middle">共速后 f = 0</text><text x="340" y="270" font-size="12" fill="#234b45" text-anchor="middle">左侧加速段有摩擦，右侧共速段摩擦消失</text></svg>', caption: '图2　传送带上物块先受向前的摩擦力加速，达到共速后（水平）摩擦力消失。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">板块模型：相对位移 Δx = x滑 − x板</text><rect x="80" y="180" width="300" height="40" rx="6" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="230" y="204" font-size="13" fill="#234b45" text-anchor="middle">木板</text><rect x="100" y="140" width="80" height="40" rx="6" fill="#4fb3a5"/><text x="140" y="164" font-size="12" fill="#234b45" text-anchor="middle">物块</text><line x1="100" y1="135" x2="100" y2="110" stroke="#234b45" stroke-width="3"/><polygon points="100,110 93,124 107,124" fill="#234b45"/><text x="140" y="118" font-size="12" fill="#234b45" text-anchor="middle">x滑</text><line x1="80" y1="235" x2="380" y2="235" stroke="#234b45" stroke-width="2" stroke-dasharray="5,4"/><text x="230" y="255" font-size="12" fill="#234b45" text-anchor="middle">x板</text></svg>', caption: '图3　板块模型中物块相对木板的位移 Δx = x滑 − x板，是判断能否滑落的关键。' }
    ],
    exercises: [
      { type: 'choice', question: '处理连接体问题时，通常先用整体法求什么？', options: ['内力', '共同加速度 a', '质量', '摩擦力'], answer: '共同加速度 a', explanation: '连接体中各物体加速度相同，先用整体法把几个物体当作一个整体，由“外力之和 = 总质量 × a”求出共同加速度 a；之后再隔离其中某个物体，用它自身的受力和加速度 a 去求物体间的内力。' },
      { type: 'choice', question: '“恰好离开地面”对应的临界条件是？', options: ['支持力 FN = 0', '速度为零', '加速度为零', '摩擦力最大'], answer: '支持力 FN = 0', explanation: '物体恰好离开地面，意味着它与地面之间刚刚没有挤压，地面对它的支持力减小到零，所以临界条件是 FN = 0。此时往往再列牛顿第二定律求解临界加速度或临界力的大小。' },
      { type: 'choice', question: '水平传送带上的物块达到与皮带共速后，若水平方向无其他力，摩擦力将？', options: ['变大', '变为零', '方向反向', '保持不变'], answer: '变为零', explanation: '物块刚放上时速度小于皮带，受向前的摩擦力而加速；当速度达到皮带速度（共速）后，二者无相对运动趋势，水平方向不需要摩擦力维持匀速，因此摩擦力变为零，物块随皮带一起匀速。' },
      { type: 'fill', question: '板块模型中，物块相对木板的位移 Δx = x滑 − ___（填“x板”或“x地”）。', answer: 'x板', explanation: '板块模型关心物块在木板上滑了多远，即相对位移，定义为物块位移减去木板位移：Δx = x滑 − x板。当 Δx 达到木板长度时物块就会滑落，因此它是判断是否滑落的关键量。' },
      { type: 'fill', question: '传送带问题里，摩擦力的方向总与物块相对皮带的___相反（填“运动趋势”或“速度大小”）。', answer: '运动趋势', explanation: '传送带上的摩擦力是静摩擦或滑动摩擦，其方向总是阻碍物块相对皮带的运动（或相对运动趋势）。物块比皮带慢时摩擦向前，比皮带快时摩擦向后，核心就是与相对运动趋势相反。' }
    ]
  });
})();
