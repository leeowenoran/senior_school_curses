/* ============================================================
 * 化学 · 选择性必修2 物质结构与性质 · 第二章 分子结构与性质
 * 课时7：分子的空间结构
 * 数据注入：chemistry.xb2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('chemistry', 'xb2');
  if (!v) return;

  v.points.push({
    id: 'xb2-u7',
    name: '分子的空间结构',
    chapter: '选择性必修2 物质结构与性质 · 第二章 分子结构与性质',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、VSEPR：价层电子对互相“挤”' },
      { type: 'paragraph', text: '为什么分子会呈现各种形状？一个好用的理论是价层电子对互斥理论（VSEPR）。它的核心思想很生活化：中心原子周围的“电子对”（包括成键的和孤对）都带负电，会互相排斥；为了让排斥最小、最安稳，它们会尽量离得远、均匀散开。于是电子对在空间里的排布就决定了分子的骨架形状。' },
      { type: 'keypoint', label: '重点·VSEPR 核心公式', text: '<strong>中心原子的价层电子对数 = σ 键数 + 孤电子对数。</strong>这些电子对彼此排斥，趋向于取“相互距离最远”的排布，排斥最小、分子最稳定。' },
      { type: 'list', items: ['先数中心原子的价电子，加上配体提供的电子，再除以 2 得电子对数', '电子对包括：成键的 σ 键对 + 未成键的孤电子对', '电子对越多，越要“摊”得开，排斥才最小'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">VSEPR：电子对互相排斥，尽量离得远</text><circle cx="150" cy="170" r="30" fill="#b5651d"/><text x="150" y="200" font-size="12" fill="#4a3724" text-anchor="middle">中心原子</text><circle cx="230" cy="90" r="22" fill="#d98e3a"/><circle cx="230" cy="250" r="22" fill="#d98e3a"/><text x="230" y="130" font-size="12" fill="#4a3724" text-anchor="middle">2对</text><text x="230" y="232" font-size="12" fill="#4a3724" text-anchor="middle">180°</text><circle cx="430" cy="170" r="30" fill="#b5651d"/><circle cx="510" cy="90" r="22" fill="#d98e3a"/><circle cx="540" cy="210" r="22" fill="#d98e3a"/><circle cx="370" cy="210" r="22" fill="#d98e3a"/><text x="450" y="250" font-size="12" fill="#4a3724" text-anchor="middle">3对 120°</text><circle cx="150" cy="170" r="0" fill="none"/></svg>', caption: '图1　电子对像互相排斥的气球：2 对成直线、3 对成平面三角，彼此尽量远离以使排斥最小。' },
      { type: 'heading', text: '二、无孤对电子时的典型构型' },
      { type: 'paragraph', text: '如果中心原子周围没有孤电子对（所有电子对都拿去成 σ 键），分子形状就是电子对的几何形状：2 对电子 → 直线形（180°，如 CO₂）；3 对 → 平面三角形（120°，如 BF₃）；4 对 → 正四面体（约 109.5°，如 CH₄）。这几种最常见、最好记。' },
      { type: 'keypoint', label: '重点·三种基础构型', text: '<strong>2 对：直线形（180°）；3 对：平面三角形（120°）；4 对：正四面体（约 109.5°）。</strong>前提是中心原子无孤电子对。' },
      { type: 'list', items: ['2 对 → CO₂、BeCl₂：直线形', '3 对 → BF₃：平面三角形', '4 对 → CH₄：正四面体'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">三种基础构型（中心原子无孤对）</text><circle cx="120" cy="170" r="24" fill="#b5651d"/><circle cx="220" cy="170" r="24" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><circle cx="20" cy="170" r="24" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><line x1="120" y1="170" x2="220" y2="170" stroke="#d98e3a" stroke-width="3"/><line x1="120" y1="170" x2="20" y2="170" stroke="#d98e3a" stroke-width="3"/><text x="120" y="230" font-size="12" fill="#4a3724" text-anchor="middle">CO₂ 直线形</text><circle cx="380" cy="170" r="24" fill="#b5651d"/><circle cx="460" cy="110" r="24" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><circle cx="460" cy="230" r="24" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><circle cx="300" cy="170" r="24" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><line x1="380" y1="170" x2="460" y2="110" stroke="#d98e3a" stroke-width="3"/><line x1="380" y1="170" x2="460" y2="230" stroke="#d98e3a" stroke-width="3"/><line x1="380" y1="170" x2="300" y2="170" stroke="#d98e3a" stroke-width="3"/><text x="380" y="260" font-size="12" fill="#4a3724" text-anchor="middle">BF₃ 平面三角形</text><circle cx="600" cy="170" r="22" fill="#b5651d"/><circle cx="640" cy="130" r="18" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><circle cx="640" cy="210" r="18" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><circle cx="560" cy="130" r="18" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><circle cx="560" cy="210" r="18" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="600" y="250" font-size="12" fill="#4a3724" text-anchor="middle">CH₄ 四面体</text></svg>', caption: '图2　无孤对时：CO₂ 直线形、BF₃ 平面三角形、CH₄ 正四面体。' },
      { type: 'heading', text: '三、有孤对电子时：形状“变形”了' },
      { type: 'paragraph', text: '当中心原子还有孤电子对时，虽然电子对总数不变，但孤电子对“看不见”却占地方、且比成键电子对“胖”、排斥更强，会把成键电子对往里压，分子的可见形状就变了：4 对电子里若有 1 对孤对（如 NH₃），分子变成三角锥形；若有 2 对孤对（如 H₂O），分子变成 V 形（折线形）。注意：电子对排布仍是四面体，只是分子外形变了。' },
      { type: 'keypoint', label: '重点·孤对让分子“变形”', text: '<strong>孤电子对比成键电子对更胖、排斥更强。4 对电子中：0 孤对→正四面体(CH₄)；1 孤对→三角锥(NH₃)；2 孤对→V 形(H₂O)。</strong>' },
      { type: 'table', headers: ['AXE 型', '电子对总数', '孤对数', '分子构型', '实例'], rows: [['AX₂', '2', '0', '直线形', 'CO₂'], ['AX₃', '3', '0', '平面三角形', 'BF₃'], ['AX₄', '4', '0', '正四面体', 'CH₄'], ['AX₃E', '4', '1', '三角锥形', 'NH₃'], ['AX₂E₂', '4', '2', 'V 形', 'H₂O']] },
      { type: 'warn', label: '易错·电子对构型 ≠ 分子构型', text: '很多同学把“价层电子对的空间排布”和“分子的真实形状”混为一谈。例如 H₂O 的价层电子对是 4 对（四面体排布），但分子形状只看原子核的位置，是 V 形。判断分子构型时，要先算电子对总数定“底层排布”，再扣掉孤对定“外表形状”。' },
      { type: 'example', label: '例题·NH₃ 构型', text: '题目：用 VSEPR 判断 NH₃ 分子的空间构型是？<br>A. 直线形<br>B. 平面三角形<br>C. 三角锥形<br>D. 正四面体<br><br><strong>解析</strong>：N 有 5 个价电子，与 3 个 H 成 3 个 σ 键，孤电子对 = (5−3)/2 = 1 对。价层电子对共 4 对，底层为四面体排布；其中 1 对是孤对，分子可见形状是三角锥形（不是正四面体，因为正四面体要求无孤对）。选 C。' },
      { type: 'tip', label: '提示·用 AXE 速记', text: '用 A 表示中心原子、X 表示配位原子、E 表示孤电子对，写成 AXE 型：CO₂ 是 AX₂（直线）、BF₃ 是 AX₃（平面三角）、CH₄ 是 AX₄（四面体）、NH₃ 是 AX₃E（三角锥）、H₂O 是 AX₂E₂（V 形）。记住这张“配方表”，看到分子先写 AXE 再查形状，又快又准。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 290" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="290" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">从 CH₄ 到 NH₃ 到 H₂O：孤对越多，形状越“扁”</text><circle cx="130" cy="170" r="24" fill="#b5651d"/><circle cx="170" cy="120" r="18" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><circle cx="170" cy="220" r="18" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><circle cx="90" cy="120" r="18" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><circle cx="90" cy="220" r="18" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="130" y="255" font-size="12" fill="#4a3724" text-anchor="middle">CH₄ 四面体（0孤对）</text><circle cx="380" cy="170" r="24" fill="#b5651d"/><circle cx="420" cy="120" r="18" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><circle cx="420" cy="220" r="18" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><circle cx="330" cy="170" r="18" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="380" y="130" font-size="13" fill="#d98e3a" text-anchor="middle">孤对</text><text x="380" y="255" font-size="12" fill="#4a3724" text-anchor="middle">NH₃ 三角锥（1孤对）</text><circle cx="600" cy="170" r="24" fill="#b5651d"/><circle cx="640" cy="130" r="18" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><circle cx="640" cy="210" r="18" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="570" y="120" font-size="12" fill="#d98e3a" text-anchor="middle">孤对</text><text x="585" y="160" font-size="12" fill="#d98e3a" text-anchor="middle">孤对</text><text x="600" y="255" font-size="12" fill="#4a3724" text-anchor="middle">H₂O 的 V 形（2孤对）</text></svg>', caption: '图3　同样是 4 对电子：CH₄ 无孤对为四面体，NH₃ 有 1 孤对成三角锥，H₂O 有 2 孤对成 V 形。' },
      { type: 'heading', text: '四、VSEPR 的通关步骤' },
      { type: 'paragraph', text: '用 VSEPR 判断任意分子形状，就四步：①确定中心原子；②算价层电子对数 = σ 键数 + 孤电子对数；③按电子对数找底层排布（2 直线 / 3 平面三角 / 4 四面体 / 5 三角双锥 / 6 八面体）；④扣掉孤对，得到分子外形。熟练后多数常见分子一秒钟就能说出形状。' }
    ],
    exercises: [
      { type: 'choice', question: '价层电子对互斥理论（VSEPR）中，中心原子的价层电子对数等于？', options: ['σ 键数 − 孤电子对数', 'σ 键数 + 孤电子对数', '孤电子对数', 'π 键数'], answer: 'σ 键数 + 孤电子对数', explanation: 'VSEPR 的核心是价层电子对数 = σ 键数 + 孤电子对数。这些电子对相互排斥、尽量远离，决定了分子骨架。π 键不计入价层电子对数，孤对也不能减掉，所以选“σ 键数 + 孤电子对数”。' },
      { type: 'choice', question: '中心原子有 4 对电子、无孤对（如 CH₄），分子构型是？', options: ['平面三角形', '三角锥形', '正四面体', 'V 形'], answer: '正四面体', explanation: '4 对电子且全为成键对（AX₄），底层四面体排布、无孤对，分子就是正四面体（约 109.5°）。平面三角是 3 对、三角锥和 V 形是含孤对的 4 对情形，所以选正四面体。' },
      { type: 'choice', question: 'H₂O 的价层电子对数为 4 对、其中孤对 2 对，它的分子构型为？', options: ['直线形', '正四面体', '三角锥形', 'V 形（折线形）'], answer: 'V 形（折线形）', explanation: 'H₂O 中 O 有 2 个 σ 键和 2 对孤电子，共 4 对电子，底层是四面体排布；2 对孤对把两个 O–H 键往下压，可见分子形状是 V 形（折线形），而非正四面体或三角锥。' },
      { type: 'fill', question: '用 VSEPR 算 NH₃ 中 N 的孤电子对数：N 有 5 个价电子、与 3 个 H 成键，孤电子对 = (5 − 3) ÷ 2 = ___ 对。', answer: '1', explanation: '孤电子对数 = (中心原子价电子数 − 与配体成键所用电子数) ÷ 2。N 有 5 个价电子，与 3 个 H 各成 1 个键用掉 3 个，剩 2 个即 1 对孤电子，所以 NH₃ 是 AX₃E、三角锥形。' },
      { type: 'fill', question: 'BF₃ 中 B 的价层电子对为 3 对且无孤对，分子空间构型是___。', answer: '平面三角形', explanation: 'BF₃ 中心 B 有 3 个价电子，与 3 个 F 成 3 个 σ 键，无孤电子对，价层电子对共 3 对。3 对电子均匀散开成平面三角形，键角 120°，所以 BF₃ 是平面三角形（AX₃）。' }
    ]
  });
})();
